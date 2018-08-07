import React, { Component } from "react";
import {
  MultiMatchQuery,
  Pagination,
  SearchkitComponent,
  SearchkitManager,
  SearchkitProvider,
  SearchBox
} from "searchkit";

import packageIcon from "./icons/icon-package.svg";
import poweredBy from "./images/powered-by@2x.png";

import Facets from "./Facets";
import Results from "./Results";
import Totals from "./Totals";
import Wrapper from "./Wrapper";

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

const searchkit = new SearchkitManager(
  process.env.REACT_APP_ES_URL || "http://localhost:9200/"
);

searchkit.addDefaultQuery(query => {
  return query.addQuery(
    MultiMatchQuery("", {
      fields: searchFields,
      operator: "OR",
      fuzziness: "auto"
    })
  );
});
class App extends SearchkitComponent {
  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <div>
          <div className="site-background" />
          <Wrapper>
            <div className="search-demo__content">
              <div className="search-demo__header">
                <div className="search-demo__headings">
                  <div className="search-demo__icon-wrap">
                    <img
                      src={packageIcon}
                      alt="Dog Icon"
                      className="search-demo__icon"
                    />
                  </div>
                  <h1 className="search-demo__title">Package Search</h1>
                  <h3 className="search-demo__sub-heading powered-by">
                    <img src={poweredBy} alt="Powered by Swiftype" />
                  </h3>
                </div>
                <SearchBox
                  searchOnChange={true}
                  queryBuilder={term => {
                    return MultiMatchQuery(term, {
                      fields: searchFields,
                      operator: "OR",
                      fuzziness: "auto"
                    });
                  }}
                />
              </div>

              <div className="search-demo__body">
                <div className="search-results">
                  <Facets />
                  <div className="results">
                    <div className="results__header">
                      <Totals />
                      <div className="results__powered-by powered-by">
                        <img src={poweredBy} alt="Powered by Swiftype" />
                      </div>
                    </div>
                    <div className="results__body">
                      <Results />
                      {/* <Results
                        results={searchResults.results}
                        queryState={queryState}
                        trackClick={searchActions.trackClick}
                      /> */}
                    </div>
                    <div className="results__footer">
                      <Pagination showNumbers={true} />
                      {/* <Pagination
                        {...searchResults.pageState}
                        onPage={searchActions.updatePage}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </SearchkitProvider>
    );
  }
}

export default App;
