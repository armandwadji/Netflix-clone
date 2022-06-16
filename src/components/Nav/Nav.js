import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Nav = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);

  /* Scrool */
  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };
  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  /* Burger */
  const handleClick = () => {
    setToogleMenu(!toogleMenu);
  };

  return (
    <div
      className={`nav 
      ${(navBlack || toogleMenu) && "nav--black"} 
      ${toogleMenu && "show"}`}>
      <button className='nav__burger' onClick={handleClick}>
        <MenuIcon />
      </button>
      <img src='./images/logo.png' className='nav__logo' alt='Netfix-logo' />
      <nav className='nav__links'>
        <a href='/' className='nav__links--link'>
          Acceuil
        </a>
        <a href='/' className='nav__links--link'>
          Séries
        </a>
        <a href='/' className='nav__links--link'>
          Films
        </a>
      </nav>
      <div className='nav__actions'>
        <a href='/' className='nav__actions--action'>
          <SearchIcon />
        </a>
        <a href='/' className='nav__actions--action'>
          Direct
        </a>
        <a href='/' className='nav__actions--action'>
          <CardGiftcardIcon />
        </a>
        <a href='/' className='nav__actions--action'>
          <NotificationsIcon />
        </a>
        <a href='/' className='nav__actions--action'>
          <img src='./images/Netflix-avatar.png' alt='Avatar' />
        </a>
      </div>
    </div>
  );
};

export default Nav;
