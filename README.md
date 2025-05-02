# Node + Express Service Starter

This is a simple API sample in Node.js with express.js based on [Google Cloud Run Quickstart](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service).

## Getting Started

Server should run automatically when starting a workspace. To run manually, run:
```sh
npm run dev
```

## Extentions used

Name: REST Client
Id: humao.rest-client
Description: REST Client for Visual Studio Code
Version: 0.26.0
Publisher: humao
VS Marketplace Link: https://open-vsx.org/vscode/item?itemName=humao.rest-client

Name: Todo Tree
Id: Gruntfuggly.todo-tree
Description: Show TODO, FIXME, etc. comment tags in a tree view
Version: 0.0.215
Publisher: Gruntfuggly
VS Marketplace Link: https://open-vsx.org/vscode/item?itemName=Gruntfuggly.todo-tree

with settings.json adding:
```json
"todo-tree.filtering.excludeGlobs": [
    "**/node_modules",
    "**/dist"
],
"todo-tree.general.tags": [
    "BUG",
    "HACK",
    "FIXME",
    "TODO",
    "NOTE"
],
"todo-tree.highlights.defaultHighlight": {
    "foreground": "#FFF",
    "type": "tag"
}
```