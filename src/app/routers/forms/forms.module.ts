import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {FormsRoutingModule} from './forms-routing.module';
import {MachineToolSpecificationService} from './machine-tool-specification/shared/services/machine-tool-specification/machine-tool-specification.service';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';
import {FormsSharedModule} from './shared/forms-shared.module';
import {SharedModule} from '../../shared/shared.module';
import {InstallationComponent} from './machine-tool-specification/installation/installation.component';
import {StandardMachiningProcessComponent} from './machine-tool-specification/standard-machining-process/standard-machining-process.component';
import {MachineToolSpecificationFormService} from './machine-tool-specification/shared/services/machine-tool-specification-form/machine-tool-specification-form.service';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsSharedModule,
    SharedModule,
  ],
  declarations: [
    FormsComponent,
    MachineToolSpecificationComponent,
    MachiningCapabilitiesComponent,
    InstallationComponent,
    StandardMachiningProcessComponent,
  ],
  providers: [
    MachineToolSpecificationService,
    MachineToolSpecificationFormService,
    FormToastService,
    TreeService
  ]
})
export class FormsModule {
}
