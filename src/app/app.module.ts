import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';

import {HttpClientModule} from '@angular/common/http';
import { NewsFeedComponent } from './home/news-feed/news-feed.component';
import { DownloadsComponent } from './downloads/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServiceComponent,
    NewsFeedComponent,
    DownloadsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
