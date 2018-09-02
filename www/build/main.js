webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Usuario */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_comunicacao_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, loadingCtrl, comunicacaoApiProvider, menu, appBrowser) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.comunicacaoApiProvider = comunicacaoApiProvider;
        this.menu = menu;
        this.appBrowser = appBrowser;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.entrarCadastrar = function () {
        var browser = this.appBrowser.create("https://bitfarm.trade/registrar/");
        browser.show();
    };
    LoginPage.prototype.entrarQuemSomos = function () {
        var browser = this.appBrowser.create("https://bitfarm.trade/comunidade/");
        browser.show();
    };
    LoginPage.prototype.entrar = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
        var usuario = new Usuario();
        var loading = this.loadingCtrl.create();
        loading.present();
        //exemplo. tem que pegar dos campos da tela de login
        var nomeUsuario = 'testea';
        var senhaUsuario = '123456';
        this.comunicacaoApiProvider.login(nomeUsuario, senhaUsuario)
            .subscribe(function (result) {
            loading.dismiss();
            usuario = result;
            localStorage.setItem('token', usuario.token);
            if (localStorage.getItem('token') != '') {
                toast.setMessage('Acessando a página principal');
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.goToHome = function (params) {
        console.log('params do login');
        console.log(params);
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToCadastrar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_cadastrar__["a" /* CadastrarPage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\login\login.html"*/'<ion-content padding style="background:url(assets/img/p9sxBwJ4QoWIU9mxAJ9d_tela.jpg) no-repeat center;background-size:cover;"\n  id="page1">\n  <img src="assets/img/xK4MROhQQC6Q5xKyvvua_icon_bitfarm.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;"\n  />\n  <div class="spacer" style="height:34px;" id="login-spacer1"></div>\n  <form id="login-form1" >\n    <ion-item id="login-input1">\n      <ion-label floating>E-mail</ion-label>\n      <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n      <ion-input type="email" placeholder="" #email></ion-input>\n    </ion-item>\n    <div class="spacer" style="height:11px;" id="login-spacer2"></div>\n    <ion-item id="login-input2">\n      <ion-label floating>senha</ion-label>\n      <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n      <ion-input type="password" placeholder="" #senha></ion-input>\n    </ion-item>\n    \n    <div class="spacer" style="height:21px;" id="login-spacer4"></div>\n    <button id="login-button1" ion-button outline color="light" block style="font-style:italic;color:#FFF8F8;" (click)="entrar()">\n      Entrar\n    </button>\n    <button  id="login-button2" ion-button  clear color="light" block small style="text-align:right;">\n      Esqueceu a senha?\n    </button>\n    <div class="spacer" style="height:25px;" id="login-spacer3"></div>\n<button id="login-button3" ion-button outline color="light" block style="font-style:italic;color:#FFFFFF;" (click)="entrarCadastrar()">\n      Cadastrar\n    </button>\n    <button id="login-button4" ion-button clear color="light" block small style="color:#FFFFFF;" >\n      Fale conosco\n    </button>\n<button id="login-button5" ion-button outline color="dark" block style="color:#FFFFFF;" (click)="entrarQuemSomos()">\n  Quem somos\n\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_comunicacao_api__["a" /* ComunicacaoApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastrarPage = /** @class */ (function () {
    function CadastrarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CadastrarPage_1 = CadastrarPage;
    CadastrarPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    CadastrarPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    CadastrarPage.prototype.goToCadastrar = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CadastrarPage_1);
    };
    CadastrarPage = CadastrarPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\cadastrar\cadastrar.html"*/'<ion-content padding style="background:url(assets/img/ebXzgB41TpPsxDcgTxwt_tela.jpg) no-repeat center;background-size:cover;background-color:#F0E2FF;"\n  id="page5">\n  <img src="assets/img/UGeQwmh0Rr6dvktfMoQd_tipo-branco-completo.png" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;"\n  />\n  <img src="assets/img/1JCwMZ7iTiWKyKFqAsR8_icon_bitfarm.png" style="display:block;width:30%;height:auto;margin-left:auto;margin-right:auto;"\n  />\n  <form id="cadastrar-form2">\n    <ion-item id="cadastrar-input8">\n      <ion-label floating>\n        Nome\n      </ion-label>\n      <ion-icon name="person" item-start class="text-primary"></ion-icon>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <div class="spacer" style="height:16px;" id="cadastrar-spacer8"></div>\n    <ion-item id="cadastrar-input11">\n      <ion-label floating>\n        Sobre nome\n      </ion-label>\n      <ion-icon name="person" item-start class="text-primary"></ion-icon>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <div class="spacer" style="height:16px;" id="cadastrar-spacer6"></div>\n    <ion-item id="cadastrar-input9">\n      <ion-label floating>\n        E-mail\n      </ion-label>\n      <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n      <ion-input type="email" placeholder=""></ion-input>\n    </ion-item>\n    <div class="spacer" style="height:16px;" id="cadastrar-spacer7"></div>\n    <ion-item id="cadastrar-input12">\n      <ion-label floating>\n        Senha\n      </ion-label>\n      <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <button id="cadastrar-button6" ion-button outline color="positive" block style="color:#FFFFFF;" on-click="goToLogin()">\n    Cadastrar\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\cadastrar\cadastrar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CadastrarPage);
    return CadastrarPage;
    var CadastrarPage_1;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comunicacao_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticia_noticia__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticiasPage = /** @class */ (function () {
    function NoticiasPage(navCtrl, navParams, comunicacaoApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comunicacaoApi = comunicacaoApi;
        this.noticias = new Array();
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log("Carregou NoticasPage");
    };
    NoticiasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("Vai entrar");
        this.comunicacaoApi.getTodasNoticias(localStorage.getItem('token'))
            .subscribe(function (result) {
            _this.noticias = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    NoticiasPage.prototype.abreNoticia = function (id) {
        var _this = this;
        var noticia;
        this.comunicacaoApi.getNoticia(localStorage.getItem('token'), id)
            .subscribe(function (result) {
            noticia = result;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__noticia_noticia__["a" /* NoticiaPage */], { objeto: noticia });
        });
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\noticias\noticias.html"*/'<menu-topo [nomePagina]="Noticias" ></menu-topo>\n<ion-content padding style="background:url(assets/img/6NFJU7EhQkpNPMiiEccw_tela.jpg) no-repeat center;background-size:cover;"\n  id="page6">\n  <ion-content padding style="background:url(assets/img/6NFJU7EhQkpNPMiiEccw_tela.jpg) no-repeat center;background-size:cover;"\n    id="page6">\n      <div *ngFor="let noticiaAtual of noticias" style="background:#2f3c4d">\n        <div>\n          <p style="color: aliceblue">Titulo: {{ noticiaAtual.title}} </p>\n          <ion-card-header>\n            <img src="{{ noticiaAtual.thumbnail_url }}" (click)="abreNoticia(noticiaAtual.ID)">\n            <ion-col>\n              <p style="color: blue">Likes: {{ noticiaAtual.likes}} Dislikes: {{ noticiaAtual.dislikes}} </p>\n              </ion-col>\n          </ion-card-header>\n        </div>\n        <div class="spacer" style="height:11px;" id="login-spacer2"></div>\n      </div>\n  </ion-content>\n\n  <ion-content padding style="background:url(assets/img/6NFJU7EhQkpNPMiiEccw_tela.jpg) no-repeat center;background-size:cover;"\n    id="page6">\n  </ion-content>'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_comunicacao_api__["a" /* ComunicacaoApiProvider */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticiaPage = /** @class */ (function () {
    function NoticiaPage(navCtrl, navParams, appBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appBrowser = appBrowser;
        this.noticiaExibir = this.navParams.get('objeto');
    }
    NoticiaPage.prototype.ionViewDidLoad = function () {
    };
    NoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticia',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\noticia\noticia.html"*/'<!--\n  Generated template for the NoticiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ noticiaExibir.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="texto">\n    {{ noticiaExibir.content }}\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\noticia\noticia.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _c || Object])
    ], NoticiaPage);
    return NoticiaPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=noticia.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalisesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalisesPage = /** @class */ (function () {
    function AnalisesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnalisesPage.prototype.ionViewDidLoad = function () {
        console.log();
    };
    AnalisesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-analises',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\analises\analises.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>analises</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background:url(assets/img/p9sxBwJ4QoWIU9mxAJ9d_tela.jpg) no-repeat center;background-size:cover;"\n  id="page10">\n</ion-content>\n'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\analises\analises.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AnalisesPage);
    return AnalisesPage;
}());

//# sourceMappingURL=analises.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastrar_cadastrar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_comunicacao_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_botao_flutuante_botao_flutuante__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_menu_topo_menu_topo__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_mensagens__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_noticias_noticias__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_analises_analises__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_noticia_noticia__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__components_botao_flutuante_botao_flutuante__["a" /* BotaoFlutuanteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_menu_topo_menu_topo__["a" /* MenuTopoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_analises_analises__["a" /* AnalisesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_noticia_noticia__["a" /* NoticiaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__components_botao_flutuante_botao_flutuante__["a" /* BotaoFlutuanteComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_menu_topo_menu_topo__["a" /* MenuTopoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_analises_analises__["a" /* AnalisesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_noticia_noticia__["a" /* NoticiaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_comunicacao_api__["a" /* ComunicacaoApiProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_mensagens__["a" /* MensagensProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_noticias_noticias__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_analises_analises__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToNews = function (params) {
        if (!params)
            params = {};
        console.log("entrou em Noticias");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_noticias_noticias__["a" /* NoticiasPage */]);
    };
    MyApp.prototype.goToAnalises = function (params) {
        if (!params)
            params = {};
        console.log("entrou em analises");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_analises_analises__["a" /* AnalisesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-content id="side-menu21" style="background-color:#042535;">\n    <img src="assets/img/tZoAP3WTTaBLMVVXefhl_logo.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;"\n    />\n<button  id="menu-button7" (click)="goToNews()" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon  name="medkit"></ion-icon>\n      Noticias\n    </button>\n  \n    <button id="menu-button14" (click)="goToAnalises()" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Análises\n    </button>\n    <button id="menu-button15" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Análistas BitFarm\n    </button>\n    <hr>\n    <button id="menu-button16" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Progamação de lives\n    </button>\n    <button id="menu-button17" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Fórum\n    </button>\n    <button id="menu-button18" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Ranking(Pilas)\n    </button>\n    <hr>\n    <button id="menu-button19" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      A comunidade\n    </button>\n    <button id="menu-button20" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Indicaçoes\n    </button>\n    <button id="menu-button21" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Pontuação\n    </button>\n    <button id="menu-button22" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Sala de Trade\n    </button>\n    <button id="menu-button23" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Publicar Análises\n    </button>\n    <button id="menu-button24" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Fundo de Investimento\n    </button>\n    <hr>\n    <button id="menu-button25" ion-button outline color="dark" block icon-left style="font-weight:600;color:#CFCECE;text-align:left;" menuClose>\n      <ion-icon name="medkit"></ion-icon>\n      Minha Conta\n    </button>\n    <div class="spacer" style="height:29px;" id="menu-spacer9"></div>\n    <ion-row no-padding class="other-data">\n      <ion-col no-padding class="column">\n        <button ion-button icon-left small full color="light" menuClose (click)="goToLogout">\n          <ion-icon name="log-out"></ion-icon>\n          Sair\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotaoFlutuanteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BotaoFlutuanteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BotaoFlutuanteComponent = /** @class */ (function () {
    function BotaoFlutuanteComponent() {
        console.log('Hello BotaoFlutuanteComponent Component');
        this.text = 'Hello World';
    }
    BotaoFlutuanteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'botao-flutuante',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\components\botao-flutuante\botao-flutuante.html"*/'<ion-content>\n    <ion-fab right bottom>\n      <button ion-fab mini>\n        <ion-icon name="add" style="color: #f0a547;"></ion-icon>\n      </button>\n      <ion-fab-list side="top">\n        <button ion-fab>\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-vimeo"></ion-icon>\n        </button>\n        <button ion-fab>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\components\botao-flutuante\botao-flutuante.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BotaoFlutuanteComponent);
    return BotaoFlutuanteComponent;
}());

//# sourceMappingURL=botao-flutuante.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuTopoComponent = /** @class */ (function () {
    function MenuTopoComponent() {
        console.log();
        console.log(this.nomePagina);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MenuTopoComponent.prototype, "nomePagina", void 0);
    MenuTopoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-topo',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\components\menu-topo\menu-topo.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{ nomePagina }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n//aqui botao flutuante\n<ion-content>\n  <ion-fab right bottom>\n    <button ion-fab mini color="newcolor">\n      <ion-icon name="add" color="danger"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\components\menu-topo\menu-topo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenuTopoComponent);
    return MenuTopoComponent;
}());

