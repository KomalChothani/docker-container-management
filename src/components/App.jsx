import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAllDockerContainerData } from "../actions/dockerContainerActions";
import SearchBox from "./SearchBox";
import * as Selector from "../selectors/dockerContainerSelector";
import CardContainer from "./CardContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllDockerContainerData();
  }

  render() {
    const {
      createdContainer,
      startedContainer,
      runningContainer,
      pausedContainer,
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
      },
      {
        title: "Paused Container",
        containerData: pausedContainer,
        emptyMessage: "Currently no container is in paused state",
      },
      {
        title: "Stopped/Exited Container",
        containerData: stoppedContainer,
        emptyMessage: "Currently no container is stopped",
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
                  data.containerData.map((data) => (
                    <CardContainer containerData={data} />
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
    dockerContainerData: state.dockerContainerData,
    createdContainer: Selector.getCreatedContainer(state),
    startedContainer: Selector.getStartedContainer(state),
    runningContainer: Selector.getRunningContainer(state),
    pausedContainer: Selector.getPausedContainer(state),
    stoppedContainer: Selector.getStoppedContainer(state),
    deadContainer: Selector.getDeadContainer(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchAllDockerContainerData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
