import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style.js';
import { github } from '../assets/index.js';
import SectionWrapper from '../hoc/index.js';
import { projects } from '../constants/index.js';
import { fadeIn, textVariant } from '../utils/motion.js';

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div
            className="flex"
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />


                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};
const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Selected Projects
                    <h2 className={styles.sectionHeadText}>Projects.</h2>
                </p>
            </motion.div>
            <div className={'w-full flex'}>
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className={
                        'mt-3 text-secondary text-[17px] leading-[30px] text-justify'
                    }
                >
                    These selected projects highlight experience building
                    enterprise AI/IoT platforms, microservices architectures, and
                    cloud-native solutions using modern full-stack technologies.
                </motion.p>
            </div>
            <div className={'mt-20 flex flex-wrap gap-7 '}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={'project-key-' + index}
                        project={project}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, 'portfolio');
