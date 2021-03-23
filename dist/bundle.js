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
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/DataService */ "./src/services/DataService.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class DashboardController extends _BaseController__WEBPACK_IMPORTED_MODULE_2__["BaseController"] {
    constructor() {
        super(...arguments);
        this.dataService = new _services_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]();
    }
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
                    const users = yield this.dataService.getUsers(this.sessionToken.tokenId, this.searchArea.value);
                    for (const user of users) {
                        this.searchResultArea.append(this.createElement("label", JSON.stringify(user)));
                        this.searchResultArea.append(document.createElement("br"));
                    }
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

/***/ "./src/services/DataService.ts":
/*!*************************************!*\
  !*** ./src/services/DataService.ts ***!
  \*************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
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
const usersUrl = baseUrl + "users";
class DataService {
    getUsers(authorization, nameQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = usersUrl + "?name=" + nameQuery;
            const options = {
                method: "GET",
                headers: {
                    Authorization: authorization,
                },
            };
            const result = yield fetch(url, options);
            const resultJson = yield result.json();
            return resultJson;
        });
    }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0Rhc2hib2FyZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9BdXRoZW50aWNhdGlvbk1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvRGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0xvZ2luU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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QUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLFFBQVE7aUJBQ25CLENBQUM7YUFDSCxDQUFDO1lBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTlDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ3hCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQztLQUFBO0NBQ0YiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL1JvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29udHJ1Y3RlZCBuZXcgSW5zdGFuY2Ugb2YgdGhlIHByb2dyYW1cIik7XG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQXBwKCkge1xuICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcbiAgfVxufVxuXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xuIiwiaW1wb3J0IHsgRGFzaGJvYXJkQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL0Rhc2hib2FyZENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IExvZ2luQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4vbW9kZWxzL0F1dGhlbnRpY2F0aW9uTW9kZWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICBwcml2YXRlIG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblxuICBwdWJsaWMgaGFuZGxlUmVxdWVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nIHJlcXVlc3QgZm9yOlwiICsgdGhpcy5nZXRSb3V0ZSgpKTtcblxuICAgIHN3aXRjaCAodGhpcy5nZXRSb3V0ZSgpKSB7XG4gICAgICBjYXNlIFwiL2xvZ2luXCI6XG4gICAgICAgIHRoaXMuc3dpdGNoVG9Mb2dpblZpZXcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiL2JvYXJkXCI6XG4gICAgICAgIHRoaXMuc3dpdGNoVG9EYXNoYm9hcmRWaWV3KHVuZGVmaW5lZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMubWFpbkVsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBtYWluQ29udHJvbGxlcjogTWFpbkNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgICAgdGhpcy5tYWluRWxlbWVudC5hcHBlbmQobWFpbkNvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3dpdGNoVG9Mb2dpblZpZXcoKSB7XG4gICAgaWYgKHRoaXMubWFpbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IGxvZ2luQ29udHJvbGxlcjogTG9naW5Db250cm9sbGVyID0gbmV3IExvZ2luQ29udHJvbGxlcih0aGlzKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kKGxvZ2luQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzd2l0Y2hUb0Rhc2hib2FyZFZpZXcoc2Vzc2lvblRva2VuOiBTZXNzaW9uVG9rZW4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5tYWluRWxlbWVudCkge1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgZGFzaGJvYXJkQ29udHJvbGxlcjogRGFzaGJvYXJkQ29udHJvbGxlciA9IG5ldyBEYXNoYm9hcmRDb250cm9sbGVyKFxuICAgICAgICB0aGlzXG4gICAgICApO1xuXG4gICAgICBpZiAoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIGRhc2hib2FyZENvbnRyb2xsZXIuc2V0U2Vzc2lvblRva2VuKHNlc3Npb25Ub2tlbik7XG4gICAgICB9XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmFwcGVuZChkYXNoYm9hcmRDb250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9Sb3V0ZXJcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIGVsZW1lbnRUeXBlOiBLLFxuICAgIGlubmVyVGV4dD86IHN0cmluZyxcbiAgICBhY3Rpb24/OiBhbnlcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgaWYgKGlubmVyVGV4dCkge1xuICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZWxlbWVudC5vbmNsaWNrID0gYWN0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbnNlcnRCcmVhaygpIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWNjZXNzUmlnaHQsIFNlc3Npb25Ub2tlbiB9IGZyb20gXCIuLi9tb2RlbHMvQXV0aGVudGljYXRpb25Nb2RlbHNcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0RhdGFTZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIHNlc3Npb25Ub2tlbjogU2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHNlYXJjaEFyZWE6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgc2VhcmNoUmVzdWx0QXJlYTogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlID0gbmV3IERhdGFTZXJ2aWNlKCk7XG5cbiAgcHVibGljIHNldFNlc3Npb25Ub2tlbihzZXNzaW9uVG9rZW46IFNlc3Npb25Ub2tlbikge1xuICAgIHRoaXMuc2Vzc2lvblRva2VuID0gc2Vzc2lvblRva2VuO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJEYXNoYm9hcmQgQ29udHJvbGxlclwiKTtcbiAgICBpZiAodGhpcy5zZXNzaW9uVG9rZW4pIHtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIGBXZWxjb21lICR7dGhpcy5zZXNzaW9uVG9rZW4udXNlcm5hbWV9YCk7XG4gICAgICB0aGlzLmluc2VydEJyZWFrKCk7XG4gICAgICB0aGlzLmdlbmVyYXRlQnV0dG9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInBsZWFzZSBnbyB0byB0aGUgcHVibGljIHBhcnRzIG9mIHRoaXMgYXBwIVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUJ1dHRvbnMoKSB7XG4gICAgaWYgKHRoaXMuc2Vzc2lvblRva2VuKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjY2VzcyBvZiB0aGlzLnNlc3Npb25Ub2tlbi5hY2Nlc3NSaWdodHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIEFjY2Vzc1JpZ2h0W2FjY2Vzc10sIGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnRyaWdnZXJBY3Rpb24oYWNjZXNzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlc3Npb25Ub2tlbi5hY2Nlc3NSaWdodHMuaW5jbHVkZXMoQWNjZXNzUmlnaHQuUkVBRCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRCcmVhaygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInNlYXJjaDpcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoQXJlYSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdEFyZWEgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB0cmlnZ2VyQWN0aW9uKGFjY2VzczogQWNjZXNzUmlnaHQpIHtcbiAgICBjb25zb2xlLmxvZyhgYnV0dG9uICR7YWNjZXNzfSBjbGlja2VkYCk7XG4gICAgc3dpdGNoIChhY2Nlc3MpIHtcbiAgICAgIGNhc2UgQWNjZXNzUmlnaHQuUkVBRDpcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLmdldFVzZXJzKFxuICAgICAgICAgIHRoaXMuc2Vzc2lvblRva2VuIS50b2tlbklkLFxuICAgICAgICAgIHRoaXMuc2VhcmNoQXJlYSEudmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRBcmVhIS5hcHBlbmQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRBcmVhIS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvTG9naW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgbG9naW5TZXJ2aWNlID0gbmV3IExvZ2luU2VydmljZSgpO1xuXG4gIHByaXZhdGUgdGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcIlBsZWFzZSBMb2dpbiFcIik7XG4gIHByaXZhdGUgdXNlck5hbWUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIlVzZXJuYW1lOiBcIik7XG4gIHByaXZhdGUgdXNlck5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcml2YXRlIGJyID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIHByaXZhdGUgYnJlYWtFbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIHByaXZhdGUgdXNlclBhc3N3b3JkID0gdGhpcy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJQYXNzd29yZDogXCIpO1xuICBwcml2YXRlIHBhc3N3b3JkSW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBwcml2YXRlIGxvZ2luQnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiTG9naW5cIiwgYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aGlzLnVzZXJOYW1lSW5wdXQudmFsdWUgJiYgdGhpcy5wYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0RXJyb3JMYWJlbCgpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oXG4gICAgICAgIHRoaXMudXNlck5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnZhbHVlXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLnN3aXRjaFRvRGFzaGJvYXJkVmlldyhyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3JMYWJlbChcIldyb25nIHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFcnJvckxhYmVsKFwiUGxlYXNlIGZpbGwgYm90aCBmaWVsZHNcIik7XG4gICAgfVxuICB9KTtcblxuICBwcml2YXRlIGVycm9yTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICBwcml2YXRlIHJlc2V0RXJyb3JMYWJlbCgpIHtcbiAgICB0aGlzLmVycm9yTGFiZWwuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIHRoaXMuZXJyb3JMYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0Vycm9yTGFiZWwoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmVycm9yTGFiZWwuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICAgIHRoaXMuZXJyb3JMYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSBcIlBhc3N3b3JkXCI7XG4gICAgdGhpcy5yZXNldEVycm9yTGFiZWwoKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHB1YmxpYyBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImgyXCIsIFwiV2VsY29tZSB0byBvdXIgTWFpbiBQYWdlIVwiKTtcblxuICAgIGNvbnN0IGFydGljbGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXJ0aWNsZS5pbm5lclRleHQgPVxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSB2ZWhpY3VsYSBwcmV0aXVtIG9kaW8uIER1aXMgcHJldGl1bSBhIG5pc2kgYWMgaWFjdWxpcy4gTWF1cmlzIGZyaW5naWxsYSBlZ2V0IG1hc3NhIGV0IHNjZWxlcmlzcXVlLiBQaGFzZWxsdXMgc2l0IGFtZXQgcGxhY2VyYXQgbmlzbC4gUHJvaW4gcXVhbSBvcmNpLCBpYWN1bGlzIHB1bHZpbmFyIGN1cnN1cyBzZWQsIHVsbGFtY29ycGVyIHNlZCB0dXJwaXMuIE51bGxhbSBkdWkgbWFzc2EsIHNhZ2l0dGlzIHZpdGFlIHZpdmVycmEgZWdldCwgZXVpc21vZCB2ZWwgdG9ydG9yLiBEb25lYyB2aXZlcnJhIHR1cnBpcyBleCwgYWMgbWF4aW11cyBtYXNzYSBtYXR0aXMgcGxhY2VyYXQuIFByb2luIGV1LlwiO1xuXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiTG9naW5cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIuc3dpdGNoVG9Mb2dpblZpZXcoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uVG9rZW4ge1xuICB0b2tlbklkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHZhbGlkOiBib29sZWFuO1xuICBleHBpcmF0aW9uVGltZTogRGF0ZTtcbiAgYWNjZXNzUmlnaHRzOiBBY2Nlc3NSaWdodFtdO1xufVxuXG5leHBvcnQgZW51bSBBY2Nlc3NSaWdodCB7XG4gIENSRUFURSxcbiAgUkVBRCxcbiAgVVBEQVRFLFxuICBERUxFVEUsXG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9EYXRhTW9kZWxzXCI7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcbmNvbnN0IHVzZXJzVXJsID0gYmFzZVVybCArIFwidXNlcnNcIjtcblxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGdldFVzZXJzKFxuICAgIGF1dGhvcml6YXRpb246IHN0cmluZyxcbiAgICBuYW1lUXVlcnk6IHN0cmluZ1xuICApOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIGNvbnN0IHVybCA9IHVzZXJzVXJsICsgXCI/bmFtZT1cIiArIG5hbWVRdWVyeTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICByZXR1cm4gcmVzdWx0SnNvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSBcIi4uL21vZGVscy9BdXRoZW50aWNhdGlvbk1vZGVsc1wiO1xuXG5jb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5jb25zdCBsb2dpblVybCA9IGJhc2VVcmwgKyBcImxvZ2luXCI7XG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGxvZ2luKFxuICAgIHVzZXJOYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICApOiBQcm9taXNlPFNlc3Npb25Ub2tlbiB8IHVuZGVmaW5lZD4ge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlck5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChsb2dpblVybCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgIHJldHVybiByZXN1bHQuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==