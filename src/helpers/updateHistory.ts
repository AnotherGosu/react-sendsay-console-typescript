import {HistoryRecord} from './types';

export default function updateHistory({history, record}: {history: HistoryRecord[]; record: HistoryRecord}) {
  if (history.length >= 15) return;

  const newRecordIndex = history.map((record) => record.request.action).indexOf(record.request.action);

  //newRecord is unique (add it to history start)
  if (newRecordIndex === -1) {
    history.unshift(record);
  }
  //newRecord in not unique (move it to history start)
  else {
    history.splice(newRecordIndex, 1);
    history.splice(0, 0, record);
  }
}
