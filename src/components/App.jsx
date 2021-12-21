import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DockerContainerActions from "../actions/dockerContainerActions";
import SearchBox from "./SearchBox";
import * as Selector from "../selectors/dockerContainerSelector";
import CardContainer from "./CardContainer";
import * as DockerStatusConstants from "../constants/dockerContainerStatus";
import i18n from "../i18n";

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

  /**
   * This method used to  restart the running container
   * @param {string} containerId 
   */
  restartTheRunningContainer(containerId) {
    this.props.updateTheContainerStatus(containerId, DockerStatusConstants.RESTARTED);
  }

   /**
   * This method used to stop the running container
   * @param {string} containerId 
   */
  stopTheRunningContainer(containerId) {
    this.props.updateTheContainerStatus(containerId, DockerStatusConstants.STOPPED);
  }

   /**
   * This method used to start the stop container
   * @param {string} containerId 
   */
  startTheStoppedContainer(containerId) {
    this.props.updateTheContainerStatus(containerId, DockerStatusConstants.STARTED);
  }

   /**
   * This method used to permanently delete the stop container
   * @param {string} containerId 
   */
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
        title: i18n.t("message.Created_Container"),
        containerData: createdContainer,
        emptyMessage: i18n.t("errMessage.No_Container_Created"),
      },
      {
        title: i18n.t("message.Started_Container"),
        containerData: startedContainer,
        emptyMessage:i18n.t("errMessage.No_Container_Started"),
      },
      {
        title: i18n.t("message.Running_Container"),
        containerData: runningContainer,
        emptyMessage: i18n.t("errMessage.No_Container_Running"),
        firstBtn: {
          name: "restart",
          callBack: this.restartTheRunningContainer,
        },
        secondBtn: { name: "Stop", callBack: this.stopTheRunningContainer },
      },
      {
        title: i18n.t("message.Paused_Container"),
        containerData: pausedContainer,
        emptyMessage: i18n.t("errMessage.No_Container_Paused"),
      },
      {
        title: i18n.t("message.Restarted_Container"),
        containerData: restartContainer,
        emptyMessage: i18n.t("errMessage.No_Container_Restarted"),
      },
      {
        title: i18n.t("message.Stopped_OR_Exited_Container"),
        containerData: stoppedContainer,
        emptyMessage: i18n.t("errMessage.No_Container_Stopped_OR_Exited"),
        firstBtn: { name: "Start", callBack: this.startTheStoppedContainer },
        secondBtn: { name: "Delete", callBack: this.deleteTheStoppedContainer },
      },
      {
        title: i18n.t("message.Dead_Container"),
        containerData: deadContainer,
        emptyMessage: i18n.t("errMessage.NO_Container_Dead"),
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
      fetchAllDockerContainerData: DockerContainerActions.fetchAllDockerContainerData,
      updateTheContainerStatus: DockerContainerActions.updateTheContainerStatus,
      deleteTheContainer: DockerContainerActions.deleteTheContainer,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
