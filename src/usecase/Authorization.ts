import { v4 as uuid } from "uuid"
import { UserRepository } from "src/repository/User"
import { User, init as InitUserRepository } from "../repository/User"

export class AuthorizationUseCase {
  private userRepository: UserRepository

  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  public authenticate = async ({ email, password }: { email: string; password: string }) => {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new Error(`Invalid password or email`)
    }

    if (user.password !== password) {
      throw new Error(`Invalid password or email`)
    }

    delete user.password

    return user
  }
}

export const init = () => {
  const userRepository = InitUserRepository()

  return new AuthorizationUseCase({ userRepository })
}

export default init
