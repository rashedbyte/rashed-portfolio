export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  description: string;
  url: string;
  social: SocialLinks;
}