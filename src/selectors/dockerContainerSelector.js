const getCreatedContainer = (state) => {
    return state.dockerContainerData.filter((data) => data.status === 'created')
}

const getStartedContainer = (state) => {
    return state.dockerContainerData.filter((data) => data.status === 'started')
}

const getRunningContainer = (state) => {
    return state.dockerContainerData.filter((data) => data.status === 'running')
}

const getPausedContainer = (state) => {
    return state.dockerContainerData.filter((data) => data.status === 'paused')
}

const getRestartedContainer = (state) => {
    return state.dockerContainerData.filter((data) => data.status === 'restarted')
}

const getStoppedContainer = (state) => {
    return state.dockerContainerData.filter((data) => data.status === 'stopped')
}

const getDeadContainer = (state) => {
    return state.dockerContainerData.filter((data) => data.status === 'dead')
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