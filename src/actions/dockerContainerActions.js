import * as ActionTypes from "../constants/actionTypes"

/**
 * Fetch the all docker container data from host
 * @returns - all docker container data
 */
const fetchAllDockerContainerData = () => {
    return {
        type: ActionTypes.FETCH_ALL_DOCKER_CONTAINER_DATA,
    }
}

/**
 * Search the container through it's name, containerId or Image
 * @param {string} searchText 
 * @returns - searched container
 */
const findContainerBySearchText = (searchText) => {
    return {
        type: ActionTypes.FIND_CONTAINER_BY_SEARCH_TEXT,
        payload: searchText,
    }
}

/**
 * Update the container status based on the container id.
 * @param {string} containerId 
 * @param {string} containerStatus - status like, CREATED, STARTED, PAUSED, RUNNING & DEAD 
 * @returns - All containers with the updated status
 */
const updateTheContainerStatus = (containerId, containerStatus) => {
    return {
        type: ActionTypes.UPDATE_THE_CONTAINER_STATUS,
        payload: { containerId, containerStatus }
    }
}

/**
 * This method is used to cancel the search mode
 * @returns - All container list
 */
const cancelTheSearchMode = () => {
    return {
        type: ActionTypes.CANCEL_THE_SEARCH_MODE,
    }
}

/**
 * Delete the container from the container list based on container ID
 * @param {string} containerId 
 * @returns - All container lists except deleted containers
 */
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