(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBookAction = function () {
  function AddBookAction() {
    _classCallCheck(this, AddBookAction);

    this.generateActions('addBookSuccess', 'addBookFail', 'updateName', 'updateDirector', 'invalidName', 'invalidDirector', 'getBookSuccess', 'getBookFail', 'resetState');
  }

  _createClass(AddBookAction, [{
    key: 'getById',
    value: function getById(bookid) {
      var _this = this;

      $.ajax({
        url: '/api/book/' + bookid }).done(function (data) {
        _this.actions.getBookSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getBookFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'addBook',
    value: function addBook(id, name, director) {
      var _this2 = this;

      $.ajax({
        type: 'POST',
        url: '/api/book',
        data: { id: id, name: name, director: director }
      }).done(function (data) {
        _this2.actions.addBookSuccess(data.message);
      }).fail(function (jqXhr) {
        _this2.actions.addBookFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddBookAction;
}();

exports.default = _alt2.default.createActions(AddBookAction);

},{"../alt":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function () {
  function FooterActions() {
    _classCallCheck(this, FooterActions);

    this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
  }

  _createClass(FooterActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {
      var _this = this;

      $.ajax({ url: '/api/characters/top' }).done(function (data) {
        _this.actions.getTopCharactersSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTopCharactersFail(jqXhr);
      });
    }
  }]);

  return FooterActions;
}();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
  }

  _createClass(NavbarActions, [{
    key: 'findCharacter',
    value: function findCharacter(payload) {
      var _this = this;

      $.ajax({
        url: '/api/characters/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findCharacterSuccess(payload);
      }).fail(function () {
        _this.actions.findCharacterFail(payload);
      });
    }
  }]);

  return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":9,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbartopActions = function () {
  function NavbartopActions() {
    _classCallCheck(this, NavbartopActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
  }

  _createClass(NavbartopActions, [{
    key: 'findCharacter',
    value: function findCharacter(payload) {
      var _this = this;

      $.ajax({
        url: '/api/characters/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findCharacterSuccess(payload);
      }).fail(function () {
        _this.actions.findCharacterFail(payload);
      });
    }
  }]);

  return NavbartopActions;
}();

exports.default = _alt2.default.createActions(NavbartopActions);

},{"../alt":9,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../../../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddUserActions = function () {
  function AddUserActions() {
    _classCallCheck(this, AddUserActions);

    this.generateActions('addUserSuccess', 'addUserFail', 'updateuserName', 'updatepassword', 'updaterepassword', 'updatefirstName', 'updatelastName', 'updateType', 'updateAvatarpreview', 'updateAvatarfile', 'invaliduserName', 'invalidpassword', 'invalidrepassword', 'invalidfirstName', 'invalidlastName', 'invalidType', 'passwordNotSame', 'resetAll', 'getUserSuccess', 'getUserFail', 'uploadSuccess', 'uploadFail');
  }

  _createClass(AddUserActions, [{
    key: 'uploadImage',
    value: function uploadImage(imgfile) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/imageupload',
        data: { file: imgfile }
      }).done(function (data) {
        _this.actions.uploadSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.uploadFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'getById',
    value: function getById(userId) {
      var _this2 = this;

      $.ajax({
        url: '/api/user/' + userId }).done(function (data) {
        _this2.actions.getUserSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getUserFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'addUser',
    value: function addUser(payload) {
      var _this3 = this;

      $.ajax({
        type: 'POST',
        url: '/api/user',
        data: { id: payload.id,
          userName: payload.userName,
          password: payload.pass,
          firstName: payload.firstName,
          lastName: payload.lastName,
          barcode: payload.barcode,
          type: payload.type }
      }).done(function (data) {
        _this3.actions.addUserSuccess(data.message);
      }).fail(function (jqXhr) {
        _this3.actions.addUserFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddUserActions;
}();

exports.default = _alt2.default.createActions(AddUserActions);

},{"../../../alt":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../../../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listUsersActions = function () {
  function listUsersActions() {
    _classCallCheck(this, listUsersActions);

    this.generateActions('getUsersuccess', 'getUserfail', 'deletesuccess', 'deletefail');
  }

  _createClass(listUsersActions, [{
    key: 'delete',
    value: function _delete(user) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/deleteuser',
        data: { id: user._id }
      }).done(function (data) {
        _this.actions.deletesuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.deletefail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'get',
    value: function get() {
      var _this2 = this;

      $.ajax({
        url: '/api/user'
      }).done(function (data) {
        _this2.actions.getUsersuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getUserfail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return listUsersActions;
}();

exports.default = _alt2.default.createActions(listUsersActions);

},{"../../../alt":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bookActions = function () {
  function bookActions() {
    _classCallCheck(this, bookActions);

    this.generateActions('getBookSuccess', 'getBookFail');
  }

  _createClass(bookActions, [{
    key: 'getBook',
    value: function getBook(bookid) {
      var _this = this;

      $.ajax({
        url: '/api/book/' + bookid }).done(function (data) {
        _this.actions.getBookSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getBookFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return bookActions;
}();

exports.default = _alt2.default.createActions(bookActions);

},{"../alt":9}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listBooksActions = function () {
  function listBooksActions() {
    _classCallCheck(this, listBooksActions);

    this.generateActions('getBooksuccess', 'getBookfail', 'deletesucess', 'deletefail');
  }

  _createClass(listBooksActions, [{
    key: 'delete',
    value: function _delete(book) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/deletebook',
        data: { id: book._id }
      }).done(function (data) {
        _this.actions.deletesucess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.deletefail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'get',
    value: function get() {
      var _this2 = this;

      $.ajax({
        url: '/api/book'
      }).done(function (data) {
        _this2.actions.getBooksuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getBookfail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return listBooksActions;
}();

exports.default = _alt2.default.createActions(listBooksActions);

},{"../alt":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Navbartop = require('./Navbartop');

var _Navbartop2 = _interopRequireDefault(_Navbartop);

var _SidebarLeft = require('./SidebarLeft');

var _SidebarLeft2 = _interopRequireDefault(_SidebarLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'page-container' },
				_react2.default.createElement(_Navbartop2.default, null),
				_react2.default.createElement('div', { className: 'clearfix' }),
				_react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'row row-offcanvas row-offcanvas-left' },
						_react2.default.createElement(
							'div',
							{ className: 'col-md-3' },
							_react2.default.createElement(_SidebarLeft2.default, null)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-md-9' },
							this.props.children
						),
						_react2.default.createElement('div', { className: 'clearfix' })
					)
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'row col-md-12' },
						_react2.default.createElement(_Footer2.default, null)
					)
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":11,"./Navbar":12,"./Navbartop":13,"./SidebarLeft":14,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
          'p',
          { className: 'text-muted' },
          'Place sticky footer content here.'
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../../actions/FooterActions":2,"../../stores/FooterStore":28,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findCharacter({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/admin', className: 'navbar-brand' },
            _react2.default.createElement(
              'span',
              { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' })
            ),
            'BKLibary',
            _react2.default.createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/admin' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/category/listBooks' },
                'Listbook'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../../actions/NavbarActions":3,"../../stores/NavbarStore":29,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbartopStore = require('../../stores/NavbartopStore');

var _NavbartopStore2 = _interopRequireDefault(_NavbartopStore);

var _NavbartopActions = require('../../actions/NavbartopActions');

var _NavbartopActions2 = _interopRequireDefault(_NavbartopActions);

var _AddBookAction = require('../../actions/AddBookAction');

var _AddBookAction2 = _interopRequireDefault(_AddBookAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbartop = function (_React$Component) {
	_inherits(Navbartop, _React$Component);

	function Navbartop(props) {
		_classCallCheck(this, Navbartop);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbartop).call(this, props));

		_this.state = _NavbartopStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Navbartop, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_NavbartopStore2.default.listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_NavbartopStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();

			var searchQuery = this.state.searchQuery.trim();

			if (searchQuery) {
				_NavbartopActions2.default.findCharacter({
					searchQuery: searchQuery,
					searchForm: this.refs.searchForm,
					history: this.props.history
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'navbar navbar-default navbar-fixed-top', role: 'navigation' },
				_react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'navbar-header' },
						_react2.default.createElement(
							'button',
							{ type: 'button', className: 'navbar-toggle', 'data-toggle': 'offcanvas', 'data-target': '#navbar' },
							_react2.default.createElement('span', { 'class': 'icon-bar' }),
							_react2.default.createElement('span', { 'class': 'icon-bar' }),
							_react2.default.createElement('span', { 'class': 'icon-bar' })
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/admin', className: 'navbar-brand' },
							_react2.default.createElement(
								'span',
								{ ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
								_react2.default.createElement('div', { className: 'tri invert' }),
								_react2.default.createElement('div', { className: 'tri invert' }),
								_react2.default.createElement('div', { className: 'tri' }),
								_react2.default.createElement('div', { className: 'tri invert' }),
								_react2.default.createElement('div', { className: 'tri invert' }),
								_react2.default.createElement('div', { className: 'tri' }),
								_react2.default.createElement('div', { className: 'tri invert' }),
								_react2.default.createElement('div', { className: 'tri' }),
								_react2.default.createElement('div', { className: 'tri invert' })
							),
							'BKLibary'
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'navbar', className: 'navbar-collapse collapse' },
						_react2.default.createElement(
							'form',
							{ ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
							_react2.default.createElement(
								'div',
								{ className: 'input-group' },
								_react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search', value: this.state.searchQuery, onChange: _NavbartopActions2.default.updateSearchQuery }),
								_react2.default.createElement(
									'span',
									{ className: 'input-group-btn' },
									_react2.default.createElement(
										'button',
										{ className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
										_react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
									)
								)
							)
						),
						_react2.default.createElement(
							'ul',
							{ className: 'nav navbar-nav' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/admin' },
									'Home'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/category/listBooks', onClick: _AddBookAction2.default.resetState() },
									'Listbook'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/admin/user/view' },
									'User'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Navbartop;
}(_react2.default.Component);

exports.default = Navbartop;

},{"../../actions/AddBookAction":1,"../../actions/NavbartopActions":4,"../../stores/NavbartopStore":30,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import SidebarLeftStore from '../../stores/SidebarLeftStore';
// import SidebarLeftActions from '../../actions/SidebarLeftActions';

var SidebarLeft = function (_React$Component) {
  _inherits(SidebarLeft, _React$Component);

  function SidebarLeft(props) {
    _classCallCheck(this, SidebarLeft);

    //this.state = SidebarLeftStore.getState();

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SidebarLeft).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(SidebarLeft, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //SidebarLeftStore.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //SidebarLeftStore.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
    // handleSubmit(event) {
    //   event.preventDefault();

    //   let searchQuery = this.state.searchQuery.trim();

    //   if (searchQuery) {
    //     SidebarLeftActions.findCharacter({
    //       searchQuery: searchQuery,
    //       searchForm: this.refs.searchForm,
    //       history: this.props.history
    //     });
    //   }
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-12 col-md-12 sidebar-offcanvas', id: 'sidebar', role: 'navigation' },
        _react2.default.createElement(
          'ul',
          { className: 'nav' },
          _react2.default.createElement(
            'li',
            { className: 'active' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/admin' },
              'Home'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/category/listBooks' },
              'Category'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/book-group' },
              'Book Group'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/book' },
              'Book'
            )
          )
        )
      );
    }
  }]);

  return SidebarLeft;
}(_react2.default.Component);

exports.default = SidebarLeft;

},{"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddBookStore = require('../../../stores/AddBookStore');

var _AddBookStore2 = _interopRequireDefault(_AddBookStore);

var _AddBookAction = require('../../../actions/AddBookAction');

var _AddBookAction2 = _interopRequireDefault(_AddBookAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Addbook = function (_React$Component) {
  _inherits(Addbook, _React$Component);

  function Addbook(props) {
    _classCallCheck(this, Addbook);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Addbook).call(this, props));

    _this.state = _AddBookStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Addbook, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddBookStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddBookStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmitBook',
    value: function handleSubmitBook(event) {
      event.preventDefault();
      var id = this.state.id;
      var name = this.state.name.trim();
      var director = this.state.director;

      if (!name) {
        _AddBookAction2.default.invalidName();
        this.refs.nameTextField.focus();
      }

      if (!director) {
        _AddBookAction2.default.invalidDirector();
        this.refs.DirectorTextField.focus();
      }

      if (name && director) {
        _AddBookAction2.default.addBook(id, name, director);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: '' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add BOOK'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmitBook.bind(this) },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.nameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Name'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                      onChange: _AddBookAction2.default.updateName, autoFocus: true }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlockName
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.directorValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Director'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'DirectorTextField', value: this.state.director,
                      onChange: _AddBookAction2.default.updateDirector }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlockDirector
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Addbook;
}(_react2.default.Component);

exports.default = Addbook;

},{"../../../actions/AddBookAction":1,"../../../stores/AddBookStore":27,"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bookStore = require('../../../stores/bookStore');

var _bookStore2 = _interopRequireDefault(_bookStore);

var _bookActions = require('../../../actions/bookActions');

var _bookActions2 = _interopRequireDefault(_bookActions);

var _ActionBar = require('../../../shared/ActionBar');

var _ActionBar2 = _interopRequireDefault(_ActionBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Book = function (_React$Component) {
  _inherits(Book, _React$Component);

  function Book(props) {
    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Book).call(this, props));

    _this.state = _bookStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Book, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _bookStore2.default.listen(this.onChange);
      _bookActions2.default.getBook(this.props.params.id);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _bookStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'panel panel-default' },
            _react2.default.createElement(
              'div',
              { className: 'panel-heading' },
              'View'
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-body' },
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Tên'
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-success' },
                this.state.book.name
              ),
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Tác giả'
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-success' },
                ' ',
                this.state.book.director
              )
            )
          )
        )
      );
    }
  }]);

  return Book;
}(_react2.default.Component);

exports.default = Book;

},{"../../../actions/bookActions":7,"../../../shared/ActionBar":25,"../../../stores/bookStore":33,"react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Addbook = require('./Addbook');

var _Addbook2 = _interopRequireDefault(_Addbook);

var _ListBooks = require('./ListBooks');

var _ListBooks2 = _interopRequireDefault(_ListBooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'MY HOME'
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"./Addbook":15,"./ListBooks":18,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddBookAction = require('../../../actions/AddBookAction');

var _AddBookAction2 = _interopRequireDefault(_AddBookAction);

var _listBooksStore = require('../../../stores/listBooksStore');

var _listBooksStore2 = _interopRequireDefault(_listBooksStore);

var _listBooksActions = require('../../../actions/listBooksActions');

var _listBooksActions2 = _interopRequireDefault(_listBooksActions);

var _ActionBar = require('../../../shared/ActionBar');

var _ActionBar2 = _interopRequireDefault(_ActionBar);

var _Addbook = require('./Addbook');

var _Addbook2 = _interopRequireDefault(_Addbook);

var _bookActions = require('../../../actions/bookActions');

var _bookActions2 = _interopRequireDefault(_bookActions);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListBooks = function (_React$Component) {
  _inherits(ListBooks, _React$Component);

  function ListBooks(props) {
    _classCallCheck(this, ListBooks);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListBooks).call(this, props));

    _this.state = _listBooksStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(ListBooks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _listBooksStore2.default.listen(this.onChange);
      _listBooksActions2.default.get();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _listBooksStore2.default.unlisten(this.onChange);
    }
    // handleClick() {
    //   console.log("clicked");
    // }

  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var bookList = this.state.books.map(function (book, index) {
        return _react2.default.createElement(
          'tr',
          { key: index },
          _react2.default.createElement(
            'td',
            null,
            ' ',
            index + 1,
            ' '
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/category/book/' + book._id },
              book.name
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            book.director
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_ActionBar2.default, { editAction: _AddBookAction2.default, deleteAction: _listBooksActions2.default, item: book })
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(_Addbook2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(
            'div',
            { className: '' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'List books'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'table',
                  { className: 'table' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        '#'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Name'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Director'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    bookList
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement('div', { className: 'clearfix' })
      );
    }
  }]);

  return ListBooks;
}(_react2.default.Component);

exports.default = ListBooks;

},{"../../../actions/AddBookAction":1,"../../../actions/bookActions":7,"../../../actions/listBooksActions":8,"../../../shared/ActionBar":25,"../../../stores/listBooksStore":34,"./Addbook":15,"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _AddUserStore = require('../../../stores/admin/usermanage/AddUserStore');

var _AddUserStore2 = _interopRequireDefault(_AddUserStore);

var _AddUserActions = require('../../../actions/admin/usermanage/AddUserActions');

var _AddUserActions2 = _interopRequireDefault(_AddUserActions);

var _ImgUpload = require('../../../shared/ImgUpload');

var _ImgUpload2 = _interopRequireDefault(_ImgUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddUser = function (_React$Component) {
  _inherits(AddUser, _React$Component);

  function AddUser(props) {
    _classCallCheck(this, AddUser);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddUser).call(this, props));

    _this.state = _AddUserStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddUser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddUserStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddUserStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'reset',
    value: function reset() {
      _AddUserActions2.default.resetAll();
      //console.log(this.state.userNameValidationState);
    }
  }, {
    key: 'handleSubmitUser',
    value: function handleSubmitUser(event) {
      event.preventDefault();
      var imgfile = this.state.fileAvatar;
      var imgURL = this.state.imagePreviewUrl;
      _AddUserActions2.default.uploadImage(imgfile);
      //console.log(imgURL);

      var id = this.state.id;
      var username = this.state.userName.trim();
      var password = this.state.passWord;
      var repassword = this.state.repassWord;
      var firstname = this.state.firstName;
      var lastname = this.state.lastName;
      var barcode = '';
      var type = this.state.Type;
      if (!type) {
        _AddUserActions2.default.invalidType();
        //this.refs.typeTextField.focus();
      }
      if (!lastname) {
        _AddUserActions2.default.invalidlastName();
        this.refs.lastNameTextField.focus();
      }
      if (!firstname) {
        _AddUserActions2.default.invalidfirstName();
        this.refs.firstNameTextField.focus();
      }
      if (!repassword) {
        _AddUserActions2.default.invalidrepassword();
        this.refs.repasswordTextField.focus();
      }
      if (!password) {
        _AddUserActions2.default.invalidpassword();
        this.refs.passwordTextField.focus();
      }
      if (!username) {
        _AddUserActions2.default.invaliduserName();
        this.refs.userNameTextField.focus();
      }
      if (repassword != password) {
        _AddUserActions2.default.passwordNotSame();
        this.refs.repasswordTextField.focus();
      }
      if (username && repassword && password && firstname && lastname && type) {
        _AddUserActions2.default.addUser({
          id: id,
          userName: username,
          pass: password,
          firstName: firstname,
          lastName: lastname,
          barcode: barcode,
          type: Number(type)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-danger' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Thêm người dùng'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmitUser.bind(this), enctype: 'multipart/form-data' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.userNameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Tên đăng nhập'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'userNameTextField', value: this.state.userName,
                      onChange: _AddUserActions2.default.updateuserName, autoFocus: true }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlockuserName
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.passWordValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Mật khẩu'
                    ),
                    _react2.default.createElement('input', { type: 'password', className: 'form-control', ref: 'passwordTextField', value: this.state.passWord,
                      onChange: _AddUserActions2.default.updatepassword }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlockpassword
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.repassWordValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Nhập lại mật khẩu'
                    ),
                    _react2.default.createElement('input', { type: 'password', className: 'form-control', ref: 'repasswordTextField', value: this.state.repassWord,
                      onChange: _AddUserActions2.default.updaterepassword }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlockrepassword
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.fistNameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Họ'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'firstNameTextField', value: this.state.firstName,
                      onChange: _AddUserActions2.default.updatefirstName }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlockfirstName
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.lastNameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Tên'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'lastNameTextField', value: this.state.lastName,
                      onChange: _AddUserActions2.default.updatelastName }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlocklastName
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.typeValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Kiểu người dùng'
                    ),
                    _react2.default.createElement(
                      'select',
                      { className: 'form-control', value: this.state.Type, onChange: _AddUserActions2.default.updateType },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        'Admin1'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '2' },
                        'Admin2'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '3' },
                        'User'
                      )
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlocktype
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group has-success' },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Chọn ảnh đại diện'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'avatar-photo' },
                      _react2.default.createElement(_ImgUpload2.default, { actions: _AddUserActions2.default }),
                      _react2.default.createElement(
                        'div',
                        { className: 'avatar-edit' },
                        _react2.default.createElement('i', { className: 'fa fa-camera' })
                      ),
                      _react2.default.createElement('img', { src: this.state.imagePreviewUrl, height: '200px', width: '200px' })
                    )
                  ),
                  _react2.default.createElement('input', { type: 'button', className: 'btn btn-warning', onClick: this.reset.bind(this), value: 'Reset' }),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddUser;
}(_react2.default.Component);

exports.default = AddUser;

},{"../../../actions/admin/usermanage/AddUserActions":5,"../../../shared/ImgUpload":26,"../../../stores/admin/usermanage/AddUserStore":31,"react":"react","react-dropzone":54}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AddUserActions = require('../../../actions/admin/usermanage/AddUserActions');

var _AddUserActions2 = _interopRequireDefault(_AddUserActions);

var _listUsersStore = require('../../../stores/admin/usermanage/listUsersStore');

var _listUsersStore2 = _interopRequireDefault(_listUsersStore);

var _listUsersActions = require('../../../actions/admin/usermanage/listUsersActions');

var _listUsersActions2 = _interopRequireDefault(_listUsersActions);

var _ActionBar = require('../../../shared/ActionBar');

var _ActionBar2 = _interopRequireDefault(_ActionBar);

var _AddUser = require('./AddUser');

var _AddUser2 = _interopRequireDefault(_AddUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListBooks = function (_React$Component) {
  _inherits(ListBooks, _React$Component);

  function ListBooks(props) {
    _classCallCheck(this, ListBooks);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListBooks).call(this, props));

    _this.state = _listUsersStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(ListBooks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _listUsersStore2.default.listen(this.onChange);
      _listUsersActions2.default.get();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _listUsersStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'getComponent',
    value: function getComponent(event) {
      console.log('a');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      function Type_User(type) {
        if (type == 1) return "Admin1";else if (type == 2) return "Admin2";else return "User3";
      }
      var userList = this.state.users.map(function (user, index) {
        return _react2.default.createElement(
          'tr',
          { key: index, onClick: _this2.getComponent.bind(_this2) },
          _react2.default.createElement(
            'td',
            null,
            index + 1
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/admin/user/' + user._id },
              user.username
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            user.password
          ),
          _react2.default.createElement(
            'td',
            null,
            user.name.first
          ),
          _react2.default.createElement(
            'td',
            null,
            user.name.last
          ),
          _react2.default.createElement(
            'td',
            null,
            user.barcode
          ),
          _react2.default.createElement(
            'td',
            null,
            Type_User(user.type)
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_ActionBar2.default, { viewAction: _AddUserActions2.default, editAction: _AddUserActions2.default, deleteAction: _listUsersActions2.default, item: user })
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'List books'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'table',
                  { className: 'table' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        '#'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'UserName'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Password'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Firstname'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'LastName'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Barcode'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Type'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    userList
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ListBooks;
}(_react2.default.Component);

exports.default = ListBooks;

},{"../../../actions/admin/usermanage/AddUserActions":5,"../../../actions/admin/usermanage/listUsersActions":6,"../../../shared/ActionBar":25,"../../../stores/admin/usermanage/listUsersStore":32,"./AddUser":19,"react":"react","react-router":"react-router"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddUser = require('./AddUser');

var _AddUser2 = _interopRequireDefault(_AddUser);

var _ListUsers = require('./ListUsers');

var _ListUsers2 = _interopRequireDefault(_ListUsers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var user = function (_React$Component) {
  _inherits(user, _React$Component);

  function user() {
    _classCallCheck(this, user);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(user).apply(this, arguments));
  }

  _createClass(user, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AddUser2.default, null),
        _react2.default.createElement(_ListUsers2.default, null)
      );
    }
  }]);

  return user;
}(_react2.default.Component);

exports.default = user;

},{"./AddUser":19,"./ListUsers":20,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddUserStore = require('../../../stores/admin/usermanage/AddUserStore');

var _AddUserStore2 = _interopRequireDefault(_AddUserStore);

var _AddUserActions = require('../../../actions/admin/usermanage/AddUserActions');

var _AddUserActions2 = _interopRequireDefault(_AddUserActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var viewuser = function (_React$Component) {
  _inherits(viewuser, _React$Component);

  function viewuser(props) {
    _classCallCheck(this, viewuser);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(viewuser).call(this, props));

    _this.state = _AddUserStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(viewuser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddUserStore2.default.listen(this.onChange);
      _AddUserActions2.default.getById(this.props.params.id);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddUserStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'panel panel-default' },
            _react2.default.createElement(
              'div',
              { className: 'panel-heading' },
              'View'
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-body' },
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Tên đăng nhập'
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-success' },
                this.state.userName
              ),
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Tên người dùng'
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-success' },
                this.state.firstName + " " + this.state.lastName
              ),
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Barcode'
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-success' },
                this.state.barcode
              ),
              _react2.default.createElement(
                'label',
                { className: 'control-label' },
                'Kiểu người dùng'
              ),
              _react2.default.createElement(
                'p',
                { className: 'text-success' },
                this.state.Type
              )
            )
          )
        )
      );
    }
  }]);

  return viewuser;
}(_react2.default.Component);

exports.default = viewuser;

},{"../../../actions/admin/usermanage/AddUserActions":5,"../../../stores/admin/usermanage/AddUserStore":31,"react":"react"}],23:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":24,"history/lib/createBrowserHistory":41,"react":"react","react-dom":"react-dom","react-router":"react-router"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/admin/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/admin/category/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Addbook = require('./components/admin/category/Addbook');

var _Addbook2 = _interopRequireDefault(_Addbook);

var _ListBooks = require('./components/admin/category/ListBooks');

var _ListBooks2 = _interopRequireDefault(_ListBooks);

var _Book = require('./components/admin/category/Book');

var _Book2 = _interopRequireDefault(_Book);

var _user = require('./components/admin/usermanage/user');

var _user2 = _interopRequireDefault(_user);

var _viewuser = require('./components/admin/usermanage/viewuser');

var _viewuser2 = _interopRequireDefault(_viewuser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/admin', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/category/book/:id', component: _Book2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/category/Addbook', component: _Addbook2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/category/listBooks', component: _ListBooks2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/admin/user/view', component: _user2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/admin/user/:id', component: _viewuser2.default })
);

},{"./components/admin/App":10,"./components/admin/category/Addbook":15,"./components/admin/category/Book":16,"./components/admin/category/Home":17,"./components/admin/category/ListBooks":18,"./components/admin/usermanage/user":21,"./components/admin/usermanage/viewuser":22,"react":"react","react-router":"react-router"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionBar = function (_React$Component) {
  _inherits(ActionBar, _React$Component);

  function ActionBar() {
    _classCallCheck(this, ActionBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ActionBar).apply(this, arguments));
  }

  _createClass(ActionBar, [{
    key: 'delete',
    value: function _delete() {
      this.props.deleteAction.delete(this.props.item);
      this.props.deleteAction.get();
    }
  }, {
    key: 'edit',
    value: function edit() {
      this.props.editAction.getById(this.props.item._id);
    }
  }, {
    key: 'showProfile',
    value: function showProfile() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'action' },
        _react2.default.createElement(
          'span',
          { className: 'action-buttons' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-warning',
              onClick: this.edit.bind(this) },
            'Edit'
          ),
          _react2.default.createElement(
            'a',
            {
              onClick: this.delete.bind(this) },
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-trash' })
          )
        )
      );
    }
  }]);

  return ActionBar;
}(_react2.default.Component);

