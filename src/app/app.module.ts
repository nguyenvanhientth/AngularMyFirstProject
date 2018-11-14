import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNameComponent } from './list-name/list-name.component';
import { NameDetailComponent } from './name-detail/name-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNameComponent,
    NameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
