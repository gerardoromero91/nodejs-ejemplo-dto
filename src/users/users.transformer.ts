import moment from "moment"
import User, { UserDTO } from "./users.model"


export const createUserDto = (user: User): UserDTO => {
  return {
    id: user.id,
    fullName: user.last_name + ', ' + user.first_name,
    email: user.email,
    birthdate: user.birthdate,
    age: moment().diff(user.birthdate, 'years'),
    verified: (user.verified) ? 'Verificado' : 'No Verificado',
    // relaciones con otras clases
  }
}