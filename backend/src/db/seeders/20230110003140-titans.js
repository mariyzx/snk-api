'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('titans', [{
        id: 1,
        name: 'Founding Titan',
        description: `By screaming, could turn Subjects of Ymir into Titans, control the minds of Titans, and alter the memories and bodies of Subjects of Ymir. It was connected to all Subjects of Ymir and Titans via paths.` ,
        height: 13,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/b/bc/Founding_Titan_character_image_%28Eren_Yeager%29.png/revision/latest/scale-to-width-down/350?cb=20210414102728',
      }, {
        id: 2,
        name: 'Armored Titan',
        description: `Was covered by hardened, armor-like skin, except in key areas necessary for movement. It also possessed the ability to harden its arms and feet into sharper claws which could be used to climb structures such as the Walls.`,
        height: 15,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/3/31/Armored_Titan_character_image_%28Reiner_Braun%29.png/revision/latest/scale-to-width-down/350?cb=20180407000552'
      }, {
        id: 3,
        name: 'Attack Titan',
        description: `Could receive memories from both past and future inheritors of the Titan. Guided by these memories, it always moved ahead, fighting for freedom.`,
        height: 15,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/4/44/Attack_Titan_character_image_%28Eren_Yeager%29.png/revision/latest/scale-to-width-down/350?cb=20190412025701'
      }, {
        id: 4,
        name: 'Beast Titan',
        description: `Could take on the physical characteristics of different animals that vary between its inheritors.`,
        height: 17,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/2/2a/Beast_Titan_character_image_%28Zeke_Yeager%29.png/revision/latest/scale-to-width-down/350?cb=20180303143949'
      }, {
        id: 5,
        name: 'Cart Titan',
        description: `Was quadrupedal and had great endurance that allowed it to stay transformed for long periods of time, as well as transform in rapid succession without needing to rest, hundreds of times per day even.`,
        height: 4,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/e/e3/Cart_Titan_character_image_%28Pieck_Finger%29.png/revision/latest/scale-to-width-down/350?cb=20190508233645'
      }, {
        id: 6,
        name: 'Colossus Titan',
        description: `Was enormous and could emit immense amounts of steam from its body like a blast furnace, at the gradual cost of its muscle tissue. The user was able to control the Titan's transformation power and blast radius.`,
        height: 60,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/7/7c/Colossus_Titan_character_image_%28Armin_Arlert%29.png/revision/latest/scale-to-width-down/350?cb=20190603090813'
      }, {
        id: 7,
        name: 'Female Titan',
        description: ` could inherit abilities much more easily than any of the other Titans. It could also harden areas of its skin for extra offensive and defensive capabilities. It also had the ability to summon Pure Titans with its scream.`,
        height: 14,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/5/5a/Female_Titan_character_image_%28Annie_Leonhart%29.png/revision/latest/scale-to-width-down/350?cb=20190428002517'
      }, {
        id: 8,
        name: 'Jaw Titan',
        description: `Was the swiftest of the Nine Titans and had sharp, hardened teeth and claws capable of damaging or breaking almost anything.`,
        height: 5,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/b/bd/Jaw_Titan_character_image_%28Falco_Grice%29.png/revision/latest/scale-to-width-down/350?cb=20200608203917',
      }, {
        id: 9,
        name: 'War Hammer Titan',
        description: `Could materialize various weapons and structures from its own hardened flesh.[26] It could be controlled from afar through a cable of Titan flesh while the user remained hidden within a hardened crystal casing.`,
        height: 15,
        picture: 'https://static.wikia.nocookie.net/shingekinokyojin/images/2/2f/War_Hammer_Titan_character_image_%28Lara_Tybur%29.png/revision/latest/scale-to-width-down/350?cb=20180303150152'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('titans', null, {});
  }
};
