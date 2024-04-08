import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    const navList = [
        {
            name: 'Home',
            href: '#',
        },
        {
            name: 'About',
            href: '#about',
        },
        {
            name: 'Gallery',
            href: '#gallery',
        },
    ];

    return (
        <div className='Nav text-white p-4 flex justify-around items-center'>
            <h1>WGYU</h1>
            <ul className='NavLinks flex space-x-4'>
                {navList.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link className='link text-white' smooth to={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <button>BOOK RESERVATION</button>
        </div>
    );
};

export default Nav;
