export * from './auth';

export type ColorType = { 
  name: string; 
  hex: string; 
  opacity: number; 
}

export type HeadlineType = { 
  type: string; 
  text: string; 
}

export type SubLink = { 
  title: string; 
  href: string; 
};

export type Link = { 
  title: string; 
  href: string; 
  links?: SubLink[]
};

export type FooterLinksGroup = { 
  title: string; 
  links: Link[]; 
  mobileInvisible: boolean; 
}