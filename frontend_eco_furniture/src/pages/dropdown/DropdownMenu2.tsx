import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <button className='button' onClick={toggleDropdown}>공간별 쇼핑 하기</button>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="menu"
                unmountOnExit
            >
                <ul className='drop'>
                    <li><a className="nav-link" href='/livingRoom'>거실</a></li>
                    <li><a className="nav-link" href='/bedRoom'>침실</a></li>
                    <li></li>
                </ul>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;
