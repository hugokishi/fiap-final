import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"

import logger from "@app/logger"
import tracer from "@app/tracer"

import { init as InitErrorMiddleware } from "@api/middleware/Error"

import HealthHandler from "@handler/Health"
import UserHandler from "@handler/User"
import AuthorizationHandler from "@handler/Authorization"
import FeedHandler from "@handler/Feed"

const defineMiddelwares = (router, express) => {
  InitErrorMiddleware()
  router.use(express.json())
  router.use(tracer.middlewareForExpress())
  router.use(cors())
  router.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    }),
  )
  if (process.env.NODE_ENV === "development") {
    router.use(morgan("dev"))
  } else {
    router.use(morgan("combined", logger.morganOptions))
  }
}

const defineHandlers = () => {
  HealthHandler()
  UserHandler()
  AuthorizationHandler()
  FeedHandler()
}

const init = (router, express) => {
  defineMiddelwares(router, express)
  defineHandlers()
}

export default { init }
