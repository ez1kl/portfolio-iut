import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { me } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Qui suis-je ?</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Étudiant en informatique, je développe ma polyvalence à travers des projets mêlant web, algorithmique et bases de données. Curieux de nature, j’aime comprendre en profondeur ce que je crée, tout en cherchant des solutions propres, utiles et réutilisables. Mon objectif est de progresser en continu, de relever des défis techniques concrets et de construire des outils qui ont du sens. J’accorde autant d’importance à l’expérience utilisateur qu’à la logique du code, et j’aspire à contribuer à des projets qui allient exigence et innovation.
        </motion.p>
        <motion.div
          variants={fadeIn('left', '', 0.2, 1)}
          className="mt-4 lg:mt-0 relative w-[200px] h-[200px] rounded-full bg-jetLight border-4 border-french flex items-center justify-center overflow-hidden shrink-0">
          <img src={me} alt="Photo de profil" className="w-full h-full object-cover" />
        </motion.div>      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
