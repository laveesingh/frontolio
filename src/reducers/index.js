import {combineReducers} from 'redux'
import * as actionTypes from '../actions/types'

export const blog = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_BLOG_POST:
      return {blogPost: action.payload}
    case actionTypes.SET_BLOG_POST_LIST:
      return {blogPostList: action.payload}
    default:
      return state
  }
}

const reducers = {blog}

export default combineReducers(reducers)
