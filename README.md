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
- Certain components require data to be indexed in a specific way
