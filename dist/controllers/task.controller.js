"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByRelatives = exports.getOne = exports.upd = exports.del = exports.create = exports.get = void 0;

var _Task = _interopRequireDefault(require("../models/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var get = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Task["default"].findAll({
              attributes: ['id', 'project_id', 'name', 'done'],
              order: [['id', 'DESC']]
            });

          case 3:
            tasks = _context.sent;
            res.json({
              tasks: tasks
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function get(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.get = get;

var create = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, done, project_id, newTask;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, project_id = _req$body.project_id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Task["default"].create({
              name: name,
              done: done,
              project_id: project_id
            }, {
              fields: ['name', 'done', 'project_id']
            });

          case 4:
            newTask = _context2.sent;
            res.json({
              message: 'Task created successfully'
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function create(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.create = create;

var del = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Task["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            res.json({
              message: 'Task deleted successfully'
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function del(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.del = del;

var upd = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, name, done, project_id, task, updatedTask;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, project_id = _req$body2.project_id;
            _context4.prev = 2;
            _context4.next = 5;
            return _Task["default"].findOne({
              attributes: ['name', 'project_id', 'done', 'id'],
              where: {
                id: id
              }
            });

          case 5:
            task = _context4.sent;
            _context4.next = 8;
            return task.update({
              name: name,
              done: done,
              project_id: project_id
            }, {
              where: {
                id: id
              }
            });

          case 8:
            updatedTask = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Task updated successfully',
              data: updatedTask
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));

  return function upd(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.upd = upd;

var getOne = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Task["default"].findOne({
              attributes: ['id', 'project_id', 'name', 'done'],
              where: {
                id: id
              }
            });

          case 4:
            task = _context5.sent;
            res.json({
              task: task
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getOne(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getOne = getOne;

var getByRelatives = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var project_id, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            project_id = req.params.project_id;
            _context6.next = 4;
            return _Task["default"].findAll({
              attributes: ['id', 'project_id', 'name', 'done'],
              where: {
                project_id: project_id
              }
            });

          case 4:
            tasks = _context6.sent;
            res.json({
              tasks: tasks
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function getByRelatives(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getByRelatives = getByRelatives;