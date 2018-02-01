/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_callout_index_js__ = __webpack_require__(/*! ./content-callout/index.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript.\n * You can create a new block folder in\n * this dir and include code for that block\n * here as well.\n *\n * All blocks should be included here since\n * this is the file that Webpack is compiling.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdC5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpblxuICogdGhpcyBkaXIgYW5kIGluY2x1ZGUgY29kZSBmb3IgdGhhdCBibG9ja1xuICogaGVyZSBhcyB3ZWxsLlxuICpcbiAqIEFsbCBibG9ja3Mgc2hvdWxkIGJlIGluY2x1ZGVkIGhlcmUgc2luY2VcbiAqIHRoaXMgaXMgdGhlIGZpbGUgdGhhdCBXZWJwYWNrIGlzIGNvbXBpbGluZy5cbiAqL1xuXG5pbXBvcnQgJy4vY29udGVudC1jYWxsb3V0L2luZGV4LmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!**************************************!*\
  !*** ./src/content-callout/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: Content Callout\n *\n * Block containing:\n * Image Upload (MediaUpload)\n * Heading (Editable)\n * Body Text (Editable)\n * Link Text (Editable)\n * URL (UrlInput)\n *\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    Editable = _wp$blocks.Editable,\n    MediaUpload = _wp$blocks.MediaUpload,\n    UrlInput = _wp$blocks.UrlInput; // Import registerBlockType() from wp.blocks\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    IconButton = _wp$components.IconButton,\n    Dashicon = _wp$components.Dashicon;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('ccfk/content-callout', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Content Callout', 'ccfk'), // Block title.\n\ticon: 'palmtree', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Callout'), __('Highlight'), __('create-guten-block')],\n\tattributes: {\n\t\ttitle: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.callout-text'\n\t\t},\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.callout-title'\n\t\t},\n\t\timgURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'src',\n\t\t\tselector: 'img'\n\t\t},\n\t\timgAlt: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'alt',\n\t\t\tselector: 'img'\n\t\t},\n\t\timgID: {\n\t\t\ttype: 'number'\n\t\t},\n\t\tbuttonText: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.callout-btn'\n\t\t},\n\t\tbuttonURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'href',\n\t\t\tselector: 'a'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar onSelectImage = function onSelectImage(img) {\n\t\t\tprops.setAttributes({\n\t\t\t\timgID: img.id,\n\t\t\t\timgURL: img.url\n\t\t\t});\n\t\t};\n\n\t\tvar onRemoveImage = function onRemoveImage(img) {\n\t\t\tprops.setAttributes({\n\t\t\t\timgID: null,\n\t\t\t\timgURL: null,\n\t\t\t\timgAlt: null\n\t\t\t});\n\t\t};\n\n\t\tvar onChangeContent = function onChangeContent(value) {\n\t\t\tprops.setAttributes({ content: value });\n\t\t};\n\n\t\tvar onChangeTitle = function onChangeTitle(value) {\n\t\t\tprops.setAttributes({ title: value });\n\t\t};\n\n\t\tvar onChangeBtnText = function onChangeBtnText(value) {\n\t\t\tprops.setAttributes({\n\t\t\t\tbuttonText: value\n\t\t\t});\n\t\t};\n\n\t\tvar onChangeBtnURL = function onChangeBtnURL(value) {\n\t\t\tprops.setAttributes({\n\t\t\t\tbuttonURL: value\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'callout-image' },\n\t\t\t\t!props.attributes.imgID ? wp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tvalue: props.attributes.imgID,\n\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\tIconButton,\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tclassName: 'components-button button button-large',\n\t\t\t\t\t\t\t\tlabel: __('Upload image'),\n\t\t\t\t\t\t\t\ticon: 'upload',\n\t\t\t\t\t\t\t\tonClick: open\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t__('Upload Image')\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}) : wp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ 'class': 'image-wrapper' },\n\t\t\t\t\twp.element.createElement('img', {\n\t\t\t\t\t\tsrc: props.attributes.imgURL,\n\t\t\t\t\t\talt: props.attributes.imgAlt\n\t\t\t\t\t}),\n\t\t\t\t\tprops.focus ? wp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'components-button button button-large',\n\t\t\t\t\t\t\tonClick: onRemoveImage },\n\t\t\t\t\t\t__('Remove Image')\n\t\t\t\t\t) : null\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'callout-content' },\n\t\t\t\twp.element.createElement(Editable, {\n\t\t\t\t\ttagName: 'h2',\n\t\t\t\t\tplaceholder: __('Something headline'),\n\t\t\t\t\tonChange: onChangeTitle,\n\t\t\t\t\tvalue: props.attributes.title\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(Editable, {\n\t\t\t\t\ttagName: 'p',\n\t\t\t\t\tplaceholder: __('Write something yummy'),\n\t\t\t\t\tonChange: onChangeContent,\n\t\t\t\t\tvalue: props.attributes.content\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ 'class': 'callout-btn' },\n\t\t\t\t\twp.element.createElement(Dashicon, { icon: 'admin-links' }),\n\t\t\t\t\twp.element.createElement(Editable, {\n\t\t\t\t\t\ttagName: 'span',\n\t\t\t\t\t\tplaceholder: __('Your link text'),\n\t\t\t\t\t\tonChange: onChangeBtnText,\n\t\t\t\t\t\tvalue: props.attributes.buttonText }),\n\t\t\t\t\twp.element.createElement(UrlInput, {\n\t\t\t\t\t\tvalue: props.attributes.buttonURL,\n\t\t\t\t\t\tonChange: onChangeBtnURL\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement('img', { src: props.attributes.imgURL,\n\t\t\t\talt: props.attributes.imgAlt }),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'callout-content' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\t{ className: 'callout-title' },\n\t\t\t\t\tprops.attributes.title\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'callout-text' },\n\t\t\t\t\tprops.attributes.content\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ className: 'callout-btn', href: props.attributes.buttonURL },\n\t\t\t\t\tprops.attributes.buttonText\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZW50LWNhbGxvdXQvaW5kZXguanM/MGUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBDb250ZW50IENhbGxvdXRcbiAqXG4gKiBCbG9jayBjb250YWluaW5nOlxuICogSW1hZ2UgVXBsb2FkIChNZWRpYVVwbG9hZClcbiAqIEhlYWRpbmcgKEVkaXRhYmxlKVxuICogQm9keSBUZXh0IChFZGl0YWJsZSlcbiAqIExpbmsgVGV4dCAoRWRpdGFibGUpXG4gKiBVUkwgKFVybElucHV0KVxuICpcbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgRWRpdGFibGUgPSBfd3AkYmxvY2tzLkVkaXRhYmxlLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2Nrcy5NZWRpYVVwbG9hZCxcbiAgICBVcmxJbnB1dCA9IF93cCRibG9ja3MuVXJsSW5wdXQ7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIEljb25CdXR0b24gPSBfd3AkY29tcG9uZW50cy5JY29uQnV0dG9uLFxuICAgIERhc2hpY29uID0gX3dwJGNvbXBvbmVudHMuRGFzaGljb247XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2Nmay9jb250ZW50LWNhbGxvdXQnLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ0NvbnRlbnQgQ2FsbG91dCcsICdjY2ZrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAncGFsbXRyZWUnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnbGF5b3V0JywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ0NhbGxvdXQnKSwgX18oJ0hpZ2hsaWdodCcpLCBfXygnY3JlYXRlLWd1dGVuLWJsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGU6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy5jYWxsb3V0LXRleHQnXG5cdFx0fSxcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICcuY2FsbG91dC10aXRsZSdcblx0XHR9LFxuXHRcdGltZ1VSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuXHRcdFx0YXR0cmlidXRlOiAnc3JjJyxcblx0XHRcdHNlbGVjdG9yOiAnaW1nJ1xuXHRcdH0sXG5cdFx0aW1nQWx0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ2F0dHJpYnV0ZScsXG5cdFx0XHRhdHRyaWJ1dGU6ICdhbHQnLFxuXHRcdFx0c2VsZWN0b3I6ICdpbWcnXG5cdFx0fSxcblx0XHRpbWdJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcidcblx0XHR9LFxuXHRcdGJ1dHRvblRleHQ6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy5jYWxsb3V0LWJ0bidcblx0XHR9LFxuXHRcdGJ1dHRvblVSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuXHRcdFx0YXR0cmlidXRlOiAnaHJlZicsXG5cdFx0XHRzZWxlY3RvcjogJ2EnXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgb25TZWxlY3RJbWFnZSA9IGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UoaW1nKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVVJMOiBpbWcudXJsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIG9uUmVtb3ZlSW1hZ2UgPSBmdW5jdGlvbiBvblJlbW92ZUltYWdlKGltZykge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0FsdDogbnVsbFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHZhciBvbkNoYW5nZUNvbnRlbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnQodmFsdWUpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiB2YWx1ZSB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIG9uQ2hhbmdlVGl0bGUgPSBmdW5jdGlvbiBvbkNoYW5nZVRpdGxlKHZhbHVlKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pO1xuXHRcdH07XG5cblx0XHR2YXIgb25DaGFuZ2VCdG5UZXh0ID0gZnVuY3Rpb24gb25DaGFuZ2VCdG5UZXh0KHZhbHVlKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0YnV0dG9uVGV4dDogdmFsdWVcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR2YXIgb25DaGFuZ2VCdG5VUkwgPSBmdW5jdGlvbiBvbkNoYW5nZUJ0blVSTCh2YWx1ZSkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGJ1dHRvblVSTDogdmFsdWVcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7ICdjbGFzcyc6ICdjYWxsb3V0LWltYWdlJyB9LFxuXHRcdFx0XHQhcHJvcHMuYXR0cmlidXRlcy5pbWdJRCA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdEltYWdlLFxuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuaW1nSUQsXG5cdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmLm9wZW47XG5cdFx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRJY29uQnV0dG9uLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnY29tcG9uZW50cy1idXR0b24gYnV0dG9uIGJ1dHRvbi1sYXJnZScsXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdVcGxvYWQgaW1hZ2UnKSxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAndXBsb2FkJyxcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBvcGVuXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdF9fKCdVcGxvYWQgSW1hZ2UnKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHR7ICdjbGFzcyc6ICdpbWFnZS13cmFwcGVyJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdFx0c3JjOiBwcm9wcy5hdHRyaWJ1dGVzLmltZ1VSTCxcblx0XHRcdFx0XHRcdGFsdDogcHJvcHMuYXR0cmlidXRlcy5pbWdBbHRcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRwcm9wcy5mb2N1cyA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnY29tcG9uZW50cy1idXR0b24gYnV0dG9uIGJ1dHRvbi1sYXJnZScsXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9uUmVtb3ZlSW1hZ2UgfSxcblx0XHRcdFx0XHRcdF9fKCdSZW1vdmUgSW1hZ2UnKVxuXHRcdFx0XHRcdCkgOiBudWxsXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7ICdjbGFzcyc6ICdjYWxsb3V0LWNvbnRlbnQnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChFZGl0YWJsZSwge1xuXHRcdFx0XHRcdHRhZ05hbWU6ICdoMicsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdTb21ldGhpbmcgaGVhZGxpbmUnKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VUaXRsZSxcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50aXRsZVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEVkaXRhYmxlLCB7XG5cdFx0XHRcdFx0dGFnTmFtZTogJ3AnLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBfXygnV3JpdGUgc29tZXRoaW5nIHl1bW15JyksXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29udGVudCxcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyAnY2xhc3MnOiAnY2FsbG91dC1idG4nIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KERhc2hpY29uLCB7IGljb246ICdhZG1pbi1saW5rcycgfSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEVkaXRhYmxlLCB7XG5cdFx0XHRcdFx0XHR0YWdOYW1lOiAnc3BhbicsXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ1lvdXIgbGluayB0ZXh0JyksXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VCdG5UZXh0LFxuXHRcdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuYnV0dG9uVGV4dCB9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVXJsSW5wdXQsIHtcblx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvblVSTCxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUJ0blVSTFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBwcm9wcy5hdHRyaWJ1dGVzLmltZ1VSTCxcblx0XHRcdFx0YWx0OiBwcm9wcy5hdHRyaWJ1dGVzLmltZ0FsdCB9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgJ2NsYXNzJzogJ2NhbGxvdXQtY29udGVudCcgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMycsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYWxsb3V0LXRpdGxlJyB9LFxuXHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMudGl0bGVcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NhbGxvdXQtdGV4dCcgfSxcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnRcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NhbGxvdXQtYnRuJywgaHJlZjogcHJvcHMuYXR0cmlidXRlcy5idXR0b25VUkwgfSxcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvblRleHRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQtY2FsbG91dC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./src/content-callout/style.scss ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZW50LWNhbGxvdXQvc3R5bGUuc2Nzcz9iYzlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGVudC1jYWxsb3V0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./src/content-callout/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZW50LWNhbGxvdXQvZWRpdG9yLnNjc3M/ZGVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQtY2FsbG91dC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);