import { combineReducers } from "redux";
import Login from "./Login/Reducers";
import Incidentlog from "./IncidentLog/Reducers";


const reducers = combineReducers({
    Login,
    Incidentlog
});
export default reducers;