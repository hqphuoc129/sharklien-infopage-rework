import React from 'react';
import Header from 'components/Header/Header';
import HeaderQuoteImg from 'views/Quotes/assets/quotes-07.png';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import { QuoteBook, QuoteSharkTank, QuoteCharity } from 'components/QuoteList/QuoteContent';

const QUOTE_DATA = [
  { image: QuoteImageOne, title: 'Trong chương trình Sharktank Việt Nam'},
  { image: QuoteImageTwo, title: 'Từ cuốn sách "Liên và dòng chảy nghĩa tình"'},
  { image: QuoteImageThree, title: 'Trong chương trình "Gói tình Shark Liên - gửi nghĩa đồng bào"'},
];

const Quotes = () => {
  return (
    <>
      <Header img={HeaderQuoteImg} title={'Người truyền cảm hứng'} />
      <h1 className='box-underheader'> </h1>
      <div className='content-quote'>
        <h1 className='quote-heading'>Những câu nói hay</h1>
        <h1 className='quote-heading'> truyền cảm hứng của Shark Liên</h1>
      </div>
      <div className={`box-quotedata`}>
        <QuoteList data={QUOTE_DATA} />
      </div>
      <div className={`box-footering`}>
        <h1 className='quote-footerone'>"Đã không mơ thì thôi, </h1>
        <h1 className='quote-footertwo'>Mơ thì phải Mơ cho lớn"</h1>
      </div>
    </>
  );
};

export default Quotes;