exports.default = ActionBar;

},{"react":"react","react-router":"react-router"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImgUpload = function (_React$Component) {
  _inherits(ImgUpload, _React$Component);

  function ImgUpload() {
    _classCallCheck(this, ImgUpload);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImgUpload).apply(this, arguments));
  }

  _createClass(ImgUpload, [{
    key: 'handleFile',
    value: function handleFile(e) {
      var reader = new FileReader();
      var file = e.target.files[0];
      console.log(file);
      if (!file) return;

      reader.onload = function (img) {
        _reactDom2.default.findDOMNode(this.refs.in).value = '';
        this.props.actions.updateAvatarpreview(img.target.result);

        this.props.actions.updateAvatarfile(file);
      }.bind(this);
      reader.readAsDataURL(file);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { ref: 'in', type: 'file', accept: 'image/*', onChange: this.handleFile.bind(this) })
      );
    }
  }]);

  return ImgUpload;
}(_react2.default.Component);

exports.default = ImgUpload;

},{"react":"react","react-dom":"react-dom"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddBookAction = require('../actions/AddBookAction');

var _AddBookAction2 = _interopRequireDefault(_AddBookAction);

var _listBooksActions = require('../actions/listBooksActions');

var _listBooksActions2 = _interopRequireDefault(_listBooksActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBookStore = function () {
  function AddBookStore() {
    _classCallCheck(this, AddBookStore);

    this.bindActions(_AddBookAction2.default);
    this.id = '';
    this.name = '';
    this.director = '';
    this.helpBlockName = '';
    this.helpBlockDirector = '';
    this.nameValidationState = '';
    this.directorValidationState = '';
  }

  _createClass(AddBookStore, [{
    key: 'onEesetState',
    value: function onEesetState() {
      this.id = '';
      this.name = '';
      this.director = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.nameValidationState = '';
      this.directorValidationState = '';
    }
  }, {
    key: 'onGetBookSuccess',
    value: function onGetBookSuccess(data) {
      this.id = data._id;
      this.name = data.name;
      this.director = data.director;
      this.helpBlockName = '';
      this.helpBlockDirector = '';
      this.nameValidationState = '';
      this.directorValidationState = '';
    }
  }, {
    key: 'onGetBookFail',
    value: function onGetBookFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onAddBookSuccess',
    value: function onAddBookSuccess(SuccessMessage) {
      this.nameValidationState = 'has-success';
      this.directorValidationState = 'has-success';
      this.helpBlockDirector = SuccessMessage;
      this.id = '';
      this.name = '';
      this.director = '';
      _listBooksActions2.default.get();
    }
  }, {
    key: 'onAddBookFail',
    value: function onAddBookFail(errorMessage) {
      this.nameValidationState = 'has-error';
      this.directorValidationState = 'has-error';
      this.id = '';
      this.name = '';
      this.director = '';
      this.helpBlockName = errorMessage;
      this.helpBlockDirector = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
      this.nameValidationState = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
    }
  }, {
    key: 'onUpdateDirector',
    value: function onUpdateDirector(event) {
      this.director = event.target.value;
      this.directorValidationState = '';
      this.helpBlockName = '';
      this.helpBlockDirector = '';
    }
  }, {
    key: 'onInvalidName',
    value: function onInvalidName() {
      this.nameValidationState = 'has-error';
      this.helpBlockName = 'Please enter BookName';
    }
  }, {
    key: 'onInvalidDirector',
    value: function onInvalidDirector() {
      this.directorValidationState = 'has-error';
      this.helpBlockDirector = 'Please enter Director';
    }
  }]);

  return AddBookStore;
}();

exports.default = _alt2.default.createStore(AddBookStore);

},{"../actions/AddBookAction":1,"../actions/listBooksActions":8,"../alt":9}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function () {
  function FooterStore() {
    _classCallCheck(this, FooterStore);

    //bindActions is a magic Alt method which binds actions to their handlers defined in the store.
    /*
    bindActions is a magic Alt method which binds actions to their handlers defined in the store. 
    For example, an action with the name foo will match an action handler method defined in the store named onFoo or just foo but not both.
     That is why for actions getTopCharactersSuccess and getTopCharactersFail defined in FooterActions.js we have corresponding store handlers called onGetTopCharactersSuccess and onGetTopCharactersFail in FooterStore.js.
     */
    this.bindActions(_FooterActions2.default);
    this.characters = ["abcd", "efgh"];
  }

  _createClass(FooterStore, [{
    key: 'onGetTopCharactersSuccess',
    value: function onGetTopCharactersSuccess(data) {
      this.characters = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopCharactersFail',
    value: function onGetTopCharactersFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FooterStore;
}();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":2,"../alt":9}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindCharacterSuccess',
    value: function onFindCharacterSuccess(payload) {
      payload.history.pushState(null, '/characters/' + payload.characterId);
    }
  }, {
    key: 'onFindCharacterFail',
    value: function onFindCharacterFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetCharacterCountSuccess',
    value: function onGetCharacterCountSuccess(data) {
      this.totalCharacters = data.count;
    }
  }, {
    key: 'onGetCharacterCountFail',
    value: function onGetCharacterCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":3,"../alt":9}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbartopActions = require('../actions/NavbartopActions');

var _NavbartopActions2 = _interopRequireDefault(_NavbartopActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbartopStore = function () {
  function NavbartopStore() {
    _classCallCheck(this, NavbartopStore);

    this.bindActions(_NavbartopActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbartopStore, [{
    key: 'onFindCharacterSuccess',
    value: function onFindCharacterSuccess(payload) {
      payload.history.pushState(null, '/characters/' + payload.characterId);
    }
  }, {
    key: 'onFindCharacterFail',
    value: function onFindCharacterFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetCharacterCountSuccess',
    value: function onGetCharacterCountSuccess(data) {
      this.totalCharacters = data.count;
    }
  }, {
    key: 'onGetCharacterCountFail',
    value: function onGetCharacterCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbartopStore;
}();

exports.default = _alt2.default.createStore(NavbartopStore);

},{"../actions/NavbartopActions":4,"../alt":9}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../../../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddUserActions = require('../../../actions/admin/usermanage/AddUserActions');

var _AddUserActions2 = _interopRequireDefault(_AddUserActions);

var _listUsersActions = require('../../../actions/admin/usermanage/listUsersActions');

var _listUsersActions2 = _interopRequireDefault(_listUsersActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddUserStore = function () {
      function AddUserStore() {
            _classCallCheck(this, AddUserStore);

            this.bindActions(_AddUserActions2.default);
            this.id = '';
            this.userName = '';
            this.passWord = '';
            this.repassWord = '';
            this.firstName = '';
            this.lastName = '';
            this.Type = '';
            this.fileAvatar = {};
            this.imagePreviewUrl = 'http://i57.servimg.com/u/f57/16/18/15/10/1866.jpg';
            this.imageUrl = '';
            this.userNameValidationState = '';
            this.passWordValidationState = '';
            this.repassWordValidationState = '';
            this.fistNameValidationState = '';
            this.lastNameValidationState = '';
            this.typeValidationState = '';

            this.helpBlockuserName = '';
            this.helpBlockpassword = '';
            this.helpBlockrepassword = '';
            this.helpBlockfirstName = '';
            this.helpBlocklastName = '';
            this.helpBlocktype = '';
      }

      _createClass(AddUserStore, [{
            key: 'onGetUserSuccess',
            value: function onGetUserSuccess(data) {
                  this.id = data._id;
                  this.userName = data.username;
                  this.passWord = '';
                  this.repassWord = '';
                  this.firstName = data.name.first;
                  this.lastName = data.name.last;
                  this.Type = data.type;

                  this.userNameValidationState = '';
                  this.passWordValidationState = '';
                  this.repassWordValidationState = '';
                  this.fistNameValidationState = '';
                  this.lastNameValidationState = '';
                  this.typeValidationState = '';

                  this.helpBlockuserName = '';
                  this.helpBlockpassword = '';
                  this.helpBlockrepassword = '';
                  this.helpBlockfirstName = '';
                  this.helpBlocklastName = '';
                  this.helpBlocktype = '';
            }
      }, {
            key: 'onGetUserFail',
            value: function onGetUserFail(jqXhr) {
                  toastr.error(jqXhr.responseJSON.message);
            }
      }, {
            key: 'onAddUserSuccess',
            value: function onAddUserSuccess(SuccessMessage) {
                  this.id = '';
                  this.userName = '';
                  this.passWord = '';
                  this.repassWord = '';
                  this.firstName = '';
                  this.lastName = '';
                  this.Type = '';
                  this.fileAvatar = {};
                  this.imagePreviewUrl = 'http://i57.servimg.com/u/f57/16/18/15/10/1866.jpg';
                  this.imageUrl = '';
                  this.userNameValidationState = 'has-success';
                  this.passWordValidationState = 'has-success';
                  this.repassWordValidationState = 'has-success';
                  this.fistNameValidationState = 'has-success';
                  this.lastNameValidationState = 'has-success';
                  this.typeValidationState = 'has-success';

                  this.helpBlockuserName = '';
                  this.helpBlockpassword = '';
                  this.helpBlockrepassword = '';
                  this.helpBlockfirstName = '';
                  this.helpBlocklastName = '';
                  this.helpBlocktype = SuccessMessage;
                  _listUsersActions2.default.get();
            }
      }, {
            key: 'onAddUserFail',
            value: function onAddUserFail(errorMessage) {

                  this.userNameValidationState = 'has-error';
                  this.passWordValidationState = 'has-error';
                  this.repassWordValidationState = 'has-error';
                  this.fistNameValidationState = 'has-error';
                  this.lastNameValidationState = 'has-error';
                  this.typeValidationState = 'has-error';

                  this.id = '';
                  this.userName = '';
                  this.passWord = '';
                  this.repassWord = '';
                  this.firstName = '';
                  this.lastName = '';
                  this.Type = 3;
                  this.fileAvatar = {};
                  this.imagePreviewUrl = 'http://i57.servimg.com/u/f57/16/18/15/10/1866.jpg';
                  this.imageUrl = '';

                  this.helpBlockuserName = errorMessage;
                  this.helpBlockpassword = errorMessage;
                  this.helpBlockrepassword = errorMessage;
                  this.helpBlockfirstName = errorMessage;
                  this.helpBlocklastName = errorMessage;
                  this.helpBlocktype = errorMessage;
            }
      }, {
            key: 'onUpdateuserName',
            value: function onUpdateuserName(event) {
                  this.userName = event.target.value;
                  this.userNameValidationState = '';
                  this.helpBlockuserName = '';
            }
      }, {
            key: 'onUpdatepassword',
            value: function onUpdatepassword(event) {
                  this.passWord = event.target.value;
                  this.directorValidationState = '';
                  this.helpBlockpassword = '';
            }
      }, {
            key: 'onUpdaterepassword',
            value: function onUpdaterepassword(event) {
                  this.repassWord = event.target.value;
                  this.repassWordValidationState = '';
                  this.helpBlockrepassword = '';
            }
      }, {
            key: 'onUpdatefirstName',
            value: function onUpdatefirstName(event) {
                  this.firstName = event.target.value;
                  this.fistNameValidationState = '';
                  this.helpBlockfirstName = '';
            }
      }, {
            key: 'onUpdatelastName',
            value: function onUpdatelastName(event) {
                  this.lastName = event.target.value;
                  this.lastNameValidationState = '';
                  this.helpBlocklastName = '';
            }
      }, {
            key: 'onUpdateType',
            value: function onUpdateType(event) {
                  this.Type = event.target.value;
                  this.typeValidationState = '';
                  this.helpBlocktype = '';
            }
      }, {
            key: 'onUpdateAvatarpreview',
            value: function onUpdateAvatarpreview(imgURL) {
                  this.imagePreviewUrl = imgURL;
            }
      }, {
            key: 'onUpdateAvatarfile',
            value: function onUpdateAvatarfile(file) {
                  this.fileAvatar = file;
            }
      }, {
            key: 'onInvaliduserName',
            value: function onInvaliduserName() {
                  this.userNameValidationState = 'has-error';
                  this.helpBlockuserName = 'Please enter UserName';
            }
      }, {
            key: 'onInvalidpassword',
            value: function onInvalidpassword() {
                  this.passWordValidationState = 'has-error';
                  this.helpBlockpassword = 'Please enter Password';
            }
      }, {
            key: 'onInvalidrepassword',
            value: function onInvalidrepassword() {
                  this.repassWordValidationState = 'has-error';
                  this.helpBlockrepassword = 'Please enter Password';
            }
      }, {
            key: 'onInvalidfirstName',
            value: function onInvalidfirstName() {
                  this.fistNameValidationState = 'has-error';
                  this.helpBlockfirstName = 'Please enter your firstName';
            }
      }, {
            key: 'onInvalidlastName',
            value: function onInvalidlastName() {
                  this.lastNameValidationState = 'has-error';
                  this.helpBlocklastName = "Please enter your lastName";
            }
      }, {
            key: 'onInvalidType',
            value: function onInvalidType() {
                  this.typeValidationState = 'has-error';
                  this.helpBlocktype = 'Please choose type';
            }
      }, {
            key: 'onPasswordNotSame',
            value: function onPasswordNotSame() {
                  this.passWord = '';
                  this.repassWord = '';
                  this.repassWordValidationState = 'has-error';
                  this.helpBlockrepassword = 'Password not same! Enter again';
            }
      }, {
            key: 'onResetAll',
            value: function onResetAll() {

                  this.userName = '';
                  this.passWord = '';
                  this.repassWord = '';
                  this.firstName = '';
                  this.lastName = '';
                  this.Type = '';
                  this.fileAvatar = {};
                  this.imagePreviewUrl = 'http://i57.servimg.com/u/f57/16/18/15/10/1866.jpg';
                  this.imageUrl = '';
                  this.userNameValidationState = '';
                  this.passWordValidationState = '';
                  this.repassWordValidationState = '';
                  this.fistNameValidationState = '';
                  this.lastNameValidationState = '';
                  this.typeValidationState = '';

                  this.helpBlockuserName = '';
                  this.helpBlockpassword = '';
                  this.helpBlockrepassword = '';
                  this.helpBlockfirstName = '';
                  this.helpBlocklastName = '';
                  this.helpBlocktype = '';
            }
      }, {
            key: 'onUploadSuccess',
            value: function onUploadSuccess(data) {
                  console.log('ok');
            }
      }, {
            key: 'onUploadFail',
            value: function onUploadFail(jqXhr) {
                  toastr.error(jqXhr.responseJSON.message);
            }
      }]);

      return AddUserStore;
}();

exports.default = _alt2.default.createStore(AddUserStore);

},{"../../../actions/admin/usermanage/AddUserActions":5,"../../../actions/admin/usermanage/listUsersActions":6,"../../../alt":9}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../../../alt');

var _alt2 = _interopRequireDefault(_alt);

var _listUsersActions = require('../../../actions/admin/usermanage/listUsersActions');

var _listUsersActions2 = _interopRequireDefault(_listUsersActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listUsersStore = function () {
  function listUsersStore() {
    _classCallCheck(this, listUsersStore);

    this.bindActions(_listUsersActions2.default);
    this.users = [];
    this.deletemessage = '';
  }

  _createClass(listUsersStore, [{
    key: 'onGetUsersuccess',
    value: function onGetUsersuccess(data) {
      this.users = data;
    }
  }, {
    key: 'onGetUserfail',
    value: function onGetUserfail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onDeletesuccess',
    value: function onDeletesuccess(message) {
      this.deletemessage = message;
    }
  }, {
    key: 'onDeletefail',
    value: function onDeletefail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return listUsersStore;
}();

exports.default = _alt2.default.createStore(listUsersStore);

},{"../../../actions/admin/usermanage/listUsersActions":6,"../../../alt":9}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _bookActions = require('../actions/bookActions');

var _bookActions2 = _interopRequireDefault(_bookActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bookStore = function () {
  function bookStore() {
    _classCallCheck(this, bookStore);

    this.bindActions(_bookActions2.default);
    this.book = {};
    this.helpMessage = '';
  }

  _createClass(bookStore, [{
    key: 'onGetBookSuccess',
    value: function onGetBookSuccess(data) {
      this.book = data;
      this.helpMessage = '';
    }
  }, {
    key: 'onGetBookFail',
    value: function onGetBookFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return bookStore;
}();

exports.default = _alt2.default.createStore(bookStore);

},{"../actions/bookActions":7,"../alt":9}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _listBooksActions = require('../actions/listBooksActions');

var _listBooksActions2 = _interopRequireDefault(_listBooksActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listBooksStore = function () {
  function listBooksStore() {
    _classCallCheck(this, listBooksStore);

    this.bindActions(_listBooksActions2.default);
    this.books = [];
    this.deletemessage = '';
  }

  _createClass(listBooksStore, [{
    key: 'onGetBooksuccess',
    value: function onGetBooksuccess(data) {
      this.books = data;
    }
  }, {
    key: 'onGetBookfail',
    value: function onGetBookfail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onDeletesuccess',
    value: function onDeletesuccess(message) {
      this.deletemessage = message;
    }
  }, {
    key: 'onDeletefail',
    value: function onDeletefail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return listBooksStore;
}();

exports.default = _alt2.default.createStore(listBooksStore);

},{"../actions/listBooksActions":8,"../alt":9}],35:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],36:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],37:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],38:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":35,"warning":53}],39:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],40:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],41:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":36,"./DOMStateStorage":38,"./DOMUtils":39,"./ExecutionEnvironment":40,"./createDOMHistory":42,"./parsePath":47,"_process":35,"invariant":52}],42:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":39,"./ExecutionEnvironment":40,"./createHistory":43,"_process":35,"invariant":52}],43:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":36,"./AsyncUtils":37,"./createLocation":44,"./deprecate":45,"./parsePath":47,"./runTransitionHook":48,"deep-equal":49}],44:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":36,"./parsePath":47}],45:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],46:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],47:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":46,"_process":35,"warning":53}],48:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":35,"warning":53}],49:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":50,"./lib/keys.js":51}],50:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],51:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],52:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":35}],53:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":35}],54:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _attrAccept = require('attr-accept');

var _attrAccept2 = _interopRequireDefault(_attrAccept);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

var Dropzone = (function (_React$Component) {
  _inherits(Dropzone, _React$Component);

  function Dropzone(props, context) {
    _classCallCheck(this, Dropzone);

    _React$Component.call(this, props, context);
    this.onClick = this.onClick.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);

    this.state = {
      isDragActive: false
    };
  }

  Dropzone.prototype.componentDidMount = function componentDidMount() {
    this.enterCounter = 0;
  };

  Dropzone.prototype.onDragEnter = function onDragEnter(e) {
    e.preventDefault();

    // Count the dropzone and any children that are entered.
    ++this.enterCounter;

    // This is tricky. During the drag even the dataTransfer.files is null
    // But Chrome implements some drag store, which is accesible via dataTransfer.items
    var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

    // Now we need to convert the DataTransferList to Array
    var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

    this.setState({
      isDragActive: allFilesAccepted,
      isDragReject: !allFilesAccepted
    });

    if (this.props.onDragEnter) {
      this.props.onDragEnter.call(this, e);
    }
  };

  Dropzone.prototype.onDragOver = function onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  Dropzone.prototype.onDragLeave = function onDragLeave(e) {
    e.preventDefault();

    // Only deactivate once the dropzone and all children was left.
    if (--this.enterCounter > 0) {
      return;
    }

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    if (this.props.onDragLeave) {
      this.props.onDragLeave.call(this, e);
    }
  };

  Dropzone.prototype.onDrop = function onDrop(e) {
    e.preventDefault();

    // Reset the counter along with the drag on a drop.
    this.enterCounter = 0;

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
    var max = this.props.multiple ? droppedFiles.length : 1;
    var files = [];

    for (var i = 0; i < max; i++) {
      var file = droppedFiles[i];
      // We might want to disable the preview creation to support big files
      if (!this.props.disablePreview) {
        file.preview = window.URL.createObjectURL(file);
      }
      files.push(file);
    }

    if (this.props.onDrop) {
      this.props.onDrop.call(this, files, e);
    }

    if (this.allFilesAccepted(files)) {
      if (this.props.onDropAccepted) {
        this.props.onDropAccepted.call(this, files, e);
      }
    } else {
      if (this.props.onDropRejected) {
        this.props.onDropRejected.call(this, files, e);
      }
    }
  };

  Dropzone.prototype.onClick = function onClick() {
    if (!this.props.disableClick) {
      this.open();
    }
  };

  Dropzone.prototype.allFilesAccepted = function allFilesAccepted(files) {
    var _this = this;

    return files.every(function (file) {
      return _attrAccept2['default'](file, _this.props.accept);
    });
  };

  Dropzone.prototype.open = function open() {
    this.fileInputEl.value = null;
    this.fileInputEl.click();
  };

  Dropzone.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var accept = _props.accept;
    var activeClassName = _props.activeClassName;
    var inputProps = _props.inputProps;
    var multiple = _props.multiple;
    var name = _props.name;
    var rejectClassName = _props.rejectClassName;

    var rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);

    var activeStyle = // eslint-disable-line prefer-const
    rest.activeStyle;
    var className = rest.className;
    var rejectStyle = rest.rejectStyle;
    var style = rest.style;

    var props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);

    var _state = this.state;
    var isDragActive = _state.isDragActive;
    var isDragReject = _state.isDragReject;

    className = className || '';

    if (isDragActive && activeClassName) {
      className += ' ' + activeClassName;
    }
    if (isDragReject && rejectClassName) {
      className += ' ' + rejectClassName;
    }

    if (!className && !style && !activeStyle && !rejectStyle) {
      style = {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: '#666',
        borderStyle: 'dashed',
        borderRadius: 5
      };
      activeStyle = {
        borderStyle: 'solid',
        backgroundColor: '#eee'
      };
      rejectStyle = {
        borderStyle: 'solid',
        backgroundColor: '#ffdddd'
      };
    }

    var appliedStyle = undefined;
    if (activeStyle && isDragActive) {
      appliedStyle = _extends({}, style, activeStyle);
    } else if (rejectStyle && isDragReject) {
      appliedStyle = _extends({}, style, rejectStyle);
    } else {
      appliedStyle = _extends({}, style);
    }

    var inputAttributes = {
      accept: accept,
      type: 'file',
      style: { display: 'none' },
      multiple: supportMultiple && multiple,
      ref: function ref(el) {
        return _this2.fileInputEl = el;
      },
      onChange: this.onDrop
    };

    if (name && name.length) {
      inputAttributes.name = name;
    }

    return _react2['default'].createElement(
      'div',
      _extends({
        className: className,
        style: appliedStyle
      }, props, /* expand user provided props first so event handlers are never overridden */{
        onClick: this.onClick,
        onDragEnter: this.onDragEnter,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop
      }),
      this.props.children,
      _react2['default'].createElement('input', _extends({}, inputProps, /* expand user provided inputProps first so inputAttributes override them */inputAttributes))
    );
  };

  return Dropzone;
})(_react2['default'].Component);

