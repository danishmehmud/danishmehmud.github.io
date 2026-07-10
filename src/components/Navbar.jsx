import React, { useState } from 'react';
import { styles } from '../style.js';
import { logo, menu, close, resume } from '../assets/index.js';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/index.js';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center fixed py-5 top-0 z-20 bg-primary/95 backdrop-blur-sm shadow-sm`}
        >
            <div
                className={
                    'w-full flex justify-between items-center max-w-7xl mx-auto'
                }
            >
                <Link
                    to={'/'}
                    className={'flex items-center gap-3'}
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className={'relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#915eff]/30 via-[#764cff]/20 to-[#1a1e3a] border border-[#915eff]/40 shadow-[0_15px_30px_-18px_rgba(145,94,255,0.8)]'}>
                        <img
                            src={logo}
                            alt={'logo'}
                            className={'h-8 w-8 rounded-full object-cover'}
                        />
                        <span className={'absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#34d399] shadow-lg shadow-[#34d399]/40'} />
                    </div>
                    <div className={'flex flex-col'}>
                        <p
                            className={
                                'text-white text-[18px] font-bold cursor-pointer'
                            }
                        >
                            Danish M. Chaudhary
                        </p>
                        <span className={'text-[#aaa6c3] text-[12px] uppercase tracking-[0.18em]'}>
                            Software Engineer
                        </span>
                    </div>
                </Link>
                <ul className={'list-none hidden sm:flex flex-row gap-10'}>
                    {navLinks.map((singleNavLink) => (
                        <li
                            key={singleNavLink.id}
                            className={`
                            ${
                                active === singleNavLink.title
                                    ? 'text-white'
                                    : 'text-secondary'
                            }
                            hover:text-white text-[18px] cursor-pointer`}
                            onClick={() => setActive(singleNavLink.title)}
                        >
                            <a href={`#${singleNavLink.id}`}>
                                {singleNavLink.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href={resume}
                    download
                    className={
                        'hidden sm:inline-flex items-center rounded-full border border-[#915eff] bg-[#915eff]/10 px-5 py-2 text-[14px] font-medium text-white transition hover:bg-[#915eff]/20'
                    }
                >
                    Download Resume
                </a>
                <div
                    className={'sm:hidden flex flex-1 justify-end items-center'}
                >
                    <img
                        src={toggle ? close : menu}
                        alt={'menu'}
                        className={
                            'w-[28px] h-[28px] object-contain cursor-pointer'
                        }
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`
                    ${!toggle ? 'hidden' : 'flex'}
                     p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}
                    >
                        <ul
                            className={
                                'list-none flex justify-end items-start flex-col gap-4'
                            }
                        >
                            {navLinks.map((singleNavLink) => (
                                <li
                                    key={singleNavLink.id}
                                    className={`
                            ${
                                active === singleNavLink.title
                                    ? 'text-white'
                                    : 'text-secondary'
                            }
                            font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setActive(singleNavLink.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${singleNavLink.id}`}>
                                        {singleNavLink.title}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={'/resume.pdf'}
                                    download
                                    className={
                                        'inline-flex items-center justify-center rounded-full border border-[#915eff] bg-[#915eff]/10 px-4 py-2 text-[14px] font-medium text-white hover:bg-[#915eff]/20'
                                    }
                                >
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
