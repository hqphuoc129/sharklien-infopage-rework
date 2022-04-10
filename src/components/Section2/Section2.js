import BriefIntro from 'components/BriefIntro/BriefIntro';
import IndexCombine from 'components/IndexCombine/IndexCombine';
import TestQuotes from 'components/TestQuotes/index';
const Section2 = () => {
  return (
    <div className='section2-background'>
        <BriefIntro/>
        <IndexCombine/>
        <TestQuotes />
    </div>
  );
};
export default Section2;
