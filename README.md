# Indexing data into ES

```shell
cd data

# Convert json formatted file to bulk api format
node ./convert-json-to-bulk-api.js

# Use bulk api to index data
curl -XPOST 'http://localhost:9200/node-modules/_doc/_bulk' -H 'Content-Type: application/json' --data-binary @/Users/jasonstoltzfus/workspace/es-app-demo/data/bulk-api-data
```

# Notes on SearchKit usage

- Many components are simply not customizable. SearchBox for instance, has static markup. There is no way to replace
  the markup with custom markup.
- Hard to create a completely custom component, or get access to other state not specifically required
  by a component. IE, in the HitsStats component, it doesn't have access to paging
  from and to. Had to create a completely custom component and dig for the location of that
  state.
- Adding a "Refinement" filter component automatically adds that to your query. No need to
  add a corresponding "agg" to your query. Ditto for adding "highlights" to Hits, or
  "size" to Hits, it automatically builds your query from those options.

# Raw ES challenges

- Fields must not be analyzed to be used as filters, BUT, all fields are indexed with
  a "keyword" field by default.
