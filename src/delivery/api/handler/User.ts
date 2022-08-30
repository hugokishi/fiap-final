import { init as InitRouter, NextFunction, Request, Response } from "@driver/http/express"
import { UserUseCase, init as InitUserUseCase } from "src/usecase/User"

export class UserHandler {
  private userUseCase: UserUseCase

  constructor({ router, userUseCase }) {
    this.userUseCase = userUseCase

    router.post("/users", this.create)
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userUseCase.create(req.body)
      res.json({ user })
    } catch (error) {
      next(error)
    }
  }
}

export const init = () => {
  const router = InitRouter()
  const userUseCase = InitUserUseCase()

  return new UserHandler({ router, userUseCase })
}

export default init
