'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('characters', [{
      id: 1,
      name: 'Mikasa Ackerman',
      picture: 'http://cdn.myanimelist.net/images/characters/9/215563.jpg',
      age: 15,
      height: 170,
      weight: 68,
      info: `After her parents were murdered by human traffickers, Mikasa was rescued by Eren Yeager and lived with him and his parents, Grisha and Carla, before the fall of Wall Maria.`
    }, {
      id: 2,
      name: 'Eren Yeager',
      picture: 'http://cdn.myanimelist.net/images/characters/10/216895.jpg',
      age: 15,
      height: 170,
      weight: 63,
      info: `He lived in Shiganshina District with his parents until the fall of Wall Maria, where he impotently witnessed his mother being eaten by a Titan. This event would lead to Eren's intense hatred towards the Titans.`
    }, {
      id: 3,
      name: 'Armin Arlert',
      picture: 'https://cdn.myanimelist.net/images/characters/8/220267.jpg',
      age: 15,
      height: 163,
      weight: 55,
      info: `He is a childhood friend of Eren Yeager and Mikasa Ackerman. Although he appears to be among the physically weakest of the squad, his intelligence and strategic genius makes him an invaluable asset.`
    }, {
      id: 4,
      name: 'Levi Ackerman',
      picture: 'https://cdn.myanimelist.net/images/characters/2/241413.jpg',
      age: 30,
      height: 160,
      weight: 65,
      info: `Is the squad captain of the Special Operations Squad within the Survey Corps and is widely known as humanity's strongest soldier.`
    }, {
      id: 5,
      name: 'Hange Zoë',
      picture: 'https://cdn.myanimelist.net/images/characters/15/208637.jpg',
      age: 28,
      height: 170,
      weight: 60,
      info: `Hange was formerly a squad leader in charge of the Fourth Squad, having the duties of innovative inventing and conducting research on Titans.`
    }], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('characters', null, {});
  }
};
