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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/Router.ts");

class Main {
    constructor() {
        this.router = new _Router__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        console.log("Contructed new Instance of the program");
    }
    launchApp() {
        this.router.handleRequest();
    }
}
new Main().launchApp();


/***/ }),

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _controllers_LoginController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/LoginController */ "./src/controllers/LoginController.ts");
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/MainController */ "./src/controllers/MainController.ts");


class Router {
    constructor() {
        this.mainElement = document.getElementById("main-container");
    }
    handleRequest() {
        console.log("Handling request for:" + this.getRoute());
        switch (this.getRoute()) {
            case "/login":
                if (this.mainElement) {
                    this.mainElement.innerHTML = "";
                    const loginController = new _controllers_LoginController__WEBPACK_IMPORTED_MODULE_0__["LoginController"]();
                    this.mainElement.append(loginController.createView());
                }
                break;
            default:
                if (this.mainElement) {
                    const mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_1__["MainController"]();
                    this.mainElement.append(mainController.createView());
                }
                break;
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}


/***/ }),

/***/ "./src/controllers/LoginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/LoginController.ts ***!
  \********************************************/
/*! exports provided: LoginController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginController", function() { return LoginController; });
class LoginController {
    createView() {
        const container = document.createElement("div");
        const title = document.createElement("h2");
        title.innerText = "Please Login!";
        const userName = document.createElement("label");
        userName.innerText = "Username: ";
        const userNameInput = document.createElement("input");
        const breakElement = document.createElement("br");
        const userPassword = document.createElement("label");
        userPassword.innerText = "Password: ";
        const passwordInput = document.createElement("input");
        passwordInput.type = "Password";
        const loginButton = document.createElement("button");
        loginButton.innerText = "Login";
        container.append(title, userName, userNameInput, breakElement, userPassword, passwordInput, loginButton);
        return container;
    }
}


/***/ }),

/***/ "./src/controllers/MainController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.ts ***!
  \*******************************************/
/*! exports provided: MainController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainController", function() { return MainController; });
class MainController {
    createView() {
        const container = document.createElement("div");
        const title = document.createElement("h2");
        title.innerText = "Welcome to our Main Page!";
        const article = document.createElement("div");
        article.innerText =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula pretium odio. Duis pretium a nisi ac iaculis. Mauris fringilla eget massa et scelerisque. Phasellus sit amet placerat nisl. Proin quam orci, iaculis pulvinar cursus sed, ullamcorper sed turpis. Nullam dui massa, sagittis vitae viverra eget, euismod vel tortor. Donec viverra turpis ex, ac maximus massa mattis placerat. Proin eu.";
        const button = document.createElement("button");
        button.innerText = "Login";
        container.append(title, article, button);
        return container;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9NYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFrQztBQUUzQixNQUFNLElBQUk7SUFHZjtRQUZRLFdBQU0sR0FBVyxJQUFJLDhDQUFNLEVBQUUsQ0FBQztRQUdwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFB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T0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVM7WUFDZixtWkFBbVosQ0FBQztRQUV0WixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRTNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL1JvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29udHJ1Y3RlZCBuZXcgSW5zdGFuY2Ugb2YgdGhlIHByb2dyYW1cIik7XG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQXBwKCkge1xuICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcbiAgfVxufVxuXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xuIiwiaW1wb3J0IHsgTG9naW5Db250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyXCI7XG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICBwcml2YXRlIG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblxuICBwdWJsaWMgaGFuZGxlUmVxdWVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nIHJlcXVlc3QgZm9yOlwiICsgdGhpcy5nZXRSb3V0ZSgpKTtcblxuICAgIHN3aXRjaCAodGhpcy5nZXRSb3V0ZSgpKSB7XG4gICAgICBjYXNlIFwiL2xvZ2luXCI6XG4gICAgICAgIGlmICh0aGlzLm1haW5FbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5tYWluRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIGNvbnN0IGxvZ2luQ29udHJvbGxlcjogTG9naW5Db250cm9sbGVyID0gbmV3IExvZ2luQ29udHJvbGxlcigpO1xuICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kKGxvZ2luQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5tYWluRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IG1haW5Db250cm9sbGVyOiBNYWluQ29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcigpO1xuICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kKG1haW5Db250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiUGxlYXNlIExvZ2luIVwiO1xuXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdXNlck5hbWUuaW5uZXJUZXh0ID0gXCJVc2VybmFtZTogXCI7XG5cbiAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgY29uc3QgYnJlYWtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuXG4gICAgY29uc3QgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHVzZXJQYXNzd29yZC5pbm5lclRleHQgPSBcIlBhc3N3b3JkOiBcIjtcblxuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGFzc3dvcmRJbnB1dC50eXBlID0gXCJQYXNzd29yZFwiO1xuXG4gICAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxvZ2luQnV0dG9uLmlubmVyVGV4dCA9IFwiTG9naW5cIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgICB0aXRsZSxcbiAgICAgIHVzZXJOYW1lLFxuICAgICAgdXNlck5hbWVJbnB1dCxcbiAgICAgIGJyZWFrRWxlbWVudCxcbiAgICAgIHVzZXJQYXNzd29yZCxcbiAgICAgIHBhc3N3b3JkSW5wdXQsXG4gICAgICBsb2dpbkJ1dHRvblxuICAgICk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBvdXIgTWFpbiBQYWdlIVwiO1xuXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXJ0aWNsZS5pbm5lclRleHQgPVxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSB2ZWhpY3VsYSBwcmV0aXVtIG9kaW8uIER1aXMgcHJldGl1bSBhIG5pc2kgYWMgaWFjdWxpcy4gTWF1cmlzIGZyaW5naWxsYSBlZ2V0IG1hc3NhIGV0IHNjZWxlcmlzcXVlLiBQaGFzZWxsdXMgc2l0IGFtZXQgcGxhY2VyYXQgbmlzbC4gUHJvaW4gcXVhbSBvcmNpLCBpYWN1bGlzIHB1bHZpbmFyIGN1cnN1cyBzZWQsIHVsbGFtY29ycGVyIHNlZCB0dXJwaXMuIE51bGxhbSBkdWkgbWFzc2EsIHNhZ2l0dGlzIHZpdGFlIHZpdmVycmEgZWdldCwgZXVpc21vZCB2ZWwgdG9ydG9yLiBEb25lYyB2aXZlcnJhIHR1cnBpcyBleCwgYWMgbWF4aW11cyBtYXNzYSBtYXR0aXMgcGxhY2VyYXQuIFByb2luIGV1LlwiO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJMb2dpblwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgYXJ0aWNsZSwgYnV0dG9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=