import {combineReducers} from 'redux'
import * as actionTypes from '../actions/types'

export const blog = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_BLOG_POST:
      return {blogPost: action.payload}
    case actionTypes.SET_BLOG_POST_LIST:
      return {blogPostList: action.payload}
    case actionTypes.REMOVE_BLOG_POST_FROM_LIST:
      console.log(action.payload.pk, state)
      return {
        blogPostList: state.blogPostList.filter(
          post => post.pk !== action.payload.pk,
        ),
      }
    default:
      return state
  }
}

const reducers = {blog}

export default combineReducers(reducers)
