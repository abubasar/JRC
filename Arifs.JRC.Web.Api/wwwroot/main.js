(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_asked_fatawa_asked_fatawa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/asked-fatawa/asked-fatawa.component */ "./src/app/components/asked-fatawa/asked-fatawa.component.ts");
/* harmony import */ var _components_list_fatawa_list_fatawa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list-fatawa/list-fatawa.component */ "./src/app/components/list-fatawa/list-fatawa.component.ts");
/* harmony import */ var _components_list_fatawa_answer_list_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-fatawa-answer/list-fatawa-answer.component */ "./src/app/components/list-fatawa-answer/list-fatawa-answer.component.ts");
/* harmony import */ var _components_add_fatawa_answer_add_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-fatawa-answer/add-fatawa-answer.component */ "./src/app/components/add-fatawa-answer/add-fatawa-answer.component.ts");
/* harmony import */ var _components_all_article_all_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/all-article/all-article.component */ "./src/app/components/all-article/all-article.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/category/category-list/category-list.component */ "./src/app/components/category/category-list/category-list.component.ts");
/* harmony import */ var _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category/add-category/add-category.component */ "./src/app/components/category/add-category/add-category.component.ts");
/* harmony import */ var _components_author_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/author/author-list/author-list.component */ "./src/app/components/author/author-list/author-list.component.ts");
/* harmony import */ var _components_author_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/author/edit-author/edit-author.component */ "./src/app/components/author/edit-author/edit-author.component.ts");
/* harmony import */ var _components_author_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/author/add-author/add-author.component */ "./src/app/components/author/add-author/add-author.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/list-article/list-article.component */ "./src/app/components/list-article/list-article.component.ts");
/* harmony import */ var _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-article/add-article.component */ "./src/app/components/add-article/add-article.component.ts");
/* harmony import */ var _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/article-detail/article-detail.component */ "./src/app/components/article-detail/article-detail.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ask-fatawa/ask-fatawa.component */ "./src/app/components/ask-fatawa/ask-fatawa.component.ts");
/* harmony import */ var _components_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/edit-article/edit-article.component */ "./src/app/components/edit-article/edit-article.component.ts");
/* harmony import */ var _components_tag_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tag/add-tag/add-tag.component */ "./src/app/components/tag/add-tag/add-tag.component.ts");
/* harmony import */ var _components_tag_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tag/edit-tag/edit-tag.component */ "./src/app/components/tag/edit-tag/edit-tag.component.ts");
/* harmony import */ var _components_tag_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/tag/tag-list/tag-list.component */ "./src/app/components/tag/tag-list/tag-list.component.ts");
/* harmony import */ var _components_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/category/edit-category/edit-category.component */ "./src/app/components/category/edit-category/edit-category.component.ts");
/* harmony import */ var _components_edit_fatawa_answer_edit_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/edit-fatawa-answer/edit-fatawa-answer.component */ "./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.ts");
/* harmony import */ var _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./broadcast/broadcast.component */ "./src/app/broadcast/broadcast.component.ts");



























