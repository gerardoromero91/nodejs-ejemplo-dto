import User from './users/users.model';
import Address from './addresses/addresses.model';

Address.belongsTo(User, { foreignKey: 'user_id' })

User.hasOne(Address, { foreignKey: 'user_id' })