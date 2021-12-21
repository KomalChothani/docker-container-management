import * as DockerStatusConstants from "../constants/dockerContainerStatus";

const filterDataContainerBasedOnStatus = (containerData, containerStatus) => {
    return containerData.filter((data) => data.status === containerStatus);
} 

const getCreatedContainer = (state) => {
    return filterDataContainerBasedOnStatus(state.dockerContainerData, DockerStatusConstants.CREATED)
}

const getStartedContainer = (state) => {
    return filterDataContainerBasedOnStatus(state.dockerContainerData, DockerStatusConstants.STARTED)
}

const getRunningContainer = (state) => {
    return filterDataContainerBasedOnStatus(state.dockerContainerData, DockerStatusConstants.RUNNING)
}

const getPausedContainer = (state) => {
    return filterDataContainerBasedOnStatus(state.dockerContainerData, DockerStatusConstants.PAUSED)
}

const getRestartedContainer = (state) => {
    return filterDataContainerBasedOnStatus(state.dockerContainerData, DockerStatusConstants.RESTARTED)
}

const getStoppedContainer = (state) => {
    return filterDataContainerBasedOnStatus(state.dockerContainerData, DockerStatusConstants.STOPPED)
}

const getDeadContainer = (state) => {
    return filterDataContainerBasedOnStatus(state.dockerContainerData, DockerStatusConstants.DEAD)
}

const findContainerBySearchText = (searchText, dockerContainerData) => {
    return dockerContainerData.filter((data) => data.containerId === searchText || data.image === searchText || data.name === searchText)
}

export {
    getCreatedContainer,
    getStartedContainer,
    getRunningContainer,
    getPausedContainer,
    getRestartedContainer,
    getStoppedContainer,
    getDeadContainer,
    findContainerBySearchText,
}