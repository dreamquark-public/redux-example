import { createStore, combineReducers } from 'redux';


const stateInit = {
  toDo: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibility: 'SHOW_COMPLETED'
}

export const toDoAction = { type: 'ADD_TODO', text: 'Go to swimming pool' }

export function toDoActionCreator (params) {
  return {
    type: 'ADD_TODO',
    ...params
  }
}

function visibilityFilterReducer(state = stateInit.visibility, action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function toDoListReducer(state = stateInit.toDo, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('--------------------------------------------------------')
      console.log(`Je vais ajouter des choses à faire, j'ai du boulot moi !`)
      console.log('------------------------action--------------------------')
      console.log(action)
      console.log('------------------------state---------------------------')
      console.log(state)
      return [
        ...state,
        {
          text: action.text,
          isLate: action.isLate,
          completed: false
        }
      ]
    default:
      return state
  }
}

export const reducer = combineReducers({
  toDo: toDoListReducer,
  visibility: visibilityFilterReducer
})

const store = createStore(reducer)
store.dispatch(toDoAction)
store.dispatch(toDoActionCreator({text: 'After the swimming pool, I need to sleep'}))

export default () => {
  return store
}
