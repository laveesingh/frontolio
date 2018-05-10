import axios from 'axios'
import cookies from 'js-cookie'
import * as urls from './endpoints'

export const getBlogPostList = callback => {
  axios({
    url: urls.getBlogPostList(),
    method: 'get',
  }).then(response => callback(response))
}

export const getBlogPostById = (postId, callback) => {
  axios({
    url: urls.getBlogPostById(postId),
    method: 'get',
  }).then(response => callback(response))
}

export const deleteBlogPostById = (postId, callback) => {
  axios({
    url: urls.deleteBlogPostById(postId),
  }).then(repsonse => callback(response))
}

export const createBlogPost = (data, callback) => {
  const csrfmiddlewaretoken = cookies.get('csrftoken')
  axios({
    url: urls.createBlogPost,
    method: 'post',
    headers: {'X-CSRFToken': csrfmiddlewaretoken},
    data: data,
  }).then(response => callback(response))
}
