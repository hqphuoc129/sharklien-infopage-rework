import TestQuoteLien from 'components/TestQuotes/assets/quotes-05.png';
import QuoteMobileImage from 'components/TestQuotes/assets/quotemobile.jpg';
const testQuos = (Props) => {
  return (
    <>
      <img className='box-imglien-desktop' src={TestQuoteLien} alt='' />
      <img className='box-imglien-mobile' src={QuoteMobileImage} alt='' />
      <div className='box-quotestitle'>
        <h1 className='title-one'>Đã không mơ thì thôi, </h1>
        <h1 className='title-two'>Mơ thì phải Mơ cho lớn.</h1>
      </div>
      <h1 className='title-three'> Để đi xa, chúng ta luôn cần có những người ủng hộ mình. </h1>
    </>
  );
};
export default testQuos;
