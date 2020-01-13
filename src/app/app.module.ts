import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2OdometerModule } from 'ng2-odometer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { CompanyComponent } from './component/company/company.component';
import { MenuComponent } from './component/menu/menu.component';
import { CompanyViewComponent } from './component/company-view/company-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CompanyComponent,
    MenuComponent,
    CompanyViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OdometerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2OdometerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
