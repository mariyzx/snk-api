import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { ListAbout, MainAbout } from '../styles/About';

function About() {
  return (
    <MainAbout>
      <h1>About me</h1>
      <div>
        <p>Hello there! My name is Mariana, i'm 21 years old and i'm currently learning back-end!</p>
        <p>This front-end is consuming an API created by me, using mostly NodeJS, Sequelize and Express.</p>
        <p>This is my first full-stack project, feel free to give me a feedback.</p>
      </div>
      <ListAbout>
        <a href="https://github.com/mariyzx/" target="_blank" rel="noreferrer"><BsGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/marinhomariana8/" target="_blank" rel="noreferrer"><BsLinkedin size={30} /></a>
        <a href="https://t.me/mariyzx" target="_blank" rel="noreferrer"><BsTelegram size={30} /></a>
      </ListAbout>
    </MainAbout>
  )
}

export default About;