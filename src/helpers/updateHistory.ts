import {HistoryRecord} from './types';

export default function updateHistory({history, record}: {history: HistoryRecord[]; record: HistoryRecord}) {
  const newRecordIndex = history.map((record) => record.request.action).indexOf(record.request.action);

  //newRecord is unique (add it to history start)
  if (newRecordIndex === -1) {
    history.unshift({...record, count: 1});
  }
  //newRecord in not unique (move it to history start)
  else {
    const movedRecord = history.splice(newRecordIndex, 1)[0];
    history.splice(0, 0, {...movedRecord, count: movedRecord.count! + 1});
  }
}
