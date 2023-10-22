import { PostService as IPostService, GetAllPostsResponse, Post } from 'api/posts/posts.model';

import httpClient from 'common/http/httpClient';

const PostService = (): IPostService => {
  return {
    getAllPosts: (): HttpPromise<GetAllPostsResponse> => {
      return httpClient.get('/posts');
    },
  };
};

export default PostService();
