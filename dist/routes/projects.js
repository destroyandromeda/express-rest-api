"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)();
router.get('/', _project.get);
router.get('/:id', _project.getOne);
router.post('/', _project.create);
router["delete"]('/:id', _project.del);
router.put('/:id', _project.upd);
var _default = router;
exports["default"] = _default;