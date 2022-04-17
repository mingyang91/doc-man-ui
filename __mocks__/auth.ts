import { MockMethod } from 'vite-plugin-mock'

const mocks: MockMethod[] = [
  {
    url: '/api/user/signin',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body as {
        username?: string
        password?: string
      }
      if (username === 'admin' && password === 'admin') {
        return {
          access_token: 'mock_admin',
        }
      }
      return {
        error: '用户名或密码错误',
      }
    },
  },
  {
    url: '/api/user/refreshToken',
    method: 'post',
    response: {
      access_token: 'mock_admin',
    },
  },
  {
    url: '/api/user/me',
    method: 'get',
    response: {
      id: 'V8QPN7blvuxAIltr',
      username: 'admin',
      display_name: 'Ming Yang',
      role: 'admin',
      email: 'admin@docman.io',
    },
  },
  {
    url: '/api/user/logout',
    method: 'get',
    response: {
      code: 0,
    },
  },
]

export default mocks
