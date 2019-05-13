/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./server.js","vendor~server"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/express/lib sync recursive":
/*!***************************************!*\
  !*** ./node_modules/express/lib sync ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";

/***/ }),

/***/ "./node_modules/html-webpack-plugin sync recursive":
/*!***********************************************!*\
  !*** ./node_modules/html-webpack-plugin sync ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/html-webpack-plugin sync recursive";

/***/ }),

/***/ "./node_modules/loader-runner/lib lazy recursive":
/*!**************************************************************!*\
  !*** ./node_modules/loader-runner/lib lazy namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/loader-runner/lib lazy recursive";

/***/ }),

/***/ "./node_modules/node-libs-browser/mock sync recursive ^\\.\\/.*$":
/*!***********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock sync ^\.\/.*$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./buffer": "./node_modules/node-libs-browser/mock/buffer.js",
	"./buffer.js": "./node_modules/node-libs-browser/mock/buffer.js",
	"./console": "./node_modules/node-libs-browser/mock/console.js",
	"./console.js": "./node_modules/node-libs-browser/mock/console.js",
	"./dns": "./node_modules/node-libs-browser/mock/dns.js",
	"./dns.js": "./node_modules/node-libs-browser/mock/dns.js",
	"./empty": "./node_modules/node-libs-browser/mock/empty.js",
	"./empty.js": "./node_modules/node-libs-browser/mock/empty.js",
	"./net": "./node_modules/node-libs-browser/mock/net.js",
	"./net.js": "./node_modules/node-libs-browser/mock/net.js",
	"./process": "./node_modules/node-libs-browser/mock/process.js",
	"./process.js": "./node_modules/node-libs-browser/mock/process.js",
	"./punycode": "./node_modules/node-libs-browser/mock/punycode.js",
	"./punycode.js": "./node_modules/node-libs-browser/mock/punycode.js",
	"./tls": "./node_modules/node-libs-browser/mock/tls.js",
	"./tls.js": "./node_modules/node-libs-browser/mock/tls.js",
	"./tty": "./node_modules/node-libs-browser/mock/tty.js",
	"./tty.js": "./node_modules/node-libs-browser/mock/tty.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/node-libs-browser/mock sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/terser-webpack-plugin/dist sync recursive":
/*!******************************************************!*\
  !*** ./node_modules/terser-webpack-plugin/dist sync ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/terser-webpack-plugin/dist sync recursive";

/***/ }),

/***/ "./node_modules/uglify-js/tools sync recursive":
/*!*******************************************!*\
  !*** ./node_modules/uglify-js/tools sync ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/uglify-js/tools sync recursive";

/***/ }),

/***/ "./node_modules/uglifyjs-webpack-plugin/dist sync recursive":
/*!********************************************************!*\
  !*** ./node_modules/uglifyjs-webpack-plugin/dist sync ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/uglifyjs-webpack-plugin/dist sync recursive";

/***/ }),

