import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';

function About() {
  return (
    <div>
      <h1>About me</h1>
      <p>Hello there! My name is Mariana, i'm 21 years old and i'm currently learning back-end!</p>
      <p>This front-end is consuming an API created by me, using mostly NodeJS, Sequelize and Express.</p>
      <p>This is my first full-stack project done by myself, feel free to give me a feedback.</p>
      <div>
        <a href="https://github.com/mariyzx/" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/marinhomariana8/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://t.me/mariyzx" target="_blank" rel="noreferrer"><BsTelegram /></a>
      </div>
    </div>
  )
}

export default About;