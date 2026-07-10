import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style.js';
import { angular, nodejs, reactjs, web, github, nestjs } from '../assets/index.js';

const Hero = () => {
    const skills = [
        { title: 'React', icon: reactjs },
        { title: 'Node.js', icon: nodejs },
        { title: 'AWS', icon: web },
        { title: 'AI', icon: github },
        { title: 'IoT', icon: nestjs },
    ];

    return (
        <section className={'relative w-full min-h-screen pb-40 sm:pb-32 mx-auto overflow-visible'}>
            <div
                className={`${styles.paddingX} absolute inset-x-0 top-[160px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5 pb-10`}
            >
                <div className={'flex flex-col justify-center items-center mt-5'}>
                    <div className={'w-5 h-5 rounded-full bg-[#5b8dff]'} />
                    <div className={'w-1 sm:h-80 h-40 bg-gradient-to-b from-[#5b8dff] to-transparent'} />
                </div>
                <div className={'w-full max-w-4xl'}>
                    <p className={'text-secondary text-sm uppercase tracking-[0.24em]'}>
                        Hello, I&apos;m
                    </p>
                    <h1 className={`font-extrabold text-white text-[42px] sm:text-[56px] md:text-[72px] leading-[0.95] sm:leading-[0.96] mt-4`}> 
                        DANISH{' '}
                        <span className={'bg-gradient-to-r from-[#60b7ff] via-[#5d77ff] to-[#bf65ff] bg-clip-text text-transparent'}>
                            M. CHAUDHARY
                        </span>
                    </h1>
                    <p className={`text-white text-[22px] sm:text-[26px] font-semibold mt-4`}>
                        Senior Full Stack Software Engineer
                    </p>
                    <div className={'mt-5 h-[2px] w-28 rounded-full bg-gradient-to-r from-[#60b7ff] to-[#bf65ff]'} />
                    <p className={`${styles.heroSubText} mt-6 max-w-3xl text-white-100 leading-8`}>
                        Building scalable enterprise applications, AI-powered solutions, and cloud-native platforms with React, Node.js, AWS, and modern web technologies.
                    </p>
                    <div className={'mt-6 flex flex-wrap items-center gap-3'}>
                        {skills.map((skill) => (
                            <div
                                key={skill.title}
                                className={
                                    'flex min-w-[120px] items-center gap-3 rounded-3xl border border-white/10 bg-[#0f172a]/95 px-4 py-3 shadow-card'
                                }
                            >
                                <div
                                    className={
                                        'flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] p-2'
                                    }
                                >
                                    <img src={skill.icon} alt={skill.title} className={'h-7 w-7 object-contain'} />
                                </div>
                                <p className={'text-white text-sm font-semibold'}>
                                    {skill.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
