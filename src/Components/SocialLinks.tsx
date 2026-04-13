import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSiteData } from '../../app/dataProvider';

export default function SocialLinks({ links = undefined }: { links: undefined | [string] }) {
  const { main } = useSiteData();

  const uiLinks = links === undefined ? main.social : main.social.filter(n => links.includes(n.name));

  return (
    <>
      {uiLinks.map(network => (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={network.className} /></span>
          </a>
        </li>
      ))}
    </>
  );
}
