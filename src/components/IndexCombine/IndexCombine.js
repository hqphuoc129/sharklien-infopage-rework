import IndexInsurance from 'components/IndexInsurance/IndexInsurance';
import IndexWater from 'components/IndexWater/IndexWater';
import IndexStartup from 'components/IndexStartup/IndexStartup';
import IndexDiplomacy from 'components/IndexDiplomacy/IndexDiplomacy';

const INDEX_COMBINE = [IndexInsurance, IndexWater, IndexStartup, IndexDiplomacy];

const IndexCombine = () => {
  return (
    <div>
      <div className="index-combine-title"> Vì sứ mệnh của tôi là tạo ra giá trị cho cộng đồng.      </div>
      <div className='index-combine-container'>
        <IndexInsurance />
        <IndexWater />
        <IndexStartup />
        <IndexDiplomacy />
      </div>
    </div>


  );
};

export default IndexCombine;
