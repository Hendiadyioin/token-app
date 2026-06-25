import { Component, inject } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { selectTableViewModel } from './table.selectors'
import { TableViewModel } from './table.viewmodel'
import { AuthProxyService } from '@onecx/angular-auth'
import { ColumnType, DataAction, DataTableColumn, Row } from '@onecx/angular-accelerator'
import { isEqualCheck } from '@ngrx/store/src/selector'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: false
})
export class TableComponent {
  viewModel$: Observable<TableViewModel>

  translateService = inject(TranslateService)
  authService = inject(AuthProxyService);
  
  headerValues = this.authService.getHeaderValues();

  tableColumns: DataTableColumn[] = [
    {id: "key", columnType: ColumnType.STRING, nameKey: this.translateService.instant("TABLE_COLUMNS.KEY"), sortable: false},
    {id:"token", columnType: ColumnType.STRING, nameKey: this.translateService.instant("TABLE_COLUMNS.TOKEN"), sortable: false}
  ]
  tableRows: Row[] = this.formatHeaderValuesForTable(this.headerValues);

  constructor(private readonly store: Store) {
    this.viewModel$ = this.store.select(selectTableViewModel);
  }

  formatHeaderValuesForTable(headerValues: Record<string, string>): Row[] {
    const tokentoCheck = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5LWV0ZV94NklUbDY3R2tDT3pMVkJ3Y1ZTcFUtSV9EYzZFTW9jV0Q4aGZZIn0.eyJleHAiOjE3ODE4NTc0MzAsImlhdCI6MTc4MTg1NzEzMCwiYXV0aF90aW1lIjoxNzgxODU1NzAzLCJqdGkiOiI5N2FkMjdiYy1hY2ZhLTQzZDItYmJmMS1iODZjNDAxZjU5ZjEiLCJpc3MiOiJodHRwOi8va2V5Y2xvYWstYXBwLmxvY2FsaG9zdDo4MDgwL3JlYWxtcy9vbmVjeCIsImF1ZCI6Im9uZWN4LXNoZWxsLXVpLWNsaWVudCIsInN1YiI6ImY5OTRiMDMxLTgzMTYtNDdmZS04ZWJmLWM3NjgwM2IwNzFkNiIsInR5cCI6IklEIiwiYXpwIjoib25lY3gtc2hlbGwtdWktY2xpZW50Iiwic2lkIjoiOTcyNTA1MDctZThiOC00ZmU1LTgxOTQtMTczNWIzYzYzNjU2IiwiYXRfaGFzaCI6IlJWSkxCQ1JMNFlBY0NjLVpkZTNQWEEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6Ik9uZUNYIEFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib25lY3giLCJnaXZlbl9uYW1lIjoiT25lQ1giLCJmYW1pbHlfbmFtZSI6IkFkbWluIiwiZW1haWwiOiJvbmVjeF9hZG1pbkAxMDAwa2l0Lm9yZyJ9.oFvHKh1YcK3-1gcCgRAv-NnHI_yPY_62USSUm9vdU8OMlcRq_csVkCy97uf-Y7c-in1TCNwoXRDttVgVEpdQNnrhUc1N00-WOkJDp-TdDnOhwTaRIEI-28qhUxxUiUIlOJ7eUHcduNMmHE_8GFwoZJEWwICGpoRqBREgmwzfnXN4UiSUfbYnlM8YJhhKXvLCZOv-R91cmNqtsIfAgZNjTEGySo-Rmf-DHqvboRsQJuDEkSKWf0yLmBvWCAhdcBXqtGf9D3HYjW6Ud99tVmQL9hBgHYwvR-J-4hJ9_0BT_cVFVRV984o21Ps7GH9E6JC3c3K-kUdRFeUk4cqKU_Zp7Q"

    let result: Row[] = [];
    Object.entries(headerValues).forEach(([key, value]) => {
      this.equalcheck(tokentoCheck, value)
      result.push({
      id: key,
      key,
      token: value})
    });
    return result;
  }

  formatData(data: any): string {
    return JSON.stringify(data);
  }

  equalcheck(string1: any, string2: any): void {
    console.log("Equalcheck" + ((string1 as any) === (string2 as any)))
  }


}
