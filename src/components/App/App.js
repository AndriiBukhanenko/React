import React from "react";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import AddItem from "../AddItem/AddItem";

export default class App extends React.Component {
  constructor() {
    super();
    let nextId = 100;
    this.createTodoItem = text => {
      return {
        id: nextId++,
        label: text,
        important: false,
        done: false
      };
    };
    this.state = {
      filter: "all",
      tern: "",
      tasks: [
        this.createTodoItem("task1"),
        this.createTodoItem("task2"),
        this.createTodoItem("task3"),
        this.createTodoItem("task4")
      ]
    };
    this.onDeletedClick = id => {
      this.setState(state => {
        const idx = state.tasks.findIndex(el => el.id === id);
        const newArray = [
          ...state.tasks.slice(0, idx),
          ...state.tasks.slice(idx + 1)
        ];
        return {
          tasks: newArray
        };
      });
    };
    this.onAddClick = text => {
      this.setState(state => {
        const newArray = [this.createTodoItem(text), ...state.tasks];
        return {
          tasks: newArray
        };
      });
    };
    this.onImportantClick = id => {
      this.setState(state => {
        const idx = state.tasks.findIndex(el => el.id === id);
        const newItem = {
          ...state.tasks[idx],
          important: !state.tasks[idx].important
        };
        const newArray = [
          ...state.tasks.slice(0, idx),
          newItem,
          ...state.tasks.slice(idx + 1)
        ];
        return {
          tasks: newArray
        };
      });
    };
    this.onDoneClick = id => {
      this.setState(state => {
        const idx = state.tasks.findIndex(el => el.id === id);
        const newItem = { ...state.tasks[idx], done: !state.tasks[idx].done };
        const newArray = [
          ...state.tasks.slice(0, idx),
          newItem,
          ...state.tasks.slice(idx + 1)
        ];
        return {
          tasks: newArray
        };
      });
    };
    this.onActiveClick = () => {
      this.setState(state => {
        const newArray = [...state.tasks.filter(el => el.done === false)];
        return {
          tasks: newArray,
          filter: "active"
        };
      });
    };
    this.onDoneFilterClick = () => {
      this.setState(state => {
        const newArray = [...state.tasks.filter(el => el.done === true)];
        return {
          tasks: newArray,
          filter: "done"
        };
      });
    };
    this.onAllClick = () => {
      this.setState(state => {
        const newArray = [...state.tasks];
        return {
          tasks: newArray,
          filter: "all"
        };
      });
    };
    this.onFilterClick = turn => {
      this.setState({ turn });
    };

    this.search = (list, text) => {
      if (text.length === 0) {
        return list;
      }

      return list.filter(el => el.label.indexOf(text) > -1);
    };
  }

  render() {
    const { tasks, filter, tern } = this.state;
    const visibleItem = this.search(tasks, tern);
    const doneCount = tasks.filter(el => el.done === true).length;
    const notDone = tasks.length;
    return (
      <div>
        <AppHeader toDo={notDone - doneCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onFilterClick={this.onFilterClick} />
          <ItemStatusFilter
            filter={filter}
            onActiveClick={this.onActiveClick}
            onAllClick={this.onAllClick}
            onDoneFilterClick={this.onDoneFilterClick}
          />
        </div>
        <TodoList
          todos={visibleItem}
          onDeleted={id => this.onDeletedClick(id)}
          onDoneClick={id => this.onDoneClick(id)}
          onImportantClick={id => this.onImportantClick(id)}
        />
        <AddItem todos={tasks} onAddClick={this.onAddClick} />
      </div>
    );
  }
}
