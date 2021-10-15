import { Model, DataTypes } from 'sequelize'
import db from '../../db/connection'

export class Address extends Model {
  public id!: number
  public street!: string
  public city!: string
  public state!: string
  public CP!: string
  public user_id!: number
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export interface AddressInterface {
  id: number
  street: string
  city: string
  state: string
  CP: string
  userId: number
}

export interface AddressDTO {
  id: number
  fullAddress: string
  CP: string
}

const attributes = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CP: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}

const options = {
  sequelize: db,
  tableName: 'addresses'
}
Address.init(attributes, options)
export default Address
