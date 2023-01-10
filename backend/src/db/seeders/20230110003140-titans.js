'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('titans', [{
        id: 1,
        name: 'Founding Titan',
        description: `By screaming, could turn Subjects of Ymir into Titans, control the minds of Titans, and alter the memories and bodies of Subjects of Ymir. It was connected to all Subjects of Ymir and Titans via paths.` ,
        height: 13,
        picture: 'https://i.pinimg.com/originals/d8/4f/27/d84f27082ec276814a3de844bcbba617.png',
      }, {
        id: 2,
        name: 'Armored Titan',
        description: `Was covered by hardened, armor-like skin, except in key areas necessary for movement. It also possessed the ability to harden its arms and feet into sharper claws which could be used to climb structures such as the Walls.`,
        height: 15,
        picture: 'https://i.pinimg.com/564x/06/60/26/0660267433c50ee85acdb30e89ab1808.jpg'
      }, {
        id: 3,
        name: 'Attack Titan',
        description: `Could receive memories from both past and future inheritors of the Titan. Guided by these memories, it always moved ahead, fighting for freedom.`,
        height: 15,
        picture: 'https://i.pinimg.com/564x/b6/99/02/b69902d3c7c21241b8a8fd4ccae9e0fe.jpg'
      }, {
        id: 4,
        name: 'Beast Titan',
        description: `Could take on the physical characteristics of different animals that vary between its inheritors.`,
        height: 17,
        picture: 'https://i.pinimg.com/564x/88/d5/dc/88d5dc60bc8ecd5d5f43c13b2db56c27.jpg'
      }, {
        id: 5,
        name: 'Cart Titan',
        description: `Was quadrupedal and had great endurance that allowed it to stay transformed for long periods of time, as well as transform in rapid succession without needing to rest, hundreds of times per day even.`,
        height: 4,
        picture: 'https://i.pinimg.com/564x/25/8f/54/258f54b075b228f8a72265979a7c7bca.jpg'
      }, {
        id: 6,
        name: 'Colossus Titan',
        description: `Was enormous and could emit immense amounts of steam from its body like a blast furnace, at the gradual cost of its muscle tissue. The user was able to control the Titan's transformation power and blast radius.`,
        height: 60,
        picture: 'https://i.pinimg.com/564x/de/40/4c/de404c68ebe5c2d9b97096c13fba803f.jpg'
      }, {
        id: 7,
        name: 'Female Titan',
        description: ` could inherit abilities much more easily than any of the other Titans. It could also harden areas of its skin for extra offensive and defensive capabilities. It also had the ability to summon Pure Titans with its scream.`,
        height: 14,
        picture: 'https://i.pinimg.com/564x/9b/b8/b4/9bb8b45d26c9125d149a37bed18b62aa.jpg'
      }, {
        id: 8,
        name: 'Jaw Titan',
        description: `Was the swiftest of the Nine Titans and had sharp, hardened teeth and claws capable of damaging or breaking almost anything.`,
        height: 5,
        picture: 'https://i.pinimg.com/564x/35/41/5f/35415faf9456dc12037292f5a08d788f.jpg',
      }, {
        id: 9,
        name: 'War Hammer Titan',
        description: `Could materialize various weapons and structures from its own hardened flesh.[26] It could be controlled from afar through a cable of Titan flesh while the user remained hidden within a hardened crystal casing.`,
        height: 15,
        picture: 'https://i.pinimg.com/564x/ab/11/20/ab112077a59cac8a35b5bc8fea8d92f6.jpg'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('titans', null, {});
  }
};
