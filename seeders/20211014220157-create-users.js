'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        first_name: 'Gerardo',
        last_name: 'Arevalo',
        email: 'gerardo_arevalo1@gmail.com',
        birthdate: new Date(1995,0,5),
        verified: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        first_name: 'Paula',
        last_name: 'Kinteros',
        email: 'paolita_kinteros_smile_face@gmail.com',
        birthdate: new Date(2000,11,31),
        verified: 0,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        first_name: 'Emilia',
        last_name: 'Ludueña',
        email: 'emiliaguadalupeluduena@yahoo.com',
        birthdate: new Date(1997,6,25),
        verified: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      },
      {
        first_name: 'Segundo',
        last_name: 'Gelos',
        email: 'segundoaldebarangelos@gmail.com',
        birthdate: new Date(1990,2,7),
        verified: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      }
    ]

    await queryInterface.bulkInsert('users', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
}
