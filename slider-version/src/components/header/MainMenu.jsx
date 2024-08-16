import Link from 'next/link';
import React from 'react';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <h3 className="curbe-title">
                    <Link href="/all-projects">Tüm Projeler</Link>
                </h3>
            </ul>
        </>
    );
};

export default MainMenu;