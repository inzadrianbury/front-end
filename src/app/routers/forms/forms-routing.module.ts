import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';
import {RouterOutletComponent} from './shared/components/router-outlet/router-outlet.component';
import {InstallationComponent} from './machine-tool-specification/installation/installation.component';

const routes: Routes = [
  {
    path: 'machine-tool-specification',
    component: FormsComponent,
    data: {
      breadcrumb: 'Machine Tool Specification'
    },
    children: [
      {
        path: '',
        component: MachineToolSpecificationComponent
      },
      {
        path: 'installation',
        component: InstallationComponent,
        data: {
          breadcrumb: 'Installation'
        },
      },
      {
        path: 'machining-capabilities',
        component: MachiningCapabilitiesComponent,
        data: {
          breadcrumb: 'Machining Capabilities'
        },
      },
      {
        path: 'its-elements',
        component: RouterOutletComponent,
        loadChildren: './machine-tool-specification/its-elements/its-elements.module#ItsElementsModule',
        data: {
          breadcrumb: 'Its Elements'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
