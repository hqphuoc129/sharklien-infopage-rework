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
    title: 'BẢO HIỂM',
  },
  water: {
    title: 'NƯỚC SẠCH',
  },
  charity: {
    title: 'THIỆN NGUYỆN',
  },
  foreign: {
    title: 'NGOẠI GIAO',
  },
  startup: {
    title: '"BÀ ĐỠ" START-UP',
  },
};
const ContributionItem = ({ active, setActive }) => {
  return (
    <div>
      <div className="div-descript not-change"
            style= {{
                backgroundImage: `url(${HeaderImage})`}}>
      <div className='containerdetail-text'>
        {Object.keys(DATA).map((key, idx) => {
        return (
            <h1
              key={idx}
              className={`contribution-item-title-${idx}${active === idx ? '-hidden' : ''}`}
              onClick={() => setActive(idx)}
            >
              {DATA[key].title}
            </h1>
          );
        })}
      </div>
    </div>
    <h1 className='box-underheading'> </h1>
    {Object.keys(DATA).filter((key, idx) => idx === active).map((key, idx) => {return(<h1 className= 'title-details'>{DATA[key].title}</h1>)})}
    {getContent(active)}
    </div>
  );
};

export default ContributionItem;
