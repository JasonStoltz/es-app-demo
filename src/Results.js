import React from "react";
import { Hits } from "searchkit";

function trackClick() {
  console.log("no op");
}

function createMarkup(html) {
  return { __html: html };
}

function Owners({ label, value, children }) {
  if (!value) return null;
  if (Array.isArray(value) && !value.length) return null;
  return (
    <span>
      <strong>{label}</strong>: {children(value)}
    </span>
  );
}

function LineItem({ label, value, children }) {
  if (!value) return null;
  if (Array.isArray(value) && !value.length) return null;
  return (
    <li>
      <strong>{label}</strong>: {children(value)}
    </li>
  );
}

function Description({ value, children }) {
  if (!value) return null;
  if (Array.isArray(value) && !value.length) return null;
  return (
    <p
      className="result__description"
      dangerouslySetInnerHTML={createMarkup(value)}
    />
  );
}

function Lisence({ value, children }) {
  if (!value) return null;
  if (Array.isArray(value) && !value.length) return null;
  return <div className="result__lisence">{value}</div>;
}

const HitItem = props => {
  const result = props.result._source;
  return (
    <div className="result" key={result.name}>
      <div className="result__header">
        <a
          className="result__title"
          href={`https://www.npmjs.com/package/${result.name}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => trackClick("id")}
          dangerouslySetInnerHTML={createMarkup(result.name)}
        />
        <Lisence value={result.license} />
      </div>
      <div className="result__body">
        <Description value={result.description} />
        <ul className="result__details">
          <LineItem label="Version" value={result.version}>
            {value => <span className="result__version">{value}</span>}
          </LineItem>
          <LineItem label="Home Page" value={result.homepage}>
            {value => (
              <a target="_blank subtle-link" href={result.homepage}>
                {value}
              </a>
            )}
          </LineItem>
          <LineItem label="Dependencies" value={result.dependencies}>
            {values => values.map(value => <span key={value}>{value}</span>)}
          </LineItem>
          <LineItem label="License" value={result.license}>
            {value => value.join(", ")}
          </LineItem>
          <LineItem label="Keywords" value={result.keywords}>
            {values =>
              values.map((value, index) => (
                <span key={`${value}-${index}`}>{value}</span>
              ))
            }
          </LineItem>
        </ul>
      </div>
      <div className="result__footer">
        <div className="result__owner">
          <Owners label="Owners" value={result.owners}>
            {value => value.join(", ")}
          </Owners>
        </div>
      </div>
    </div>
  );
};

export default function Results() {
  return <Hits itemComponent={HitItem} />;
}
