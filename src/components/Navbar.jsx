import React, { useState } from 'react';
import { styles } from '../style.js';
import { logo, menu, close, resume } from '../assets/index.js';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/index.js';

const SocialLink = ({ href, label, children }) => (
    <a
        href={href}
        target={'_blank'}
        rel={'noreferrer'}
        aria-label={label}
        className={
            'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#cbd5e1] transition hover:-translate-y-0.5 hover:border-[#915eff]/50 hover:bg-[#915eff]/20 hover:text-white'
        }
    >
        {children}
    </a>
);

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
                <div className={'hidden sm:flex items-center gap-3'}>
                    <SocialLink
                        href={'https://github.com/danishmehmud'}
                        label={'GitHub'}
                    >
                        <svg
                            viewBox={'0 0 24 24'}
                            fill={'currentColor'}
                            className={'h-5 w-5'}
                            aria-hidden={'true'}
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019 0 2.045.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.596 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </SocialLink>
                    <SocialLink
                        href={'https://www.linkedin.com/in/danish-mehmud-dev'}
                        label={'LinkedIn'}
                    >
                        <svg
                            viewBox={'0 0 24 24'}
                            fill={'currentColor'}
                            className={'h-5 w-5'}
                            aria-hidden={'true'}
                        >
                            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-1.48 6.5h3v12h-3zm7 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.5c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21h-3z" />
                        </svg>
                    </SocialLink>
                    <a
                        href={resume}
                        download
                        className={
                            'inline-flex items-center rounded-full border border-[#915eff] bg-[#915eff]/10 px-5 py-2 text-[14px] font-medium text-white transition hover:bg-[#915eff]/20'
                        }
                    >
                        Download Resume
                    </a>
                </div>
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
                            <li className={'flex items-center gap-2'}>
                                <SocialLink
                                    href={'https://github.com/danishmehmud'}
                                    label={'GitHub'}
                                >
                                    <svg
                                        viewBox={'0 0 24 24'}
                                        fill={'currentColor'}
                                        className={'h-5 w-5'}
                                        aria-hidden={'true'}
                                    >
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019 0 2.045.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.596 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </SocialLink>
                                <SocialLink
                                    href={'https://www.linkedin.com/in/danish-mehmud-dev'}
                                    label={'LinkedIn'}
                                >
                                    <svg
                                        viewBox={'0 0 24 24'}
                                        fill={'currentColor'}
                                        className={'h-5 w-5'}
                                        aria-hidden={'true'}
                                    >
                                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-1.48 6.5h3v12h-3zm7 0h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.5c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21h-3z" />
                                    </svg>
                                </SocialLink>
                            </li>
                            <li>
                                <a
                                    href={resume}
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
