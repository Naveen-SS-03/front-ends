import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipientComponent } from './recipient/create-recipient/create-recipient.component';
import { RecipientListComponent } from './recipient/recipient-list/recipient-list.component';


const routes: Routes = [   
  {path: `Recipient/getall`, component: RecipientListComponent},
  {path: `Recipient/create`, component: CreateRecipientComponent},
  {path: '', redirectTo:`Recipient/getall`,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
