import moment from "moment"
import User, { UserDTO } from "./users.model"
import { createAddressDto, createAddress2Dto } from '../addresses/addresses.transformer';
import { User2DTO } from './users.model';

export const createUserDto = (user: User): UserDTO => {
  return {
    id: user.id,
    fullName: user.last_name + ', ' + user.first_name,
    email: user.email,
    birthdate: user.birthdate,
    // birthdate: moment(user.birthdate).format('YYYY/M/D'),
    // birthdate: moment(user.birthdate).format('[The] Do [of] MMMM [of] YYYY'),
    age: moment().diff(user.birthdate, 'years'),
    verified: user.verified ? 'Verificado' : 'No Verificado',
    address: user.Address ? createAddressDto(user.Address) : null
  }
}

export const createUser2Dto = (user: User): User2DTO => {
  return {
    id: user.id,
    fullName: user.last_name + ', ' + user.first_name,
    email: user.email,
    birthdate: user.birthdate,
    age: moment().diff(user.birthdate, 'years'),
    verified: user.verified ? 'Verificado' : 'No Verificado',
    address: user.Address ? createAddress2Dto(user.Address) : null
  }
}