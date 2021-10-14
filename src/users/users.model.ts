import { Model, DataTypes } from 'sequelize'
import db from '../../db/connection'

export class User extends Model {
  public id!: number
  public first_name!: string
  public last_name!: string
  public email!: string
  public birthdate!: string
  public verified!: boolean
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export interface UserInterface {
  firstName: string
  lastName: string
  email: string
  birthdate: string
  verified: boolean
}

export interface UserDTO {
  id: number
  fullName: string
  email: string
  birthdate: string
  age: number
  verified: string
  // nuevos datos
}

const attributes = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    unique: true,
    type: DataTypes.STRING,
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  verified: {
    type: DataTypes.INTEGER,
    defaultValue: false
  }
}

const options = {
  sequelize: db,
  tableName: 'users'
}
User.init(attributes, options)
export default User