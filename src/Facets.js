import React from "react";

import { RefinementListFilter } from "searchkit";

const RefinementOption = props => {
  if (!props.active) {
    return (
      <div className="facet">
        <a
          className="facet__link"
          href="#"
          onClick={e => {
            e.preventDefault();
            props.onClick();
          }}
        >
          {props.label}
        </a>{" "}
        <span className="facet__count">{props.count}</span>
      </div>
    );
  } else {
    return (
      <div className="facet__selected">
        {props.label}{" "}
        <span className="facet__remove">
          (
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              props.onClick();
            }}
          >
            Remove
          </a>)
        </span>
      </div>
    );
  }
};

export default function Facets() {
  return (
    <div className="facets with-counts">
      <RefinementListFilter
        showMore={false}
        size="10"
        id="licenseFacet"
        title="License"
        field="license.keyword"
        itemComponent={RefinementOption}
        operator="AND"
      />
      <RefinementListFilter
        showMore={false}
        size="10"
        id="keywordsFacet"
        title="keywords"
        field="keywords.keyword"
        itemComponent={RefinementOption}
        operator="AND"
      />
      <RefinementListFilter
        showMore={false}
        size="10"
        id="dependenciesFacet"
        title="dependencies"
        field="dependencies.keyword"
        itemComponent={RefinementOption}
        operator="AND"
      />
    </div>
  );
}