Dropzone.defaultProps = {
  disablePreview: false,
  disableClick: false,
  multiple: true
};

Dropzone.propTypes = {
  onDrop: _react2['default'].PropTypes.func,
  onDropAccepted: _react2['default'].PropTypes.func,
  onDropRejected: _react2['default'].PropTypes.func,
  onDragEnter: _react2['default'].PropTypes.func,
  onDragLeave: _react2['default'].PropTypes.func,

  children: _react2['default'].PropTypes.node,
  style: _react2['default'].PropTypes.object,
  activeStyle: _react2['default'].PropTypes.object,
  rejectStyle: _react2['default'].PropTypes.object,
  className: _react2['default'].PropTypes.string,
  activeClassName: _react2['default'].PropTypes.string,
  rejectClassName: _react2['default'].PropTypes.string,

  disablePreview: _react2['default'].PropTypes.bool,
  disableClick: _react2['default'].PropTypes.bool,

  inputProps: _react2['default'].PropTypes.object,
  multiple: _react2['default'].PropTypes.bool,
  accept: _react2['default'].PropTypes.string,
  name: _react2['default'].PropTypes.string
};

exports['default'] = Dropzone;
module.exports = exports['default'];
},{"attr-accept":55,"react":"react"}],55:[function(require,module,exports){
module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);
},{}]},{},[23])


//# sourceMappingURL=bundle.js.map
