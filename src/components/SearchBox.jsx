import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { findContainerBySearchText } from '../actions/dockerContainerActions';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
  }

  onSearch(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  onSearchButtonClick() {
    this.props.findContainerBySearchText(this.state.searchText);
  }

  render() {
    return (
      <div className="searchbox">
        <input
          placeholder="Search by name, container id or image"
          value={this.state.searchText}
          onChange={this.onSearch}
        />
        <button
          type="button"
          onClick={this.onSearchButtonClick}
          className={!this.state.searchText ? "disabled" : ''}
        >
          Search
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      findContainerBySearchText,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SearchBox);
