import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DockerActions from "../actions/dockerContainerActions";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
  }

  onSearch(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  onSearchButtonClick() {
    this.props.findContainerBySearchText(this.state.searchText);
  }

  onCancelButtonClick() {
    this.props.cancelTheSearchMode();
    this.setState({
      searchText: "",
    });
  }

  render() {
    return (
      <div className="searchbox">
        <input
          placeholder="Search by name, container id or image"
          value={this.state.searchText}
          onChange={this.onSearch}
          onKeyDown={(e) => e.keyCode === 13 && this.onSearchButtonClick()}
        />

        <button
          type="button"
          onClick={this.onSearchButtonClick}
          className={!this.state.searchText ? "disabled" : ""}
        >
          <i className="fa fa-search"></i>
        </button>

        <span
          onClick={this.onCancelButtonClick}
          className="removeBtn"
        >
          <i class="fa fa-remove"></i>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      findContainerBySearchText: DockerActions.findContainerBySearchText,
      cancelTheSearchMode: DockerActions.cancelTheSearchMode,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SearchBox);