var routes = [
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    { path: 'list', component: _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_14__["ListArticleComponent"] },
    { path: 'add', component: _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_15__["AddArticleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'detail/:id', component: _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_16__["ArticleDetailComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'edit-article/:id', component: _components_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_20__["EditArticleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'add-tag', component: _components_tag_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_21__["AddTagComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'edit-tag/:id', component: _components_tag_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_22__["EditTagComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'tag-list', component: _components_tag_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_23__["TagListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'add-author', component: _components_author_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_11__["AddAuthorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'edit-author/:id', component: _components_author_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_10__["EditAuthorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'author-list', component: _components_author_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_9__["AuthorListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'add-category', component: _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_8__["AddCategoryComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'edit-category/:id', component: _components_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_24__["EditCategoryComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'category-list', component: _components_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'article', component: _components_all_article_all_article_component__WEBPACK_IMPORTED_MODULE_5__["AllArticleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'fatawa', component: _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_19__["AskFatawaComponent"] },
    { path: 'list-fatawa', component: _components_list_fatawa_list_fatawa_component__WEBPACK_IMPORTED_MODULE_2__["ListFatawaComponent"] },
    { path: 'add-fatawa-answer', component: _components_add_fatawa_answer_add_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_4__["AddFatawaAnswerComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'edit-fatawa-answer/:id', component: _components_edit_fatawa_answer_edit_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_25__["EditFatawaAnswerComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'list-fatawa-answer', component: _components_list_fatawa_answer_list_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_3__["ListFatawaAnswerComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'asked-fatawa', component: _components_asked_fatawa_asked_fatawa_component__WEBPACK_IMPORTED_MODULE_1__["AskedFatawaComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'broadcast', component: _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_26__["BroadcastComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<!--##################################-->\r\n<button (click)=\"toggleSubscription()\" class=\"btn btn-primary\" [disabled]=\"notificationMiddleware.pushNotificationStatus.isInProgress || !notificationMiddleware.pushNotificationStatus.isSupported\">\r\n  <span *ngIf=\"!notificationMiddleware.pushNotificationStatus.isSupported\">Push is NOT supported by this device</span>\r\n  <span *ngIf=\"notificationMiddleware.pushNotificationStatus.isSupported && notificationMiddleware.pushNotificationStatus.isSubscribed\">Unsubscribe</span>\r\n  <span *ngIf=\"notificationMiddleware.pushNotificationStatus.isSupported && !notificationMiddleware.pushNotificationStatus.isSubscribed\">Subscribe</span>\r\n</button>\r\n\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let notif of notificationMiddleware.notifications\">\r\n    <a [routerLink]=\"cleanUrl(notif.Url)\" (click)=\"removeNotif(notif)\">{{notif.Title}}\r\n      <small>{{notif.Message}}</small>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<!--##################################-->\r\n<footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <p class=\"text-center\" style=\"color:white;\">\r\n        <span style=\"font-style:italic\"></span>ফিকহি ইসলামি.com &copy; 2019\r\n        <a href=\"https://www.fiqheislami.com\" target=\"_blank\">www.fiqheislami.com</a>\r\n      </p>\r\n    </div>\r\n  </footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #009999;\n  color: white;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzb2Z0LWNvZGVcXERlc2t0b3BcXEJMT0dcXEpSQ1xcSlJDV2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcblxyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTk5OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_notification_middleware_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/notification-middleware.service */ "./src/app/core/notification-middleware.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(notificationMiddleware) {
        this.notificationMiddleware = notificationMiddleware;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.notificationMiddleware.init();
    };
    AppComponent.prototype.toggleSubscription = function () {
        this.notificationMiddleware.toggleSubscription();
    };
    AppComponent.prototype.cleanUrl = function (url) {
        if (url.indexOf(self.location.origin) >= 0) {
            return url.replace(self.location.origin, '');
        }
        return url;
    };
    AppComponent.prototype.removeNotif = function (notif) {
        var index = this.notificationMiddleware.notifications.indexOf(notif);
        if (index >= 0) {
            this.notificationMiddleware.notifications.splice(index, 1);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_notification_middleware_service__WEBPACK_IMPORTED_MODULE_2__["NotificationMiddlewareService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-article/add-article.component */ "./src/app/components/add-article/add-article.component.ts");
/* harmony import */ var _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/list-article/list-article.component */ "./src/app/components/list-article/list-article.component.ts");
/* harmony import */ var _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/article-detail/article-detail.component */ "./src/app/components/article-detail/article-detail.component.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/url.service */ "./src/app/services/url.service.ts");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ask-fatawa/ask-fatawa.component */ "./src/app/components/ask-fatawa/ask-fatawa.component.ts");
/* harmony import */ var _components_list_fatawa_list_fatawa_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/list-fatawa/list-fatawa.component */ "./src/app/components/list-fatawa/list-fatawa.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/category/add-category/add-category.component */ "./src/app/components/category/add-category/add-category.component.ts");
/* harmony import */ var _components_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/category/edit-category/edit-category.component */ "./src/app/components/category/edit-category/edit-category.component.ts");
/* harmony import */ var _components_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/category/category-list/category-list.component */ "./src/app/components/category/category-list/category-list.component.ts");
/* harmony import */ var _components_tag_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/tag/add-tag/add-tag.component */ "./src/app/components/tag/add-tag/add-tag.component.ts");
/* harmony import */ var _components_tag_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/tag/edit-tag/edit-tag.component */ "./src/app/components/tag/edit-tag/edit-tag.component.ts");
/* harmony import */ var _components_tag_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/tag/tag-list/tag-list.component */ "./src/app/components/tag/tag-list/tag-list.component.ts");
/* harmony import */ var _components_author_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/author/add-author/add-author.component */ "./src/app/components/author/add-author/add-author.component.ts");
/* harmony import */ var _components_author_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/author/edit-author/edit-author.component */ "./src/app/components/author/edit-author/edit-author.component.ts");
/* harmony import */ var _components_author_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/author/author-list/author-list.component */ "./src/app/components/author/author-list/author-list.component.ts");
/* harmony import */ var _components_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/edit-article/edit-article.component */ "./src/app/components/edit-article/edit-article.component.ts");
/* harmony import */ var _components_all_article_all_article_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/all-article/all-article.component */ "./src/app/components/all-article/all-article.component.ts");
/* harmony import */ var _services_fatawa_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/fatawa.service */ "./src/app/services/fatawa.service.ts");
/* harmony import */ var _components_add_fatawa_answer_add_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/add-fatawa-answer/add-fatawa-answer.component */ "./src/app/components/add-fatawa-answer/add-fatawa-answer.component.ts");
/* harmony import */ var _components_edit_fatawa_answer_edit_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/edit-fatawa-answer/edit-fatawa-answer.component */ "./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.ts");
/* harmony import */ var _components_list_fatawa_answer_list_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/list-fatawa-answer/list-fatawa-answer.component */ "./src/app/components/list-fatawa-answer/list-fatawa-answer.component.ts");
/* harmony import */ var _services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/fatawa-answer.service */ "./src/app/services/fatawa-answer.service.ts");
/* harmony import */ var _components_asked_fatawa_asked_fatawa_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/asked-fatawa/asked-fatawa.component */ "./src/app/components/asked-fatawa/asked-fatawa.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_generated__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./core/generated */ "./src/app/core/generated.ts");
/* harmony import */ var _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./broadcast/broadcast.component */ "./src/app/broadcast/broadcast.component.ts");















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_9__["AddArticleComponent"],
                _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_10__["ListArticleComponent"],
                _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDetailComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_19__["AskFatawaComponent"],
                _components_list_fatawa_list_fatawa_component__WEBPACK_IMPORTED_MODULE_20__["ListFatawaComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_25__["AddCategoryComponent"],
                _components_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_26__["EditCategoryComponent"],
                _components_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_27__["CategoryListComponent"],
                _components_tag_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_28__["AddTagComponent"],
                _components_tag_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_29__["EditTagComponent"],
                _components_tag_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_30__["TagListComponent"],
                _components_author_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_31__["AddAuthorComponent"],
                _components_author_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_32__["EditAuthorComponent"],
                _components_author_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_33__["AuthorListComponent"],
                _components_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_34__["EditArticleComponent"],
                _components_all_article_all_article_component__WEBPACK_IMPORTED_MODULE_35__["AllArticleComponent"],
                _components_add_fatawa_answer_add_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_37__["AddFatawaAnswerComponent"],
                _components_edit_fatawa_answer_edit_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_38__["EditFatawaAnswerComponent"],
                _components_list_fatawa_answer_list_fatawa_answer_component__WEBPACK_IMPORTED_MODULE_39__["ListFatawaAnswerComponent"],
                _components_asked_fatawa_asked_fatawa_component__WEBPACK_IMPORTED_MODULE_41__["AskedFatawaComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_42__["SidebarComponent"],
                _broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_46__["BroadcastComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__["OwlModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_44__["environment"].production })
            ],
            providers: [
                _services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"],
                _services_url_service__WEBPACK_IMPORTED_MODULE_13__["UrlService"],
                _services_article_service__WEBPACK_IMPORTED_MODULE_14__["ArticleService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_15__["CategoryService"],
                _services_tag_service__WEBPACK_IMPORTED_MODULE_16__["TagService"],
                _services_fatawa_service__WEBPACK_IMPORTED_MODULE_36__["FatawaService"],
                _services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_40__["FatawaAnswerService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                _core_generated__WEBPACK_IMPORTED_MODULE_45__["NotificationService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptorService"],
                    multi: true
                },
                { provide: "BASE_API_URL", useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_44__["environment"].apiUrl }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/broadcast/broadcast.component.html":
/*!****************************************************!*\
  !*** ./src/app/broadcast/broadcast.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Broadcast messages</h1>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"form-group\">\n      <label>Title</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.title\">\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"form-group\">\n      <label>Message</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.message\">\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"form-group\">\n      <label>Url</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.url\">\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <a (click)=\"broadcast()\" class=\"btn btn-primary\">Broadcast</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/broadcast/broadcast.component.scss":
/*!****************************************************!*\
  !*** ./src/app/broadcast/broadcast.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb2FkY2FzdC9icm9hZGNhc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/broadcast/broadcast.component.ts":
/*!**************************************************!*\
  !*** ./src/app/broadcast/broadcast.component.ts ***!
  \**************************************************/
/*! exports provided: BroadcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastComponent", function() { return BroadcastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/generated */ "./src/app/core/generated.ts");



var BroadcastComponent = /** @class */ (function () {
    function BroadcastComponent(notificationService) {
        this.notificationService = notificationService;
        this.model = { url: "", title: "", message: "" };
    }
    BroadcastComponent.prototype.ngOnInit = function () {
    };
    BroadcastComponent.prototype.broadcast = function () {
        var _this = this;
        this.notificationService.broadcast(this.model).subscribe(function () {
            _this.model.url = "";
            _this.model.title = "";
            _this.model.message = "";
        });
    };
    BroadcastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-broadcast',
            template: __webpack_require__(/*! ./broadcast.component.html */ "./src/app/broadcast/broadcast.component.html"),
            styles: [__webpack_require__(/*! ./broadcast.component.scss */ "./src/app/broadcast/broadcast.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_generated__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], BroadcastComponent);
    return BroadcastComponent;
}());



/***/ }),

/***/ "./src/app/components/add-article/add-article.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-article/add-article.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">নতুন লেখা তৈরি করুন</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"referenceNo\">Serial No</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"referenceNo\" id=\"referenceNo\" [(ngModel)]=\"model.referenceNo\" readonly>\r\n                  </div>\r\n           <div class=\"form-group\">\r\n             <label for=\"title\">শিরোনাম</label>\r\n             <input type=\"text\" id=\"title\" name=\"title\" [(ngModel)]=\"model.title\" class=\"form-control\">\r\n           </div>\r\n           \r\n           <div class=\"form-group\">\r\n            <label for=\"headLine\">প্রথম দু-চার লাইন</label>\r\n            <input type=\"text\" id=\"headLine\" name=\"price\" [(ngModel)]=\"model.headLine\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"authorId\">লেখক </label>\r\n            <select id=\"authorId\" name=\"authorId\" [(ngModel)]=\"model.authorId\" class=\"form-control\">\r\n              <option *ngFor=\"let author of authors\" value=\"{{author.id}}\">{{author.name}}</option>\r\n              </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"categoryId\">বিভাগ </label>\r\n            <select id=\"categoryId\" name=\"categoryId\" [(ngModel)]=\"model.categoryId\" class=\"form-control\">\r\n              <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"tagId\">প্রসঙ্গ </label>\r\n            <select id=\"tagId\" name=\"tagId\" [(ngModel)]=\"model.tagId\" class=\"form-control\">\r\n              <option *ngFor=\"let tag of tags\" value=\"{{tag.id}}\">{{tag.name}}</option>\r\n              </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n       \r\n        \r\n            <label for=\"body\">লেখা তৈরি করুন</label>\r\n            <ckeditor name=\"body\" [(ngModel)]=\"model.body\" [editor]=\"Editor\"></ckeditor>\r\n          </div>\r\n\r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"saveArticle(model)\">Submit</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/list']\">Back To Articles List</button>\r\n           </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/add-article/add-article.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-article/add-article.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWFydGljbGUvYWRkLWFydGljbGUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-article/add-article.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-article/add-article.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddArticleComponent", function() { return AddArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/base-request-model */ "./src/app/entities/base-request-model.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AddArticleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddArticleComponent, _super);
    function AddArticleComponent(http, router, service, categoryService, tagService, authorService) {
        var _this = _super.call(this, service) || this;
        _this.http = http;
        _this.router = router;
        _this.service = service;
        _this.categoryService = categoryService;
        _this.tagService = tagService;
        _this.authorService = authorService;
        _this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        _this.model.body = 'write here';
        return _this;
    }
    AddArticleComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        this.loadTags();
        this.loadAuthors();
        this.generateReferenceId();
    };
    AddArticleComponent.prototype.generateReferenceId = function () {
        var _this = this;
        this.service.generateReferenceId().subscribe(function (res) {
            console.log(res);
            _this.model.referenceNo = res.referenceNo;
        });
    };
    AddArticleComponent.prototype.loadCategories = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.categoryService.search(r).subscribe(function (res) {
            _this.categories = res;
            console.log(res);
        });
    };
    AddArticleComponent.prototype.loadTags = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.tagService.search(r).subscribe(function (res) {
            _this.tags = res;
            console.log(res);
        });
    };
    AddArticleComponent.prototype.loadAuthors = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.authorService.search(r).subscribe(function (res) {
            _this.authors = res;
            console.log(res);
        });
    };
    AddArticleComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__["Entity"]();
    };
    AddArticleComponent.prototype.saveArticle = function (model) {
        var _this = this;
        console.log(model.body);
        this.http.post('http://localhost:25442/api/article/add', model).subscribe(function (res) {
            _this.router.navigate(['article']);
            console.log(res);
        });
    };
    AddArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-article',
            template: __webpack_require__(/*! ./add-article.component.html */ "./src/app/components/add-article/add-article.component.html"),
            styles: [__webpack_require__(/*! ./add-article.component.sass */ "./src/app/components/add-article/add-article.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], src_app_services_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"], src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"], src_app_services_author_service__WEBPACK_IMPORTED_MODULE_9__["AuthorService"]])
    ], AddArticleComponent);
    return AddArticleComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/add-fatawa-answer/add-fatawa-answer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-fatawa-answer/add-fatawa-answer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <div class=\"card card-default\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">ফিকহি ইসলামি.Com আপনার প্রশ্নের উত্তর যত দ্রুত সম্ভব প্রদান করার চেষ্টা করবে - ইনশাআল্লাহ।</h3>\n          </div>\n          <div class=\"card-body\">\n            <form>questionNo\n                <div class=\"form-group\">\n                    <label for=\"questionNo\">ফাতাওয়া নং:</label>\n                    <input type=\"text\" class=\"form-control\" name=\"questionNo\" id=\"questionNo\" [(ngModel)]=\"model.questionNo\" readonly>\n                    </div>\n             <div class=\"form-group\">\n               <label for=\"questioner\"> প্রশ্নকর্তা:</label>\n               <input type=\"text\" id=\"questioner\" name=\"questioner\" [(ngModel)]=\"model.questioner\" class=\"form-control\">\n             </div>\n             <div class=\"form-group\">\n              <label for=\"address\">ঠিকানা</label>\n              <input type=\"text\" id=\"address\" name=\"address\" [(ngModel)]=\"model.address\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n             \n                <label for=\"question\">প্রশ্ন:</label>\n                <ckeditor name=\"question\" [(ngModel)]=\"model.question\" [editor]=\"Editor\"></ckeditor>\n              </div>\n              <div class=\"form-group\">\n              \n                <label for=\"answer\">উত্তর (বাংলায় লিখুন):</label>\n                <ckeditor name=\"answer\" [(ngModel)]=\"model.answer\" [editor]=\"Editor\"></ckeditor>\n              \n              </div>\n             \n         \n  \n            <div class=\"text-right\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"saveFatawaAnswer()\">Submit</button>\n            </div>\n           \n          \n  \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/components/add-fatawa-answer/add-fatawa-answer.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-fatawa-answer/add-fatawa-answer.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWZhdGF3YS1hbnN3ZXIvYWRkLWZhdGF3YS1hbnN3ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-fatawa-answer/add-fatawa-answer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-fatawa-answer/add-fatawa-answer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddFatawaAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFatawaAnswerComponent", function() { return AddFatawaAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_fatawa_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../entities/fatawa-answer */ "./src/app/entities/fatawa-answer.ts");
