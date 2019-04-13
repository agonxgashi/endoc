import { QuoteComponent } from './quote/quote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ApproutesComponent } from './approutes/approutes.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ApproutesBaseComponent } from './approutesbase.component';

const routes: Routes = [
  {
    path: '',
    component: ApproutesBaseComponent,
    children: [
      { path: '', component: QuoteComponent },
      { path: 'new', component: NewComponent },
      { path: ':routeId', component: DetailsComponent },
      { path: ':routeId/edit', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutesBaseRoutingModule { }
