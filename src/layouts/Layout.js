import { Route, Routes } from 'react-router-dom';
import { webRoute } from 'routes';
import Home from 'views/Home';
import Contribution from 'views/Contribution';
import Biography from 'views/Biography';
import Quotes from 'views/Quotes';
import Media from 'views/Media';

const Layout = () => {
  return (
    <>
      <Routes>
        <Route exact path={webRoute.home.path} element={<Home />} />
        <Route exact path={webRoute.biography.path} element={<Biography />} />
        <Route exact path={webRoute.contribution.path} element={<Contribution />} />
        <Route exact path={webRoute.quotes.path} element={<Quotes />} />
        <Route exact path={webRoute.media.path} element={<Media />} />
      </Routes>
    </>
  );
};

export default Layout;
