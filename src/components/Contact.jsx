import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

import SectionWrapper from '../hoc/index.js';
import { styles } from '../style.js';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';
//template_zu7gxsl
// service_kfy6s4m
// aFCNmuREqibzGvgcg
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_kfy6s4m',
                'template_zu7gxsl',
                {
                    from_name: form.name,
                    to_name: 'Danish Mehmud',
                    from_email: form.email,
                    to_email: 'danishmehmud.works@gmail.com',
                    message: form.message,
                },
                'aFCNmuREqibzGvgcg'
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        'Thank you. I will get back to you as soon as possible.'
                    );

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert('Ahh, something went wrong. Please try again.');
                }
            );
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-visible`}
        >
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <div className="mt-6 rounded-[24px] border border-[#2f334a] bg-[#0d1128] p-5 text-sm text-secondary">
                    <p className="text-white text-base font-medium">
                        New York City, NY
                    </p>
                    <p className="mt-2 flex flex-wrap gap-2 text-[#a3b5ff]">
                        <a href="tel:+19298530344" className="hover:text-white transition-colors duration-200">
                            (929) 853-0344
                        </a>
                        <span className="text-white/60">|</span>
                        <a href="mailto:danishmehmud.works@gmail.com" className="hover:text-white transition-colors duration-200">
                            danishmehmud.works@gmail.com
                        </a>
                    </p>
                </div>
                <p className="mt-6 text-secondary text-[17px] leading-8 max-w-xl">
                    Feel free to reach out anytime — whether you want to collaborate
                    on a project, discuss an opportunity, or just say hello.
                </p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-10 flex flex-col gap-6"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message here"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-[#5b8dff] to-[#bf65ff] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-[0_25px_45px_-15px_rgba(97,93,255,0.65)] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                style={{
                    transform: 'translateX(0%) translateY(0px) translateZ(0px)',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        pointerEvents: 'auto',
                        touchAction: 'none',
                    }}
                >
                    <div style={{ width: '100%', height: '100%' }}>
                        <EarthCanvas />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
