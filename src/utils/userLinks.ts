import { LinkedinIcon } from "boxicons-react";
import { GithubIcon } from "boxicons-react";

export interface SocialLink {
    icon: React.ElementType;
    url: string;
    label: string;
    highlighted?: boolean;
  }

export const userLinks: SocialLink[] = [
    {
      icon: GithubIcon,
      url: 'https://github.com/Eduardo-gutz',
      label: 'GitHub',
    },
    {
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/eduardogutierrezfl/',
      label: 'LinkedIn'
    }
  ];