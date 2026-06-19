import { createReducer } from '@ngrx/store'
import { TableState } from './table.state'

export const initialState: TableState = {}

export const tableReducer = createReducer(initialState)
