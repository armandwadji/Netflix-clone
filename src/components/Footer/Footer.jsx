import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__socials'>
          <a href='/' className='footer__socials--social'>
            <FacebookIcon />
          </a>
          <a href='/' className='footer__socials--social'>
            <InstagramIcon />
          </a>
          <a href='/' className='footer__socials--social'>
            <TwitterIcon />
          </a>
          <a href='/' className='footer__socials--social'>
            <YouTubeIcon />
          </a>
        </div>

        <ul className='footer__links'>
          <li className='footer__links--link'>
            <a href='/'>Autodescription</a>
          </li>
          <li className='footer__links--link'>
            <a href='/'>Relation investisseur</a>
          </li>
          <li className='footer__links--link'>
            <a href='/'>Confidentialité</a>
          </li>
          <li className='footer__links--link'>
            <a href='/'>Centre d'aide</a>
          </li>
          <li className='footer__links--link'>
            <a href='/'>Recrutement</a>
          </li>
          <li className='footer__links--link'>
            <a href='/'>Informations legales</a>
          </li>
          <li className='footer__links--link'>
            <a href='/'>Cates cadeaux</a>
          </li>
          <li className='footer__links--link'>
            <a href='/'>Presse</a>
          </li>
        </ul>

        <div className='footer__copy'>Netflix Clone - tous droit réservés</div>
      </div>
    </footer>
  );
};

export default Footer;
