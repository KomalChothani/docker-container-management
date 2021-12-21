import  * as ActionTypes from "../constants/actionTypes";
import { dockerContainerMockData } from "../helper/dockerContainerData";
import { findContainerBySearchText } from "../selectors/dockerContainerSelector";
import { uniqBy } from "lodash";

const dockerContainerReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_DOCKER_CONTAINER_DATA:
            return [...state, ...dockerContainerMockData];

        case ActionTypes.FIND_CONTAINER_BY_SEARCH_TEXT:
            return findContainerBySearchText(action.payload, state);
        

        case ActionTypes.UPDATE_THE_CONTAINER_STATUS: {
            const { containerId, containerStatus } = action.payload;
            const res = state.filter((data) => data.containerId === containerId ? data.status = containerStatus : data);
            return uniqBy([...state, ...res], 'containerId');
        }

        case ActionTypes.CANCEL_THE_SEARCH_MODE:
            return uniqBy([...state, ...dockerContainerMockData], 'containerId')

        case ActionTypes.DELETE_THE_CONTAINER:
            return state.filter((data) => data.containerId !== action.payload)
        
        default:
            return state;
    }
}

export default dockerContainerReducer;