/* harmony import */ var _services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/fatawa-answer.service */ "./src/app/services/fatawa-answer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddFatawaAnswerComponent = /** @class */ (function () {
    function AddFatawaAnswerComponent(service, router) {
        this.service = service;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.model = new _entities_fatawa_answer__WEBPACK_IMPORTED_MODULE_2__["FatawaAnswer"]();
        this.model.question = "write here";
        this.model.answer = "write here";
    }
    AddFatawaAnswerComponent.prototype.ngOnInit = function () {
        this.generateReferenceId();
    };
    AddFatawaAnswerComponent.prototype.saveFatawaAnswer = function () {
        var _this = this;
        this.service.saveFatawaAnswer(this.model).subscribe(function (res) {
            _this.router.navigate(['list-fatawa-answer']);
            console.log(res);
        });
    };
    AddFatawaAnswerComponent.prototype.generateReferenceId = function () {
        var _this = this;
        this.service.generateFatawaNo().subscribe(function (res) {
            console.log(res);
            _this.model.questionNo = res.referenceNo;
        });
    };
    AddFatawaAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-add-fatawa-answer',
            template: __webpack_require__(/*! ./add-fatawa-answer.component.html */ "./src/app/components/add-fatawa-answer/add-fatawa-answer.component.html"),
            styles: [__webpack_require__(/*! ./add-fatawa-answer.component.scss */ "./src/app/components/add-fatawa-answer/add-fatawa-answer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_3__["FatawaAnswerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddFatawaAnswerComponent);
    return AddFatawaAnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/all-article/all-article.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-article/all-article.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div class=\"container\">\r\n  <div class=\"row\">\r\n      <form>\r\n          <div class=\"form-group\">\r\n             <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\">\r\n            \r\n          </div>\r\n        </form>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n          &nbsp;  <a [routerLink]=\"['/add']\" class=\"btn btn-xs btn-primary d-flex justify-content-center\"><b>+</b>নতুন লেখা তৈরি করুন</a>\r\n          <tr>\r\n            <th (click)=\"sort('referenceNo')\">Serial No</th>\r\n            <th (click)=\"sort('title')\">শিরোনাম</th>\r\n            <th (click)=\"sort('author.name')\">লেখক</th>\r\n            <th (click)=\"sort('tag.name')\">প্রসঙ্গ</th>\r\n            <th (click)=\"sort('category.name')\">বিভাগ</th>\r\n           \r\n            <th>Actions</th>\r\n  \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let model of models\">\r\n            <td>{{model.referenceNo}}</td>\r\n            <td>{{model.title}}</td>\r\n            <td>{{model.author.name}}</td>\r\n            <td>{{model.tag.name}}</td>\r\n            <td>{{model.category.name}}</td>\r\n           \r\n            <td> <a class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-article/',model.id]\"><i class=\"fa fa-pencil\"></i></a></td>\r\n            <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(model.id)\"><i class=\"fa fa-remove\"></i></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"d-flex justify-content-center\">\r\n      <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\r\n  </div>\r\n  <div class=\"d-flex justify-content-center\">\r\n      \r\n    <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\r\n    <label>Current Page: {{searchRequest.page}} </label>\r\n    <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/all-article/all-article.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-article/all-article.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsLWFydGljbGUvYWxsLWFydGljbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/all-article/all-article.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/all-article/all-article.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllArticleComponent", function() { return AllArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/components/base/base.component.ts");




var AllArticleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AllArticleComponent, _super);
    function AllArticleComponent(service) {
        return _super.call(this, service) || this;
    }
    AllArticleComponent.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    AllArticleComponent.prototype.ngOnInit = function () {
        this.search();
        this.searchForPaging();
    };
    AllArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-all-article',
            template: __webpack_require__(/*! ./all-article.component.html */ "./src/app/components/all-article/all-article.component.html"),
            styles: [__webpack_require__(/*! ./all-article.component.scss */ "./src/app/components/all-article/all-article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], AllArticleComponent);
    return AllArticleComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/article-detail/article-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/article-detail/article-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <h4>\r\n          {{article.title}}\r\n      </h4>\r\n      <h5>\r\n          {{article.headLine}}\r\n      </h5>\r\n      <h5>\r\n          {{article.author.name}}\r\n      </h5>\r\n<hr>\r\n<div [innerHTML]=\"article.body\"></div>\r\n\r\n    </div>\r\n      \r\n     \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/article-detail/article-detail.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/article-detail/article-detail.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/article-detail/article-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/article-detail/article-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ArticleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailComponent", function() { return ArticleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ArticleDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ArticleDetailComponent, _super);
    function ArticleDetailComponent(service, activatedRoute, http) {
        var _this = _super.call(this, service) || this;
        _this.activatedRoute = activatedRoute;
        _this.http = http;
        return _this;
    }
    ArticleDetailComponent.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    ArticleDetailComponent.prototype.ngOnInit = function () {
        this.get(this.activatedRoute.snapshot.params.id);
    };
    ArticleDetailComponent.prototype.get = function (id) {
        var _this = this;
        this.http.get('http://localhost:25442/api/article/getDetail/' + id).subscribe(function (res) {
            console.log(res);
            _this.article = res;
        });
    };
    ArticleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-detail',
            template: __webpack_require__(/*! ./article-detail.component.html */ "./src/app/components/article-detail/article-detail.component.html"),
            styles: [__webpack_require__(/*! ./article-detail.component.sass */ "./src/app/components/article-detail/article-detail.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/ask-fatawa/ask-fatawa.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ask-fatawa/ask-fatawa.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 offset-md-1\">\r\n        <div class=\"card card-default\">\r\n          <div class=\"card-header\">\r\n            <h3 class=\"card-title\">ফিকহি ইসলামি.Com আপনার প্রশ্নের উত্তর যত দ্রুত সম্ভব প্রদান করার চেষ্টা করবে - ইনশাআল্লাহ।</h3>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"name\">নাম:</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\r\n                    </div>\r\n             <div class=\"form-group\">\r\n               <label for=\"address\"> ঠিকানা:</label>\r\n               <input type=\"text\" id=\"address\" name=\"address\" [(ngModel)]=\"model.address\" class=\"form-control\">\r\n             </div>\r\n             <div class=\"form-group\">\r\n              <label for=\"phone\">মোবাইল নম্বর:</label>\r\n              <input type=\"text\" id=\"phone\" name=\"phone\" [(ngModel)]=\"model.phone\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">ইমেইল:</label>\r\n              <input type=\"text\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"question\">জিজ্ঞাসা (বাংলায় লিখুন):</label>\r\n              <textarea type=\"text\" id=\"question\" rows=\"5\" name=\"question\" [(ngModel)]=\"model.question\" class=\"form-control\"></textarea>\r\n            </div>\r\n             \r\n         \r\n  \r\n            <div class=\"text-right\">\r\n                <input type=\"hidden\" name=\"isAnswered\" value=\"false\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"saveFatawa()\">Submit</button>\r\n            </div>\r\n           \r\n          \r\n  \r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/ask-fatawa/ask-fatawa.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/ask-fatawa/ask-fatawa.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNrLWZhdGF3YS9hc2stZmF0YXdhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/ask-fatawa/ask-fatawa.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ask-fatawa/ask-fatawa.component.ts ***!
  \***************************************************************/
/*! exports provided: AskFatawaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskFatawaComponent", function() { return AskFatawaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_fatawa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fatawa.service */ "./src/app/services/fatawa.service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");





var AskFatawaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AskFatawaComponent, _super);
    function AskFatawaComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        return _this;
    }
    AskFatawaComponent.prototype.ngOnInit = function () {
    };
    AskFatawaComponent.prototype.saveFatawa = function () {
        var _this = this;
        this.service.saveFatawa(this.model).subscribe(function (res) {
            _this.reset();
            console.log('success');
        }, function (error) {
            console.log(error);
        });
    };
    AskFatawaComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_4__["Entity"]();
    };
    AskFatawaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ask-fatawa',
            template: __webpack_require__(/*! ./ask-fatawa.component.html */ "./src/app/components/ask-fatawa/ask-fatawa.component.html"),
            styles: [__webpack_require__(/*! ./ask-fatawa.component.scss */ "./src/app/components/ask-fatawa/ask-fatawa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_fatawa_service__WEBPACK_IMPORTED_MODULE_2__["FatawaService"]])
    ], AskFatawaComponent);
    return AskFatawaComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/asked-fatawa/asked-fatawa.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/asked-fatawa/asked-fatawa.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  \r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n               <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\">\r\n              \r\n            </div>\r\n          </form>\r\n    </div>\r\n    <div class=\"row\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          \r\n            <tr>\r\n              <th (click)=\"sort('name')\">প্রশ্নকর্তা</th>\r\n              <th (click)=\"sort('address')\">ঠিকানা</th>\r\n              <th (click)=\"sort('phone')\">ফোন</th>\r\n              <th (click)=\"sort('email')\">ই-মেইল</th>\r\n              <th (click)=\"sort('question')\">প্রশ্ন</th>\r\n              <th (click)=\"sort('question')\">Status</th>\r\n             \r\n              <th>Is Answered</th>\r\n    \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let model of models\">\r\n              <td>{{model.name}}</td>\r\n              <td>{{model.address}}</td>\r\n              <td>{{model.phone}}</td>\r\n              <td>{{model.email}}</td>\r\n              <td>{{model.question}}</td>\r\n              <td>{{model.isAnswered}}</td>\r\n             \r\n              <td> <a class=\"btn btn-primary\" type=\"button\" (click)=\"isComplete(model.id)\"><i class=\"fa fa-check\"></i></a></td>\r\n              <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(model.id)\"><i class=\"fa fa-remove\"></i></button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"d-flex justify-content-center\">\r\n        <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        \r\n      <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\r\n      <label>Current Page: {{searchRequest.page}} </label>\r\n      <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\r\n    </div>\r\n    \r\n    "

/***/ }),

/***/ "./src/app/components/asked-fatawa/asked-fatawa.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/asked-fatawa/asked-fatawa.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNrZWQtZmF0YXdhL2Fza2VkLWZhdGF3YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/asked-fatawa/asked-fatawa.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/asked-fatawa/asked-fatawa.component.ts ***!
  \*******************************************************************/
