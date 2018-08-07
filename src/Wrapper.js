import React from "react";
import { SearchkitComponent } from "searchkit";

export default class Wrapper extends SearchkitComponent {
  render() {
    const queryClass = this.searchkit.query.index.queryString
      ? "active-search"
      : "";
    console.log(queryClass);
    console.log(this.searchkit);

    return (
      <div className={`search-demo live-filtering ${queryClass}`}>
        {this.props.children}
      </div>
    );
  }
}
