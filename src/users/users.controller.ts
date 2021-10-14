import { Request, Response, NextFunction } from 'express'
import User from './users.model'
import { UserDTO } from './users.model';
import { createUserDto } from './users.transformer';

export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll()
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
      // include: [
      //   {
      //     model: User,
      //     include: [{
      //       model: Person,
      //       attributes: { exclude: ['createdAt', 'updatedAt', 'phone', 'address'] }
      //     }]
      //   }
      // ]
    })

    if (user === null) return res.status(404).json({ msg: 'User not found' })

    const userDTO: UserDTO = createUserDto(user)

    // console.log(listDto)

    return res.status(200).json({ user: userDTO })
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

// export const store = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user: User = req.user as any
//     const list = await List.create({
//       name: req.body.name,
//       user_id: user.id
//     })
//     res.status(201).json({
//       list
//     })
//   } catch (error) {
//     return next(error)
//   }
// }


