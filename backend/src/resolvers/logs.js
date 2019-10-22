
import LogModel from '../models/logs';

function loadLogs() {
  return LogModel.find();
}

export default {
  loadLogs
};