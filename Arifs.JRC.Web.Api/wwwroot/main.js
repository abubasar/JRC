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
/* harmony import */ var _components_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/category/category-list/category-list.component */ "./src/app/components/category/category-list/category-list.component.ts");
/* harmony import */ var _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/category/add-category/add-category.component */ "./src/app/components/category/add-category/add-category.component.ts");
/* harmony import */ var _components_author_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/author/author-list/author-list.component */ "./src/app/components/author/author-list/author-list.component.ts");
/* harmony import */ var _components_author_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/author/edit-author/edit-author.component */ "./src/app/components/author/edit-author/edit-author.component.ts");
/* harmony import */ var _components_author_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/author/add-author/add-author.component */ "./src/app/components/author/add-author/add-author.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list-article/list-article.component */ "./src/app/components/list-article/list-article.component.ts");
/* harmony import */ var _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-article/add-article.component */ "./src/app/components/add-article/add-article.component.ts");
/* harmony import */ var _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/article-detail/article-detail.component */ "./src/app/components/article-detail/article-detail.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ask-fatawa/ask-fatawa.component */ "./src/app/components/ask-fatawa/ask-fatawa.component.ts");
/* harmony import */ var _components_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-article/edit-article.component */ "./src/app/components/edit-article/edit-article.component.ts");
/* harmony import */ var _components_tag_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tag/add-tag/add-tag.component */ "./src/app/components/tag/add-tag/add-tag.component.ts");
/* harmony import */ var _components_tag_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tag/edit-tag/edit-tag.component */ "./src/app/components/tag/edit-tag/edit-tag.component.ts");
/* harmony import */ var _components_tag_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tag/tag-list/tag-list.component */ "./src/app/components/tag/tag-list/tag-list.component.ts");
/* harmony import */ var _components_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/category/edit-category/edit-category.component */ "./src/app/components/category/edit-category/edit-category.component.ts");




















