import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap, github, me } from '../assets';
import linkedin from '../assets/icons/linkedin.svg';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-screen h-[100dvh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-screen h-[100dvh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen h-[100dvh] mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[230px] top-[120px] 
          lg:top-[150px] xl:top-[230px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Yassine{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Badaoui
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-1 text-eerieBlack`}>
              Développeur Fullstack | Étudiant BUT Informatique <br className="sm:block hidden" />
            </p>
            <p className="mt-2 text-[16px] text-taupe font-medium max-w-2xl">
              Spécialisé en développement frontend (React, TypeScript) et backend (Node.js, PostgreSQL).
              <br />
              J'excelle dans le travail d'équipe et l'optimisation d'applications.
            </p>
            <div className="flex gap-4 mt-4 relative z-10">
              <a
                href="https://github.com/ez1kl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-night flex justify-center items-center hover:bg-battleGray transition-colors duration-300">
                <img src={github} alt="GitHub" className="w-7 h-7 object-contain" />
              </a>
              <a
                href="https://www.linkedin.com/in/yassinebadaoui/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-night flex justify-center items-center hover:bg-battleGray transition-colors duration-300">
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7 object-contain" />
              </a>
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={profile}
            alt="profile"
          />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
