import ContributionItem from 'components/ContributionItem';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const ContributionDetails = () => {
  const location = useLocation();
  console.log(location.state)
  const [active, setActive] = useState(Number(location.state));
  return (
    <div className='contribution-details'>
      <ContributionItem active={active} setActive={setActive} />
    </div>
  );
};

export default ContributionDetails;
