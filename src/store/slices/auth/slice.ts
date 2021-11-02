import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import sendsay from 'helpers/sendsay';

import {AuthState, AuthenticateData, AuthenticateReturnValue, AuthenticateConfig} from './types';

const initialState: AuthState = {
  isLoading: false,
  error: '',
  sessionKey: '',
  login: '',
  sublogin: '',
};

export const authenticate = createAsyncThunk<AuthenticateReturnValue, AuthenticateData, AuthenticateConfig>(
  'auth/authenticate',
  async (data, {rejectWithValue}) => {
    try {
      await sendsay.login(data);
      document.cookie = `sendsay_session=${sendsay.session}`;
      sendsay.setSessionFromCookie('sendsay_session');
      return {login: data.login, sublogin: data.sublogin, sessionKey: sendsay.session};
    } catch (err: any) {
      return rejectWithValue(JSON.stringify({id: err.id, explain: err.explain}));
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    document.cookie = 'sendsay_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    sendsay.setSessionFromCookie('sendsay_session');
  } catch (err) {}
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (_, action) => {
      return {...action.payload, error: '', isLoading: false};
    });
    builder.addCase(authenticate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(logout.fulfilled, () => {
      return initialState;
    });
  },
});
