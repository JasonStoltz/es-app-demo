import React from "react";
import { SearchkitComponent } from "searchkit";

export default class Totals extends SearchkitComponent {
  render() {
    const from = this.searchkit.query.query.from || 0;
    const start = from + 1;
    const end = from + this.searchkit.query.query.size;
    const totalResults = this.searchkit.getHitsCount();

    return (
      <div className="results__result-count">
        Showing{" "}
        <strong>
          {start} - {end}
        </strong>{" "}
        of <strong>{totalResults}</strong>
      </div>
    );
  }
}
