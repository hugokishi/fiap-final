import { v4 as uuid } from "uuid"
import { UserRepository } from "src/repository/User"
import { User, init as InitUserRepository } from "../repository/User"

export class UserUseCase {
  private userRepository: UserRepository

  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  public create = async (user: User) => {
    user.uid = uuid()
    return this.userRepository.create(user)
  }
}

export const init = () => {
  const userRepository = InitUserRepository()

  return new UserUseCase({ userRepository })
}

export default init
