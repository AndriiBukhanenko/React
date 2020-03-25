import React from "react";

import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends React.Component {
  render() {
    const { onActiveClick, onDoneFilterClick, onAllClick, filter } = this.props;

    let classAll;
    let classActive;
    let classDone;

    switch (filter) {
      case "all":
        classAll = "btn btn-info";
        classActive = "btn btn-outline-secondary";
        classDone = "btn btn-outline-secondary";
        break;
      case "done":
        classAll = "btn btn-outline-secondary";
        classActive = "btn btn-outline-secondary";
        classDone = "btn btn-info";
        break;
      case "active":
        classAll = "btn btn-outline-secondary";
        classActive = "btn btn-info";
        classDone = "btn btn-outline-secondary";
        break;
      default:
        classAll = "btn btn-outline-secondary";
        classActive = "btn btn-outline-secondary";
        classDone = "btn btn-outline-secondary";
    }

    return (
      <div className="btn-group filter-input ">
        <button type="button" className={classAll} onClick={onAllClick}>
          All
        </button>
        <button type="button" className={classActive} onClick={onActiveClick}>
          Active
        </button>
        <button type="button" className={classDone} onClick={onDoneFilterClick}>
          Done
        </button>
      </div>
    );
  }
}
