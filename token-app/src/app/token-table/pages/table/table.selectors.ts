import { createSelector } from '@ngrx/store'
import { createChildSelectors } from '@onecx/ngrx-accelerator'

import { tokenTableFeature } from '../../token-table.reducers'
import { initialState } from './table.reducers'
import { TableViewModel } from './table.viewmodel'

export const tableSelectors = createChildSelectors(tokenTableFeature.selectTable, initialState)

export const selectTableViewModel = createSelector((): TableViewModel => ({}))
