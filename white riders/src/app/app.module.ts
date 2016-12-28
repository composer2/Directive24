import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { TopOffersService } from './shared/top-offers.service';


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
        routableComponents,
    ],

    providers: [TopOffersService],

    bootstrap: [AppComponent]
})
export class AppModule { }