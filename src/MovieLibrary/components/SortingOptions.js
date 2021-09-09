import React, { Component } from "react";
import classNames from "classnames";
export class SortingOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: false,
      value: "",
    };
  }
  handleChange(e) {
    const selectedValue = e.target.value;
    const { onChange } = this.props;

    onChange(selectedValue);
    this.setState({ value: selectedValue, isSorted: selectedValue !== "" });
  }
  render() {
    const { isSorted } = this.state;
    return (
      <div className={classNames("select-control", { sorted: isSorted })}>
        <select
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          <option value="">Sort by</option>
          <option value="name_asc">A - Z</option>
          <option value="name_desc">Z - A</option>
          <option value="rating">Rating</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-12h-8v-2h8v2zm2-6h-10v2h10v-2zm-4 8h-6v2h6v-2zm-2 4h-4v2h4v-2zm-2 4h-2v2h2v-2z" />
        </svg>
      </div>
    );
  }
}
