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
      <button className='button' onClick={toggleDropdown}>모든 제품</button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <ul className='drop'>
          <li><a className="nav-link" href='/best-item'>베스트</a></li>
          <li><a className="nav-link" href='/promotion'>프로모션</a></li>
          <li><a className="nav-link" href='/interior-item'>인테리어 소품</a></li>
          <li><a className="nav-link" href="/chair">의자</a></li>
          <li><a className="nav-link" href="/table">테이블</a></li>
        </ul>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
