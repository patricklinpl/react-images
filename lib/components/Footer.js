'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphroditeNoImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../utils');

function Footer(_ref, _ref2) {
	var caption = _ref.caption;
	var countCurrent = _ref.countCurrent;
	var countSeparator = _ref.countSeparator;
	var countTotal = _ref.countTotal;
	var showCount = _ref.showCount;

	var props = _objectWithoutProperties(_ref, ['caption', 'countCurrent', 'countSeparator', 'countTotal', 'showCount']);

	var theme = _ref2.theme;

	if (!caption && !showCount) return null;

	var classes = _aphroditeNoImportant.StyleSheet.create((0, _utils.deepMerge)(defaultStyles, theme));

	return _react2['default'].createElement(
		'div',
		_extends({ className: 'desc_container ' + (0, _aphroditeNoImportant.css)(classes.footer) }, props),
		caption ? _react2['default'].createElement(
			'div',
			{ className: 'footerBackground' },
			_react2['default'].createElement('figcaption', { id: 'photoDescription', className: 'lightbox_image_caption ' + (0, _aphroditeNoImportant.css)(classes.footerCaption), dangerouslySetInnerHTML: { __html: caption } })
		) : _react2['default'].createElement('span', null)
	);
}

Footer.propTypes = {
	caption: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element]),
	countCurrent: _propTypes2['default'].number,
	countSeparator: _propTypes2['default'].string,
	countTotal: _propTypes2['default'].number,
	showCount: _propTypes2['default'].bool
};
Footer.contextTypes = {
	theme: _propTypes2['default'].object.isRequired
};

var defaultStyles = {
	footer: {
		boxSizing: 'border-box',
		color: _theme2['default'].footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: _theme2['default'].footer.gutter.vertical,
		paddingLeft: _theme2['default'].footer.gutter.horizontal,
		paddingRight: _theme2['default'].footer.gutter.horizontal,
		paddingTop: _theme2['default'].footer.gutter.vertical
	},
	footerCount: {
		color: _theme2['default'].footer.count.color,
		fontSize: _theme2['default'].footer.count.fontSize,
		paddingLeft: '1em' },
	// add a small gutter for the caption
	footerCaption: {
		flex: '1 1 0'
	}
};

module.exports = Footer;