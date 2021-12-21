import * as ActionTypes from "../constants/actionTypes"

const fetchAllDockerContainerData = () => {
    return {
        type: ActionTypes.FETCH_ALL_DOCKER_CONTAINER_DATA,
    }
}

const findContainerBySearchText = (searchText) => {
    return {
        type: ActionTypes.FIND_CONTAINER_BY_SEARCH_TEXT,
        payload: searchText,
    }
}

export {
    fetchAllDockerContainerData,
    findContainerBySearchText
}