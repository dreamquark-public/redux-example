import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { iWantToDispatchAnActionWithAPromise as addToDoWithoutChoice} from './storeWithThunkMiddleware'
import { TodoList, mapStateToProps } from './todoContainerExemple'

const mapDispatchToPropsObject = {addToDoWithoutChoice}

const TodoConnected = connect(
  mapStateToProps,
  mapDispatchToPropsObject
)(TodoList)

export default TodoConnected