/***/ "./node_modules/webpack/lib/node sync recursive ^\\.\\/.*$":
/*!****************************************!*\
  !*** (webpack)/lib/node sync ^\.\/.*$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./NodeChunkTemplatePlugin": "./node_modules/webpack/lib/node/NodeChunkTemplatePlugin.js",
	"./NodeChunkTemplatePlugin.js": "./node_modules/webpack/lib/node/NodeChunkTemplatePlugin.js",
	"./NodeEnvironmentPlugin": "./node_modules/webpack/lib/node/NodeEnvironmentPlugin.js",
	"./NodeEnvironmentPlugin.js": "./node_modules/webpack/lib/node/NodeEnvironmentPlugin.js",
	"./NodeHotUpdateChunkTemplatePlugin": "./node_modules/webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js",
	"./NodeHotUpdateChunkTemplatePlugin.js": "./node_modules/webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js",
	"./NodeMainTemplate.runtime": "./node_modules/webpack/lib/node/NodeMainTemplate.runtime.js",
	"./NodeMainTemplate.runtime.js": "./node_modules/webpack/lib/node/NodeMainTemplate.runtime.js",
	"./NodeMainTemplateAsync.runtime": "./node_modules/webpack/lib/node/NodeMainTemplateAsync.runtime.js",
	"./NodeMainTemplateAsync.runtime.js": "./node_modules/webpack/lib/node/NodeMainTemplateAsync.runtime.js",
	"./NodeMainTemplatePlugin": "./node_modules/webpack/lib/node/NodeMainTemplatePlugin.js",
	"./NodeMainTemplatePlugin.js": "./node_modules/webpack/lib/node/NodeMainTemplatePlugin.js",
	"./NodeOutputFileSystem": "./node_modules/webpack/lib/node/NodeOutputFileSystem.js",
	"./NodeOutputFileSystem.js": "./node_modules/webpack/lib/node/NodeOutputFileSystem.js",
	"./NodeSourcePlugin": "./node_modules/webpack/lib/node/NodeSourcePlugin.js",
	"./NodeSourcePlugin.js": "./node_modules/webpack/lib/node/NodeSourcePlugin.js",
	"./NodeTargetPlugin": "./node_modules/webpack/lib/node/NodeTargetPlugin.js",
	"./NodeTargetPlugin.js": "./node_modules/webpack/lib/node/NodeTargetPlugin.js",
	"./NodeTemplatePlugin": "./node_modules/webpack/lib/node/NodeTemplatePlugin.js",
	"./NodeTemplatePlugin.js": "./node_modules/webpack/lib/node/NodeTemplatePlugin.js",
	"./NodeWatchFileSystem": "./node_modules/webpack/lib/node/NodeWatchFileSystem.js",
	"./NodeWatchFileSystem.js": "./node_modules/webpack/lib/node/NodeWatchFileSystem.js",
	"./ReadFileCompileWasmTemplatePlugin": "./node_modules/webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js",
	"./ReadFileCompileWasmTemplatePlugin.js": "./node_modules/webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/lib/node sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/worker-farm/lib/child sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/worker-farm/lib/child sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/worker-farm/lib/child sync recursive";

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var express = __webpack_require__(/*! express */ "./node_modules/express/index.js");

var webpack = __webpack_require__(/*! webpack */ "./node_modules/webpack/lib/webpack.js");

var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "./node_modules/webpack-dev-middleware/index.js");

var app = express();

var config = __webpack_require__(/*! ./webpack.config.js */ "./webpack.config.js");

var compiler = webpack(config);

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/*import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Routes from './routes.js'
*/
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

/*app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
*/


app.all('*', function (req, res) {
  res.render(path.join(__dirname, 'dist', 'index.ejs'));
}); // Serve the files on port 3000.

app.listen(4000, function () {
  console.log('Example app listening on port 4000!\n');
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ "./node_modules/html-webpack-plugin/index.js");

var CleanWebpackPlugin = __webpack_require__(/*! clean-webpack-plugin */ "./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin.js");

var MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ "./node_modules/mini-css-extract-plugin/dist/cjs.js");

var UglifyJsPlugin = __webpack_require__(/*! uglifyjs-webpack-plugin */ "./node_modules/uglifyjs-webpack-plugin/dist/cjs.js");

