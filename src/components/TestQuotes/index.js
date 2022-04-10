import TestQuoteLien from 'components/TestQuotes/assets/quotes-05.png';
import QuoteMobileImage from 'components/TestQuotes/assets/quotemobile.jpg';
const TestQuotes = (Props) => {
  return (
    <div className='testquotes-container'>
      <div className='box-quotestitle'>
        <div className='quotetitle-container'>
          <h1 className='title-one'>Đã không mơ thì thôi, </h1>
          <h1 className='title-two'>Mơ thì phải Mơ cho lớn.</h1>
        </div>
      </div>
      <div className='testquotes-img-holder'>
        <img className='box-imglien-desktop' src={TestQuoteLien} alt='' />
        <img className='box-imglien-mobile' src={QuoteMobileImage} alt='' />
      </div>
    </div>
  );
};
export default TestQuotes;
