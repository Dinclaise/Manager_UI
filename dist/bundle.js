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
/* harmony import */ var _controllers_DashboardController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/DashboardController */ "./src/controllers/DashboardController.ts");
/* harmony import */ var _controllers_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/LoginController */ "./src/controllers/LoginController.ts");
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/MainController */ "./src/controllers/MainController.ts");



class Router {
    constructor() {
        this.mainElement = document.getElementById("main-container");
    }
    handleRequest() {
        console.log("Handling request for:" + this.getRoute());
        switch (this.getRoute()) {
            case "/login":
                this.switchToLoginView();
                break;
            case "/board":
                this.switchToDashboardView(undefined);
                break;
            default:
                if (this.mainElement) {
                    const mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_2__["MainController"](this);
                    this.mainElement.append(mainController.createView());
                }
                break;
        }
    }
    switchToLoginView() {
        if (this.mainElement) {
            this.mainElement.innerHTML = "";
            const loginController = new _controllers_LoginController__WEBPACK_IMPORTED_MODULE_1__["LoginController"](this);
            this.mainElement.append(loginController.createView());
        }
    }
    switchToDashboardView(sessionToken) {
        if (this.mainElement) {
            this.mainElement.innerHTML = "";
            const dashboardController = new _controllers_DashboardController__WEBPACK_IMPORTED_MODULE_0__["DashboardController"](this);
            if (sessionToken) {
                dashboardController.setSessionToken(sessionToken);
            }
            this.mainElement.append(dashboardController.createView());
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}


/***/ }),

/***/ "./src/controllers/BaseController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/BaseController.ts ***!
  \*******************************************/
/*! exports provided: BaseController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseController", function() { return BaseController; });
class BaseController {
    constructor(router) {
        this.container = document.createElement("div");
        this.router = router;
    }
    createElement(elementType, innerText, action) {
        const element = document.createElement(elementType);
        if (innerText) {
            element.innerText = innerText;
        }
        if (action) {
            element.onclick = action;
        }
        this.container.append(element);
        return element;
    }
    insertBreak() {
        this.createElement("br");
    }
}


/***/ }),

/***/ "./src/controllers/DashboardController.ts":
/*!************************************************!*\
  !*** ./src/controllers/DashboardController.ts ***!
  \************************************************/
/*! exports provided: DashboardController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardController", function() { return DashboardController; });
/* harmony import */ var _models_AuthenticationModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/AuthenticationModels */ "./src/models/AuthenticationModels.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class DashboardController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__["BaseController"] {
    setSessionToken(sessionToken) {
        this.sessionToken = sessionToken;
    }
    createView() {
        const title = this.createElement("h2", "Dashboard Controller");
        if (this.sessionToken) {
            this.createElement("label", `Welcome ${this.sessionToken.username}`);
            this.insertBreak();
            this.generateButtons();
        }
        else {
            this.createElement("label", "please go to the public parts of this app!");
        }
        return this.container;
    }
    generateButtons() {
        if (this.sessionToken) {
            for (const access of this.sessionToken.accessRights) {
                this.createElement("button", _models_AuthenticationModels__WEBPACK_IMPORTED_MODULE_0__["AccessRight"][access], () => __awaiter(this, void 0, void 0, function* () {
                    yield this.triggerAction(access);
                }));
            }
            if (this.sessionToken.accessRights.includes(_models_AuthenticationModels__WEBPACK_IMPORTED_MODULE_0__["AccessRight"].READ)) {
                this.insertBreak();
                this.createElement("label", "search:");
                this.searchArea = this.createElement("input");
                this.searchResultArea = this.createElement("div");
            }
        }
    }
    triggerAction(access) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`button ${access} clicked`);
            switch (access) {
                case _models_AuthenticationModels__WEBPACK_IMPORTED_MODULE_0__["AccessRight"].READ:
                    this.searchResultArea; //in progress
                    break;
                default:
                    break;
            }
        });
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
/* harmony import */ var _services_LoginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/LoginService */ "./src/services/LoginService.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LoginController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__["BaseController"] {
    constructor() {
        super(...arguments);
        this.loginService = new _services_LoginService__WEBPACK_IMPORTED_MODULE_0__["LoginService"]();
        this.title = this.createElement("h2", "Please Login!");
        this.userName = this.createElement("label", "Username: ");
        this.userNameInput = this.createElement("input");
        this.br = this.createElement("br");
        this.breakElement = this.createElement("br");
        this.userPassword = this.createElement("label", "Password: ");
        this.passwordInput = this.createElement("input");
        this.loginButton = this.createElement("button", "Login", () => __awaiter(this, void 0, void 0, function* () {
            if (this.userNameInput.value && this.passwordInput.value) {
                this.resetErrorLabel();
                const result = yield this.loginService.login(this.userNameInput.value, this.passwordInput.value);
                if (result) {
                    this.router.switchToDashboardView(result);
                }
                else {
                    this.showErrorLabel("Wrong username or password");
                }
            }
            else {
                this.showErrorLabel("Please fill both fields");
            }
        }));
        this.errorLabel = this.createElement("label");
    }
    resetErrorLabel() {
        this.errorLabel.style.color = "red";
        this.errorLabel.style.visibility = "hidden";
    }
    showErrorLabel(errorMessage) {
        this.errorLabel.innerText = errorMessage;
        this.errorLabel.style.visibility = "visible";
    }
    createView() {
        this.passwordInput.type = "Password";
        this.resetErrorLabel();
        return this.container;
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
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");

class MainController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__["BaseController"] {
    createView() {
        const title = this.createElement("h2", "Welcome to our Main Page!");
        const article = this.createElement("div");
        article.innerText =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula pretium odio. Duis pretium a nisi ac iaculis. Mauris fringilla eget massa et scelerisque. Phasellus sit amet placerat nisl. Proin quam orci, iaculis pulvinar cursus sed, ullamcorper sed turpis. Nullam dui massa, sagittis vitae viverra eget, euismod vel tortor. Donec viverra turpis ex, ac maximus massa mattis placerat. Proin eu.";
        const button = this.createElement("button", "Login", () => {
            this.router.switchToLoginView();
        });
        return this.container;
    }
}


/***/ }),

