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

const updateTheContainerStatus = (containerId, containerStatus) => {
    return {
        type: ActionTypes.UPDATE_THE_CONTAINER_STATUS,
        payload: { containerId, containerStatus }
    }
}

const cancelTheSearchMode = () => {
    return {
        type: ActionTypes.CANCEL_THE_SEARCH_MODE,
    }
}

const deleteTheContainer = (containerId) => {
    return {
        type: ActionTypes.DELETE_THE_CONTAINER,
        payload: containerId,
    }
}
 

export {
    fetchAllDockerContainerData,
    findContainerBySearchText,
    updateTheContainerStatus,
    cancelTheSearchMode,
    deleteTheContainer,
}