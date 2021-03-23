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
                        const label = this.createElement("label", JSON.stringify(user));
                        label.onclick = () => {
                            label.classList.toggle("selectedLabel");
                            this.selectedUser = user;
                            this.selectedLabel = label;
                        };
                        this.searchResultArea.append(this.createElement("label", JSON.stringify(user)));
                        this.searchResultArea.append(document.createElement("br"));
                    }
                    break;
                case _models_AuthenticationModels__WEBPACK_IMPORTED_MODULE_0__["AccessRight"].DELETE:
                    if (this.selectedUser) {
                        yield this.dataService.deleteUser(this.sessionToken.tokenId, this.selectedUser);
                        this.selectedLabel.innerHTML = "";
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
    deleteUser(authorization, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = usersUrl + "?id=" + user.id;
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: authorization,
                },
            };
            yield fetch(url, options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQmFzZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0Rhc2hib2FyZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9BdXRoZW50aWNhdGlvbk1vZGVscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvRGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0xvZ2luU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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QztZQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUU5QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO2dCQUN4QixPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxPQUFPLFNBQVMsQ0FBQzthQUNsQjtRQUNILENBQUM7S0FBQTtDQUNGIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL01haW4udHNcIik7XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9Sb3V0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIE1haW4ge1xuICBwcml2YXRlIHJvdXRlcjogUm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRydWN0ZWQgbmV3IEluc3RhbmNlIG9mIHRoZSBwcm9ncmFtXCIpO1xuICB9XG5cbiAgcHVibGljIGxhdW5jaEFwcCgpIHtcbiAgICB0aGlzLnJvdXRlci5oYW5kbGVSZXF1ZXN0KCk7XG4gIH1cbn1cblxubmV3IE1haW4oKS5sYXVuY2hBcHAoKTtcbiIsImltcG9ydCB7IERhc2hib2FyZENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9EYXNoYm9hcmRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFNlc3Npb25Ub2tlbiB9IGZyb20gXCIuL21vZGVscy9BdXRoZW50aWNhdGlvbk1vZGVsc1wiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgcHJpdmF0ZSBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cbiAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJIYW5kbGluZyByZXF1ZXN0IGZvcjpcIiArIHRoaXMuZ2V0Um91dGUoKSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuZ2V0Um91dGUoKSkge1xuICAgICAgY2FzZSBcIi9sb2dpblwiOlxuICAgICAgICB0aGlzLnN3aXRjaFRvTG9naW5WaWV3KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi9ib2FyZFwiOlxuICAgICAgICB0aGlzLnN3aXRjaFRvRGFzaGJvYXJkVmlldyh1bmRlZmluZWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh0aGlzLm1haW5FbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgbWFpbkNvbnRyb2xsZXI6IE1haW5Db250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKHRoaXMpO1xuICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kKG1haW5Db250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN3aXRjaFRvTG9naW5WaWV3KCkge1xuICAgIGlmICh0aGlzLm1haW5FbGVtZW50KSB7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBsb2dpbkNvbnRyb2xsZXI6IExvZ2luQ29udHJvbGxlciA9IG5ldyBMb2dpbkNvbnRyb2xsZXIodGhpcyk7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmFwcGVuZChsb2dpbkNvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3dpdGNoVG9EYXNoYm9hcmRWaWV3KHNlc3Npb25Ub2tlbjogU2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMubWFpbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IGRhc2hib2FyZENvbnRyb2xsZXI6IERhc2hib2FyZENvbnRyb2xsZXIgPSBuZXcgRGFzaGJvYXJkQ29udHJvbGxlcihcbiAgICAgICAgdGhpc1xuICAgICAgKTtcblxuICAgICAgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgICAgICBkYXNoYm9hcmRDb250cm9sbGVyLnNldFNlc3Npb25Ub2tlbihzZXNzaW9uVG9rZW4pO1xuICAgICAgfVxuICAgICAgdGhpcy5tYWluRWxlbWVudC5hcHBlbmQoZGFzaGJvYXJkQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vUm91dGVyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gIHByb3RlY3RlZCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgY3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICBlbGVtZW50VHlwZTogSyxcbiAgICBpbm5lclRleHQ/OiBzdHJpbmcsXG4gICAgYWN0aW9uPzogYW55XG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgIGlmIChpbm5lclRleHQpIHtcbiAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGVsZW1lbnQub25jbGljayA9IGFjdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5zZXJ0QnJlYWsoKSB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFjY2Vzc1JpZ2h0LCBTZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi4vbW9kZWxzL0F1dGhlbnRpY2F0aW9uTW9kZWxzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9EYXRhTW9kZWxzXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9EYXRhU2VydmljZVwiO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBzZXNzaW9uVG9rZW46IFNlc3Npb25Ub2tlbiB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBzZWFyY2hBcmVhOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHNlYXJjaFJlc3VsdEFyZWE6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSA9IG5ldyBEYXRhU2VydmljZSgpO1xuXG4gIHByaXZhdGUgc2VsZWN0ZWRVc2VyOiBVc2VyIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHNlbGVjdGVkTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cbiAgcHVibGljIHNldFNlc3Npb25Ub2tlbihzZXNzaW9uVG9rZW46IFNlc3Npb25Ub2tlbikge1xuICAgIHRoaXMuc2Vzc2lvblRva2VuID0gc2Vzc2lvblRva2VuO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJEYXNoYm9hcmQgQ29udHJvbGxlclwiKTtcbiAgICBpZiAodGhpcy5zZXNzaW9uVG9rZW4pIHtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIGBXZWxjb21lICR7dGhpcy5zZXNzaW9uVG9rZW4udXNlcm5hbWV9YCk7XG4gICAgICB0aGlzLmluc2VydEJyZWFrKCk7XG4gICAgICB0aGlzLmdlbmVyYXRlQnV0dG9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInBsZWFzZSBnbyB0byB0aGUgcHVibGljIHBhcnRzIG9mIHRoaXMgYXBwIVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUJ1dHRvbnMoKSB7XG4gICAgaWYgKHRoaXMuc2Vzc2lvblRva2VuKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjY2VzcyBvZiB0aGlzLnNlc3Npb25Ub2tlbi5hY2Nlc3NSaWdodHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIEFjY2Vzc1JpZ2h0W2FjY2Vzc10sIGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnRyaWdnZXJBY3Rpb24oYWNjZXNzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlc3Npb25Ub2tlbi5hY2Nlc3NSaWdodHMuaW5jbHVkZXMoQWNjZXNzUmlnaHQuUkVBRCkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRCcmVhaygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcInNlYXJjaDpcIik7XG4gICAgICAgIHRoaXMuc2VhcmNoQXJlYSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdEFyZWEgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB0cmlnZ2VyQWN0aW9uKGFjY2VzczogQWNjZXNzUmlnaHQpIHtcbiAgICBjb25zb2xlLmxvZyhgYnV0dG9uICR7YWNjZXNzfSBjbGlja2VkYCk7XG4gICAgc3dpdGNoIChhY2Nlc3MpIHtcbiAgICAgIGNhc2UgQWNjZXNzUmlnaHQuUkVBRDpcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLmdldFVzZXJzKFxuICAgICAgICAgIHRoaXMuc2Vzc2lvblRva2VuIS50b2tlbklkLFxuICAgICAgICAgIHRoaXMuc2VhcmNoQXJlYSEudmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XG4gICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgICAgbGFiZWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZExhYmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExhYmVsID0gbGFiZWw7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdEFyZWEhLmFwcGVuZChcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdEFyZWEhLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBY2Nlc3NSaWdodC5ERUxFVEU6XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVXNlcikge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuZGVsZXRlVXNlcihcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvblRva2VuIS50b2tlbklkLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMYWJlbCEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvTG9naW5TZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgbG9naW5TZXJ2aWNlID0gbmV3IExvZ2luU2VydmljZSgpO1xuXG4gIHByaXZhdGUgdGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcIlBsZWFzZSBMb2dpbiFcIik7XG4gIHByaXZhdGUgdXNlck5hbWUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIlVzZXJuYW1lOiBcIik7XG4gIHByaXZhdGUgdXNlck5hbWVJbnB1dCA9IHRoaXMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcml2YXRlIGJyID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIHByaXZhdGUgYnJlYWtFbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gIHByaXZhdGUgdXNlclBhc3N3b3JkID0gdGhpcy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJQYXNzd29yZDogXCIpO1xuICBwcml2YXRlIHBhc3N3b3JkSW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBwcml2YXRlIGxvZ2luQnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiTG9naW5cIiwgYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aGlzLnVzZXJOYW1lSW5wdXQudmFsdWUgJiYgdGhpcy5wYXNzd29yZElucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0RXJyb3JMYWJlbCgpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oXG4gICAgICAgIHRoaXMudXNlck5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnZhbHVlXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLnN3aXRjaFRvRGFzaGJvYXJkVmlldyhyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3JMYWJlbChcIldyb25nIHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFcnJvckxhYmVsKFwiUGxlYXNlIGZpbGwgYm90aCBmaWVsZHNcIik7XG4gICAgfVxuICB9KTtcblxuICBwcml2YXRlIGVycm9yTGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICBwcml2YXRlIHJlc2V0RXJyb3JMYWJlbCgpIHtcbiAgICB0aGlzLmVycm9yTGFiZWwuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIHRoaXMuZXJyb3JMYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0Vycm9yTGFiZWwoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmVycm9yTGFiZWwuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICAgIHRoaXMuZXJyb3JMYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSBcIlBhc3N3b3JkXCI7XG4gICAgdGhpcy5yZXNldEVycm9yTGFiZWwoKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHB1YmxpYyBjcmVhdGVWaWV3KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImgyXCIsIFwiV2VsY29tZSB0byBvdXIgTWFpbiBQYWdlIVwiKTtcblxuICAgIGNvbnN0IGFydGljbGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXJ0aWNsZS5pbm5lclRleHQgPVxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSB2ZWhpY3VsYSBwcmV0aXVtIG9kaW8uIER1aXMgcHJldGl1bSBhIG5pc2kgYWMgaWFjdWxpcy4gTWF1cmlzIGZyaW5naWxsYSBlZ2V0IG1hc3NhIGV0IHNjZWxlcmlzcXVlLiBQaGFzZWxsdXMgc2l0IGFtZXQgcGxhY2VyYXQgbmlzbC4gUHJvaW4gcXVhbSBvcmNpLCBpYWN1bGlzIHB1bHZpbmFyIGN1cnN1cyBzZWQsIHVsbGFtY29ycGVyIHNlZCB0dXJwaXMuIE51bGxhbSBkdWkgbWFzc2EsIHNhZ2l0dGlzIHZpdGFlIHZpdmVycmEgZWdldCwgZXVpc21vZCB2ZWwgdG9ydG9yLiBEb25lYyB2aXZlcnJhIHR1cnBpcyBleCwgYWMgbWF4aW11cyBtYXNzYSBtYXR0aXMgcGxhY2VyYXQuIFByb2luIGV1LlwiO1xuXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiTG9naW5cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIuc3dpdGNoVG9Mb2dpblZpZXcoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uVG9rZW4ge1xuICB0b2tlbklkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHZhbGlkOiBib29sZWFuO1xuICBleHBpcmF0aW9uVGltZTogRGF0ZTtcbiAgYWNjZXNzUmlnaHRzOiBBY2Nlc3NSaWdodFtdO1xufVxuXG5leHBvcnQgZW51bSBBY2Nlc3NSaWdodCB7XG4gIENSRUFURSxcbiAgUkVBRCxcbiAgVVBEQVRFLFxuICBERUxFVEUsXG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9EYXRhTW9kZWxzXCI7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcbmNvbnN0IHVzZXJzVXJsID0gYmFzZVVybCArIFwidXNlcnNcIjtcblxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGdldFVzZXJzKFxuICAgIGF1dGhvcml6YXRpb246IHN0cmluZyxcbiAgICBuYW1lUXVlcnk6IHN0cmluZ1xuICApOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIGNvbnN0IHVybCA9IHVzZXJzVXJsICsgXCI/bmFtZT1cIiArIG5hbWVRdWVyeTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICByZXR1cm4gcmVzdWx0SnNvbjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGVVc2VyKGF1dGhvcml6YXRpb246IHN0cmluZywgdXNlcjogVXNlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHVybCA9IHVzZXJzVXJsICsgXCI/aWQ9XCIgKyB1c2VyLmlkO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb24sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTZXNzaW9uVG9rZW4gfSBmcm9tIFwiLi4vbW9kZWxzL0F1dGhlbnRpY2F0aW9uTW9kZWxzXCI7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcbmNvbnN0IGxvZ2luVXJsID0gYmFzZVVybCArIFwibG9naW5cIjtcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICBwdWJsaWMgYXN5bmMgbG9naW4oXG4gICAgdXNlck5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nXG4gICk6IFByb21pc2U8U2Vzc2lvblRva2VuIHwgdW5kZWZpbmVkPiB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSksXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGxvZ2luVXJsLCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09IDIwMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9