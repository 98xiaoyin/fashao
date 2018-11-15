import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {MyHttpService} from './utility/service/myhttp.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {IndexPage} from '../pages/index/index';
import {DetailPage} from '../pages/detail/detail';
import {CartPage} from '../pages/cart/cart';
import {LoginPage} from '../pages/login/login';
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm';
import {PayPage} from '../pages/pay/pay';
import {UserCenterPage} from '../pages/user-center/user-center';
import {NotFoundPage} from '../pages/not-found/not-found';

@NgModule({
  declarations: [
    NotFoundPage,
    UserCenterPage,
    PayPage,
    OrderConfirmPage,
    LoginPage,
    CartPage,
    DetailPage,
    IndexPage,
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NotFoundPage,
    UserCenterPage,
    PayPage,
    OrderConfirmPage,
    LoginPage,
    CartPage,
    DetailPage,
    IndexPage,
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    MyHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
