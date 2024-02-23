/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xoecumn84yc6aoy",
    "created": "2024-02-23 00:52:14.380Z",
    "updated": "2024-02-23 00:52:14.380Z",
    "name": "Responses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oyr3kvmk",
        "name": "prompt",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4s5zoozt",
        "name": "response",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xoecumn84yc6aoy");

  return dao.deleteCollection(collection);
})
