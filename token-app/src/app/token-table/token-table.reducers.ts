import { combineReducers, createFeature } from '@ngrx/store'
import { tableReducer } from './pages/table/table.reducers'

import { TokenTableState } from './token-table.state'

export const tokenTableFeature = createFeature({
  name: 'tokenTable',
  reducer: combineReducers<TokenTableState>({
    table: tableReducer
  })
})
