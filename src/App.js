import Header from 'components/Header/Header';
import HeaderQuoteImg from 'assets/quotes-07.png';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';
import './App.scss';
const QUOTE_DATA = [
  { image: QuoteImageOne, title: 'Quote shark Liên trên shark tank' },
  { image: QuoteImageTwo, title: 'Quote shark Liên trên shark tank' },
  { image: QuoteImageThree, title: 'Quote shark Liên trên shark tank' },
];
const App = () => {
  return (
    <div>
      <Header img={HeaderQuoteImg} title={'Người truyền cảm hứng'} />
      <QuoteList
        data={QUOTE_DATA}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '25px',
          padding: '25px',
        }}
      />
    </div>
  );
};
export default App;
