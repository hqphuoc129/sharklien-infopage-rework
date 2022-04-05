import HeaderImage from 'components/ContributionItem/assets/header-contribution.png';
import { Insurance, Water, Charity, Foreign, Startup } from 'components/ContributionContent';

const getContent = (active) => {
  console.log(active);
  switch (active) {
    case 0:
      return <Insurance />;
    case 1:
      return <Water />;
    case 2:
      return <Charity />;
    case 3:
      return <Foreign />;
    case 4:
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
      <img src={HeaderImage} alt='' className='header-contribution-image' />
      {Object.keys(DATA).map((key, idx) => {
        return (
          <h1
            key={idx}
            className={`contribution-item-title ${active === idx ? 'hidden' : ''}`}
            onClick={() => setActive(idx)}
          >
            {DATA[key].title}
          </h1>
        );
      })}
      {getContent(active)}
    </div>
  );
};

export default ContributionItem;
