import { Feed, FeedRepository, init as InitFeedRepository } from "../repository/Feed"

export class FeedUseCase {
  private feedRepository: FeedRepository

  constructor({ feedRepository }) {
    this.feedRepository = feedRepository
  }

  public create = async (feed: Feed) => {
    return this.feedRepository.create(feed)
  }
}

export const init = () => {
  const feedRepository = InitFeedRepository()

  return new FeedUseCase({ feedRepository })
}

export default init
