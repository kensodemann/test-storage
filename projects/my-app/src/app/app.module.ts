import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { FooBarModule } from 'foo-bar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooBarModule, IonicStorageModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
