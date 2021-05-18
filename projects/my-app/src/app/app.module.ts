import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooBarModule } from 'foo-bar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
