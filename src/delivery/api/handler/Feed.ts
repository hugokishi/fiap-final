import { init as InitRouter, NextFunction, Request, Response } from "@driver/http/express"
import { FeedUseCase, init as InitFeedUseCase } from "src/usecase/Feed"

export class FeedHandler {
  private feedUseCase: FeedUseCase

  constructor({ router, feedUseCase }) {
    this.feedUseCase = feedUseCase

    router.post("/feed", this.create)
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feed = await this.feedUseCase.create(req.body)
      res.json({ feed })
    } catch (error) {
      next(error)
    }
  }
}

export const init = () => {
  const router = InitRouter()
  const feedUseCase = InitFeedUseCase()

  return new FeedHandler({ router, feedUseCase })
}

export default init
