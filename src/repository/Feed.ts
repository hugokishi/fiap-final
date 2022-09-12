import { init as InitDB, Repository } from "../driver/database/postgres"
import { Feed } from "../domain/entity/Feed"

export { Feed }

export class FeedRepository {
  private db: Repository<Feed>

  constructor({ db }) {
    this.db = db.getRepository(Feed)
  }

  public create = async (feed: Feed): Promise<Feed> => {
    return this.db.save(feed)
  }
}

export const init = () => {
  const db = InitDB()

  return new FeedRepository({ db })
}

export default init
