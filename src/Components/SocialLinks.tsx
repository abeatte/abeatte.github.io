import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSiteData } from '../../app/dataProvider';

export default function SocialLinks() {
  const { main } = useSiteData();

  return (
    <>
      {main.social.map(network => (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={network.className} /></span>
          </a>
        </li>
      ))}
    </>
  );
}
