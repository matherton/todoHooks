// container.js (withReducer + withCallbacks)
import { combine, withReducer, withCallbacks } from 'react-hooks-combine'
 
import { CounterComponent } from './component'
 
const INC = 'INC'
const DEC = 'DEC'
 
const reducer = (count, action) => {
    switch(action.type) {
      case INC: return count + 1
      case DEC: return count - 1
      default: return count
    }
}
 
export default combine(
  withReducer({
    reducer,
    stateName: counterState,
    initialState: 0,
  }),
  withCallbacks({
    onPlus: ({ counterState, dispatch }, _props) => () => {
      dispatch({ type: INC })
    },
 
    onMinus: ({ counterState, dispatch }, _props) => () => {
      dispatch({ type: DEC })
    }
  }, ['counterState']), // <-  deps for useCallback (CHECK API TO LEARN MORE)
)