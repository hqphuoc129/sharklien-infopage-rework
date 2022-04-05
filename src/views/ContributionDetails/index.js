import ContributionItem from 'components/ContributionItem';
import { useState } from 'react';
const ContributionDetails = () => {
  const [active, setActive] = useState(0);
  return (
    <div className='contribution-details'>
      <ContributionItem active={active} setActive={setActive} />
    </div>
  );
};

export default ContributionDetails;
