import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css';
import { Link } from 'react-router-dom';

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
            <button className='button' onClick={toggleDropdown}>고객 센터</button>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="menu"
                unmountOnExit
            >
                <ul className='drop'>
                    <li><Link className="nav-link" to='/notice'>공지사항</Link></li>
                    {/* <li><a className="nav-link" href='#'>상품 문의</a></li> */}
                    <li><Link className="nav-link" to='/faq'>자주 묻는 질문</Link></li>
                </ul>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;