/*! exports provided: AskedFatawaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskedFatawaComponent", function() { return AskedFatawaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_fatawa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/fatawa.service */ "./src/app/services/fatawa.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AskedFatawaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AskedFatawaComponent, _super);
    function AskedFatawaComponent(service, activatedRoute, http) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.activatedRoute = activatedRoute;
        _this.http = http;
        return _this;
    }
    AskedFatawaComponent.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    AskedFatawaComponent.prototype.ngOnInit = function () {
        this.search();
        this.searchForPaging();
    };
    AskedFatawaComponent.prototype.isComplete = function (id) {
        var _this = this;
        this.http.get('http://localhost:25442/api/fatawa/get/' + id).subscribe(function (res) {
            console.log(res);
            _this.model = res;
            _this.model.isAnswered = true;
            _this.service.edit(_this.model).subscribe(function (res) {
                console.log(res);
                _this.search();
            });
        });
    };
    AskedFatawaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-asked-fatawa',
            template: __webpack_require__(/*! ./asked-fatawa.component.html */ "./src/app/components/asked-fatawa/asked-fatawa.component.html"),
            styles: [__webpack_require__(/*! ./asked-fatawa.component.scss */ "./src/app/components/asked-fatawa/asked-fatawa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fatawa_service__WEBPACK_IMPORTED_MODULE_1__["FatawaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AskedFatawaComponent);
    return AskedFatawaComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/author/add-author/add-author.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/author/add-author/add-author.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"card card-default\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Create New Author</h3>\n        </div>\n        <div class=\"card-body\">\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"name\">Author Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\n                  </div>\n          \n          <div class=\"text-right\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"save()\">Save</button>\n          </div>\n         \n          <div class=\"text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/author-list']\">Back To Author List</button>\n            </div>\n  \n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/author/add-author/add-author.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/author/add-author/add-author.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aG9yL2FkZC1hdXRob3IvYWRkLWF1dGhvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/author/add-author/add-author.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/author/add-author/add-author.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAuthorComponent", function() { return AddAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");





var AddAuthorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddAuthorComponent, _super);
    function AddAuthorComponent(service) {
        return _super.call(this, service) || this;
    }
    AddAuthorComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_4__["Entity"]();
    };
    AddAuthorComponent.prototype.ngOnInit = function () {
    };
    AddAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-author',
            template: __webpack_require__(/*! ./add-author.component.html */ "./src/app/components/author/add-author/add-author.component.html"),
            styles: [__webpack_require__(/*! ./add-author.component.scss */ "./src/app/components/author/add-author/add-author.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AddAuthorComponent);
    return AddAuthorComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/author/author-list/author-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/author/author-list/author-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <form>\n            <div class=\"form-group\">\n               <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\">\n              \n            </div>\n          </form>\n    </div>\n    <div class=\"row\">\n      <table class=\"table table-hover\">\n        <thead>\n            &nbsp;  <a [routerLink]=\"['/add-author']\" class=\"btn btn-xs btn-primary d-flex justify-content-center\"><b>+</b>নতুন লেখক যোগ করুন</a>\n        <tr>\n          <th (click)=\"sort('name')\">Author Name</th>\n         \n          <th>Actions</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let model of models\">\n          <td>{{model.name}}</td>\n         \n          <td> <button class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-author/',model.id]\"><i class=\"fa fa-pencil\"></i></button></td>\n          <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(model.id)\"><i class=\"fa fa-remove\"></i></button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n\n<div class=\"d-flex justify-content-center\">\n    <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\n</div>\n<div class=\"d-flex justify-content-center\">\n    \n  <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\n  <label>Current Page: {{searchRequest.page}} </label>\n  <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/author/author-list/author-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/author/author-list/author-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aG9yL2F1dGhvci1saXN0L2F1dGhvci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/author/author-list/author-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/author/author-list/author-list.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListComponent", function() { return AuthorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");




var AuthorListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthorListComponent, _super);
    function AuthorListComponent(service) {
        return _super.call(this, service) || this;
    }
    AuthorListComponent.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    AuthorListComponent.prototype.ngOnInit = function () {
        this.search();
        this.searchForPaging();
    };
    AuthorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-author-list',
            template: __webpack_require__(/*! ./author-list.component.html */ "./src/app/components/author/author-list/author-list.component.html"),
            styles: [__webpack_require__(/*! ./author-list.component.scss */ "./src/app/components/author/author-list/author-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AuthorListComponent);
    return AuthorListComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/author/edit-author/edit-author.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/author/edit-author/edit-author.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Edit Author</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Author Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\r\n                  </div>\r\n          \r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"edit()\">Edit</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/author-list']\">Back To Author List </button>\r\n          </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/author/edit-author/edit-author.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/author/edit-author/edit-author.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aG9yL2VkaXQtYXV0aG9yL2VkaXQtYXV0aG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/author/edit-author/edit-author.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/author/edit-author/edit-author.component.ts ***!
  \************************************************************************/
/*! exports provided: EditAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAuthorComponent", function() { return EditAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _entities_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var EditAuthorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditAuthorComponent, _super);
    function EditAuthorComponent(service, activatedRoute, http) {
        var _this = _super.call(this, service) || this;
        _this.activatedRoute = activatedRoute;
        _this.http = http;
        return _this;
    }
    EditAuthorComponent.prototype.reset = function () {
        this.model = new _entities_entity__WEBPACK_IMPORTED_MODULE_2__["Entity"]();
    };
    EditAuthorComponent.prototype.ngOnInit = function () {
        this.get(this.activatedRoute.snapshot.params.id);
    };
    EditAuthorComponent.prototype.get = function (id) {
        var _this = this;
        this.http.get('http://localhost:25442/api/author/get/' + id).subscribe(function (res) {
            console.log(res);
            _this.model = res;
        });
    };
    EditAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-author',
            template: __webpack_require__(/*! ./edit-author.component.html */ "./src/app/components/author/edit-author/edit-author.component.html"),
            styles: [__webpack_require__(/*! ./edit-author.component.scss */ "./src/app/components/author/edit-author/edit-author.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], EditAuthorComponent);
    return EditAuthorComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/base/base.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/base/base.component.ts ***!
  \***************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entities/base-request-model */ "./src/app/entities/base-request-model.ts");


var BaseComponent = /** @class */ (function () {
    function BaseComponent(service) {
        this.service = service;
        this.totalCount = 0;
        this.model = this.createInstance(src_app_entities_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
        this.searchRequest = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_1__["BaseRequestModel"]();
        this.searchRequest.page = 1;
        this.searchRequest.orderBy = "createdBy";
        this.searchRequest.isAscending = false;
    }
    BaseComponent.prototype.save = function () {
        var _this = this;
        this.service.save(this.model).subscribe(function (res) {
            _this.reset();
            console.log('success');
        }, function (error) {
            console.log(error);
        });
    };
    BaseComponent.prototype.createInstance = function (c) {
        return new c();
    };
    BaseComponent.prototype.edit = function () {
        var _this = this;
        this.service.edit(this.model).subscribe(function (res) {
            _this.reset();
            console.log('success');
        }, function (error) {
            console.log(error);
        });
    };
    BaseComponent.prototype.delete = function (id) {
        var _this = this;
        var result = confirm("Are You sure to delete this");
        if (result) {
            this.service.delete(id).subscribe(function (res) {
                _this.search();
            }, function (error) {
                console.log(error);
            });
        }
    };
    BaseComponent.prototype.searchForPaging = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_1__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.service.search(r).subscribe(function (res) {
            for (var i = 0; i < res.length; ++i) {
                _this.totalCount++;
            }
            _this.searchRequest.totalPage = Math.ceil(_this.totalCount / 10);
        }, function (error) {
            console.log(error);
        });
    };
    BaseComponent.prototype.search = function () {
        var _this = this;
        this.service.search(this.searchRequest).subscribe(function (res) {
            _this.models = res;
            if (_this.models.length === 0) {
                console.log('No search result found');
            }
            console.log(_this.models);
        }, function (error) {
            console.log(error);
        });
    };
    BaseComponent.prototype.sort = function (property) {
        this.searchRequest.orderBy = property;
        this.searchRequest.isAscending = !this.searchRequest.isAscending;
        this.search();
    };
    BaseComponent.prototype.previous = function () {
        if (this.searchRequest.page > 1) {
            this.searchRequest.page = this.searchRequest.page - 1;
            this.search();
        }
    };
    BaseComponent.prototype.next = function () {
        if (this.searchRequest.totalPage - this.searchRequest.page > 0) {
            this.searchRequest.page = this.searchRequest.page + 1;
            this.search();
        }
    };
    BaseComponent.prototype.goto = function (page) {
        this.searchRequest.page = page;
        this.search();
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/components/category/add-category/add-category.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/category/add-category/add-category.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"card card-default\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Create New Category</h3>\n        </div>\n        <div class=\"card-body\">\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"name\">Category Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\n                  </div>\n          \n          <div class=\"text-right\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"save()\">Save</button>\n          </div>\n         \n          <div class=\"text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/category-list']\">Back To Category List</button>\n            </div>\n  \n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/category/add-category/add-category.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/category/add-category/add-category.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/category/add-category/add-category.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/category/add-category/add-category.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");





var AddCategoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddCategoryComponent, _super);
    function AddCategoryComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        return _this;
    }
    AddCategoryComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_4__["Entity"]();
    };
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/components/category/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/components/category/add-category/add-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/category/category-list/category-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/category/category-list/category-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n   \n    <div class=\"row\">\n        <form>\n            <div class=\"form-group\">\n               <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\">\n              \n            </div>\n          </form>\n    </div>\n    <div class=\"row\">\n      <table class=\"table table-hover\">\n        <thead>\n            &nbsp;  <a [routerLink]=\"['/add-category']\" class=\"btn btn-xs btn-primary d-flex justify-content-center\"><b>+</b>নতুন বিভাগ যোগ করুন</a>\n  \n        <tr>\n          <th (click)=\"sort('name')\">Category Name</th>\n         \n          <th>Actions</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let category of models\">\n          <td>{{category.name}}</td>\n         \n          <td> <a class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-category/',category.id]\"><i class=\"fa fa-pencil\"></i></a></td>\n          <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(category.id)\"><i class=\"fa fa-remove\"></i></button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n\n<div class=\"d-flex justify-content-center\">\n    <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\n</div>\n<div class=\"d-flex justify-content-center\">\n    \n  <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\n  <label>Current Page: {{searchRequest.page}} </label>\n  <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\n</div>"

/***/ }),

/***/ "./src/app/components/category/category-list/category-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/category/category-list/category-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/category/category-list/category-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/category/category-list/category-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");




var CategoryListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryListComponent, _super);
    function CategoryListComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        return _this;
    }
    CategoryListComponent.prototype.reset = function () {
        console.log("not implemented");
    };
    CategoryListComponent.prototype.ngOnInit = function () {
        this.search();
        this.searchForPaging();
    };
    CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/components/category/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/app/components/category/category-list/category-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/category/edit-category/edit-category.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/category/edit-category/edit-category.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"card card-default\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Create New Category</h3>\n        </div>\n        <div class=\"card-body\">\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"name\">Category Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\n                  </div>\n          \n          <div class=\"text-right\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"edit()\">Edit</button>\n          </div>\n         \n          <div class=\"text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/category-list']\">Back To Category List</button>\n            </div>\n  \n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/category/edit-category/edit-category.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/category/edit-category/edit-category.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS9lZGl0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/category/edit-category/edit-category.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/category/edit-category/edit-category.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EditCategoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditCategoryComponent, _super);
    function EditCategoryComponent(service, activatedRoute, http) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.activatedRoute = activatedRoute;
        _this.http = http;
        return _this;
    }
    EditCategoryComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_5__["Entity"]();
    };
    EditCategoryComponent.prototype.ngOnInit = function () {
        this.get(this.activatedRoute.snapshot.params.id);
    };
    EditCategoryComponent.prototype.get = function (id) {
        var _this = this;
        this.http.get('http://localhost:25442/api/category/get/' + id).subscribe(function (res) {
            console.log(res);
            _this.model = res;
        });
    };
    EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./src/app/components/category/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.scss */ "./src/app/components/category/edit-category/edit-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  জমিয়াতুল খায়ের আল ইসলামিয়া, সিলেট।\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-article/edit-article.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-article/edit-article.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Edit Article</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"referenceNo\">Serial No</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"referenceNo\" id=\"referenceNo\" [(ngModel)]=\"article.referenceNo\" readonly>\r\n                  </div>\r\n           <div class=\"form-group\">\r\n             <label for=\"title\">Title</label>\r\n             <input type=\"text\" id=\"title\" name=\"title\" [(ngModel)]=\"article.title\" class=\"form-control\">\r\n           </div>\r\n           \r\n           <div class=\"form-group\">\r\n            <label for=\"headLine\">HeadLine</label>\r\n            <input type=\"text\" id=\"headLine\" name=\"price\" [(ngModel)]=\"article.headLine\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"authorId\">Author </label>\r\n            <select id=\"authorId\" name=\"authorId\" [(ngModel)]=\"article.authorId\" class=\"form-control\">\r\n              <option *ngFor=\"let author of authors\" value=\"{{author.id}}\">{{author.name}}</option>\r\n              </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"categoryId\">Category </label>\r\n            <select id=\"categoryId\" name=\"categoryId\" [(ngModel)]=\"article.categoryId\" class=\"form-control\">\r\n              <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"tagId\">Tag </label>\r\n            <select id=\"tagId\" name=\"tagId\" [(ngModel)]=\"article.tagId\" class=\"form-control\">\r\n              <option *ngFor=\"let tag of tags\" value=\"{{tag.id}}\">{{tag.name}}</option>\r\n              </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"body\">Article</label>\r\n            <ckeditor name=\"body\" [(ngModel)]=\"article.body\" [editor]=\"Editor\" [config]=\"config\"></ckeditor>\r\n          </div>\r\n\r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"editArticle(article)\">Update</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/list']\">Back To Articles List</button>\r\n          </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/edit-article/edit-article.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-article/edit-article.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1hcnRpY2xlL2VkaXQtYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-article/edit-article.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-article/edit-article.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function() { return EditArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/base-request-model */ "./src/app/entities/base-request-model.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var EditArticleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditArticleComponent, _super);
    function EditArticleComponent(router, activatedRoute, http, service, categoryService, tagService, authorService) {
        var _this = _super.call(this, service) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.http = http;
        _this.service = service;
        _this.categoryService = categoryService;
        _this.tagService = tagService;
        _this.authorService = authorService;
        _this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        _this.config = {
            toolbar: ['heading', '|', 'bold', 'italic', '|', 'undo', 'redo',]
        };
        return _this;
        //ClassicEditor.replace('body')
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        this.loadTags();
        this.loadAuthors();
        // this.generateReferenceId();
        this.get(this.activatedRoute.snapshot.params.id);
    };
    EditArticleComponent.prototype.generateReferenceId = function () {
        var _this = this;
        this.service.generateReferenceId().subscribe(function (res) {
            console.log(res);
            _this.model.referenceNo = res.referenceNo;
        });
    };
    EditArticleComponent.prototype.loadCategories = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.categoryService.search(r).subscribe(function (res) {
            _this.categories = res;
            console.log(res);
        });
    };
    EditArticleComponent.prototype.loadTags = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.tagService.search(r).subscribe(function (res) {
            _this.tags = res;
            console.log(res);
        });
    };
    EditArticleComponent.prototype.loadAuthors = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.authorService.search(r).subscribe(function (res) {
            _this.authors = res;
            console.log(res);
        });
    };
    EditArticleComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__["Entity"]();
        for (var instance in _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__["instances"]) {
            _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__["instances"][instance].setData(" ");
        }
    };
    EditArticleComponent.prototype.get = function (id) {
        var _this = this;
        this.http.get('http://localhost:25442/api/article/get/' + id).subscribe(function (res) {
            console.log(res);
            _this.article = res;
        });
    };
    EditArticleComponent.prototype.editArticle = function (model) {
        var _this = this;
        console.log(model.body);
        this.http.put('http://localhost:25442/api/article/edit/', model).subscribe(function (res) {
            _this.router.navigate(['article']);
            console.log(res);
        });
    };
    EditArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-article',
            template: __webpack_require__(/*! ./edit-article.component.html */ "./src/app/components/edit-article/edit-article.component.html"),
            styles: [__webpack_require__(/*! ./edit-article.component.scss */ "./src/app/components/edit-article/edit-article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], src_app_services_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"], src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"], src_app_services_author_service__WEBPACK_IMPORTED_MODULE_9__["AuthorService"]])
    ], EditArticleComponent);
    return EditArticleComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <div class=\"card card-default\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">ফিকহি ইসলামি.Com আপনার প্রশ্নের উত্তর যত দ্রুত সম্ভব প্রদান করার চেষ্টা করবে - ইনশাআল্লাহ।</h3>\n          </div>\n          <div class=\"card-body\">\n            <form>questionNo\n                <div class=\"form-group\">\n                    <label for=\"questionNo\">ফাতাওয়া নং:</label>\n                    <input type=\"text\" class=\"form-control\" name=\"questionNo\" id=\"questionNo\" [(ngModel)]=\"model.questionNo\">\n                    </div>\n             <div class=\"form-group\">\n               <label for=\"questioner\"> প্রশ্নকর্তা:</label>\n               <input type=\"text\" id=\"questioner\" name=\"questioner\" [(ngModel)]=\"model.questioner\" class=\"form-control\">\n             </div>\n             <div class=\"form-group\">\n              <label for=\"address\">ঠিকানা</label>\n              <input type=\"text\" id=\"address\" name=\"address\" [(ngModel)]=\"model.address\" class=\"form-control\">\n            </div>\n          \n\n            <div class=\"form-group\">\n             \n                <label for=\"question\">প্রশ্ন:</label>\n                <ckeditor name=\"question\" [(ngModel)]=\"model.question\" [editor]=\"Editor\"></ckeditor>\n              </div>\n              <div class=\"form-group\">\n              \n                <label for=\"answer\">উত্তর (বাংলায় লিখুন):</label>\n                <ckeditor name=\"answer\" [(ngModel)]=\"model.answer\" [editor]=\"Editor\"></ckeditor>\n              \n              </div>\n             \n         \n  \n            <div class=\"text-right\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"editFatawaAnswer()\">Submit</button>\n            </div>\n           \n          \n  \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1mYXRhd2EtYW5zd2VyL2VkaXQtZmF0YXdhLWFuc3dlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditFatawaAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFatawaAnswerComponent", function() { return EditFatawaAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/fatawa-answer.service */ "./src/app/services/fatawa-answer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditFatawaAnswerComponent = /** @class */ (function () {
    function EditFatawaAnswerComponent(service, router, activatedRoute) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.model = {};
    }
    EditFatawaAnswerComponent.prototype.ngOnInit = function () {
        this.get(this.activatedRoute.snapshot.params.id);
    };
    EditFatawaAnswerComponent.prototype.editFatawaAnswer = function () {
        var _this = this;
        this.service.editFatawaAnswer(this.model).subscribe(function (res) {
            _this.router.navigate(['list-fatawa-answer']);
            console.log(res);
        });
    };
    EditFatawaAnswerComponent.prototype.get = function (id) {
        var _this = this;
        this.service.getFatawa(id).subscribe(function (res) {
            console.log(res);
            _this.model = res;
        });
    };
    EditFatawaAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-fatawa-answer',
            template: __webpack_require__(/*! ./edit-fatawa-answer.component.html */ "./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.html"),
            styles: [__webpack_require__(/*! ./edit-fatawa-answer.component.scss */ "./src/app/components/edit-fatawa-answer/edit-fatawa-answer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_2__["FatawaAnswerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditFatawaAnswerComponent);
    return EditFatawaAnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/list-article/list-article.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-article/list-article.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n<div class=\"container\">\r\n \r\n    \r\n <owl-carousel [options]=\"myCarouselOptions\" [items]=\"models\" [carouselClasses]=\"['owl-theme', 'sliding']\" >\r\n      <div class=\"item\" *ngFor=\"let image of models;let i = index\">\r\n       <div class=\"inline\">\r\n        <h4 class=\"text-success\"><a style=\"cursor: pointer;\" [routerLink]=\"['/detail/',image.id]\">{{image.title}}</a></h4>\r\n       </div>\r\n      </div>\r\n     </owl-carousel>\r\n       \r\n</div>\r\n \r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col-sm-3\">\r\n        <form class=\"form-inline mt-4\">\r\n            <input type=\"text\" class=\"form-control\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\"><br>\r\n          \r\n          </form>\r\n      <h2 class=\"my-4\">বিভাগ</h2>\r\n        <div *ngFor=\"let category of categories\" class=\"list-group\">\r\n         <a style=\"cursor: pointer;\" (click)=\"searchByCategory(category.name)\" class=\"list-group-item\">{{category.name}}</a>\r\n          </div>\r\n\r\n          <h2 class=\"my-4\">লেখকগণ</h2>\r\n          <div *ngFor=\"let author of authors\" class=\"list-group\">\r\n           <a style=\"cursor: pointer;\" (click)=\"searchByAuthor(author.name)\" class=\"list-group-item\">{{author.name}}</a>\r\n            </div>\r\n    </div>\r\n    <div class=\"col-sm-7\">\r\n        <div>\r\n            <h5><i class=\"fa fa-angle-double-right\"></i>\r\n              {{category}}</h5>\r\n        </div>\r\n        <div class=\"card mt-4\" *ngFor=\"let model of models\">\r\n     \r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title text-success\"> <a style=\"cursor: pointer;\" [routerLink]=\"['/detail/',model.id]\">{{model.title}}</a></h5>\r\n               \r\n                <p class=\"card-text\">\r\n                {{model.headLine}}\r\n              \r\n                </p>\r\n                <p class=\"card-text\">\r\n                  {{model.author.name}}\r\n                \r\n                  </p>\r\n      \r\n            </div>\r\n      </div>\r\n      \r\n\r\n \r\n \r\n \r\n    </div>\r\n\r\n    <div class=\"col-sm-2\">\r\n        <h2 class=\"my-4\">প্রসঙ্গসমূহ</h2>\r\n        <div *ngFor=\"let tag of tags\">\r\n         \r\n        <a style=\"cursor: pointer;\" (click)=\"searchByTag(tag.name)\" class=\"bg-light\">{{tag.name}}</a>\r\n       \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n    <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n    \r\n  <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\r\n  <label>Current Page: {{searchRequest.page}} </label>\r\n  <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/list-article/list-article.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-article/list-article.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1hcnRpY2xlL2xpc3QtYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/list-article/list-article.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-article/list-article.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListArticleComponent", function() { return ListArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/base-request-model */ "./src/app/entities/base-request-model.ts");
/* harmony import */ var src_app_services_author_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");









var ListArticleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListArticleComponent, _super);
    function ListArticleComponent(service, categoryService, authorService, tagService, _authService) {
        var _this = _super.call(this, service) || this;
        _this.categoryService = categoryService;
        _this.authorService = authorService;
        _this.tagService = tagService;
        _this._authService = _authService;
        _this.myCarouselOptions = { items: 1, autoplay: true, loop: true, dots: false, nav: false, rewind: true };
        _this.category = "All";
        return _this;
    }
    ListArticleComponent.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    ListArticleComponent.prototype.ngOnInit = function () {
        this.search();
        this.loadCategories();
        this.loadAuthors();
        this.loadTags();
        this.searchForPaging();
    };
    ListArticleComponent.prototype.loadCategories = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.categoryService.search(r).subscribe(function (res) {
            _this.categories = res;
            console.log(res);
        });
    };
    ListArticleComponent.prototype.loadAuthors = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.authorService.search(r).subscribe(function (res) {
            _this.authors = res;
            console.log(res);
        });
    };
    ListArticleComponent.prototype.loadTags = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.tagService.search(r).subscribe(function (res) {
            _this.tags = res;
            console.log(res);
        });
    };
    ListArticleComponent.prototype.searchByCategory = function (name) {
        var _this = this;
        this.category = name;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.category = name;
        r.orderBy = "createdBy";
        this.service.search(r).subscribe(function (res) {
            _this.models = res;
            if (_this.models.length === 0) {
                console.log('No search result found');
                _this.models = [
                    {
                        "headLine": "এখনও কোন লেখা অন্তর্ভুক্ত করা হই নি"
                    }
                ];
            }
            console.log(res);
        });
    };
    ListArticleComponent.prototype.searchByAuthor = function (name) {
        var _this = this;
        this.category = name;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.author = name;
        r.orderBy = "createdBy";
        this.service.search(r).subscribe(function (res) {
            _this.models = res;
            if (_this.models.length === 0) {
                console.log('No search result found');
                _this.models = [
                    {
                        "headLine": "এখনও কোন লেখা অন্তর্ভুক্ত করা হই  নি"
                    }
                ];
            }
            console.log(res);
        });
    };
    ListArticleComponent.prototype.searchByTag = function (name) {
        var _this = this;
        this.category = name;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.tag = name;
        r.orderBy = "createdBy";
        this.service.search(r).subscribe(function (res) {
            _this.models = res;
            if (_this.models.length === 0) {
                console.log('No search result found');
                _this.models = [
                    {
                        "headLine": "এখনও কোন লেখা অন্তর্ভুক্ত করা হই  নি"
                    }
                ];
            }
            console.log(res);
        });
    };
    ListArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-article',
            template: __webpack_require__(/*! ./list-article.component.html */ "./src/app/components/list-article/list-article.component.html"),
            styles: [__webpack_require__(/*! ./list-article.component.scss */ "./src/app/components/list-article/list-article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            src_app_services_author_service__WEBPACK_IMPORTED_MODULE_6__["AuthorService"], src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ListArticleComponent);
    return ListArticleComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/list-fatawa-answer/list-fatawa-answer.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/list-fatawa-answer/list-fatawa-answer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  \r\n  <div class=\"container\">\r\n  <div class=\"row\">\r\n      <form>\r\n          <div class=\"form-group\">\r\n             <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\">\r\n            \r\n          </div>\r\n        </form>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n          &nbsp;  <a [routerLink]=\"['/add-fatawa-answer']\" class=\"btn btn-xs btn-primary d-flex justify-content-center\"><b>+</b>নতুন ফাতাওয়া যোগ করুন</a>\r\n          <tr>\r\n            <th (click)=\"sort('questionNo')\">ফাতাওয়া নং</th>\r\n            <th (click)=\"sort('questioner')\">প্রশ্নকর্তা</th>\r\n            <th (click)=\"sort('address')\">ঠিকানা</th>\r\n            <th (click)=\"sort('question')\">প্রশ্ন</th>\r\n            <th (click)=\"sort('answer')\">উত্তর</th>\r\n           \r\n            <th>Actions</th>\r\n  \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let model of models\">\r\n            <td>{{model.questionNo}}</td>\r\n            <td>{{model.questioner}}</td>\r\n            <td>{{model.address}}</td>\r\n            <td>{{model.question}}</td>\r\n            <td>{{model.answer}}</td>\r\n           \r\n            <td> <a class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-fatawa-answer/',model.id]\"><i class=\"fa fa-pencil\"></i></a></td>\r\n            <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(model.id)\"><i class=\"fa fa-remove\"></i></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"d-flex justify-content-center\">\r\n      <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\r\n  </div>\r\n  <div class=\"d-flex justify-content-center\">\r\n      \r\n    <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\r\n    <label>Current Page: {{searchRequest.page}} </label>\r\n    <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/list-fatawa-answer/list-fatawa-answer.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/list-fatawa-answer/list-fatawa-answer.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1mYXRhd2EtYW5zd2VyL2xpc3QtZmF0YXdhLWFuc3dlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/list-fatawa-answer/list-fatawa-answer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/list-fatawa-answer/list-fatawa-answer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListFatawaAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFatawaAnswerComponent", function() { return ListFatawaAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/fatawa-answer.service */ "./src/app/services/fatawa-answer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entities/base-request-model */ "./src/app/entities/base-request-model.ts");




var ListFatawaAnswerComponent = /** @class */ (function () {
    function ListFatawaAnswerComponent(service) {
        this.service = service;
        this.totalCount = 0;
        this.searchRequest = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_3__["BaseRequestModel"]();
        this.searchRequest.page = 1;
        this.searchRequest.orderBy = "createdBy";
        this.searchRequest.isAscending = false;
    }
    ListFatawaAnswerComponent.prototype.ngOnInit = function () {
        this.search();
        this.searchForPaging();
    };
    ListFatawaAnswerComponent.prototype.searchForPaging = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_3__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.service.searchFatawaAnswer(r).subscribe(function (res) {
            for (var i = 0; i < res.length; ++i) {
                _this.totalCount++;
            }
            _this.searchRequest.totalPage = Math.ceil(_this.totalCount / 10);
        }, function (error) {
            console.log(error);
        });
    };
    ListFatawaAnswerComponent.prototype.search = function () {
        var _this = this;
        this.service.searchFatawaAnswer(this.searchRequest).subscribe(function (res) {
            _this.models = res;
            if (_this.models.length === 0) {
                console.log('No search result found');
                alert('No search result found');
            }
            console.log(_this.models);
        }, function (error) {
            console.log(error);
        });
    };
    ListFatawaAnswerComponent.prototype.sort = function (property) {
        this.searchRequest.orderBy = property;
        this.searchRequest.isAscending = !this.searchRequest.isAscending;
        this.search();
    };
    ListFatawaAnswerComponent.prototype.previous = function () {
        if (this.searchRequest.page > 1) {
            this.searchRequest.page = this.searchRequest.page - 1;
            this.search();
        }
    };
    ListFatawaAnswerComponent.prototype.next = function () {
        if (this.searchRequest.totalPage - this.searchRequest.page > 0) {
            this.searchRequest.page = this.searchRequest.page + 1;
        }
        this.search();
    };
    ListFatawaAnswerComponent.prototype.goto = function (page) {
        this.searchRequest.page = page;
        this.search();
    };
    ListFatawaAnswerComponent.prototype.delete = function (id) {
        var _this = this;
        var result = confirm("Are You sure to delete this");
        if (result) {
            this.service.delete(id).subscribe(function (res) {
                _this.search();
                // this.router.navigate(['list'])
            }, function (error) {
                console.log(error);
            });
        }
    };
    ListFatawaAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-fatawa-answer',
            template: __webpack_require__(/*! ./list-fatawa-answer.component.html */ "./src/app/components/list-fatawa-answer/list-fatawa-answer.component.html"),
            styles: [__webpack_require__(/*! ./list-fatawa-answer.component.scss */ "./src/app/components/list-fatawa-answer/list-fatawa-answer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_1__["FatawaAnswerService"]])
    ], ListFatawaAnswerComponent);
    return ListFatawaAnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/list-fatawa/list-fatawa.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-fatawa/list-fatawa.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      \r\n      \r\n      <div class=\"col-sm-10\">\r\n        <div>\r\n            <form class=\"form-inline mt-4\">\r\n                <input type=\"text\" class=\"form-control\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\"><br>\r\n              \r\n              </form>\r\n        </div>\r\n          \r\n          <div class=\"card mt-4\" *ngFor=\"let model of models\">\r\n       \r\n              <div class=\"card-body\">\r\n                  <h5  class=\"card-title text-success\">{{model.questioner}}-{{model.address}}</h5>\r\n                 \r\n                  <h5 class=\"card-text\">\r\n                  {{model.questionNo}}.প্রশ্ন\r\n                \r\n                  </h5>\r\n                \r\n                      <div [innerHTML]=\"model.question\"></div>\r\n                  \r\n                  \r\n                    <h5 class=\"card-text\">উত্তর</h5>\r\n                   \r\n                        <div [innerHTML]=\"model.answer\"></div>\r\n                      \r\n                      \r\n        \r\n               \r\n              </div>\r\n        </div>\r\n        \r\n  \r\n   \r\n   \r\n   \r\n      </div>\r\n  \r\n     \r\n  </div>\r\n\r\n  <div class=\"d-flex justify-content-center\">\r\n    <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n    \r\n  <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\r\n  <label>Current Page: {{searchRequest.page}} </label>\r\n  <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/list-fatawa/list-fatawa.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-fatawa/list-fatawa.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1mYXRhd2EvbGlzdC1mYXRhd2EuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/list-fatawa/list-fatawa.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/list-fatawa/list-fatawa.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListFatawaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFatawaComponent", function() { return ListFatawaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entities/base-request-model */ "./src/app/entities/base-request-model.ts");
/* harmony import */ var src_app_services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fatawa-answer.service */ "./src/app/services/fatawa-answer.service.ts");




var ListFatawaComponent = /** @class */ (function () {
    function ListFatawaComponent(service) {
        this.service = service;
        this.totalCount = 0;
        this.searchRequest = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_2__["BaseRequestModel"]();
        this.searchRequest.page = 1;
        this.searchRequest.orderBy = "createdBy";
        this.searchRequest.isAscending = false;
    }
    ListFatawaComponent.prototype.ngOnInit = function () {
        this.search();
        this.searchForPaging();
    };
    ListFatawaComponent.prototype.searchForPaging = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_2__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.service.searchFatawaAnswer(r).subscribe(function (res) {
            for (var i = 0; i < res.length; ++i) {
                _this.totalCount++;
            }
            _this.searchRequest.totalPage = Math.ceil(_this.totalCount / 10);
        }, function (error) {
            console.log(error);
        });
    };
    ListFatawaComponent.prototype.search = function () {
        var _this = this;
        this.service.searchFatawaAnswer(this.searchRequest).subscribe(function (res) {
            _this.models = res;
            if (_this.models.length === 0) {
                console.log('No search result found');
                alert('No search result found');
            }
            console.log(_this.models);
        }, function (error) {
            console.log(error);
        });
    };
    ListFatawaComponent.prototype.sort = function (property) {
        this.searchRequest.orderBy = property;
        this.searchRequest.isAscending = !this.searchRequest.isAscending;
        this.search();
    };
    ListFatawaComponent.prototype.previous = function () {
        if (this.searchRequest.page > 1) {
            this.searchRequest.page = this.searchRequest.page - 1;
            this.search();
        }
    };
    ListFatawaComponent.prototype.next = function () {
        if (this.searchRequest.totalPage - this.searchRequest.page > 0) {
            this.searchRequest.page = this.searchRequest.page + 1;
        }
        this.search();
    };
    ListFatawaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-fatawa',
            template: __webpack_require__(/*! ./list-fatawa.component.html */ "./src/app/components/list-fatawa/list-fatawa.component.html"),
            styles: [__webpack_require__(/*! ./list-fatawa.component.scss */ "./src/app/components/list-fatawa/list-fatawa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_fatawa_answer_service__WEBPACK_IMPORTED_MODULE_3__["FatawaAnswerService"]])
    ], ListFatawaComponent);
    return ListFatawaComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Login</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"username\">UserName</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"model.username\">\r\n                  </div>\r\n           <div class=\"form-group\">\r\n             <label for=\"password\">Password</label>\r\n             <input type=\"text\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\">\r\n           </div>\r\n           \r\n       \r\n\r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"loginUser()\">Login</button>\r\n          </div>\r\n         \r\n        \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user */ "./src/app/user.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.model = new src_app_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._auth.loginUser(this.model)
            .subscribe(function (res) {
            console.log(res);
            //jwt 3rd step:save that token in the browsers local storage
            localStorage.setItem('token', res.token);
            _this._router.navigate(['list']);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid top-bar\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <p class=\"text-right\" style=\"color:black;\">Contact us-01743692955</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n<a [routerLink]=\"['']\"><img src=\"assets/images/logo.png\" alt=\"logo\" class=\"img-responsive\" width=\"350px\" height=\"100px\"></a>\r\n    </div>\r\n    <div class=\"col-md-8 my-menu\">\r\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n          \r\n       \r\n       \r\n          <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#robust\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n       \r\n        <div class=\"collapse navbar-collapse\" id=\"robust\">\r\n            <ul class=\"nav navbar-nav pull-right mr-auto\">\r\n   \r\n                <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n                   <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">আপনার জিজ্ঞাসা</a>\r\n                   <div class=\"dropdown-menu\">\r\n                   \r\n                         <a class=\"dropdown-item\" [routerLink]=\"['/list-fatawa']\">আপনি যা জানতে চেয়েছেন</a>\r\n                \r\n                         <a class=\"dropdown-item\" [routerLink]=\"['/fatawa']\">আপনার জিজ্ঞাসা</a>\r\n                     \r\n                   </div>\r\n               </li>\r\n               \r\n              \r\n             \r\n               <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                 <a class=\"nav-link\"  [routerLink]=\"['/contact']\">যোগাযোগ</a>\r\n               </li>\r\n             \r\n               <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                   <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/article']\">লেখালেখি</a>\r\n                 </li>\r\n             \r\n                 <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                     <a class=\"nav-link\"  *ngIf=\"_authService.loggedIn()\"  [routerLink]=\"['/list-fatawa-answer']\">ফাতাওয়া</a>\r\n                   </li>\r\n               <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                   <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/category-list']\">বিভাগ</a>\r\n                 </li>\r\n                 <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                   <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/author-list']\">লেখক</a>\r\n                 </li>\r\n                 <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                   <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/tag-list']\">প্রসঙ্গ</a>\r\n                 </li>\r\n                 <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                   <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/asked-fatawa']\">Asked</a>\r\n                 </li>\r\n\r\n                 <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                  <a class=\"nav-link\" [routerLink]=\"['/broadcast']\">Broadcast</a>\r\n                </li>\r\n                 <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                     <a class=\"nav-link\"style=\"cursor: pointer;\" *ngIf=\"_authService.loggedIn()\" (click)=\"_authService.logoutUser()\">Logout</a>  \r\n                   </li>\r\n             </ul> \r\n        </div>\r\n         \r\n      </nav>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-bar {\n  background-color: #009999;\n  padding: 3px; }\n\n.my-menu {\n  margin-top: 10px; }\n\n.my-menu .navbar li a:hover {\n  background-color: #009999;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvQzpcXFVzZXJzXFxzb2Z0LWNvZGVcXERlc2t0b3BcXEJMT0dcXEpSQ1xcSlJDV2ViL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBTXBCO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTk5OTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLm15LW1lbnV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubXktbWVudSAubmF2YmFyIGxpIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OTk5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(_authService) {
        this._authService = _authService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\">\n    <div class=\"sidebar-header\">\n        <h3>Bootstrap Sidebar</h3>\n    </div>\n\n    <ul class=\"list-unstyled components\">\n        <p>Dummy Heading</p>\n        <li class=\"active\">\n            <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">বিভাগ</a>\n            <ul  class=\"collapse list-unstyled\" id=\"homeSubmenu\">\n                <li *ngFor=\"let category of categories\">\n                    <a style=\"cursor: pointer;\" (click)=\"searchByCategory(category.name)\" class=\"list-group-item\">{{category.name}}</a>\n                </li>\n               \n            </ul>\n        </li>\n      \n        <li>\n            <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">লেখকগণ</a>\n            <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\n                <li *ngFor=\"let author of authors\">\n                    <a style=\"cursor: pointer;\" (click)=\"searchByAuthor(author.name)\" class=\"list-group-item\">{{author.name}}</a>\n                </li>\n               \n            </ul>\n        </li>\n        \n    </ul>\n\n</nav>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/tag/add-tag/add-tag.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/tag/add-tag/add-tag.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"card card-default\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Create New Tag</h3>\n        </div>\n        <div class=\"card-body\">\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"name\">Tag Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\n                  </div>\n          \n          <div class=\"text-right\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"save()\">Save</button>\n          </div>\n         \n          <div class=\"text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/tag-list']\">Back To Tag List</button>\n            </div>\n  \n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tag/add-tag/add-tag.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/tag/add-tag/add-tag.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnL2FkZC10YWcvYWRkLXRhZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tag/add-tag/add-tag.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tag/add-tag/add-tag.component.ts ***!
  \*************************************************************/
/*! exports provided: AddTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTagComponent", function() { return AddTagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");





var AddTagComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddTagComponent, _super);
    function AddTagComponent(service) {
        return _super.call(this, service) || this;
    }
    AddTagComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]();
    };
    AddTagComponent.prototype.ngOnInit = function () {
    };
    AddTagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-tag',
            template: __webpack_require__(/*! ./add-tag.component.html */ "./src/app/components/tag/add-tag/add-tag.component.html"),
            styles: [__webpack_require__(/*! ./add-tag.component.scss */ "./src/app/components/tag/add-tag/add-tag.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"]])
    ], AddTagComponent);
    return AddTagComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/tag/edit-tag/edit-tag.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/tag/edit-tag/edit-tag.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 offset-md-1\">\n      <div class=\"card card-default\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Edit</h3>\n        </div>\n        <div class=\"card-body\">\n          <form>\n              <div class=\"form-group\">\n                  <label for=\"name\">Tag Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\n                  </div>\n          \n          <div class=\"text-right\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"edit()\">Edit</button>\n          </div>\n         \n          <div class=\"text-right\">\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/tag-list']\">Back To Tag List</button>\n            </div>\n  \n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tag/edit-tag/edit-tag.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/tag/edit-tag/edit-tag.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnL2VkaXQtdGFnL2VkaXQtdGFnLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tag/edit-tag/edit-tag.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tag/edit-tag/edit-tag.component.ts ***!
  \***************************************************************/
/*! exports provided: EditTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTagComponent", function() { return EditTagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");







var EditTagComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditTagComponent, _super);
    function EditTagComponent(service, activatedRoute, http) {
        var _this = _super.call(this, service) || this;
        _this.activatedRoute = activatedRoute;
        _this.http = http;
        return _this;
    }
    EditTagComponent.prototype.reset = function () {
        this.model = new src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__["Entity"]();
    };
    //tag:any
    EditTagComponent.prototype.ngOnInit = function () {
        this.get(this.activatedRoute.snapshot.params.id);
    };
    EditTagComponent.prototype.get = function (id) {
        var _this = this;
        this.http.get('http://localhost:25442/api/tag/get/' + id).subscribe(function (res) {
            console.log(res);
            _this.model = res;
        });
    };
    EditTagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-tag',
            template: __webpack_require__(/*! ./edit-tag.component.html */ "./src/app/components/tag/edit-tag/edit-tag.component.html"),
            styles: [__webpack_require__(/*! ./edit-tag.component.scss */ "./src/app/components/tag/edit-tag/edit-tag.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EditTagComponent);
    return EditTagComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/tag/tag-list/tag-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/tag/tag-list/tag-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n      <form>\n          <div class=\"form-group\">\n             <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"বাংলায় সার্চ করুন\">\n            \n          </div>\n        </form>\n  </div>\n  <div class=\"row\">\n    <table class=\"table table-hover\">\n      <thead>\n          &nbsp;  <a [routerLink]=\"['/add-tag']\" class=\"btn btn-xs btn-primary d-flex justify-content-center\"><b>+</b>নতুন প্রসঙ্গ যোগ করুন</a>\n        <tr>\n          <th (click)=\"sort('name')\">Tag Name</th>\n         \n          <th>Actions</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let model of models\">\n          <td>{{model.name}}</td>\n         \n          <td> <a class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-tag/',model.id]\"><i class=\"fa fa-pencil\"></i></a></td>\n          <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(model.id)\"><i class=\"fa fa-remove\"></i></button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n\n<div class=\"d-flex justify-content-center\">\n    <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} Records</span>\n</div>\n<div class=\"d-flex justify-content-center\">\n    \n  <button class=\"btn btn-info\" (show)=\"searchRequest.page>1\" (click)=\"previous()\"><i class=\"fa fa-arrow-left\"></i></button>\n  <label>Current Page: {{searchRequest.page}} </label>\n  <button class=\"btn btn-info\" (click)=\"next()\"><i class=\"fa fa-arrow-right\"></i></button>\n</div>\n\n\n<!--\n<div class=\"fixed-table-pagination\" style=\"display: block;\">\n  <div class=\"pull-left pagination-detail\">\n      <span class=\"pagination-info\">Showing {{(searchRequest.page-1)*10+1}} to {{(searchRequest.page)*10}} of {{totalCount}} rows</span>\n  </div>\n  <div class=\"pull-right pagination\">\n      <ul class=\"pagination\">\n          <li class=\"page-pre\" *ngIf=\"searchRequest.page>2\">\n              <a href=\"javascript:void(0)\" (click)=\"goto(searchRequest.page-2)\"><i class=\"fa fa-arrow-left\"></i></a>\n          </li>\n          <li class=\"page-number\" *ngIf=\"searchRequest.page>1\"><a href=\"javascript:void(0)\" (click)=\"goto(searchRequest.page-1)\">{{searchRequest.page-1}}</a></li>\n\n          <li class=\"page-number active\"><a href=\"javascript:void(0)\" (click)=\"goto(searchRequest.page)\">{{searchRequest.page}}</a></li>\n\n          <li class=\"page-number\" *ngIf=\"(searchRequest.totalPage-searchRequest.page)>0\"><a href=\"javascript:void(0)\" (click)=\"goto(searchRequest.page+1)\">{{searchRequest.page + 1}}</a></li>\n          <li class=\"page-next\" *ngIf=\"(searchRequest.totalPage-searchRequest.page)>1\"><a href=\"javascript:void(0)\" (click)=\"goto(searchRequest.page+2)\"><i class=\"fa fa-arrow-right\"></i></a></li>\n      </ul>\n  </div>\n</div>\n\n-->"

/***/ }),

/***/ "./src/app/components/tag/tag-list/tag-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/tag/tag-list/tag-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnL3RhZy1saXN0L3RhZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tag/tag-list/tag-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tag/tag-list/tag-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListComponent", function() { return TagListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
/* harmony import */ var src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tag.service */ "./src/app/services/tag.service.ts");




var TagListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TagListComponent, _super);
    function TagListComponent(service) {
        return _super.call(this, service) || this;
    }
    TagListComponent.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    TagListComponent.prototype.ngOnInit = function () {
        this.search();
        this.searchForPaging();
    };
    TagListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag-list',
            template: __webpack_require__(/*! ./tag-list.component.html */ "./src/app/components/tag/tag-list/tag-list.component.html"),
            styles: [__webpack_require__(/*! ./tag-list.component.scss */ "./src/app/components/tag/tag-list/tag-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]])
    ], TagListComponent);
    return TagListComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/core/generated.ts":
