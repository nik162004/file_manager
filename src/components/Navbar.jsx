import LoginModal from './LoginModal';
import { useState } from 'react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Files', path: '/files' },
  { name: 'Settings', path: '/settings' },
];

const Logo = () => (
  <div>
    <p>Nik's</p>
    <h1>File Manager</h1>
  </div>
);

const NavLinks = () => (
  <ul>
    {links.map(({ name, path }) => (
      <li key={name}>
        <a href={path}>{name}</a>
      </li>
    ))}
  </ul>
);

const LoginButton = ({ onClick }) => (
  <button className="login-btn" onClick={onClick}>
    Unlock
  </button>
);

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav>
      <Logo />
      <NavLinks />

      <LoginButton onClick={() => setIsModalOpen(true)} />

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
}

export default Navbar;