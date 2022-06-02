import NavBar from "../components/NavBar/NavBar";
import style from './About.module.scss';

const About = () => {
     return (
          <>
               <NavBar />
               <h2 className={style.title}>About</h2>
          </>
     );
}

export default About;