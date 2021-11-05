import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'store';

export const selectHistoryTableColumns = createSelector(
  (state: RootState) => state.console.history,
  (history) => history.map(({request, count, isSuccessful}) => ({action: request.action, count, isSuccessful}))
);

export const selectDoughnutChartData = createSelector(
  (state: RootState) => state.console.history,
  (history) =>
    history.reduce(
      (data, value) => {
        return value.isSuccessful ? [data[0] + 1, data[1]] : [data[0], data[1] + 1];
      },
      [0, 0]
    )
);
