import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import sendsay from 'helpers/sendsay';
import validateJSON from 'helpers/validateJSON';
import updateHistory from 'helpers/updateHistory';

import {ConsoleState, MakeRequestData, MakeRequestReturnValue, MakeRequestConfig} from './types';
import {REQUEST_VALIDATION_ERROR} from './constants';

const initialState: ConsoleState = {
  isLoading: false,
  request: '',
  response: '',
  isRequestError: false,
  isResponseError: false,
  history: [],
};

export const makeRequest = createAsyncThunk<MakeRequestReturnValue, MakeRequestData, MakeRequestConfig>(
  'console/makeRequest',
  async (data, {rejectWithValue, getState}) => {
    //grab data from history record or from state
    const stringJSON = data || getState().console.request;
    const request = validateJSON(stringJSON);

    if (!request || stringJSON !== JSON.stringify(request, null, 2)) {
      return rejectWithValue({response: REQUEST_VALIDATION_ERROR, request, isSuccessful: false});
    }

    try {
      const response = await sendsay.request(request);
      return {response, request, isSuccessful: true};
    } catch (err: any) {
      return rejectWithValue({response: err, request, isSuccessful: false});
    }
  }
);

export const consoleSlice = createSlice({
  name: 'console',
  initialState,
  reducers: {
    setRequest: (state, action) => {
      state.request = action.payload;
      state.isRequestError = false;
    },
    setRespose: (state, action) => {
      state.response = action.payload;
    },
    formatRequest: (state) => {
      const formatedJSON = validateJSON(state.request);
      if (formatedJSON) {
        state.request = JSON.stringify(formatedJSON, null, 2);
        state.isRequestError = false;
      } else {
        state.isRequestError = true;
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },
    deleteHistoryRecord: (state, action) => {
      const request = action.payload;
      state.history = state.history.filter((record) => record.request.action !== request.action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(makeRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isResponseError = false;
      state.isRequestError = false;

      const record = action.payload;
      state.request = JSON.stringify(record.request, null, 2);
      state.response = JSON.stringify(record.response, null, 2);
      updateHistory({history: state.history, record});
    });
    builder.addCase(makeRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(makeRequest.rejected, (state, action) => {
      state.isLoading = false;
      const record = action.payload as MakeRequestConfig['rejectValue'];

      //request is invalid
      if (record.response === REQUEST_VALIDATION_ERROR) {
        state.isRequestError = true;
        state.isResponseError = false;
        state.response = '';
      }
      //request is valid but response is an error
      else {
        state.isResponseError = true;
        state.response = JSON.stringify(record.response, null, 2);
        state.request = JSON.stringify(record.request, null, 2);
        updateHistory({history: state.history, record});
      }
    });
  },
});
