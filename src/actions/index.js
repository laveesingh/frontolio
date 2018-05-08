import {SET_BLOG_POST, SET_BLOG_POST_LIST} from './types'

export const setBlogPost = post => ({
  type: SET_BLOG_POST,
  payload: post,
})

export const setBlogPostList = postList => ({
  type: SET_BLOG_POST_LIST,
  payload: postList,
})
