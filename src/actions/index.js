import * as actionTypes from './types'

export const setBlogPost = post => ({
  type: actionTypes.SET_BLOG_POST,
  payload: post,
})

export const setBlogPostList = postList => ({
  type: actionTypes.SET_BLOG_POST_LIST,
  payload: postList,
})

export const removeBlogPostFromList = post => ({
  type: actionTypes.REMOVE_BLOG_POST_FROM_LIST,
  payload: post,
})
