import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({links}) => {
    return (
        <ul className='flex flex-col py-4 items-center '>
            {
                links.map((link, idx) => (<NavLink key={idx} href={link.path} title={link.title}/>))
            }
        </ul>
    );
};

export default MenuOverlay;