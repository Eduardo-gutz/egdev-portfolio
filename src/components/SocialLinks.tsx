import { GithubIcon, LinkedinIcon, DribbbleIcon } from 'boxicons-react';

interface SocialLink {
  icon: React.ElementType;
  url: string;
  label: string;
  highlighted?: boolean;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

const defaultLinks: SocialLink[] = [
  {
    icon: GithubIcon,
    url: '#',
    label: 'GitHub',
  },
  {
    icon: LinkedinIcon,
    url: '#',
    label: 'LinkedIn'
  },
  {
    icon: LinkedinIcon,
    url: '#',
    label: 'LinkedIn'
  },
  {
    icon: LinkedinIcon,
    url: '#',
    label: 'LinkedIn'
  },
  {
    icon: DribbbleIcon,
    url: '#',
    label: 'Dribbble'
  }
];

export const SocialLinks = ({ links = defaultLinks, className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={`text-3xl text-text transition-all bg-secondary p-2 flex justify-center items-center rounded-lg hover:bg-secondary border-accent border`}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {<link.icon />}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 