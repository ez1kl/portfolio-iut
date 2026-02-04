import { useState, useRef, useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences, education } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [showEducation, setShowEducation] = useState(false);
  const currentData = showEducation ? education : experiences;

  // refs to measure button sizes and position
  const containerRef = useRef(null);
  const profRef = useRef(null);
  const schoolRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ x: 0, width: 180 });

  // update slider position/width based on measured button
  const updateSlider = () => {
    const container = containerRef.current;
    const prof = profRef.current;
    const school = schoolRef.current;
    if (!container || !prof || !school) return;

    const target = showEducation ? school : prof;
    // calculate slider to match button exactly (no inset, perfect alignment)
    const x = target.offsetLeft;
    const width = target.offsetWidth;
    setSliderStyle({ x, width });
  };

  useEffect(() => {
    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [showEducation]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem] text-[20px] font-bold text-battleGray`}>
          Mon parcours {showEducation ? 'scolaire' : 'professionnel'}
        </p>
        <motion.h2
          key={showEducation ? 'formation' : 'experiences'}
          className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}>
          {showEducation ? 'Formation.' : 'Expériences.'}
        </motion.h2>
      </motion.div>

      <div className="mt-10 flex justify-center">
  <div ref={containerRef} className="relative inline-flex rounded-[12px] bg-jetLight p-1 shadow-lg gap-1 overflow-hidden">
          {/* animated slider */}
          <motion.div
            layout
            initial={false}
            animate={{ left: sliderStyle.x, width: sliderStyle.width }}
            transition={{ type: 'spring', stiffness: 300, damping: 40 }}
            className="absolute top-1 h-[46px] bg-taupe rounded-[8px] shadow-sm sm:shadow-md z-0"
            style={{ willChange: 'left, width' }}
          />

          <button
            ref={profRef}
            onClick={() => setShowEducation(false)}
            className={`relative z-10 min-w-[140px] sm:min-w-[210px] px-6 sm:px-8 py-3 rounded-[8px] font-beckman font-bold text-[17px] sm:text-[19px] 
              transition-all duration-300 ease-in-out transform text-center whitespace-nowrap
              ${!showEducation ? 'text-timberWolf' : 'text-taupe'}`}>
            PROFESSIONNEL
          </button>

          <button
            ref={schoolRef}
            onClick={() => setShowEducation(true)}
            className={`relative z-10 min-w-[140px] sm:min-w-[210px] px-6 sm:px-8 py-3 rounded-[8px] font-beckman font-bold text-[17px] sm:text-[19px] 
              transition-all duration-300 ease-in-out transform text-center whitespace-nowrap
              ${showEducation ? 'text-timberWolf' : 'text-taupe'}`}>
            SCOLAIRE
          </button>
        </div>
      </div>

      <div className="mt-20 flex flex-col">
        <motion.div
          key={showEducation ? 'education' : 'experience'}
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}>
          <VerticalTimeline className="vertical-timeline-custom-line">
              {currentData.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
              <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <div className="relative group">
              <a
                href="/CV_YassineBadaoui.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo flex justify-between 
                sm:text-[18px] text-[14px] text-taupe 
                font-bold font-beckman items-center py-5 pl-3 pr-3 
                whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
                w-[125px] h-[46px] rounded-[10px] bg-jetLight 
                sm:mt-[22px] mt-[16px] hover:bg-french hover:text-white
                transition duration-[0.2s] 
                ease-in-out">
                Mon CV
                <img
                  src={download}
                  alt="download"
                  className="download-btn sm:w-[26px] sm:h-[26px] 
                  w-[23px] h-[23px] object-contain"
                />
              </a>
            </div>
          </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
