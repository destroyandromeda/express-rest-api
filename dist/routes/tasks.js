"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
router.post('/', _task.create);
router.get('/', _task.get);
router.get('/:id', _task.getOne);
router["delete"]('/:id', _task.del);
router.put('/:id', _task.upd);
router.get('/project/:project_id', _task.getByRelatives);
var _default = router;
exports["default"] = _default;