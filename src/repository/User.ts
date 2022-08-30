import { init as InitDB, Repository, DeleteResult } from "../driver/database/postgres"
import { User } from "../domain/entity/User"

export { User }

export class UserRepository {
  private db: Repository<User>

  constructor({ db }) {
    this.db = db.getRepository(User)
  }

  public create = async (user: User) => {
    return this.db.save(user)
  }
}

export const init = () => {
  const db = InitDB()

  return new UserRepository({ db })
}

export default init