/***/ "./src/models/AuthenticationModels.ts":
/*!********************************************!*\
  !*** ./src/models/AuthenticationModels.ts ***!
  \********************************************/
/*! exports provided: AccessRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRight", function() { return AccessRight; });
var AccessRight;
(function (AccessRight) {
    AccessRight[AccessRight["CREATE"] = 0] = "CREATE";
    AccessRight[AccessRight["READ"] = 1] = "READ";
    AccessRight[AccessRight["UPDATE"] = 2] = "UPDATE";
    AccessRight[AccessRight["DELETE"] = 3] = "DELETE";
})(AccessRight || (AccessRight = {}));


/***/ }),

/***/ "./src/services/LoginService.ts":
/*!**************************************!*\
  !*** ./src/services/LoginService.ts ***!
  \**************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = "http://localhost:8080/";
const loginUrl = baseUrl + "login";
class LoginService {
    login(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userName,
                    password: password,
                }),
            };
            const result = yield fetch(loginUrl, options);
            if (result.status == 201) {
                return result.json();
            }
            else {
                return undefined;
            }
        });
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0Rhc2hib2FyZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9BdXRoZW50aWNhdGlvbk1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvTG9naW5TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztR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SSxPQUFPLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLFFBQVE7aUJBQ25CLENBQUM7YUFDSCxDQUFDO1lBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTlDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ3hCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQztLQUFBO0NBQ0YiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL1JvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29udHJ1Y3RlZCBuZXcgSW5zdGFuY2Ugb2YgdGhlIHByb2dyYW1cIik7XG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQXBwKCkge1xuICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcbiAgfVxufVxuXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xuIiwiaW1wb3J0IHsgRGFzaGJvYXJkQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL0Rhc2hib2FyZENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IExvZ2luQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4vbW9kZWxzL0F1dGhlbnRpY2F0aW9uTW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICBwcml2YXRlIG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblxuICBwdWJsaWMgaGFuZGxlUmVxdWVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nIHJlcXVlc3QgZm9yOlwiICsgdGhpcy5nZXRSb3V0ZSgpKTtcblxuICAgIHN3aXRjaCAodGhpcy5nZXRSb3V0ZSgpKSB7XG4gICAgICBjYXNlIFwiL2xvZ2luXCI6XG4gICAgICAgIHRoaXMuc3dpdGNoVG9Mb2dpblZpZXcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiL2JvYXJkXCI6XG4gICAgICAgIHRoaXMuc3dpdGNoVG9EYXNoYm9hcmRWaWV3KHVuZGVmaW5lZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMubWFpbkVsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBtYWluQ29udHJvbGxlcjogTWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgICAgdGhpcy5tYWluRWxlbWVudC5hcHBlbmQobWFpbkNvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3dpdGNoVG9Mb2dpblZpZXcoKSB7XG4gICAgaWYgKHRoaXMubWFpbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IGxvZ2luQ29udHJvbGxlcjogTG9naW5Db250cm9sbGVyID0gbmV3IExvZ2luQ29udHJvbGxlcih0aGlzKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kKGxvZ2luQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzd2l0Y2hUb0Rhc2hib2FyZFZpZXcoc2Vzc2lvblRva2VuOiBTZXNzaW9uVG9rZW4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5tYWluRWxlbWVudCkge1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgZGFzaGJvYXJkQ29udHJvbGxlcjogRGFzaGJvYXJkQ29udHJvbGxlciA9IG5ldyBEYXNoYm9hcmRDb250cm9sbGVyKFxuICAgICAgICB0aGlzXG4gICAgICApO1xuXG4gICAgICBpZiAoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIGRhc2hib2FyZENvbnRyb2xsZXIuc2V0U2Vzc2lvblRva2VuKHNlc3Npb25Ub2tlbik7XG4gICAgICB9XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmFwcGVuZChkYXNoYm9hcmRDb250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9Sb3V0ZXJcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIGVsZW1lbnRUeXBlOiBLLFxuICAgIGlubmVyVGV4dD86IHN0cmluZyxcbiAgICBhY3Rpb24/OiBhbnlcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgaWYgKGlubmVyVGV4dCkge1xuICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZWxlbWVudC5vbmNsaWNrID0gYWN0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbnNlcnRCcmVhaygpIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWNjZXNzUmlnaHQsIFNlc3Npb25Ub2tlbiB9IGZyb20gXCIuLi9tb2RlbHMvQXV0aGVudGljYXRpb25Nb2RlbHNcIjtcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgc2Vzc2lvblRva2VuOiBTZXNzaW9uVG9rZW4gfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgc2VhcmNoQXJlYTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBzZWFyY2hSZXN1bHRBcmVhOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgc2V0U2Vzc2lvblRva2VuKHNlc3Npb25Ub2tlbjogU2Vzc2lvblRva2VuKSB7XG4gICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBzZXNzaW9uVG9rZW47XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcIkRhc2hib2FyZCBDb250cm9sbGVyXCIpO1xuICAgIGlmICh0aGlzLnNlc3Npb25Ub2tlbikge1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgYFdlbGNvbWUgJHt0aGlzLnNlc3Npb25Ub2tlbi51c2VybmFtZX1gKTtcbiAgICAgIHRoaXMuaW5zZXJ0QnJlYWsoKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVCdXR0b25zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwicGxlYXNlIGdvIHRvIHRoZSBwdWJsaWMgcGFydHMgb2YgdGhpcyBhcHAhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQnV0dG9ucygpIHtcbiAgICBpZiAodGhpcy5zZXNzaW9uVG9rZW4pIHtcbiAgICAgIGZvciAoY29uc3QgYWNjZXNzIG9mIHRoaXMuc2Vzc2lvblRva2VuLmFjY2Vzc1JpZ2h0cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgQWNjZXNzUmlnaHRbYWNjZXNzXSwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IHRoaXMudHJpZ2dlckFjdGlvbihhY2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2Vzc2lvblRva2VuLmFjY2Vzc1JpZ2h0cy5pbmNsdWRlcyhBY2Nlc3NSaWdodC5SRUFEKSkge1xuICAgICAgICB0aGlzLmluc2VydEJyZWFrKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwic2VhcmNoOlwiKTtcbiAgICAgICAgdGhpcy5zZWFyY2hBcmVhID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0QXJlYSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHRyaWdnZXJBY3Rpb24oYWNjZXNzOiBBY2Nlc3NSaWdodCkge1xuICAgIGNvbnNvbGUubG9nKGBidXR0b24gJHthY2Nlc3N9IGNsaWNrZWRgKTtcbiAgICBzd2l0Y2ggKGFjY2Vzcykge1xuICAgICAgY2FzZSBBY2Nlc3NSaWdodC5SRUFEOlxuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdEFyZWE7IC8vaW4gcHJvZ3Jlc3NcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0xvZ2luU2VydmljZVwiO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY2xhc3MgTG9naW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGxvZ2luU2VydmljZSA9IG5ldyBMb2dpblNlcnZpY2UoKTtcblxuICBwcml2YXRlIHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJQbGVhc2UgTG9naW4hXCIpO1xuICBwcml2YXRlIHVzZXJOYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJVc2VybmFtZTogXCIpO1xuICBwcml2YXRlIHVzZXJOYW1lSW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJpdmF0ZSBiciA9IHRoaXMuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBwcml2YXRlIGJyZWFrRWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBwcml2YXRlIHVzZXJQYXNzd29yZCA9IHRoaXMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwiUGFzc3dvcmQ6IFwiKTtcbiAgcHJpdmF0ZSBwYXNzd29yZElucHV0ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgcHJpdmF0ZSBsb2dpbkJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIkxvZ2luXCIsIGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy51c2VyTmFtZUlucHV0LnZhbHVlICYmIHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldEVycm9yTGFiZWwoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKFxuICAgICAgICB0aGlzLnVzZXJOYW1lSW5wdXQudmFsdWUsXG4gICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZVxuICAgICAgKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJvdXRlci5zd2l0Y2hUb0Rhc2hib2FyZFZpZXcocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yTGFiZWwoXCJXcm9uZyB1c2VybmFtZSBvciBwYXNzd29yZFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93RXJyb3JMYWJlbChcIlBsZWFzZSBmaWxsIGJvdGggZmllbGRzXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJpdmF0ZSBlcnJvckxhYmVsID0gdGhpcy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgcHJpdmF0ZSByZXNldEVycm9yTGFiZWwoKSB7XG4gICAgdGhpcy5lcnJvckxhYmVsLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB0aGlzLmVycm9yTGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIH1cblxuICBwcml2YXRlIHNob3dFcnJvckxhYmVsKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5lcnJvckxhYmVsLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgICB0aGlzLmVycm9yTGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID0gXCJQYXNzd29yZFwiO1xuICAgIHRoaXMucmVzZXRFcnJvckxhYmVsKCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vQmFzZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcIldlbGNvbWUgdG8gb3VyIE1haW4gUGFnZSFcIik7XG5cbiAgICBjb25zdCBhcnRpY2xlID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFydGljbGUuaW5uZXJUZXh0ID1cbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRnVzY2UgdmVoaWN1bGEgcHJldGl1bSBvZGlvLiBEdWlzIHByZXRpdW0gYSBuaXNpIGFjIGlhY3VsaXMuIE1hdXJpcyBmcmluZ2lsbGEgZWdldCBtYXNzYSBldCBzY2VsZXJpc3F1ZS4gUGhhc2VsbHVzIHNpdCBhbWV0IHBsYWNlcmF0IG5pc2wuIFByb2luIHF1YW0gb3JjaSwgaWFjdWxpcyBwdWx2aW5hciBjdXJzdXMgc2VkLCB1bGxhbWNvcnBlciBzZWQgdHVycGlzLiBOdWxsYW0gZHVpIG1hc3NhLCBzYWdpdHRpcyB2aXRhZSB2aXZlcnJhIGVnZXQsIGV1aXNtb2QgdmVsIHRvcnRvci4gRG9uZWMgdml2ZXJyYSB0dXJwaXMgZXgsIGFjIG1heGltdXMgbWFzc2EgbWF0dGlzIHBsYWNlcmF0LiBQcm9pbiBldS5cIjtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIkxvZ2luXCIsICgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLnN3aXRjaFRvTG9naW5WaWV3KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvblRva2VuIHtcbiAgdG9rZW5JZDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICB2YWxpZDogYm9vbGVhbjtcbiAgZXhwaXJhdGlvblRpbWU6IERhdGU7XG4gIGFjY2Vzc1JpZ2h0czogQWNjZXNzUmlnaHRbXTtcbn1cblxuZXhwb3J0IGVudW0gQWNjZXNzUmlnaHQge1xuICBDUkVBVEUsXG4gIFJFQUQsXG4gIFVQREFURSxcbiAgREVMRVRFLFxufVxuIiwiaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4uL21vZGVscy9BdXRoZW50aWNhdGlvbk1vZGVsc1wiO1xuXG5jb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5jb25zdCBsb2dpblVybCA9IGJhc2VVcmwgKyBcImxvZ2luXCI7XG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGxvZ2luKFxuICAgIHVzZXJOYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPFNlc3Npb25Ub2tlbiB8IHVuZGVmaW5lZD4ge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlck5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChsb2dpblVybCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgIHJldHVybiByZXN1bHQuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==