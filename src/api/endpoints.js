export const HOST = 'http://localhost:8000'

export const getBlogPostById = postId => `${HOST}/blog/post/${postId}/`

export const getBlogPostList = () => `${HOST}/blog/post/list/`

export const deleteBlogPostById = postId => `${HOST}/blog/post/delete/${postId}`

export const createBlogPost = () => `${HOST}/blog/post/create/`
