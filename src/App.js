import React, { Component } from "react";
import {
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  MultiMatchQuery,
  Hits
} from "searchkit";

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
    const packageIcon = "";
    const poweredBy = "";

    return (
      <SearchkitProvider searchkit={searchkit}>
        <div>
          <div className="site-background" />
          <div className={`search-demo live-filtering active-search`}>
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
                <div className="search-demo__input-wrapper">
                  <SearchBox
                    searchOnChange={true}
                    queryBuilder={term => {
                      return MultiMatchQuery(term, {
                        fields: searchFields,
                        operator: "OR"
                      });
                    }}
                  />
                  {/* <input
                    className="search-demo__text-input"
                    placeholder="Search node packages&#8230;"
                    value={query}
                    onChange={e => searchActions.updateQuery(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="button search-demo__submit"
                  /> */}
                </div>
              </div>

              <div className="search-demo__body">
                <div className="search-results">
                  {/* <Facets
                    facets={searchResults.facets}
                    filters={searchResults.filters}
                    queryState={queryState}
                  /> */}
                  <div className="results">
                    <div className="results__header">
                      {/* <Totals {...searchResults.pageState} />
                      <div className="results__powered-by powered-by">
                        <img
                          src="https://app.swiftype.com/assets/embed/powered-by@2x.png"
                          alt="Powered by Swiftype"
                        />
                      </div> */}
                    </div>
                    <div className="results__body">
                      <Hits />
                      {/* <Results
                        results={searchResults.results}
                        queryState={queryState}
                        trackClick={searchActions.trackClick}
                      /> */}
                    </div>
                    <div className="results__footer">
                      {/* <Pagination
                        {...searchResults.pageState}
                        onPage={searchActions.updatePage}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SearchkitProvider>
    );
  }
}

export default App;
