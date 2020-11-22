"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var numCPUs = _os["default"].cpus().length;

var main = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _app["default"].listen(process.env.APP_PORT);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

if (process.env.MODE === 'production') {
  if (_cluster["default"].isMaster) {
    console.log("Master ".concat(process.pid, " is running"));
    console.log("numCPUs ".concat(numCPUs, " is reg"));
    console.log("Server on port ".concat(process.env.APP_PORT)); // Fork workers.

    for (var i = 0; i < numCPUs; i++) {
      _cluster["default"].fork();
    }

    _cluster["default"].on('exit', function (worker, code, signal) {
      console.log("worker ".concat(worker.process.pid, " died"));
    });
  } else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    main().then(function () {
      return console.log("Worker ".concat(process.pid, " started"));
    });
  }
} else {
  main().then(function () {
    return console.log('Server started!');
  });
}