import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, download, downloadHover } from '../assets';
import LogoY from '../assets/logo/Y.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const lastClickRef = useRef(0);

  const handleAnchorClick = (e, nav) => {
    // non-intrusive debounce: ignore clicks within 250ms
    const now = Date.now();
    if (now - lastClickRef.current < 250) {
      e.preventDefault();
      return;
    }
    lastClickRef.current = now;
    setActive(nav.title);
    // allow default anchor behavior (scroll) to preserve UX
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={LogoY}
            alt="logo"
            className="w-[90px] h-[90px] sm:w-[90px] sm:h-[90px] object-contain bg-transparent"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium font-mova 
              uppercase tracking-[3px] cursor-pointer nav-links`}>
              <a href={`#${nav.id}`} onClick={(e) => handleAnchorClick(e, nav)}>
                {nav.title}
              </a>
            </li>
          ))}
          <li className="text-eerieBlack hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a 
              href="CV_YassineBadaoui.pdf" 
              download="CV_YassineBadaoui.pdf"
              title="Télécharger mon CV"
              className="flex items-center gap-2"
            >
              CV
              <img src={download} alt="download" className="w-5 h-5 object-contain" />
            </a>
          </li>
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
              top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col gap-6 
                  items-center justify-center mt-[0rem]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                      } text-[32px] sm:text-[48px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li className="text-eerieBlack text-[32px] sm:text-[48px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer">
                  <a 
                    href="CV_YassineBadaoui.pdf" 
                    download="CV_YassineBadaoui.pdf"
                    onClick={() => setToggle(!toggle)}
                  >
                    CV
                  </a>
                </li>
              </ul>

            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
