import React from "react";
import "./SearchPanel.css";

export default class SearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      turn: ""
    };
    this.onLabelChangFilter = e => {
      const tern = e.target.value;
      this.setState({ tern });
      this.props.onFilterClick(tern);
    };
  }
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.turn}
        onChange={this.onLabelChangFilter}
      />
    );
  }
}
