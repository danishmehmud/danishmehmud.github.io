import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style.js';
import { services } from '../constants/index.js';
import { fadeIn, textVariant } from '../utils/motion.js';
import SectionWrapper from '../hoc/index.js';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className={'xs:w-[250px] w-full h-full'}>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                whileHover={{ y: -10 }}
                className={
                    'w-full bg-gradient-to-br from-[#915eff]/20 via-[#764cff]/10 to-transparent p-[2px] rounded-[20px] shadow-[0_20px_60px_-30px_rgba(145,94,255,0.5)] border border-[#915eff]/30 h-full'
                }
            >
                <div
                    option={{
                        max: 45,
                        scale: 1.05,
                        speed: 450,
                    }}
                    className={
                        'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-[20px] py-8 px-6 min-h-[280px] flex justify-center items-center flex-col transition-all duration-300 hover:shadow-[0_25px_50px_-20px_rgba(145,94,255,0.6)]'
                    }
                >
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={'w-16 h-16 rounded-2xl bg-gradient-to-br from-[#915eff]/30 to-[#5b8dff]/20 flex items-center justify-center p-3 mb-4'}
                    >
                        <img
                            src={icon}
                            alt={title}
                            className={'w-10 h-10 object-contain'}
                        />
                    </motion.div>
                    <h3
                        className={
                            'text-white text-[20px] font-bold text-center bg-gradient-to-r from-[#60b7ff] via-[#5d77ff] to-[#bf65ff] bg-clip-text text-transparent'
                        }
                    >
                        {title}
                    </h3>
                    <div className={'mt-4 w-8 h-1 rounded-full bg-gradient-to-r from-[#915eff] to-[#5b8dff]'} />
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <div className={'pt-14 pb-8'}>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Introduction
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                className={
                    'mt-8 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-r from-[#0f172a]/50 via-[#1a1e3a]/50 to-[#0f172a]/50 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]'
                }
            >
                <p className={'text-secondary text-[17px] leading-[30px] text-center'}>
                    I'm a self-taught Full Stack Software Engineer with over 7 years
                    of experience building enterprise software for healthcare, ERP,
                    CRM, e-commerce, AI, and IoT platforms. I specialize in React,
                    Angular, Node.js, TypeScript, and AWS, with a passion for creating
                    scalable, maintainable, and user-focused applications. I enjoy
                    solving complex engineering problems, learning new technologies,
                    and building software that delivers measurable business impact.
                </p>
            </motion.div>

            <div className={'mt-20'}>
                <motion.h3 
                    variants={fadeIn('', '', 0.2, 1)}
                    className={'text-white text-center text-[24px] font-bold mb-12 bg-gradient-to-r from-[#60b7ff] via-[#5d77ff] to-[#bf65ff] bg-clip-text text-transparent'}
                >
                    What I Do
                </motion.h3>
                <div className={'flex flex-wrap gap-6 justify-center'}>
                    {services.map((service, index) => {
                        return (
                            <ServiceCard
                                key={service.title}
                                index={index}
                                {...service}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(About, 'about');
