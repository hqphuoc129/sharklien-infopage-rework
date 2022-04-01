import { Routes, Route } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import Home from 'views/Home';
import Biography from 'views/Biography';
import Contribution from 'views/Contribution';
import Quotes from 'views/Quotes';
import Media from 'views/Media';
// import Header from 'components/Header/Header';
// import HeaderQuoteImg from 'assets/quotes-07.png';
// import QuoteList from 'components/QuoteList/QuoteList';
// import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
// import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
// import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';

// const QUOTE_DATA = [
//   { image: QuoteImageOne, title: 'Quote shark Liên trên shark tank' },
//   { image: QuoteImageTwo, title: 'Quote shark Liên trên shark tank' },
//   { image: QuoteImageThree, title: 'Quote shark Liên trên shark tank' },
// ];

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      {/* <Header img={HeaderQuoteImg} title={'Người truyền cảm hứng'} />
      <QuoteList data={QUOTE_DATA} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/biography' element={<Biography />} />
        <Route path='/contribution' element={<Contribution />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/media' element={<Media />} />
      </Routes>
    </div>
  );
};
export default App;
