import { createActionGroup, emptyProps } from '@ngrx/store'

export const TableActions = createActionGroup({
  source: 'Table',
  events: {
    'sample action': emptyProps()
  }
})
