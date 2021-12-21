import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchAllDockerContainerData,
  updateTheContainerStatus,
  deleteTheContainer,
} from "../actions/dockerContainerActions";
import SearchBox from "./SearchBox";
import * as Selector from "../selectors/dockerContainerSelector";
import CardContainer from "./CardContainer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.restartTheRunningContainer = this.restartTheRunningContainer.bind(
      this
    );
    this.stopTheRunningContainer = this.stopTheRunningContainer.bind(this);
    this.startTheStoppedContainer = this.startTheStoppedContainer.bind(this);
    this.deleteTheStoppedContainer = this.deleteTheStoppedContainer.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllDockerContainerData();
  }

  restartTheRunningContainer(containerId) {
    this.props.updateTheContainerStatus(containerId, "restarted");
  }

  stopTheRunningContainer(containerId) {
    this.props.updateTheContainerStatus(containerId, "stopped");
  }

  startTheStoppedContainer(containerId) {
    this.props.updateTheContainerStatus(containerId, "started");
  }

  deleteTheStoppedContainer(containerId) {
    this.props.deleteTheContainer(containerId);
  }

  render() {
    const {
      createdContainer,
      startedContainer,
      runningContainer,
      pausedContainer,
      restartContainer,
      stoppedContainer,
      deadContainer,
    } = this.props;

    const allContainersInfo = [
      {
        title: "Created Container",
        containerData: createdContainer,
        emptyMessage: "Currently no container is created",
      },
      {
        title: "Started Container",
        containerData: startedContainer,
        emptyMessage: "Currently no container is started",
      },
      {
        title: "Running Container",
        containerData: runningContainer,
        emptyMessage: "Currently no container is in running state",
        firstBtn: {
          name: "restart",
          callBack: this.restartTheRunningContainer,
        },
        secondBtn: { name: "Stop", callBack: this.stopTheRunningContainer },
      },
      {
        title: "Paused Container",
        containerData: pausedContainer,
        emptyMessage: "Currently no container is in paused state",
      },
      {
        title: "Restarted Container",
        containerData: restartContainer,
        emptyMessage: "Currently no container is restarted",
      },
      {
        title: "Stopped/Exited Container",
        containerData: stoppedContainer,
        emptyMessage: "Currently no container is stopped",
        firstBtn: { name: "Start", callBack: this.startTheStoppedContainer },
        secondBtn: { name: "Delete", callBack: this.deleteTheStoppedContainer },
      },
      {
        title: "Dead Container",
        containerData: deadContainer,
        emptyMessage: "Currently no container is dead",
      },
    ];

    return (
      <div className="main-container">
        <SearchBox />

        {allContainersInfo.map((data) => {
          return (
            <>
              <div className="container-status">{data.title}</div>
              <div className="container-data">
                {!!data.containerData.length ? (
                  data.containerData.map((res) => (
                    <CardContainer
                      containerData={res}
                      firstBtn={data.firstBtn}
                      secondBtn={data.secondBtn}
                    />
                  ))
                ) : (
                  <span className="no-data-message">{data.emptyMessage}</span>
                )}
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dockerContainerData: state.dockerDataCollector,
    createdContainer: Selector.getCreatedContainer(state),
    startedContainer: Selector.getStartedContainer(state),
    runningContainer: Selector.getRunningContainer(state),
    pausedContainer: Selector.getPausedContainer(state),
    restartContainer: Selector.getRestartedContainer(state),
    stoppedContainer: Selector.getStoppedContainer(state),
    deadContainer: Selector.getDeadContainer(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchAllDockerContainerData,
      updateTheContainerStatus,
      deleteTheContainer,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
