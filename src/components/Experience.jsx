import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style.js';
import { experiences } from '../constants/index.js';
import SectionWrapper from '../hoc/index.js';
import { textVariant } from '../utils/motion.js';

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div
                    className={'flex justify-center items-center w-full h-full'}
                >
                    <img
                        className={'w-[60%] h-[60%] object-contain'}
                        src={experience.icon}
                        alt={experience.company_name}
                    />
                </div>
            }
        >
            <div>
                <h3 className={'text-white text-[24px] font-bold'}>
                    {experience.title}
                    {experience.subtitle && (
                        <><br />{experience.subtitle}</>
                    )}
                </h3>
                <p
                    className={'text-secondary text-[16px] font-semibold'}
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>
            <ul className={'mt-5 list-disc ml-5 space-y-2'}>
                {experience.points.map((point, index2) => {
                    return (
                        <li
                            key={index2}
                            className={
                                'text-white-100 text-[14px] pl-1 tracking-wider'
                            }
                        >
                            {point}
                        </li>
                    );
                })}
            </ul>
        </VerticalTimelineElement>
    );
};
const Experience = () => {
    return (
        <div className={`mt-12 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(96,183,255,0.16),transparent_24%),_radial-gradient(circle_at_top_right,_rgba(189,84,255,0.12),transparent_18%),#050816] shadow-2xl`}> 
            <div className={`rounded-[30px] bg-[#0d1129] ${styles.padding} pt-14 pb-10`}> 
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What I have done so far</p>
                    <h2 className={styles.sectionHeadText}>Work Experience.</h2>
                </motion.div>
                <motion.div
                    variants={textVariant()}
                    className={'mt-8 rounded-[24px] bg-[#060814]/90 border border-white/10 p-8 shadow-[0_25px_80px_-50px_rgba(54,116,255,0.55)]'}
                >
                    <p className={'text-white text-[18px] sm:text-[19px] leading-8'}>
                        Over the past 7+ years, I've built scalable SaaS and enterprise
                        applications across healthcare, ERP, CRM, e-commerce, AI, and
                        IoT domains, delivering modern web solutions with React, Node.js,
                        TypeScript, and AWS.
                    </p>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} pb-16 -mt-12`}>
                <VerticalTimeline lineColor="#915eff">
                    {experiences.map((experience, index) => {
                        return (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                            />
                        );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, 'work');
