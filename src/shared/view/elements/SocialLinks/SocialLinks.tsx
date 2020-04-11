import React from 'react';
import block from 'bem-cn';

import './SocialLinks.scss';

const b = block('social-links');

const socialLinks: Array<{ type: string; icon: string; href: string; }> = [
  {
    type: 'twitter',
    icon: require('./imgs/twitter.svg'),
    href: 'https://twitter.com/'
  },
  {
    type: 'facebook',
    icon: require('./imgs/facebook.svg'),
    href: 'https://www.facebook.com/'
  },
  {
    type: 'instagram',
    icon: require('./imgs/instagram.svg'),
    href: 'https://www.instagram.com/'
  }
];

function SocialLinks() {
  return (
    <div className={b()}>
      {socialLinks.map((socialLink) => (
        <a href={socialLink.href} className={b('link')} target="_blank" rel="noopener noreferrer">
          <img src={socialLink.icon} className={b('icon')} title={socialLink.type} />
        </a>
      ))}
    </div>  
  );
};

export { SocialLinks };
