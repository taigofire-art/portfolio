import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&family=DM+Sans:wght@300;400;500&display=swap');
  .nav {
    position: fixed; top: 0; left: 0; right: 0;
    height: 64px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 0.5px solid #dde3ed;
    z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px;
    transition: box-shadow 0.3s;
    font-family: 'DM Sans', sans-serif;
  }
  .nav.scrolled { box-shadow: 0 2px 20px rgba(28,46,74,0.06); }
  .nav-logo {
    font-size: 17px; font-weight: 500; color: #1c2e4a;
    letter-spacing: -0.02em; text-decoration: none;
  }
  .nav-links { display: flex; gap: 36px; list-style: none; margin: 0; padding: 0; }
  .nav-links a {
    font-size: 13px; color: #4a6080; text-decoration: none;
    transition: color 0.2s; position: relative; padding-bottom: 2px;
  }
  .nav-links a:hover { color: #1c2e4a; }
  .nav-links a.active { color: #1c2e4a; font-weight: 500; }
  .nav-links a.active::after {
    content: ''; position: absolute;
    bottom: -2px; left: 0; right: 0;
    height: 1.5px; background: #1c2e4a; border-radius: 2px;
  }
  .nav-hamburger {
    display: none; flex-direction: column; gap: 4px;
    cursor: pointer; padding: 4px; background: none; border: none;
  }
  .nav-hamburger span {
    display: block; width: 20px; height: 1.5px;
    background: #1c2e4a; border-radius: 2px; transition: all 0.25s;
  }
  .mobile-menu {
    display: none; position: fixed;
    top: 64px; left: 0; right: 0;
    background: #fff; border-bottom: 0.5px solid #dde3ed;
    padding: 20px 24px; z-index: 99; flex-direction: column; gap: 0;
    font-family: 'DM Sans', sans-serif;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    font-size: 15px; color: #1c2e4a; text-decoration: none;
    padding: 12px 0; border-bottom: 0.5px solid #dde3ed;
  }
  .mobile-menu a:last-child { border-bottom: none; }
  @media (max-width: 768px) {
    .nav { padding: 0 20px; }
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
  }
`;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{navStyles}</style>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="nav-logo">tcarvalho</a>
        <ul className="nav-links">
          <li><a href="/#cases" className={isActive('/') ? '' : ''}>cases</a></li>
          <li><a href="/sobre" className={isActive('/sobre') ? 'active' : ''}>sobre</a></li>
          <li><a href="/contato" className={isActive('/contato') ? 'active' : ''}>contato</a></li>
        </ul>
        <button className="nav-hamburger" aria-label="Menu"
          onClick={() => setMenuOpen(o => !o)}>
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="/#cases">cases</a>
        <a href="/sobre">sobre</a>
        <a href="/contato">contato</a>
      </div>
    </>
  );
}
