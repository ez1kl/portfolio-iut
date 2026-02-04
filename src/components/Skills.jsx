import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const competencesData = [
  {
    id: 'c1',
    title: 'Développement d\'application',
    color: 'from-blue-500 to-blue-700',
    description: 'Conception et développement d\'applications web modernes avec des technologies récentes',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'API REST'],
    projects: ['project-5', 'project-3', 'project-2', 'project-1']
  },
  {
    id: 'c2',
    title: 'Optimisation d\'applications',
    color: 'from-green-500 to-green-700',
    description: 'Amélioration des performances et de la qualité du code',
    skills: ['Performance', 'Refactoring', 'Tests', 'CI/CD', 'Docker'],
    projects: ['project-5', 'project-3', 'project-4']
  },
  {
    id: 'c6',
    title: 'Travail d\'équipe',
    color: 'from-purple-500 to-purple-700',
    description: 'Collaboration efficace et gestion de projets en équipe',
    skills: ['Git', 'Méthodes Agiles', 'Communication', 'Code Review', 'Documentation'],
    projects: ['project-5', 'project-3', 'project-2']
  }
];

const CompetenceCard = ({ competence, index, onCompetenceClick }) => {
  return (
    <div
      id={`competence-${competence.id}`}
      className="bg-jetLight p-8 rounded-2xl w-full hover:bg-battleGray transition-all duration-500 cursor-pointer group"
      onClick={() => onCompetenceClick(competence.id)}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-white font-bold text-[24px] mb-2 group-hover:text-french transition-colors">
            {competence.title}
          </h3>
        </div>
      </div>

      <p className="text-timberWolf text-[14px] leading-[22px] mb-4">
        {competence.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {competence.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-night rounded-full text-[12px] text-white">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-french text-[14px] font-medium group-hover:gap-3 transition-all">
        <span>Voir les projets liés</span>
        <span>→</span>
      </div>
    </div>
  );
};

const Skills = ({ onNavigateToProjects }) => {
  const handleCompetenceClick = (competenceId) => {
    // Scroll to projects section and filter by competence
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      // Store the selected competence in sessionStorage for filtering
      sessionStorage.setItem('selectedCompetence', competenceId);
      // Trigger a custom event that the Projects component can listen to
      window.dispatchEvent(new CustomEvent('filterByCompetence', { detail: competenceId }));
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Mes domaines d'expertise</p>
        <h2 className={styles.sectionHeadTextLight}>Compétences.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Mon parcours en BUT Informatique m'a permis de développer des compétences solides
        dans trois domaines clés, validées à travers des projets concrets et professionnels.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {competencesData.map((competence, index) => (
          <CompetenceCard
            key={competence.id}
            competence={competence}
            index={index}
            onCompetenceClick={handleCompetenceClick}
          />
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.5, 0.75)}
        className="mt-12 p-6 bg-night rounded-xl border-2 border-french">
        <h3 className="text-white font-bold text-[20px] mb-3">
          💡 Transitivité Compétences ↔ Projets
        </h3>
        <p className="text-timberWolf text-[16px] leading-[24px]">
          Cliquez sur une compétence pour découvrir les projets où je l'ai mise en pratique.
          Vous pouvez également naviguer depuis la section Projets pour voir quelles compétences
          ont été mobilisées sur chaque réalisation.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
