import IndexInsurance from 'components/IndexInsurance/IndexInsurance';
import IndexWater from 'components/IndexWater/IndexWater';
import IndexStartup from 'components/IndexStartup/IndexStartup';
import IndexDiplomacy from 'components/IndexDiplomacy/IndexDiplomacy';

const INDEX_COMBINE = [IndexInsurance, IndexWater, IndexStartup, IndexDiplomacy];

const IndexCombine = () => {
  return (
    <div className='index-combine-container'>
      <IndexInsurance />
      <IndexWater />
      <IndexStartup />
      <IndexDiplomacy />
    </div>
  );
};

export default IndexCombine;