//# sourceMappingURL=menu-topo.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensagensProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MensagensProvider = /** @class */ (function () {
    function MensagensProvider(http) {
        this.http = http;
        console.log('Hello MensagensProvider Provider');
    }
    MensagensProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MensagensProvider);
    return MensagensProvider;
}());

//# sourceMappingURL=mensagens.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comunicacao_api__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navparams, comunicacaoApi) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.comunicacaoApi = comunicacaoApi;
        this.Home = new Array();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("carregou Homepage");
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("vai entraaaaar");
        console.log(localStorage.getItem('token'));
        this.comunicacaoApi.getTodosVideos(localStorage.getItem('token'))
            .subscribe(function (result) {
            _this.Home = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n//aqui botao flutuante\n<ion-content>\n  <ion-fab right bottom>\n<button ion-fab mini color="newcolor">\n      <ion-icon name="add" color="danger"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-content padding style="background:url(assets/img/6NFJU7EhQkpNPMiiEccw_tela.jpg) no-repeat center;background-size:cover;"\n  id="page6">\n  <ion-content padding style="background:url(assets/img/6NFJU7EhQkpNPMiiEccw_tela.jpg) no-repeat center;background-size:cover;"\n    id="page6">\n<div>\n<!-- <iframe src="https://www.youtube.com/embed/gvI2ClWqHO0" frameborder="0" width="100" height="315"></iframe> -->\n</div>\n<div *ngFor="let videoatual of Home" style="background:#2f3c4d">\n  <div>\n    <p style="color: aliceblue">Titulo: {{ videoAtual.title}} </p>\n    <ion-card-header>\n    <img src="https://youtu.be/u8dpTKDkvWk">\n      <ion-col>\n        <p style="color: blue">Likes: {{ videoAtual.likes}} Dislikes: {{ videoAtual.dislikes}} </p>\n      </ion-col>\n    </ion-card-header>\n  </div>\n  <div class="spacer" style="height:11px;" id="login-spacer2"></div>\n</div>\n\n    \n  </ion-content>\n\n\n  <ion-content padding style="background:url(assets/img/6NFJU7EhQkpNPMiiEccw_tela.jpg) no-repeat center;background-size:cover;"\n    id="page6">\n  </ion-content>'/*ion-inline-end:"C:\Users\jessica\Desktop\projeto bitfarm 08-18\ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_comunicacao_api__["a" /* ComunicacaoApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunicacaoApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL_LOGIN = 'http://bitfarm.trade/api/login';
var URL_NEWS = 'http://bitfarm.trade/api/news';
var URL_NEW = 'https://bitfarm.trade/api/new';
var URL_VIDEOS = 'https://bitfarm.trade/api/lives';
var ComunicacaoApiProvider = /** @class */ (function () {
    function ComunicacaoApiProvider(http) {
        this.http = http;
    }
    ComunicacaoApiProvider.prototype.login = function (login, pass) {
        var urlLogin = URL_LOGIN + '?login=' + login + '&pass=' + pass;
        return this.http.get(urlLogin);
    };
    ComunicacaoApiProvider.prototype.getTodosVideos = function (token) {
        var urlVideos = URL_VIDEOS + "/" + token;
        return this.http.get(urlVideos);
    };
    ComunicacaoApiProvider.prototype.getTodasNoticias = function (token) {
        var urlNoticias = URL_NEWS + "/" + token;
        return this.http.get(urlNoticias);
    };
    ComunicacaoApiProvider.prototype.getNoticia = function (token, id) {
        var urlNoticia = URL_NEW + '/' + token + '?id=' + id;
        return this.http.get(urlNoticia);
    };
    ComunicacaoApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ComunicacaoApiProvider);
    return ComunicacaoApiProvider;
}());

//# sourceMappingURL=comunicacao-api.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map