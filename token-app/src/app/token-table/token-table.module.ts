import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { LetDirective } from '@ngrx/component'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { TranslateModule } from '@ngx-translate/core'
import { AngularAcceleratorModule, providePortalDialogService } from '@onecx/angular-accelerator'
import { DatePickerModule } from 'primeng/datepicker'
import { TooltipModule } from 'primeng/tooltip'
import { SharedModule } from '../shared/shared.module'
import { TableComponent } from './pages/table/table.component'
import { TableEffects } from './pages/table/table.effects'

import { PermissionService, PortalPageComponent } from '@onecx/angular-utils'
import { tokenTableFeature } from './token-table.reducers'
import { routes } from './token-table.routes'

@NgModule({
  providers: [providePortalDialogService(), PermissionService],
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    LetDirective,
    AngularAcceleratorModule,
    PortalPageComponent,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule,
    TooltipModule,
    StoreModule.forFeature(tokenTableFeature),
    EffectsModule.forFeature([TableEffects]),
    TranslateModule
  ]
})
export class TokenTableModule {}
