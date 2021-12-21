import {
    CANCEL_THE_SEARCH_MODE,
    DELETE_THE_CONTAINER,
    FETCH_ALL_DOCKER_CONTAINER_DATA,
    FIND_CONTAINER_BY_SEARCH_TEXT,
    UPDATE_THE_CONTAINER_STATUS
} from "../constants/actionTypes";
import { dockerContainerMockData } from "../helper/dockerContainerData";
import { findContainerBySearchText } from "../selectors/dockerContainerSelector";
import { uniqBy } from "lodash";

const dockerContainerReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_DOCKER_CONTAINER_DATA:
            return [...state, ...dockerContainerMockData];
      

        case FIND_CONTAINER_BY_SEARCH_TEXT: {
            return findContainerBySearchText(action.payload, state);
        }

        case UPDATE_THE_CONTAINER_STATUS: {
            const { containerId, containerStatus } = action.payload;
            const res = state.filter((data) => data.containerId === containerId ? data.status = containerStatus : data)
            return uniqBy([...state, ...res], 'containerId');
        }

        case CANCEL_THE_SEARCH_MODE: {
            return uniqBy([...state, ...dockerContainerMockData], 'containerId')
        }

        case DELETE_THE_CONTAINER: {
            console.log(state, action.payload);
            return state.filter((data) => data.containerId !== action.payload)
        }
        
        default:
            return state;
    }
}

export default dockerContainerReducer;
