import { EndocSharedModule } from 'src/global/modules/clickshared.module';
import { QuoteComponent } from './quote/quote.component';
import { AppRoutesBaseRoutingModule } from './approutesbase-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproutesBaseComponent } from './approutesbase.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutesBaseRoutingModule,
    EndocSharedModule
  ],
  declarations: [ApproutesBaseComponent, QuoteComponent, NewComponent, DetailsComponent, EditComponent]
})
export class ApproutesBaseModule { }
