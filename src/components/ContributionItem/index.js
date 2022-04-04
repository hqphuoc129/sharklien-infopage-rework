import HeaderImage from 'components/ContributionItem/assets/header-contribution.png';
import { Insurance, Water, Charity, Foreign, Startup } from 'components/ContributionContent';

const getContent = (active) => {
  switch (active) {
    case 1:
      return <Insurance />;
    case 2:
      return <Water />;
    case 3:
      return <Charity />;
    case 4:
      return <Foreign />;
    case 5:
      return <Startup />;
    default:
      return <Insurance />;
  }
};
const DATA = {
  insurance: {
    title: 'Insurance',
  },
  water: {
    title: 'Water',
  },
  charity: {
    title: 'Charity',
  },
  foreign: {
    title: 'Foreign',
  },
  startup: {
    title: 'Startup',
  },
};
const ContributionItem = ({ active, setActive }) => {
  return (
    <div>
      <img src={HeaderImage} alt='' className='header-contribution-image' />;
      {DATA.map((item, idx) => {
        return (
          <h1
            key={idx}
            className={`contribution-item-title ${active === idx ? 'hidden' : ''}`}
            onClick={() => setActive(idx)}
          >
            {item.title}
          </h1>
        );
      })}
      {getContent(active)}
    </div>
  );
};

export default ContributionItem;
