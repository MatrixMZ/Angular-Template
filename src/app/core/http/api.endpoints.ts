export const apiEndpoints = {
  auth: {
    login: `api/auth/login`,
    register: `api/auth/register`
  },
  posts: {
    main: 'posts',
    params: 'posts/{0}'
  },
  users: {
    get: 'users',
    params: 'users/{0}'
  }
};
