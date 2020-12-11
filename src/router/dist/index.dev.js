"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("@/views/Home.vue"));

var _empresa = _interopRequireDefault(require("@/views/empresa.vue"));

var _login = _interopRequireDefault(require("@/views/login.vue"));

var _misproductos = _interopRequireDefault(require("@/components/misproductos.vue"));

var _agregar = _interopRequireDefault(require("@/components/agregar.vue"));

var _productos = _interopRequireDefault(require("@/views/productos.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/agregar',
  name: 'agregar',
  component: _agregar["default"],
  meta: {
    requireAuth: true
  }
}, {
  path: '/productos',
  name: 'productos',
  component: _misproductos["default"],
  meta: {
    requireAuth: true
  }
}, {
  path: '/login',
  name: 'login',
  component: _login["default"]
}, {
  path: '/empresa',
  name: 'empresa',
  component: _empresa["default"]
}, {
  path: '/producto',
  name: 'producto',
  component: _productos["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requireAuth;
  })) {
    //la ruta requiere autenticacion de ingreso
    var token = localStorage.getItem('token');

    if (!token) {
      next('/');
    }
  }

  next();
});
var _default = router;
exports["default"] = _default;