var client_config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it uses publicPath in webpackOptions.output
          publicPath: '../../',
          hmr: "development" === 'development',
          reloadAll: true
        }
      }, //'style-loader',
      'css-loader']
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: './dist/[hash].[ext]'
        }
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    title: 'Travel Buddy ',
    template: 'index.ejs',
    filename: 'index.ejs'
  }), new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css'
  })],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })],
    splitChunks: {
      cacheGroups: {
        //vendor chunk
        vendor: {
          //sync + async chunks
          chunks: 'all',
          test: /node_modules/
        }
      }
    }
  }
};
var server_config = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    server: './server.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'server')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it uses publicPath in webpackOptions.output
          publicPath: '../../',
          hmr: "development" === 'development',
          reloadAll: true
        }
      }, //'style-loader',
      'css-loader']
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: './dist/[hash].[ext]'
        }
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    title: 'Travel Buddy ',
    template: 'index.ejs',
    filename: 'index.ejs'
  }), new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css'
  })],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })],
    splitChunks: {
      cacheGroups: {
        //vendor chunk
        vendor: {
          //sync + async chunks
          chunks: 'all',
          test: /node_modules/
        }
      }
    }
  }
};
module.exports = [client_config, server_config];
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 18:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 19:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 20:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 21:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 22:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 23:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 24:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 25:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 26:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 27:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 28:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 29:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 30:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 31:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V4cHJlc3MvbGliIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtd2VicGFjay1wbHVnaW4gc3luYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9hZGVyLXJ1bm5lci9saWIgbGF6eSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVyc2VyLXdlYnBhY2stcGx1Z2luL2Rpc3Qgc3luYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWdsaWZ5LWpzL3Rvb2xzIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VnbGlmeWpzLXdlYnBhY2stcGx1Z2luL2Rpc3Qgc3luYyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2xpYi9ub2RlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29ya2VyLWZhcm0vbGliL2NoaWxkIHN5bmMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2suY29uZmlnLmpzIiwid2VicGFjazovLy8uL3N0cmVhbXMgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL2V4dGVuZC1ub2RlIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/ZTFkZSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/NTViNSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/ZmEzZiIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIiwid2VicGFjazovLy9mcyAoaWdub3JlZCk/Mjg2NyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/NDQwOCIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/ZDdjMiIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/N2U2YyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/YzJlZCIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/NDZkYyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/N2M0ZSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCk/N2EyNyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzY4ZmQiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzMzOGQiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2UzMDUiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzlmMzIiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2FiMTUiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzk4NjAiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2U4OGQiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzc1ZGYiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzUyNjEiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzM2MzciLCJ3ZWJwYWNrOi8vL3JlYWRhYmxlLXN0cmVhbSAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2h0dHAgKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT9lMjUzIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT81NDNmIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT8wYTUwIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwid2VicGFjayIsIndlYnBhY2tEZXZNaWRkbGV3YXJlIiwiYXBwIiwiY29uZmlnIiwiY29tcGlsZXIiLCJwYXRoIiwiYWxsIiwicmVxIiwicmVzIiwicmVuZGVyIiwiam9pbiIsIl9fZGlybmFtZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJIdG1sV2VicGFja1BsdWdpbiIsIkNsZWFuV2VicGFja1BsdWdpbiIsIk1pbmlDc3NFeHRyYWN0UGx1Z2luIiwiVWdsaWZ5SnNQbHVnaW4iLCJjbGllbnRfY29uZmlnIiwibW9kZSIsImRldnRvb2wiLCJlbnRyeSIsIm1haW4iLCJvdXRwdXQiLCJmaWxlbmFtZSIsInJlc29sdmUiLCJtb2R1bGUiLCJydWxlcyIsInRlc3QiLCJ1c2UiLCJsb2FkZXIiLCJvcHRpb25zIiwicHVibGljUGF0aCIsImhtciIsInByb2Nlc3MiLCJyZWxvYWRBbGwiLCJuYW1lIiwiZXhjbHVkZSIsInBsdWdpbnMiLCJ0aXRsZSIsInRlbXBsYXRlIiwiY2h1bmtGaWxlbmFtZSIsIm9wdGltaXphdGlvbiIsIm1pbmltaXplciIsInVnbGlmeU9wdGlvbnMiLCJjb21tZW50cyIsInNwbGl0Q2h1bmtzIiwiY2FjaGVHcm91cHMiLCJ2ZW5kb3IiLCJjaHVua3MiLCJzZXJ2ZXJfY29uZmlnIiwic2VydmVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QkFBYSxFQUFFO0FBQ1ZyQixjQUFNLEVBQUU7QUFDTnNCLGtCQUFRLEVBQUU7QUFESjtBQURFO0FBRGUsS0FBbkIsQ0FBRCxDQUREO0FBUVZDLGVBQVcsRUFBRTtBQUNaQyxpQkFBVyxFQUFFO0FBQ1o7QUFDQUMsY0FBTSxFQUFFO0FBQ1A7QUFDQUMsZ0JBQU0sRUFBRSxLQUZEO0FBR1ByQixjQUFJLEVBQUU7QUFIQztBQUZJO0FBREQ7QUFSSDtBQXpFSyxDQUFwQjtBQStGQUYsTUFBTSxDQUFDMEIsT0FBUCxHQUFpQixDQUFDbEMsYUFBRCxFQUFnQmdDLGFBQWhCLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3RNQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoic2VydmVyLmNhNGZiMDhiYzA2Yzk4ZWNjODAzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwic2VydmVyXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zZXJ2ZXIuanNcIixcInZlbmRvcn5zZXJ2ZXJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvZXhwcmVzcy9saWIgc3luYyByZWN1cnNpdmVcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvaHRtbC13ZWJwYWNrLXBsdWdpbiBzeW5jIHJlY3Vyc2l2ZVwiOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbG9hZGVyLXJ1bm5lci9saWIgbGF6eSByZWN1cnNpdmVcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYnVmZmVyXCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay9idWZmZXIuanNcIixcblx0XCIuL2J1ZmZlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL21vY2svYnVmZmVyLmpzXCIsXG5cdFwiLi9jb25zb2xlXCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay9jb25zb2xlLmpzXCIsXG5cdFwiLi9jb25zb2xlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay9jb25zb2xlLmpzXCIsXG5cdFwiLi9kbnNcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL2Rucy5qc1wiLFxuXHRcIi4vZG5zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay9kbnMuanNcIixcblx0XCIuL2VtcHR5XCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay9lbXB0eS5qc1wiLFxuXHRcIi4vZW1wdHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL2VtcHR5LmpzXCIsXG5cdFwiLi9uZXRcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL25ldC5qc1wiLFxuXHRcIi4vbmV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay9uZXQuanNcIixcblx0XCIuL3Byb2Nlc3NcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL3Byb2Nlc3MuanNcIixcblx0XCIuL3Byb2Nlc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL3Byb2Nlc3MuanNcIixcblx0XCIuL3B1bnljb2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay9wdW55Y29kZS5qc1wiLFxuXHRcIi4vcHVueWNvZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL3B1bnljb2RlLmpzXCIsXG5cdFwiLi90bHNcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL3Rscy5qc1wiLFxuXHRcIi4vdGxzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbW9jay90bHMuanNcIixcblx0XCIuL3R0eVwiOiBcIi4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL21vY2svdHR5LmpzXCIsXG5cdFwiLi90dHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL3R0eS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3RlcnNlci13ZWJwYWNrLXBsdWdpbi9kaXN0IHN5bmMgcmVjdXJzaXZlXCI7IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3VnbGlmeS1qcy90b29scyBzeW5jIHJlY3Vyc2l2ZVwiOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy91Z2xpZnlqcy13ZWJwYWNrLXBsdWdpbi9kaXN0IHN5bmMgcmVjdXJzaXZlXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL05vZGVDaHVua1RlbXBsYXRlUGx1Z2luXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlQ2h1bmtUZW1wbGF0ZVBsdWdpbi5qc1wiLFxuXHRcIi4vTm9kZUNodW5rVGVtcGxhdGVQbHVnaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9ub2RlL05vZGVDaHVua1RlbXBsYXRlUGx1Z2luLmpzXCIsXG5cdFwiLi9Ob2RlRW52aXJvbm1lbnRQbHVnaW5cIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9ub2RlL05vZGVFbnZpcm9ubWVudFBsdWdpbi5qc1wiLFxuXHRcIi4vTm9kZUVudmlyb25tZW50UGx1Z2luLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlRW52aXJvbm1lbnRQbHVnaW4uanNcIixcblx0XCIuL05vZGVIb3RVcGRhdGVDaHVua1RlbXBsYXRlUGx1Z2luXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlSG90VXBkYXRlQ2h1bmtUZW1wbGF0ZVBsdWdpbi5qc1wiLFxuXHRcIi4vTm9kZUhvdFVwZGF0ZUNodW5rVGVtcGxhdGVQbHVnaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9ub2RlL05vZGVIb3RVcGRhdGVDaHVua1RlbXBsYXRlUGx1Z2luLmpzXCIsXG5cdFwiLi9Ob2RlTWFpblRlbXBsYXRlLnJ1bnRpbWVcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9ub2RlL05vZGVNYWluVGVtcGxhdGUucnVudGltZS5qc1wiLFxuXHRcIi4vTm9kZU1haW5UZW1wbGF0ZS5ydW50aW1lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlTWFpblRlbXBsYXRlLnJ1bnRpbWUuanNcIixcblx0XCIuL05vZGVNYWluVGVtcGxhdGVBc3luYy5ydW50aW1lXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlTWFpblRlbXBsYXRlQXN5bmMucnVudGltZS5qc1wiLFxuXHRcIi4vTm9kZU1haW5UZW1wbGF0ZUFzeW5jLnJ1bnRpbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9ub2RlL05vZGVNYWluVGVtcGxhdGVBc3luYy5ydW50aW1lLmpzXCIsXG5cdFwiLi9Ob2RlTWFpblRlbXBsYXRlUGx1Z2luXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlTWFpblRlbXBsYXRlUGx1Z2luLmpzXCIsXG5cdFwiLi9Ob2RlTWFpblRlbXBsYXRlUGx1Z2luLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlTWFpblRlbXBsYXRlUGx1Z2luLmpzXCIsXG5cdFwiLi9Ob2RlT3V0cHV0RmlsZVN5c3RlbVwiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL25vZGUvTm9kZU91dHB1dEZpbGVTeXN0ZW0uanNcIixcblx0XCIuL05vZGVPdXRwdXRGaWxlU3lzdGVtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlT3V0cHV0RmlsZVN5c3RlbS5qc1wiLFxuXHRcIi4vTm9kZVNvdXJjZVBsdWdpblwiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL25vZGUvTm9kZVNvdXJjZVBsdWdpbi5qc1wiLFxuXHRcIi4vTm9kZVNvdXJjZVBsdWdpbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL25vZGUvTm9kZVNvdXJjZVBsdWdpbi5qc1wiLFxuXHRcIi4vTm9kZVRhcmdldFBsdWdpblwiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL25vZGUvTm9kZVRhcmdldFBsdWdpbi5qc1wiLFxuXHRcIi4vTm9kZVRhcmdldFBsdWdpbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL25vZGUvTm9kZVRhcmdldFBsdWdpbi5qc1wiLFxuXHRcIi4vTm9kZVRlbXBsYXRlUGx1Z2luXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlVGVtcGxhdGVQbHVnaW4uanNcIixcblx0XCIuL05vZGVUZW1wbGF0ZVBsdWdpbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL25vZGUvTm9kZVRlbXBsYXRlUGx1Z2luLmpzXCIsXG5cdFwiLi9Ob2RlV2F0Y2hGaWxlU3lzdGVtXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlV2F0Y2hGaWxlU3lzdGVtLmpzXCIsXG5cdFwiLi9Ob2RlV2F0Y2hGaWxlU3lzdGVtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9Ob2RlV2F0Y2hGaWxlU3lzdGVtLmpzXCIsXG5cdFwiLi9SZWFkRmlsZUNvbXBpbGVXYXNtVGVtcGxhdGVQbHVnaW5cIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9ub2RlL1JlYWRGaWxlQ29tcGlsZVdhc21UZW1wbGF0ZVBsdWdpbi5qc1wiLFxuXHRcIi4vUmVhZEZpbGVDb21waWxlV2FzbVRlbXBsYXRlUGx1Z2luLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZS9SZWFkRmlsZUNvbXBpbGVXYXNtVGVtcGxhdGVQbHVnaW4uanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbm9kZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93b3JrZXItZmFybS9saWIvY2hpbGQgc3luYyByZWN1cnNpdmVcIjsiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXG5jb25zdCB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpXG5jb25zdCB3ZWJwYWNrRGV2TWlkZGxld2FyZSA9IHJlcXVpcmUoJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vd2VicGFjay5jb25maWcuanMnKVxuXG5jb25zdCBjb21waWxlciA9IHdlYnBhY2soY29uZmlnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuXG4vKmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcbiovXG5cbi8vIFRlbGwgZXhwcmVzcyB0byB1c2UgdGhlIHdlYnBhY2stZGV2LW1pZGRsZXdhcmUgYW5kIHVzZSB0aGUgd2VicGFjay5jb25maWcuanNcbi8vIGNvbmZpZ3VyYXRpb24gZmlsZSBhcyBhIGJhc2UuXG4vKmFwcC51c2Uod2VicGFja0Rldk1pZGRsZXdhcmUoY29tcGlsZXIsIHtcbiAgcHVibGljUGF0aDogY29uZmlnLm91dHB1dC5wdWJsaWNQYXRoXG59KSk7XG4qL1xuXG5hcHAuYWxsKCcqJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcblx0cmVzLnJlbmRlcihwYXRoLmpvaW4oX19kaXJuYW1lLCAnZGlzdCcsICdpbmRleC5lanMnKSlcbn0pXG5cbi8vIFNlcnZlIHRoZSBmaWxlcyBvbiBwb3J0IDMwMDAuXG5hcHAubGlzdGVuKDQwMDAsIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ0V4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0IDQwMDAhXFxuJyk7XG59KTsiLCJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBIdG1sV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2h0bWwtd2VicGFjay1wbHVnaW4nKVxuY29uc3QgQ2xlYW5XZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgnY2xlYW4td2VicGFjay1wbHVnaW4nKVxuY29uc3QgTWluaUNzc0V4dHJhY3RQbHVnaW4gPSByZXF1aXJlKCdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbicpO1xuY29uc3QgVWdsaWZ5SnNQbHVnaW4gPSByZXF1aXJlKCd1Z2xpZnlqcy13ZWJwYWNrLXBsdWdpbicpO1xuXG5cblxubGV0IGNsaWVudF9jb25maWcgPSB7XG5cblx0bW9kZTogJ2RldmVsb3BtZW50JyxcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxuXG5cdGVudHJ5Ontcblx0XHRtYWluOiAnLi9zcmMvaW5kZXguanMnXG5cdH0sXG5cblx0b3V0cHV0OiB7XG5cdFx0ZmlsZW5hbWU6J1tuYW1lXS5bY29udGVudGhhc2hdLmJ1bmRsZS5qcycsXG5cdFx0cGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnZGlzdCcpXG5cdH0sXG5cblx0bW9kdWxlOiB7XG5cdFx0cnVsZXM6IFtcblx0XHRcdFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXN0OiAvXFwuY3NzJC8sXG5cdFx0XHRcdHVzZTpbXG5cdFx0XHRcdFx0e1xuXHRcdFx0ICAgICAgICAgICAgbG9hZGVyOiBNaW5pQ3NzRXh0cmFjdFBsdWdpbi5sb2FkZXIsXG5cdFx0XHQgICAgICAgICAgICBvcHRpb25zOiB7XG5cdFx0XHQgICAgICAgICAgICAgIC8vIHlvdSBjYW4gc3BlY2lmeSBhIHB1YmxpY1BhdGggaGVyZVxuXHRcdFx0ICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0IGl0IHVzZXMgcHVibGljUGF0aCBpbiB3ZWJwYWNrT3B0aW9ucy5vdXRwdXRcblx0XHRcdCAgICAgICAgICAgICAgcHVibGljUGF0aDogJy4uLy4uLycsXG5cdFx0XHQgICAgICAgICAgICAgIGhtcjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG5cdFx0XHQgICAgICAgICAgICAgIHJlbG9hZEFsbDogdHJ1ZSxcblx0XHRcdCAgICAgICAgICAgIH0sXG5cdFx0XHQgICAgICAgIH0sXG5cdFx0XHRcdFx0Ly8nc3R5bGUtbG9hZGVyJyxcblx0XHRcdFx0XHQnY3NzLWxvYWRlcidcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGVzdDogL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkLyxcblx0XHRcdFx0dXNlOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bG9hZGVyOiAnZmlsZS1sb2FkZXInLFxuXHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAnLi9kaXN0L1toYXNoXS5bZXh0XSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRlc3Q6IC9cXC4oanN8anN4KSQvLFxuXHRcdFx0XHRleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcblx0XHRcdFx0dXNlOiB7XG5cdFx0XHRcdFx0bG9hZGVyOiAnYmFiZWwtbG9hZGVyJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXG5cdHBsdWdpbnM6IFtcblx0XHRcblx0XHRuZXcgQ2xlYW5XZWJwYWNrUGx1Z2luKCksXG5cdFx0bmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcblx0XHRcdHRpdGxlOiAnVHJhdmVsIEJ1ZGR5ICcsXG5cdFx0XHR0ZW1wbGF0ZTogJ2luZGV4LmVqcycsXG5cdFx0XHRmaWxlbmFtZTogJ2luZGV4LmVqcydcblx0XHR9KSxcblx0XHRuZXcgTWluaUNzc0V4dHJhY3RQbHVnaW4oe1xuXHQgICAgICAvLyBPcHRpb25zIHNpbWlsYXIgdG8gdGhlIHNhbWUgb3B0aW9ucyBpbiB3ZWJwYWNrT3B0aW9ucy5vdXRwdXRcblx0ICAgICAgLy8gYm90aCBvcHRpb25zIGFyZSBvcHRpb25hbFxuXHQgICAgICBmaWxlbmFtZTogJ1tuYW1lXS5jc3MnLFxuXHQgICAgICBjaHVua0ZpbGVuYW1lOiAnW2lkXS5jc3MnLFxuXHQgICAgfSksXG5cblx0XSxcblxuXG5cdG9wdGltaXphdGlvbjoge1xuXHQgICAgbWluaW1pemVyOiBbbmV3IFVnbGlmeUpzUGx1Z2luKHtcblx0ICAgIFx0dWdsaWZ5T3B0aW9uczoge1xuXHQgICAgICAgICAgb3V0cHV0OiB7XG5cdCAgICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSxcblx0ICAgICAgICAgIH0sXG5cdCAgICAgICAgfVxuXHQgICAgfSldLFxuXHQgICAgc3BsaXRDaHVua3M6IHtcblx0ICAgIFx0Y2FjaGVHcm91cHM6IHtcblx0ICAgIFx0XHQvL3ZlbmRvciBjaHVua1xuXHQgICAgXHRcdHZlbmRvcjoge1xuXHQgICAgXHRcdFx0Ly9zeW5jICsgYXN5bmMgY2h1bmtzXG5cdCAgICBcdFx0XHRjaHVua3M6ICdhbGwnLFxuXHQgICAgXHRcdFx0dGVzdDogL25vZGVfbW9kdWxlcy9cblx0ICAgIFx0XHR9XG5cdCAgICBcdH1cblx0ICAgIH1cblx0fVxuXG59XG5cbmxldCBzZXJ2ZXJfY29uZmlnID0ge1xuXG5cdG1vZGU6ICdkZXZlbG9wbWVudCcsXG4gICAgZGV2dG9vbDogJ2lubGluZS1zb3VyY2UtbWFwJyxcblxuXHRlbnRyeTp7XG5cdFx0c2VydmVyIDogJy4vc2VydmVyLmpzJ1xuXHR9LFxuXG5cdG91dHB1dDoge1xuXHRcdGZpbGVuYW1lOidbbmFtZV0uW2NvbnRlbnRoYXNoXS5idW5kbGUuanMnLFxuXHRcdHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJ3NlcnZlcicpXG5cdH0sXG5cblx0bW9kdWxlOiB7XG5cdFx0cnVsZXM6IFtcblx0XHRcdFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXN0OiAvXFwuY3NzJC8sXG5cdFx0XHRcdHVzZTpbXG5cdFx0XHRcdFx0e1xuXHRcdFx0ICAgICAgICAgICAgbG9hZGVyOiBNaW5pQ3NzRXh0cmFjdFBsdWdpbi5sb2FkZXIsXG5cdFx0XHQgICAgICAgICAgICBvcHRpb25zOiB7XG5cdFx0XHQgICAgICAgICAgICAgIC8vIHlvdSBjYW4gc3BlY2lmeSBhIHB1YmxpY1BhdGggaGVyZVxuXHRcdFx0ICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0IGl0IHVzZXMgcHVibGljUGF0aCBpbiB3ZWJwYWNrT3B0aW9ucy5vdXRwdXRcblx0XHRcdCAgICAgICAgICAgICAgcHVibGljUGF0aDogJy4uLy4uLycsXG5cdFx0XHQgICAgICAgICAgICAgIGhtcjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG5cdFx0XHQgICAgICAgICAgICAgIHJlbG9hZEFsbDogdHJ1ZSxcblx0XHRcdCAgICAgICAgICAgIH0sXG5cdFx0XHQgICAgICAgIH0sXG5cdFx0XHRcdFx0Ly8nc3R5bGUtbG9hZGVyJyxcblx0XHRcdFx0XHQnY3NzLWxvYWRlcidcblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGVzdDogL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkLyxcblx0XHRcdFx0dXNlOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bG9hZGVyOiAnZmlsZS1sb2FkZXInLFxuXHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiAnLi9kaXN0L1toYXNoXS5bZXh0XSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRlc3Q6IC9cXC4oanN8anN4KSQvLFxuXHRcdFx0XHRleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcblx0XHRcdFx0dXNlOiB7XG5cdFx0XHRcdFx0bG9hZGVyOiAnYmFiZWwtbG9hZGVyJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXG5cdHBsdWdpbnM6IFtcblx0XHRcblx0XHRuZXcgQ2xlYW5XZWJwYWNrUGx1Z2luKCksXG5cdFx0bmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcblx0XHRcdHRpdGxlOiAnVHJhdmVsIEJ1ZGR5ICcsXG5cdFx0XHR0ZW1wbGF0ZTogJ2luZGV4LmVqcycsXG5cdFx0XHRmaWxlbmFtZTogJ2luZGV4LmVqcydcblx0XHR9KSxcblx0XHRuZXcgTWluaUNzc0V4dHJhY3RQbHVnaW4oe1xuXHQgICAgICAvLyBPcHRpb25zIHNpbWlsYXIgdG8gdGhlIHNhbWUgb3B0aW9ucyBpbiB3ZWJwYWNrT3B0aW9ucy5vdXRwdXRcblx0ICAgICAgLy8gYm90aCBvcHRpb25zIGFyZSBvcHRpb25hbFxuXHQgICAgICBmaWxlbmFtZTogJ1tuYW1lXS5jc3MnLFxuXHQgICAgICBjaHVua0ZpbGVuYW1lOiAnW2lkXS5jc3MnLFxuXHQgICAgfSksXG5cblx0XSxcblxuXG5cdG9wdGltaXphdGlvbjoge1xuXHQgICAgbWluaW1pemVyOiBbbmV3IFVnbGlmeUpzUGx1Z2luKHtcblx0ICAgIFx0dWdsaWZ5T3B0aW9uczoge1xuXHQgICAgICAgICAgb3V0cHV0OiB7XG5cdCAgICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSxcblx0ICAgICAgICAgIH0sXG5cdCAgICAgICAgfVxuXHQgICAgfSldLFxuXHQgICAgc3BsaXRDaHVua3M6IHtcblx0ICAgIFx0Y2FjaGVHcm91cHM6IHtcblx0ICAgIFx0XHQvL3ZlbmRvciBjaHVua1xuXHQgICAgXHRcdHZlbmRvcjoge1xuXHQgICAgXHRcdFx0Ly9zeW5jICsgYXN5bmMgY2h1bmtzXG5cdCAgICBcdFx0XHRjaHVua3M6ICdhbGwnLFxuXHQgICAgXHRcdFx0dGVzdDogL25vZGVfbW9kdWxlcy9cblx0ICAgIFx0XHR9XG5cdCAgICBcdH1cblx0ICAgIH1cblx0fVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gW2NsaWVudF9jb25maWcsIHNlcnZlcl9jb25maWddIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==