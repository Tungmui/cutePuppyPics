import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ChangeLanguageService } from '../shared/change-language-service/change-language-service';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { MePage } from '../pages/me/me';
import { RegisterPage } from '../pages/register/register';
import { RacingListPage } from '../pages/racing-list/racing-list';
import { SocketService } from '../shared/socket-service/socket-service';
import { TabsPage } from '../pages/tabs/tabs';
import { TermsPage } from '../pages/terms/terms';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MainPage,
    MePage,
    RegisterPage,
    RacingListPage,
    TermsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MainPage,
    MePage,
    RegisterPage,
    RacingListPage,
    TermsPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChangeLanguageService,
    SocketService
  ]
})
export class AppModule {}
