import React from 'react';
import Header from 'components/Header/Header';
import HeaderQuoteImg from 'views/Quotes/assets/quotes-07.png';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';

const QUOTE_DATA = [
  { image: QuoteImageOne, title: 'Quote shark Liên trên shark tank việt nam' },
  { image: QuoteImageTwo, title: 'Quote từ cuốn sách "Liên và dòng chảy nghĩa tình"' },
  { image: QuoteImageThree, title: 'Quote shark Liên về"gói tình shark Liên - gửi nghĩa đồng bào"' },
];

const Quotes = () => {
  return (
    <>
      <Header img={HeaderQuoteImg} title={'Người truyền cảm hứng'} />
      <h1 className='box-underheader'> </h1>
      <div className='content-quote'>
        <h1 className='quote-heading'>Những câu nói hay</h1>
        <h1 className='quote-heading'> truyền cảm hứng của shark Liên</h1>
      </div>
      <h1 className='box-quotedata'>
        <QuoteList data={QUOTE_DATA} />
      </h1>
      <div className='box-footering'>
        <h1 className='quote-footerone'>"Đã không mơ thì thôi, </h1>
        <h1 className='quote-footertwo'>Mơ thì phải Mơ cho lớn"</h1>
      </div>
    </>
  );
};

export default Quotes;