var routes = [
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    { path: 'list', component: _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_8__["ListArticleComponent"] },
    { path: 'add', component: _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_9__["AddArticleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'detail/:id', component: _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_10__["ArticleDetailComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"] },
    { path: 'login', component: _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_14__["AskFatawaComponent"] },
    { path: 'edit-article/:id', component: _components_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_15__["EditArticleComponent"] },
    { path: 'add-tag', component: _components_tag_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_16__["AddTagComponent"] },
    { path: 'edit-tag/:id', component: _components_tag_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_17__["EditTagComponent"] },
    { path: 'tag-list', component: _components_tag_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_18__["TagListComponent"] },
    { path: 'add-author', component: _components_author_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_5__["AddAuthorComponent"] },
    { path: 'edit-author/:id', component: _components_author_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_4__["EditAuthorComponent"] },
    { path: 'author-list', component: _components_author_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_3__["AuthorListComponent"] },
    { path: 'add-category', component: _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__["AddCategoryComponent"] },
    { path: 'edit-category/:id', component: _components_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_19__["EditCategoryComponent"] },
    { path: 'category-list', component: _components_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__["CategoryListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
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

module.exports = "\r\n<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'JRCWeb';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-article/add-article.component */ "./src/app/components/add-article/add-article.component.ts");
/* harmony import */ var _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list-article/list-article.component */ "./src/app/components/list-article/list-article.component.ts");
/* harmony import */ var _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/article-detail/article-detail.component */ "./src/app/components/article-detail/article-detail.component.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/url.service */ "./src/app/services/url.service.ts");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ask-fatawa/ask-fatawa.component */ "./src/app/components/ask-fatawa/ask-fatawa.component.ts");
/* harmony import */ var _components_list_fatawa_list_fatawa_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/list-fatawa/list-fatawa.component */ "./src/app/components/list-fatawa/list-fatawa.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
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



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_8__["AddArticleComponent"],
                _components_list_article_list_article_component__WEBPACK_IMPORTED_MODULE_9__["ListArticleComponent"],
                _components_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_10__["ArticleDetailComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _components_ask_fatawa_ask_fatawa_component__WEBPACK_IMPORTED_MODULE_18__["AskFatawaComponent"],
                _components_list_fatawa_list_fatawa_component__WEBPACK_IMPORTED_MODULE_19__["ListFatawaComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"],
                _components_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_25__["AddCategoryComponent"],
                _components_category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_26__["EditCategoryComponent"],
                _components_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_27__["CategoryListComponent"],
                _components_tag_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_28__["AddTagComponent"],
                _components_tag_edit_tag_edit_tag_component__WEBPACK_IMPORTED_MODULE_29__["EditTagComponent"],
                _components_tag_tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_30__["TagListComponent"],
                _components_author_add_author_add_author_component__WEBPACK_IMPORTED_MODULE_31__["AddAuthorComponent"],
                _components_author_edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_32__["EditAuthorComponent"],
                _components_author_author_list_author_list_component__WEBPACK_IMPORTED_MODULE_33__["AuthorListComponent"],
                _components_edit_article_edit_article_component__WEBPACK_IMPORTED_MODULE_34__["EditArticleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"]
            ],
            providers: [
                _services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"],
                _services_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"],
                _services_article_service__WEBPACK_IMPORTED_MODULE_13__["ArticleService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_14__["CategoryService"],
                _services_tag_service__WEBPACK_IMPORTED_MODULE_15__["TagService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

/***/ "./src/app/category.ts":
/*!*****************************!*\
  !*** ./src/app/category.ts ***!
  \*****************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");


var Category = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Category;
}(src_app_entities_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]));



/***/ }),

/***/ "./src/app/components/add-article/add-article.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-article/add-article.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Create New Article</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"referenceNo\">Serial No</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"referenceNo\" id=\"referenceNo\" [(ngModel)]=\"model.referenceNo\" readonly>\r\n                  </div>\r\n           <div class=\"form-group\">\r\n             <label for=\"title\">Title</label>\r\n             <input type=\"text\" id=\"title\" name=\"title\" [(ngModel)]=\"model.title\" class=\"form-control\">\r\n           </div>\r\n           \r\n           <div class=\"form-group\">\r\n            <label for=\"headLine\">HeadLine</label>\r\n            <input type=\"text\" id=\"headLine\" name=\"price\" [(ngModel)]=\"model.headLine\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"authorId\">Author </label>\r\n            <select id=\"authorId\" name=\"authorId\" [(ngModel)]=\"model.authorId\" class=\"form-control\">\r\n              <option *ngFor=\"let author of authors\" value=\"{{author.id}}\">{{author.name}}</option>\r\n              </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"categoryId\">Category </label>\r\n            <select id=\"categoryId\" name=\"categoryId\" [(ngModel)]=\"model.categoryId\" class=\"form-control\">\r\n              <option *ngFor=\"let category of categories\" value=\"{{category.id}}\">{{category.name}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"tagId\">Tag </label>\r\n            <select id=\"tagId\" name=\"tagId\" [(ngModel)]=\"model.tagId\" class=\"form-control\">\r\n              <option *ngFor=\"let tag of tags\" value=\"{{tag.id}}\">{{tag.name}}</option>\r\n              </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"body\">Article</label>\r\n            <ckeditor name=\"body\" [(ngModel)]=\"model.body\" [editor]=\"Editor\"></ckeditor>\r\n          </div>\r\n\r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"save()\">Save</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" href=\"/list\">Back To Articles List</button>\r\n            </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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










var AddArticleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddArticleComponent, _super);
    function AddArticleComponent(service, categoryService, tagService, authorService) {
        var _this = _super.call(this, service) || this;
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
        this.categoryService.searchCategory(r).subscribe(function (res) {
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
    AddArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-article',
            template: __webpack_require__(/*! ./add-article.component.html */ "./src/app/components/add-article/add-article.component.html"),
            styles: [__webpack_require__(/*! ./add-article.component.sass */ "./src/app/components/add-article/add-article.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"], src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"], src_app_services_author_service__WEBPACK_IMPORTED_MODULE_9__["AuthorService"]])
    ], AddArticleComponent);
    return AddArticleComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/article-detail/article-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/article-detail/article-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <h4>\r\n          {{article.title}}\r\n      </h4>\r\n      <h5>\r\n          {{article.headLine}}\r\n      </h5>\r\n<hr>\r\n<div [innerHTML]=\"article.body\"></div>\r\n\r\n    </div>\r\n      \r\n     \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

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
        this.http.get('http://localhost:25442/api/article/get/' + id).subscribe(function (res) {
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

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 offset-md-1\">\r\n        <div class=\"card card-default\">\r\n          <div class=\"card-header\">\r\n            <h3 class=\"card-title\">Login</h3>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">UserName</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"model.username\">\r\n                    </div>\r\n             <div class=\"form-group\">\r\n               <label for=\"password\">Password</label>\r\n               <input type=\"text\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\">\r\n             </div>\r\n             \r\n         \r\n  \r\n            <div class=\"text-right\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"loginUser()\">Login</button>\r\n            </div>\r\n           \r\n          \r\n  \r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  "

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user */ "./src/app/user.ts");





var AskFatawaComponent = /** @class */ (function () {
    function AskFatawaComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.model = new src_app_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AskFatawaComponent.prototype.ngOnInit = function () {
    };
    AskFatawaComponent.prototype.loginUser = function () {
        var _this = this;
        this._auth.loginUser(this.model)
            .subscribe(function (res) {
            console.log(res);
            //jwt 3rd step:save that token in the browsers local storage
            localStorage.setItem('token', res.token);
            _this._router.navigate(['list']);
        }, function (err) { return console.log(err); });
    };
    AskFatawaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ask-fatawa',
            template: __webpack_require__(/*! ./ask-fatawa.component.html */ "./src/app/components/ask-fatawa/ask-fatawa.component.html"),
            styles: [__webpack_require__(/*! ./ask-fatawa.component.scss */ "./src/app/components/ask-fatawa/ask-fatawa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AskFatawaComponent);
    return AskFatawaComponent;
}());



/***/ }),

/***/ "./src/app/components/author/add-author/add-author.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/author/add-author/add-author.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Create New Author</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Author Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\r\n                  </div>\r\n          \r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"save()\">Save</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/author-list']\">Back To Author List</button>\r\n            </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<form>\r\n  <div class=\"form-inline\">\r\n     <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"Search By keyword\">\r\n    \r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n          &nbsp;  <a [routerLink]=\"['/add-author']\" class=\"btn btn-info btn-xs float-right\"><b>+</b>Add New Author</a>\r\n        <tr>\r\n          <th (click)=\"sort('name')\">Author Name</th>\r\n         \r\n          <th>Actions</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let model of models\">\r\n          <td>{{model.name}}</td>\r\n         \r\n          <td> <button class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-author/',model.id]\"><i class=\"fa fa-pencil\"></i></button></td>\r\n          <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(model.id)\"><i class=\"fa fa-remove\"></i></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<button class=\"btn btn-primary\" (show)=\"searchRequest.page>1\" (click)=\"previous()\">Previous</button>\r\n<label>Current Page:{{searchRequest.page}}</label>\r\n<button class=\"btn btn-primary\" (click)=\"next()\">Next</button>"

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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Edit Author</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Author Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"author.name\">\r\n                  </div>\r\n          \r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"edit()\">Edit</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/author-list']\">Back To Author List </button>\r\n          </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
            _this.author = res;
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
    //query controller start here
    BaseComponent.prototype.edit = function () {
        var _this = this;
        this.service.edit(this.model).subscribe(function (res) {
            // this.router.navigate(['list']);
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
                // this.router.navigate(['list'])
            }, function (error) {
                console.log(error);
            });
        }
    };
    BaseComponent.prototype.search = function () {
        var _this = this;
        this.service.search(this.searchRequest).subscribe(function (res) {
            _this.models = res;
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
        this.searchRequest.page = this.searchRequest.page + 1;
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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Create New Category</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Category Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"category.name\">\r\n                  </div>\r\n          \r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"addCategory()\">Save</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/category-list']\">Back To Category List</button>\r\n            </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../category */ "./src/app/category.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");





var AddCategoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddCategoryComponent, _super);
    function AddCategoryComponent(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        _this.category = new _category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
        return _this;
    }
    AddCategoryComponent.prototype.reset = function () {
        this.category = new _category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
    };
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent.prototype.addCategory = function () {
        this.service.addCategory(this.category).subscribe(function (res) {
            console.log("success");
        });
    };
    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/components/category/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/components/category/add-category/add-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/category/category-list/category-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/category/category-list/category-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-inline\">\r\n     <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"Search By keyword\">\r\n    \r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n          &nbsp;  <a [routerLink]=\"['/add-category']\" class=\"btn btn-info btn-xs float-right\"><b>+</b>Add New Category</a>\r\n        <tr>\r\n          <th (click)=\"sort('name')\">Category Name</th>\r\n         \r\n          <th>Actions</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let category of categories\">\r\n          <td>{{category.name}}</td>\r\n         \r\n          <td> <a class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-category/',category.id]\"><i class=\"fa fa-pencil\"></i></a></td>\r\n          <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(category.id)\"><i class=\"fa fa-remove\"></i></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<button class=\"btn btn-primary\" (show)=\"searchRequest.page>1\" (click)=\"previous()\">Previous</button>\r\n<label>Current Page:{{searchRequest.page}}</label>\r\n<button class=\"btn btn-primary\" (click)=\"next()\">Next</button>"

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
        var _this = this;
        this.service.searchCategory(this.searchRequest).subscribe(function (res) {
            _this.categories = res;
            console.log(res);
        });
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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Create New Category</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Category Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"category.name\">\r\n                  </div>\r\n          \r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"editCategory()\">Edit</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/category-list']\">Back To Category List</button>\r\n            </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../category */ "./src/app/category.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/base.component */ "./src/app/components/base/base.component.ts");
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
        this.model = new _category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
    };
    EditCategoryComponent.prototype.ngOnInit = function () {
        this.get(this.activatedRoute.snapshot.params.id);
    };
    EditCategoryComponent.prototype.editCategory = function () {
        this.service.editCategory(this.category).subscribe(function (res) {
            console.log("success");
        });
    };
    EditCategoryComponent.prototype.get = function (id) {
        var _this = this;
        this.http.get('http://localhost:25442/api/category/get/' + id).subscribe(function (res) {
            console.log(res);
            _this.category = res;
        });
    };
    EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./src/app/components/category/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.scss */ "./src/app/components/category/edit-category/edit-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  জমিয়াতুল খায়ের আল ইসলামিয়া, সিলেট।\n</p>\n"

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

module.exports = "<p>\r\n  edit-article works!\r\n</p>\r\n"

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


var EditArticleComponent = /** @class */ (function () {
    function EditArticleComponent() {
    }
    EditArticleComponent.prototype.ngOnInit = function () {
    };
    EditArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-article',
            template: __webpack_require__(/*! ./edit-article.component.html */ "./src/app/components/edit-article/edit-article.component.html"),
            styles: [__webpack_require__(/*! ./edit-article.component.scss */ "./src/app/components/edit-article/edit-article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditArticleComponent);
    return EditArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/list-article/list-article.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-article/list-article.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col-sm-3\">\r\n        <form class=\"form-inline mt-4\">\r\n            <input type=\"text\" class=\"form-control\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"SEARCH\"><br>\r\n          \r\n          </form>\r\n      <h2 class=\"my-4\">Categories</h2>\r\n        <div *ngFor=\"let category of categories\" class=\"list-group\">\r\n         <a style=\"cursor: pointer;\" (click)=\"searchByCategory(category.name)\" class=\"list-group-item\">{{category.name}}</a>\r\n          </div>\r\n\r\n          <h2 class=\"my-4\">Authors</h2>\r\n          <div *ngFor=\"let author of authors\" class=\"list-group\">\r\n           <a style=\"cursor: pointer;\" (click)=\"searchByAuthor(author.name)\" class=\"list-group-item\">{{author.name}}</a>\r\n            </div>\r\n    </div>\r\n    <div class=\"col-sm-7\">\r\n        <div class=\"card mt-4\" *ngFor=\"let model of models\">\r\n     \r\n            <div class=\"card-body\">\r\n                <h5  class=\"card-title text-success\">{{model.title}}</h5>\r\n               \r\n                <p class=\"card-text\">\r\n                {{model.headLine}}\r\n              \r\n                </p>\r\n                <p class=\"card-text\">\r\n                  {{model.author.name}}\r\n                \r\n                  </p>\r\n      \r\n                  <a   style=\"cursor: pointer;\" class=\"btn btn-primary\" [routerLink]=\"['/detail/',model.id]\">ReadMore</a>\r\n                  <a  *ngIf=\"_authService.loggedIn()\" style=\"cursor: pointer;\" class=\"btn btn-primary\" [routerLink]=\"['/update/',model.id]\">Edit</a>\r\n                  <a  *ngIf=\"_authService.loggedIn()\" style=\"cursor: pointer;\" class=\"btn btn-primary\" [routerLink]=\"['/delete/',model.id]\">Delete</a>\r\n            </div>\r\n      </div>\r\n      \r\n\r\n \r\n \r\n \r\n    </div>\r\n\r\n    <div class=\"col-sm-2\">\r\n        <h2 class=\"my-4\">Tags</h2>\r\n        <div *ngFor=\"let tag of tags\">\r\n         \r\n        <a style=\"cursor: pointer;\" (click)=\"searchByTag(tag.name)\" class=\"bg-light\">{{tag.name}}</a>\r\n       \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n<button class=\"btn btn-success\" (show)=\"searchRequest.page>1\" (click)=\"previous()\">Previous</button>&nbsp;\r\n<label class=\"text-primary\">Current Page:{{searchRequest.page}}</label>&nbsp;\r\n<button class=\"btn btn-success\" (click)=\"next()\">Next</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/list-article/list-article.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-article/list-article.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1hcnRpY2xlL2xpc3QtYXJ0aWNsZS5jb21wb25lbnQuc2FzcyJ9 */"

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
    };
    ListArticleComponent.prototype.loadCategories = function () {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.page = -1;
        r.orderBy = "createdBy";
        this.categoryService.searchCategory(r).subscribe(function (res) {
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
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.category = name;
        r.orderBy = "createdBy";
        this.service.search(r).subscribe(function (res) {
            _this.models = res;
            console.log(res);
        });
    };
    ListArticleComponent.prototype.searchByAuthor = function (name) {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.author = name;
        r.orderBy = "createdBy";
        this.service.search(r).subscribe(function (res) {
            _this.models = res;
            console.log(res);
        });
    };
    ListArticleComponent.prototype.searchByTag = function (name) {
        var _this = this;
        var r = new src_app_entities_base_request_model__WEBPACK_IMPORTED_MODULE_5__["BaseRequestModel"]();
        r.tag = name;
        r.orderBy = "createdBy";
        this.service.search(r).subscribe(function (res) {
            _this.models = res;
            console.log(res);
        });
    };
    ListArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-article',
            template: __webpack_require__(/*! ./list-article.component.html */ "./src/app/components/list-article/list-article.component.html"),
            styles: [__webpack_require__(/*! ./list-article.component.sass */ "./src/app/components/list-article/list-article.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            src_app_services_author_service__WEBPACK_IMPORTED_MODULE_6__["AuthorService"], src_app_services_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], ListArticleComponent);
    return ListArticleComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/list-fatawa/list-fatawa.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-fatawa/list-fatawa.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  list-fatawa works!\r\n</p>\r\n"

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


var ListFatawaComponent = /** @class */ (function () {
    function ListFatawaComponent() {
    }
    ListFatawaComponent.prototype.ngOnInit = function () {
    };
    ListFatawaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-fatawa',
            template: __webpack_require__(/*! ./list-fatawa.component.html */ "./src/app/components/list-fatawa/list-fatawa.component.html"),
            styles: [__webpack_require__(/*! ./list-fatawa.component.scss */ "./src/app/components/list-fatawa/list-fatawa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1\">\n        <div class=\"card card-default\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Login</h3>\n          </div>\n          <div class=\"card-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"username\">UserName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"model.username\">\n                    </div>\n             <div class=\"form-group\">\n               <label for=\"password\">Password</label>\n               <input type=\"text\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\">\n             </div>\n             \n         \n  \n            <div class=\"text-right\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"loginUser()\">Login</button>\n            </div>\n           \n          \n  \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  "

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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
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
            _this._router.navigate(['admin']);
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\" >\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">ফিকহি ইসলামি</a>\r\n\r\n  \r\n      <ul class=\"navbar-nav mr-auto\">\r\n       \r\n  \r\n      \r\n\r\n      \r\n\r\n   <!--<li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">আপনার জিজ্ঞাসা</a>\r\n      <div class=\"dropdown-menu\">\r\n      \r\n            <a class=\"dropdown-item\" [routerLink]=\"['/list-fatawa']\">আপনি যা জানতে চেয়েছেন</a>\r\n   \r\n            <a class=\"dropdown-item\" [routerLink]=\"['/ask-fatawa']\">আপনার জিজ্ঞাসা</a>\r\n        \r\n      </div>\r\n  </li>\r\n --> \r\n <li class=\"nav-item\" routerLinkActive=\"active\">\r\n  <a class=\"nav-link\"  [routerLink]=\"['']\">আপনার জিজ্ঞাসা</a>\r\n</li>\r\n\r\n  <li class=\"nav-item\" routerLinkActive=\"active\">\r\n    <a class=\"nav-link\"  [routerLink]=\"['/contact']\">যোগাযোগ</a>\r\n  </li>\r\n  <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/category-list']\">Category</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/author-list']\">Author</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" [routerLink]=\"['/tag-list']\">Tag</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\"style=\"cursor: pointer;\" *ngIf=\"_authService.loggedIn()\" (click)=\"_authService.logoutUser()\">Logout</a>  \r\n      </li>\r\n</ul> \r\n      \r\n \r\n     \r\n   \r\n   \r\n  </div>\r\n  \r\n  \r\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.sass":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2FzcyJ9 */"

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
            styles: [__webpack_require__(/*! ./nav.component.sass */ "./src/app/components/nav/nav.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/tag/add-tag/add-tag.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/tag/add-tag/add-tag.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Create New Tag</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Tag Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\r\n                  </div>\r\n          \r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"save()\">Save</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/tag-list']\">Back To Tag List</button>\r\n            </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"card card-default\">\r\n        <div class=\"card-header\">\r\n          <h3 class=\"card-title\">Edit</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n              <div class=\"form-group\">\r\n                  <label for=\"name\">Tag Name</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"model.name\">\r\n                  </div>\r\n          \r\n          <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" (click)=\"edit()\">Edit</button>\r\n          </div>\r\n         \r\n          <div class=\"text-right\">\r\n              <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/tag-list']\">Back To Tag List</button>\r\n            </div>\r\n  \r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<form>\r\n  <div class=\"form-inline\">\r\n     <input class=\"form-control\" type=\"text\" name=\"keyword\" [(ngModel)]=\"searchRequest.keyword\" (keypress)=\"search()\" placeholder=\"Search By keyword\">\r\n    \r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n          &nbsp;  <a [routerLink]=\"['/add-tag']\" class=\"btn btn-info btn-xs float-right\"><b>+</b>Add New Tag</a>\r\n        <tr>\r\n          <th (click)=\"sort('name')\">Tag Name</th>\r\n         \r\n          <th>Actions</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let model of models\">\r\n          <td>{{model.name}}</td>\r\n         \r\n          <td> <a class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['/edit-tag/',model.id]\"><i class=\"fa fa-pencil\"></i></a></td>\r\n          <td> <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(model.id)\"><i class=\"fa fa-remove\"></i></button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<button class=\"btn btn-primary\" (show)=\"searchRequest.page>1\" (click)=\"previous()\">Previous</button>\r\n<label>Current Page:{{searchRequest.page}}</label>\r\n<button class=\"btn btn-primary\" (click)=\"next()\">Next</button>"

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
    CategoryService.prototype.searchCategory = function (request) {
        return this.http.post('http://localhost:25442/api/category/search', request);
    };
    CategoryService.prototype.addCategory = function (model) {
        return this.http.post('http://localhost:25442/api/category/add', model);
    };
    CategoryService.prototype.editCategory = function (model) {
        return this.http.post('http://localhost:25442/api/category/edit', model);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"]])
    ], CategoryService);
    return CategoryService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



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
        this.category = this.category + 'category';
        this.tag = this.baseUrl + 'tag';
        this.author = this.baseUrl + 'author';
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\FS\Desktop\Mufti Sab\JRC\JRCWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map