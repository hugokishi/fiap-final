import { init as InitRouter, NextFunction, Request, Response } from "@driver/http/express"
import { AuthorizationUseCase, init as InitAuthorizationUseCase } from "src/usecase/Authorization"

export class AuthorizationHandler {
  private authorizatonUseCase: AuthorizationUseCase

  constructor({ router, authorizatonUseCase }) {
    this.authorizatonUseCase = authorizatonUseCase

    router.post("/login", this.authenticate)
  }

  public authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authorizatonUseCase.authenticate(req.body)
      res.json({ user })
    } catch (error) {
      res.status(401).send(error.message)
    }
  }
}

export const init = () => {
  const router = InitRouter()
  const authorizatonUseCase = InitAuthorizationUseCase()

  return new AuthorizationHandler({ router, authorizatonUseCase })
}

export default init
