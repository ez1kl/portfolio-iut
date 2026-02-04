import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

// Mapping des compétences par projet
const projectCompetences = {
  'project-1': ['c1'], // Motus
  'project-2': ['c1', 'c6'], // Java Revolution
  'project-3': ['c1', 'c2', 'c6'], // SOSAFE
  'project-4': ['c2'], // Ransomware
  'project-5': ['c1', 'c2', 'c6'], // Outil d'Emailing IUT
};

const competenceLabels = {
  'c1': 'Développement d\'application',
  'c2': 'Optimisation d\'applications',
  'c6': 'Travail d\'équipe'
};

const ProjectCard = ({
  id,
  name,
  description,
  tags,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
  competences,
  onNavigateToSkills,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleCompetenceClick = (e, competenceId) => {
    console.log('🔴 CLICK SUR COMPETENCE DANS LE BUTTON');
    console.log('CompetenceId reçu:', competenceId);
    console.log('onNavigateToSkills disponible:', typeof onNavigateToSkills);
    e.stopPropagation();
    if (onNavigateToSkills) {
      onNavigateToSkills(competenceId);
    } else {
      console.error('❌ onNavigateToSkills pas disponible!');
    }
  };
  
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
           <div className="absolute inset-0 flex justify-end m-3">
  {repo ? (
    <div
      onClick={() => window.open(repo, '_blank')}
      className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
      flex justify-center items-center cursor-pointer 
      sm:opacity-[0.9] opacity-[0.8] hover:opacity-100 transition-opacity">
      <img
        src={github}
        alt="source code"
        className="w-4/5 h-4/5 object-contain"
      />
    </div>
  ) : (
    <div className="relative group">
      <div
        className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
        flex justify-center items-center cursor-not-allowed 
        sm:opacity-[0.5] opacity-[0.4]">
        <img
          src={github}
          alt="source code"
          className="w-4/5 h-4/5 object-contain"
        />
      </div>
      <span className="absolute -top-10 right-1/2 translate-x-1/2 
      bg-eerieBlack text-white text-xs font-semibold px-3 py-1 
      rounded-md opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 whitespace-nowrap z-50">
        Lien GitHub (Bientôt disponible)
      </span>
    </div>
  )}
</div>



            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-timberWolf sm:text-[16px] text-[14px] 
              max-w-3xl sm:leading-[26px] leading-[22px]
              font-poppins tracking-[0.5px]">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={tag.name}
                  className={`text-[14px] ${tag.color} font-bold font-poppins`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            
            {/* Compétences mobilisées */}
            {competences && competences.length > 0 && (
              <div className="mt-4">
                <p className="text-timberWolf text-[12px] font-medium mb-2">
                  🎯 Compétences mobilisées :
                </p>
                <div className="flex flex-wrap gap-2">
                  {competences.map((compId) => (
                    <button
                      key={compId}
                      onClick={(e) => {
                        console.log('✅ CLICK DETECTE SUR LE BOUTON!');
                        console.log('CompId:', compId);
                        handleCompetenceClick(e, compId);
                      }}
                      className="px-3 py-1 bg-french/80 hover:bg-french rounded-full 
                      text-[11px] text-white font-medium transition-all hover:scale-105 relative z-50">
                      {competenceLabels[compId]}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {!demo && repo && (
              <div className="text-taupe sm:text-[12px] text-[10px] 
              italic sm:mt-[22px] mt-[16px] font-poppins">
                💻 Application desktop - Voir le repo pour l'installation
              </div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');
  const [highlightedCompetence, setHighlightedCompetence] = useState(null);

  useEffect(() => {
    // Listen for competence filtering from Skills component
    const handleFilterByCompetence = (event) => {
      const compId = event.detail;
      setHighlightedCompetence(compId);
      
      // Trouver les projets qui ont cette compétence
      const projectsWithCompetence = projects.filter(project => 
        projectCompetences[project.id]?.includes(compId)
      );
      
      if (projectsWithCompetence.length > 0) {
        // Activer le premier projet filtré
        setActive(projectsWithCompetence[0].id);
      }
    };

    window.addEventListener('filterByCompetence', handleFilterByCompetence);
    return () => window.removeEventListener('filterByCompetence', handleFilterByCompetence);
  }, []);

  const handleNavigateToSkills = (competenceId) => {
    console.log('=== CLICK SUR COMPETENCE ===');
    console.log('Competence ID:', competenceId);
    
    // Chercher l'élément cible avec l'ID exact
    const elementId = `competence-${competenceId}`;
    console.log('Element ID cherché:', elementId);
    
    const targetElement = document.getElementById(elementId);
    console.log('Element trouvé:', targetElement);
    
    if (!targetElement) {
      console.error('❌ Compétence non trouvée:', elementId);
      const allElements = document.querySelectorAll('[id^="competence-"]');
      console.log('Elements disponibles:', Array.from(allElements).map(el => el.id));
      return;
    }

    // Un seul scroll fluide vers la carte
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    console.log('✅ Scroll fluide vers la carte');

    // Ajouter le highlight après un court délai
    setTimeout(() => {
      console.log('Ajout du highlight...');
      targetElement.classList.add('competence-highlighted');
      console.log('✅ Classe highlight ajoutée');

      // Retirer après 5 secondes
      setTimeout(() => {
        targetElement.classList.remove('competence-highlighted');
        console.log('✅ Classe highlight retirée');
      }, 5000);
    }, 500);
  };

  const filteredProjects = highlightedCompetence
    ? projects.filter((project) => projectCompetences[project.id]?.includes(highlightedCompetence))
    : projects;

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mes créations personnelles</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Ces projets démontrent mon expertise avec des exemples pratiques de
          certains de mes projets, incluant de brèves descriptions et prochainnement des liens
          vers les dépôts de code et les démos en ligne. Ils mettent en avant
          ma capacité à relever des défis complexes, à m'adaptater à diverses
          technologies et à gérer efficacement des projets.
        </motion.p>
      </div>

      <motion.div
        key={highlightedCompetence || 'all-projects'}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
              competences={projectCompetences[project.id]}
              onNavigateToSkills={handleNavigateToSkills}
            />
          ))}
        </div>
        
        {highlightedCompetence && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-french/20 border-2 border-french rounded-xl flex justify-between items-center">
            <p className="text-white text-[16px]">
              🎯 Projets affichés pour : <strong>{competenceLabels[highlightedCompetence]}</strong>
            </p>
            <button
              onClick={() => {
                setHighlightedCompetence(null);
                setActive('project-2');
              }}
              className="px-4 py-2 bg-french rounded-md text-[14px] font-bold text-white hover:bg-opacity-80 transition-all">
              Afficher tous les projets
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
