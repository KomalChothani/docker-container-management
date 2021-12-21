import { FETCH_ALL_DOCKER_CONTAINER_DATA, FIND_CONTAINER_BY_SEARCH_TEXT } from "../constants/actionTypes";
import { dockerContainerMockData } from "../helper/dockerContainerData";
import { findContainerBySearchText } from "../selectors/dockerContainerSelector";

const dockerContainerReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_DOCKER_CONTAINER_DATA:
            return [...state, ...dockerContainerMockData]

        case FIND_CONTAINER_BY_SEARCH_TEXT: {
            return findContainerBySearchText(action.payload, state);
        }

        default:
            return state;
    }
}

export default dockerContainerReducer;
