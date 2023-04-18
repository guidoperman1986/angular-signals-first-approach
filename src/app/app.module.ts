import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { UsersSignalPageComponent } from './users/pages/users-signal-page/users-signal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersSignalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
