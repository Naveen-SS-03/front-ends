import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateRecipientComponent } from './recipient/create-recipient/create-recipient.component';
import { RecipientListComponent } from './recipient/recipient-list/recipient-list.component';



@NgModule({

  declarations: [
    AppComponent,
    CreateRecipientComponent,
    RecipientListComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
