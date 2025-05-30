import { SocialLink, userLinks } from '@/utils/userLinks';
interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

export const SocialLinks = ({ links = userLinks, className = '' }: SocialLinksProps) => {
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