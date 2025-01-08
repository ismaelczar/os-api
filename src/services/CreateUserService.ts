import { getRepository } from "typeorm"
import { Users } from "../entity/Users"
import { parseISO } from "date-fns"

interface Request {
  name: string
  email: string
  password: string
  created_at: string;
  updated_at: string
}

export class CreateUsersService {

  public async execute({ name, email, password, created_at, updated_at }: Request): Promise<Users> {
    const userRepository = getRepository(Users);
    const parsedDate = parseISO(created_at);
    const recordCreationDate = new Date().toISOString();

    const existingUser = await userRepository.findOne({
      where: { email: email }
    })

    if (existingUser) {
      throw new Error('Already have a user with this e-mail')
    }

    const user = userRepository.create({
      name,
      email,
      password,
      created_at: created_at ? parsedDate : recordCreationDate,
      updated_at: updated_at ? parsedDate : recordCreationDate
    })

    await userRepository.save(user)

    return user;
  }
}
