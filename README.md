# Indexing data into ES

```shell
cd data

# Convert json formatted file to bulk api format
node ./convert-json-to-bulk-api.js

# Use bulk api to index data
curl -XPOST 'http://localhost:9200/node-modules/_doc/_bulk' -H 'Content-Type: application/json' --data-binary @/Users/jasonstoltzfus/workspace/es-app-demo/data/bulk-api-data
```
