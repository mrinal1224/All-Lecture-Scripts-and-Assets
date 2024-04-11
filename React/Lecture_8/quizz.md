## Que  What are core principle of redux   ?
 * Single source of truth** - <br> You can only have one store in whole application . We can have multiple slices.
*  State is read only** - <br> When you want to update the state, then you have to dispatch an 'action' (an object that describes what happened.)
* Changes are made by pure reducer function** 
* All of the above

## Q How does redux manage async thunk
* using useEffect
* using useContext
* using redux-thunk

## Q  what is the order of data flow in redux
* Slice[InitialState] -> Store -> Provider -> Component(using useSelector) -> useDispatch(actions)
* Store -> Provider -> Slice[InitialState] -> Component(using useSelector) -> useDispatch(actions)
* Slice[InitialState] -> Provider -> Store -> Component(using useSelector) -> useDispatch(actions)

  