/*!***********************************!*\
  !*** ./src/app/core/generated.ts ***!
  \***********************************/
/*! exports provided: API_BASE_URL, NotificationService, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.20.0.0 (NJsonSchema v9.11.0.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming





var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('API_BASE_URL');
var NotificationService = /** @class */ (function () {
    function NotificationService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:25442";
    }
    NotificationService.prototype.subscribe = function (sub) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Notification/subscribe";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(sub);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processSubscribe(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processSubscribe(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NotificationService.prototype.processSubscribe = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NotificationService.prototype.unsubscribe = function (sub) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Notification/unsubscribe";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(sub);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUnsubscribe(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUnsubscribe(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NotificationService.prototype.processUnsubscribe = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NotificationService.prototype.broadcast = function (message) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Notification/broadcast";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(message);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processBroadcast(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processBroadcast(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NotificationService.prototype.processBroadcast = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], NotificationService);
    return NotificationService;
}());

var SwaggerException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function () {
                observer.next(this.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "./src/app/core/notification-middleware.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/notification-middleware.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationMiddlewareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMiddlewareService", function() { return NotificationMiddlewareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generated */ "./src/app/core/generated.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var NotificationMiddlewareService = /** @class */ (function () {
    function NotificationMiddlewareService(notificationService) {
        this.notificationService = notificationService;
        this.pushNotificationStatus = {
            isSubscribed: false,
            isSupported: false,
            isInProgress: false
        };
        this.swRegistration = null;
        this.notifications = [];
    }
    NotificationMiddlewareService.prototype.init = function () {
        var _this = this;
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.register('/assets/sw.js')
                .then(function (swReg) {
                console.log('Service Worker is registered', swReg);
                _this.swRegistration = swReg;
                _this.checkSubscription();
            })
                .catch(function (error) {
                console.error('Service Worker Error', error);
            });
            this.pushNotificationStatus.isSupported = true;
        }
        else {
            this.pushNotificationStatus.isSupported = false;
        }
        navigator.serviceWorker.addEventListener('message', function (event) {
            _this.notifications.push(event.data);
        });
    };
    NotificationMiddlewareService.prototype.checkSubscription = function () {
        var _this = this;
        this.swRegistration.pushManager.getSubscription()
            .then(function (subscription) {
            console.log(subscription);
            console.log(JSON.stringify(subscription));
            _this.pushNotificationStatus.isSubscribed = !(subscription === null);
        });
    };
    NotificationMiddlewareService.prototype.toggleSubscription = function () {
        if (this.pushNotificationStatus.isSubscribed) {
            this.unsubscribeUser();
        }
        else {
            this.subscribeUser();
        }
    };
    NotificationMiddlewareService.prototype.subscribeUser = function () {
        var _this = this;
        this.pushNotificationStatus.isInProgress = true;
        var applicationServerKey = this.urlB64ToUint8Array(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].applicationServerPublicKey);
        this.swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
        })
            .then(function (subscription) {
            console.log(subscription);
            console.log(JSON.stringify(subscription));
            var newSub = JSON.parse(JSON.stringify(subscription));
            console.log(newSub);
            _this.notificationService.subscribe({
                auth: newSub.keys.auth,
                p256Dh: newSub.keys.p256dh,
                endPoint: newSub.endpoint
            }).subscribe(function (s) {
                _this.pushNotificationStatus.isSubscribed = true;
            });
        })
            .catch(function (err) {
            console.log('Failed to subscribe the user: ', err);
        })
            .then(function () {
            _this.pushNotificationStatus.isInProgress = false;
        });
    };
    NotificationMiddlewareService.prototype.unsubscribeUser = function () {
        var _this = this;
        this.pushNotificationStatus.isInProgress = true;
        var sub;
        this.swRegistration.pushManager.getSubscription()
            .then(function (subscription) {
            if (subscription) {
                sub = JSON.parse(JSON.stringify(subscription));
                return subscription.unsubscribe();
            }
        })
            .catch(function (error) {
            console.log('Error unsubscribing', error);
        })
            .then(function () {
            _this.notificationService.unsubscribe({
                auth: sub.keys.auth,
                p256Dh: sub.keys.p256dh,
                endPoint: sub.endpoint
            }).subscribe(function () {
                _this.pushNotificationStatus.isSubscribed = false;
                _this.pushNotificationStatus.isInProgress = false;
            });
        });
    };
    NotificationMiddlewareService.prototype.urlB64ToUint8Array = function (base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };
    NotificationMiddlewareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_generated__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], NotificationMiddlewareService);
    return NotificationMiddlewareService;
}());



