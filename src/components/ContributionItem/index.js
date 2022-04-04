import HeaderImage from 'components/ContributionItem/assets/header-contribution.png';

const ContributionDesc = (props) => {};

const getContent = (active) => {
  if (active === 1) return <>123123</>;
  return null;
};

const ContributionItem = ({ active, setActive }) => {
  return (
    <div>
      <img src={HeaderImage} alt='' className='header-contribution-image' />;
      {[].map((item, idx) => {
        return (
          <h1 key={idx} className={`${active === idx ? 'hidden' : ''}`} onClick={() => setActive(idx)}>
            {item.title}
          </h1>
        );
      })}
      {getContent(active)}
    </div>
  );
};

export default ContributionItem;
