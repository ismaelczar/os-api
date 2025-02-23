import { getRepository } from "typeorm"
import { hash } from 'bcryptjs'

import { Users } from "../entity/User"

interface Request {
  name: string
  email: string
  password: string
}

export class CreateUsersService {

  public async execute({ name, email, password }: Request): Promise<Users> {
    const userRepository = getRepository(Users);
    const recordCreationDate = new Date().toISOString();

    const existingUser = await userRepository.findOne({
      where: [
        { email: email },
        { name: name },
      ]
    })

    if (existingUser) {
      throw new Error('Already have a user with this information')
    }

    //Criptografia de senha.
    const hashedPassword = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      created_at: recordCreationDate,
      updated_at: recordCreationDate
    })

    await userRepository.save(user)

    return user;
  }
}
