'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        street: 'Av. Córdoba SUR 52',
        city: 'Capital',
        state: 'San Juan',
        CP: '5400',
        user_id: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        street: 'Menglioli ESTE 2052',
        city: 'Rawson',
        state: 'San Juan',
        CP: '5425',
        user_id: 2,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        street: 'Avenida Mitre norte 5901',
        city: 'Capital',
        state: 'Córdoba',
        CP: '5000',
        user_id: 3,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        street: 'S/N Barrio Cabrales M5 C6',
        city: 'Capital',
        state: 'Córdoba',
        CP: '5000',
        user_id: 4,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }
    ]
    await queryInterface.bulkInsert('addresses', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses', null, {})
  }
}
