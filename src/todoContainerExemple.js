import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toDoActionCreator } from './todoExemple'

export function TodoList(props) {
  const { todos, addToDoWithoutChoice } = props
  return (
    <div>
      <ul>
        {
          todos.map((elm, index) => {
            return <li key={elm.id || index}>
              {elm.text} {elm.isLate && <span>Je suis une action asynchrone</span>}
            </li>
          })
        }
      </ul>
      <button onClick={addToDoWithoutChoice} >Add an IMPORTANT task</button>
      {/*<button onClick={() => props.addToDoWithoutChoice({text: `Faire la review des apis, j'ai tellement hâte je suis hyper content(e)`})} >Add an IMPORTANT task </button>*/}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
}

TodoList.defaultProps = {
  todos: []
}

export const mapStateToProps = state => {
  return {
    todos: state.toDo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDoWithoutChoice: _ => {
      dispatch(toDoActionCreator({text: 'Faire la review des apis !!! '}))
    }
  }
}

//const mapDispatchToPropsObject = {toDoActionCreator}

const TodoConnected = connect(
  mapStateToProps,
  mapDispatchToProps //mapDispatchToPropsObject
)(TodoList)

export default TodoConnected
