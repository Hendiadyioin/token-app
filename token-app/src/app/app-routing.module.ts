import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { startsWith } from '@onecx/angular-webcomponents'

export const routes: Routes = [
  {
    // Adjust the matcher to match the feature route.
    // If you only have one feature, you can use '' for simplification.
    matcher: startsWith(''),
    loadChildren: () => import('./token-table/token-table.module').then((mod) => mod.TokenTableModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
