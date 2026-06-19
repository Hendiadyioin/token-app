import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LetDirective } from '@ngrx/component'
import { StoreModule } from '@ngrx/store'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [LetDirective, StoreModule.forRoot({})]
    }).compileComponents()

    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
