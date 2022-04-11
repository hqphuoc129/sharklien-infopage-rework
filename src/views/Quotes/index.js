import React from 'react';
import Header from 'components/Header/Header';
import HeaderQuoteImg from 'views/Quotes/assets/quotes-07.png';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { QuoteBook, QuoteSharkTank, QuoteCharity } from 'components/QuoteList/QuoteContent';

const QUOTE_DATA = [
  { image: QuoteImageOne, title: 'Quote shark Liên trên shark tank việt nam' },
  { image: QuoteImageTwo, title: 'Quote từ cuốn sách "Liên và dòng chảy nghĩa tình"' },
  { image: QuoteImageThree, title: 'Quote shark Liên về "gói tình shark Liên - gửi nghĩa đồng bào"' },
];
const getContent = (active) => {
  console.log(active);
  switch (active) {
    case 0:
      return <QuoteSharkTank />;
    case 1:
      return <QuoteBook />;
    case 2:
      return <QuoteCharity />;
    default:
      return <></>;
  }
};
const Quotes = () => {
  const [hidden, setHidden] = useState(-1);
  console.log(hidden);
  return (
    <>
      <Header img={HeaderQuoteImg} title={'Người truyền cảm hứng'} />
      <h1 className='box-underheader'> </h1>
      <div className='content-quote'>
        <h1 className='quote-heading'>Những câu nói hay</h1>
        <h1 className='quote-heading'> truyền cảm hứng của shark Liên</h1>
      </div>
      <div className={`box-quotedata`}>
        <QuoteList data={QUOTE_DATA} />
      </div>
      <div className='box-quote-image-desc'>
        {QUOTE_DATA.map((item, idx) => {
          return (
            <h2 key={idx} className={`quote-image-desc`} onClick={() => setHidden(idx)}>
              {item.title}
            </h2>
          );
        })}
      </div>
      {getContent(hidden)};
      <div className={`box-footering${hidden !== -1 ? '-hidden' : ''}`}>
        <h1 className='quote-footerone'>"Đã không mơ thì thôi, </h1>
        <h1 className='quote-footertwo'>Mơ thì phải Mơ cho lớn"</h1>
      </div>
    </>
  );
};

export default Quotes;
