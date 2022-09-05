import { init as InitDB, Repository, DeleteResult } from "../driver/database/postgres"
import { User } from "../domain/entity/User"

export { User }

export class UserRepository {
  private db: Repository<User>

  constructor({ db }) {
    this.db = db.getRepository(User)
  }

  public create = async (user: User): Promise<User> => {
    return this.db.save(user)
  }

  public findByEmail = async (email: string): Promise<User> => {
    return this.db.findOne({ where: { email } })
  }
}

export const init = () => {
  const db = InitDB()

  return new UserRepository({ db })
}

export default init
