import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ],
  declarations: [FormsComponent],
  providers: [
    FormToastService,
    TreeService
  ]
})
export class FormsModule {
}
