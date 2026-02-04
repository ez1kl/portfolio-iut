import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  motus,
  ransomware,
  javarevolution,
  sosafe,
  emailing,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  microverse,
  esgi,
  iutblagnac,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'À propos',
  },
  {
    id: 'skills',
    title: 'Compétences',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'work',
    title: 'Expériences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Développeur frontend',
    icon: frontend,
  },
  {
    title: 'Développeur backend',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: ux,
  },
  {
    title: 'Algorithmie & Réseaux',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Développeur web',
    company_name: 'Sante Formapro',
    icon: microverse,
    iconBg: '#333333',
    date: 'Oct 2024 - Actuel',
  },
  {
    title: 'Technicien-vendeur',
    company_name: 'LDLC',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2023 - Sept 2024',
  },
];

const education = [
  {
    title: 'BUT3 Informatique',
    company_name: 'Toulouse IUT de Blagnac',
    icon: iutblagnac,
    iconBg: '#333333',
    date: '2025 - 2026',
  },
  {
    title: 'Bachelor Informatique',
    company_name: 'ESGI Aix en Provence',
    icon: esgi,
    iconBg: '#333333',
    date: '2023 - 2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Motus',
    description: 'Un jeu de lettres inspiré du célèbre jeu Motus, développé en C avec SDL2. Devinez le mot en un nombre limité d\'essais avec des indices visuels.',
    tags: [
      {
        name: 'c',
        color: 'blue-text-gradient',
      },
      {
        name: 'sdl2',
        color: 'green-text-gradient',
      },
      {
        name: 'algorithmie',
        color: 'pink-text-gradient',
      },
    ],
    image: motus,
    repo: 'https://github.com/ez1kl/motus-game',
    demo: 'https://ez1kl.github.io/motus-game/',
  },
  {
    id: 'project-2',
    name: 'Java Revolution',
    description: 'Un RPG narratif interactif inspiré du "Livre dont vous êtes le héros". Plongez dans la France révolutionnaire de 1789 avec un système de combat et de sauvegarde.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'poo',
        color: 'green-text-gradient',
      },
      {
        name: 'swing',
        color: 'pink-text-gradient',
      },
    ],
    image: javarevolution,
    repo: 'https://github.com/ez1kl/java-revolution',
    demo: 'https://ez1kl.github.io/java-revolution/',
  },
  {
    id: 'project-3',
    name: 'SoSafe',
    description: 'Plateforme web de sensibilisation à la cybersécurité. Modules interactifs et scénarios éducatifs pour former les utilisateurs aux bonnes pratiques de sécurité informatique.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: sosafe,
    repo: 'https://github.com/ez1kl/sosafe',
    demo: null,
  },
  {
    id: 'project-4',
    name: 'Ransomware',
    description: 'Un projet en assembleur x86 qui simule le fonctionnement d\'un ransomware. Démonstration des techniques de chiffrement et de cybersécurité à des fins éducatives.',
    tags: [
      {
        name: 'assembly',
        color: 'blue-text-gradient',
      },
      {
        name: 'security',
        color: 'green-text-gradient',
      },
      {
        name: 'cryptography',
        color: 'pink-text-gradient',
      },
    ],
    image: ransomware,
    repo: null,
    demo: null,
  },
  {
    id: 'project-5',
    name: 'Outil d\'Emailing IUT',
    description: 'Plateforme développée pour l\'IUT de Blagnac permettant la gestion et l\'envoi de campagnes d\'emailing ciblées. Solution adaptée aux besoins de communication interne et externe de l\'établissement.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'scrum',
        color: 'pink-text-gradient',
      },
    ],
    image: emailing,
    repo: 'https://github.com/Magaz-Yahya/SAE-ALT-S5-Mailing',
    demo: null,
  },
];

export { services, technologies, experiences, education, projects };
