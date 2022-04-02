import React from 'react';
import Header from 'components/Header/Header';
import HeaderQuoteImg from 'views/Quotes/assets/quotes-07.png';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';

const QUOTE_DATA = [
  { image: QuoteImageOne, title: 'Quote shark Liên trên shark tank' },
  { image: QuoteImageTwo, title: 'Quote shark Liên trên shark tank' },
  { image: QuoteImageThree, title: 'Quote shark Liên trên shark tank' },
];

const Quotes = () => {
  return (
    <>
      <Header img={HeaderQuoteImg} title={'Người truyền cảm hứng'} />
      <QuoteList data={QUOTE_DATA} />
    </>
  );
};

export default Quotes;
