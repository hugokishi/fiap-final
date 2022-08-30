import connectRedis from 'connect-redis'
import session from 'express-session'

import { init as InitRouter } from '@driver/http/express'
import { init as InitRedis } from '@driver/store/redis'

export class SessionMiddleware {
  constructor (router, redis) {
    const RedisStore = connectRedis(session)

    router.use(
      session({
        secret: process.env.SESSION_SECRET,
        name: process.env.SESSION_NAME,
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: false,
          maxAge: 604800000
        },
        store: new RedisStore({ client: redis })
      })
    )
  }
}

export const init = () => {
  const router = InitRouter()
  const redis = InitRedis()

  return new SessionMiddleware(router, redis)
}

export default init