/***/ }),

/***/ "./src/app/entities/base-request-model.ts":
/*!************************************************!*\
  !*** ./src/app/entities/base-request-model.ts ***!
  \************************************************/
/*! exports provided: BaseRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestModel", function() { return BaseRequestModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");


var BaseRequestModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseRequestModel, _super);
    function BaseRequestModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseRequestModel;
}(_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]));



/***/ }),

/***/ "./src/app/entities/entity.ts":
/*!************************************!*\
  !*** ./src/app/entities/entity.ts ***!
  \************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());



/***/ }),

/***/ "./src/app/entities/fatawa-answer.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/fatawa-answer.ts ***!
  \*******************************************/
/*! exports provided: FatawaAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatawaAnswer", function() { return FatawaAnswer; });
var FatawaAnswer = /** @class */ (function () {
    function FatawaAnswer() {
    }
    return FatawaAnswer;
}());



/***/ }),

/***/ "./src/app/services/article.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/article.service.ts ***!
  \*********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");





var ArticleService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ArticleService, _super);
    function ArticleService(http, url) {
        return _super.call(this, http, url.article) || this;
    }
    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"]])
    ], ArticleService);
    return ArticleService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        //private _registerUrl="http://localhost:/api/register"
        this._loginUrl = "http://localhost:25442/api/user/login/authenticate";
    }
    // registerUser(user){
    //   return this.http.post<any>(this._registerUrl,user)
    // }
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this._router.navigate(['/list']);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");





var AuthorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthorService, _super);
    function AuthorService(http, url) {
        var _this = _super.call(this, http, url.author) || this;
        _this.http = http;
        return _this;
    }
    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"]])
    ], AuthorService);
    return AuthorService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BaseService = /** @class */ (function () {
    function BaseService(http, url) {
        this.http = http;
        this.url = url;
        this.commandUrl = url;
    }
    BaseService.prototype.save = function (data) {
        data.createdBy = "me";
        return this.http.post(this.commandUrl + '/add', data);
    };
    BaseService.prototype.get = function (id) {
        return this.http.get(this.commandUrl + '/get/' + id);
    };
    BaseService.prototype.generateReferenceId = function () {
        return this.http.get(this.commandUrl + '/reference-no');
    };
    BaseService.prototype.delete = function (id) {
        return this.http.delete(this.commandUrl + '/delete/' + id);
    };
    BaseService.prototype.edit = function (data) {
        return this.http.put(this.commandUrl + '/edit', data);
    };
    BaseService.prototype.search = function (request) {
        return this.http.post(this.commandUrl + '/search', request);
    };
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");





var CategoryService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryService, _super);
    function CategoryService(http, url) {
        return _super.call(this, http, url.category) || this;
    }
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"]])
    ], CategoryService);
    return CategoryService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/fatawa-answer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/fatawa-answer.service.ts ***!
  \***************************************************/
/*! exports provided: FatawaAnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatawaAnswerService", function() { return FatawaAnswerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var FatawaAnswerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FatawaAnswerService, _super);
    function FatawaAnswerService(http, url) {
        var _this = _super.call(this, http, url.fatawaAnswer) || this;
        _this.baseUrl = "http://localhost:25442/api/fatawa-answer/";
        return _this;
    }
    FatawaAnswerService.prototype.saveFatawaAnswer = function (model) {
        return this.http.post(this.baseUrl + 'add', model);
    };
    FatawaAnswerService.prototype.searchFatawaAnswer = function (request) {
        return this.http.post(this.baseUrl + 'search', request);
    };
    FatawaAnswerService.prototype.editFatawaAnswer = function (model) {
        return this.http.put(this.baseUrl + 'edit', model);
    };
    FatawaAnswerService.prototype.getFatawa = function (id) {
        return this.http.get(this.baseUrl + 'get/' + id);
    };
    FatawaAnswerService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + 'delete/' + id);
    };
    FatawaAnswerService.prototype.generateFatawaNo = function () {
        return this.http.get(this.baseUrl + 'reference-no');
    };
    FatawaAnswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"]])
    ], FatawaAnswerService);
    return FatawaAnswerService;
}(src_app_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/fatawa.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/fatawa.service.ts ***!
  \********************************************/
/*! exports provided: FatawaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatawaService", function() { return FatawaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");





var FatawaService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FatawaService, _super);
    function FatawaService(http, url) {
        var _this = _super.call(this, http, url.fatawa) || this;
        _this.http = http;
        return _this;
    }
    FatawaService.prototype.saveFatawa = function (model) {
        return this.http.post('http://localhost:25442/api/fatawa/addFatawa', model);
    };
    FatawaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"]])
    ], FatawaService);
    return FatawaService;
}(src_app_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/tag.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url.service */ "./src/app/services/url.service.ts");





var TagService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TagService, _super);
    function TagService(http, url) {
        return _super.call(this, http, url.tag) || this;
    }
    TagService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"]])
    ], TagService);
    return TagService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/url.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/url.service.ts ***!
  \*****************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UrlService = /** @class */ (function () {
    function UrlService() {
        this.baseUrl = 'http://localhost:25442/api/';
        this.article = this.baseUrl + 'article';
        this.category = this.baseUrl + 'category';
        this.tag = this.baseUrl + 'tag';
        this.author = this.baseUrl + 'author';
        this.fatawa = this.baseUrl + 'fatawa';
        this.fatawaAnswer = this.baseUrl + 'fatawa-answer';
    }
    UrlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    applicationServerPublicKey: "BIc0fMHrWJIQl4u63jM19z0kQrpLJx24D0TUtLHFp6EshRQRnNpQm2lofJJNiYdS1caOkEp_KYlZH9atpWpEvJU",
    apiUrl: "http://localhost:25442/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\soft-code\Desktop\BLOG\JRC\JRCWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map