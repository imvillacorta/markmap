import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';

import { NgxMarkdownItModule } from 'ngx-markdown-it';
import { NgxMarkdownItConfig } from 'ngx-markdown-it';

import { default as markmapPlugin } from 'markdown-it-markmap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMarkdownItModule.forRoot({
      plugins: [markmapPlugin],
    } as NgxMarkdownItConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
