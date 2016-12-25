import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule, routableComponents } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        HomeModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        routableComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }