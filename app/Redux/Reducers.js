import {combineReducers} from 'redux';
import Login from './Login/Reducers';
import Incidentlog from './IncidentLog/IncidentCreation/Reducers';
import Incidentlist from './IncidentLog/IncidentList/Reducers';

const reducers = combineReducers({
  Login,
  Incidentlog,
  Incidentlist,
});
export default reducers;
