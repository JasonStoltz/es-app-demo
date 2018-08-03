import React, { Component } from "react";
import {
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  MultiMatchQuery,
  Hits
} from "searchkit";

import "./App.css";

const searchFields = [
  "license",
  "name",
  "repository",
  "dependencies",
  "keywords",
  "description",
  "id",
  "version",
  "owners"
];

const searchkit = new SearchkitManager("http://localhost:9200/");

searchkit.addDefaultQuery(query => {
  return query.addQuery(
    MultiMatchQuery("", {
      fields: searchFields,
      operator: "OR"
    })
  );
});
class App extends Component {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <div className="App">
          <SearchBox
            queryBuilder={term => {
              return MultiMatchQuery(term, {
                fields: searchFields,
                operator: "OR"
              });
            }}
          />
          <Hits />
        </div>
      </SearchkitProvider>
    );
  }
}

export default App;
