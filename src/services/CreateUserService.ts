import { getRepository } from "typeorm"

import { parseISO } from "date-fns"
import { hash } from 'bcryptjs'

import { Users } from "../entity/Users"

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
      where: [
        { email: email },
        { name: name },
      ]
    })

    if (existingUser) {
      throw new Error('Already have a user with this information')
    }

    const hashedPassword = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      created_at: created_at ? parsedDate : recordCreationDate,
      updated_at: updated_at ? parsedDate : recordCreationDate
    })

    await userRepository.save(user)

    return user;
  }
}
