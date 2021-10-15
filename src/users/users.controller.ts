import { Request, Response, NextFunction } from 'express'
import User from './users.model'
import { UserDTO, User2DTO } from './users.model';
import { createUserDto, createUser2Dto } from './users.transformer';
import Address from '../addresses/addresses.model';

export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll({
        include: [ { model: Address } ]
    })
    const usersArray: UserDTO[] = []

    users.forEach(element => {
      usersArray.push(createUserDto(element))
    })

    return res.status(200).json({ users: usersArray })
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const user = await User.findOne({
      where: { id },
      include: [ { model: Address } ]
    })

    if (user === null) return res.status(404).json({ msg: 'User not found' })

    const userDTO: UserDTO = createUserDto(user)

    return res.status(200).json({ user: userDTO })
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

export const showNewDto = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const user = await User.findOne({
      where: { id },
      include: [ { model: Address } ]
    })

    if (user === null) return res.status(404).json({ msg: 'User not found' })

    const userDTO: User2DTO = createUser2Dto(user)

    return res.status(200).json({ user: userDTO })
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}
