import {RootState} from 'store/store';
import {HistoryRecord} from 'helpers/types';

export interface ConsoleState {
  isLoading: boolean;
  request: string;
  response: string;
  isRequestError: boolean;
  isResponseError: boolean;
  history: HistoryRecord[];
}

export type MakeRequestData = string | null;

export type MakeRequestReturnValue = HistoryRecord;

export interface MakeRequestConfig {
  rejectValue: HistoryRecord;
  state: RootState;
}
