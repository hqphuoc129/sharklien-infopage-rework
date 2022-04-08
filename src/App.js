import Navigation from 'components/Navigation/Navigation';
import Layout from 'layouts/Layout';
import Footer from 'components/Footer';
import ContributionDetails from 'views/ContributionDetails';
import 'App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Layout />
      {/* <Footer /> */}
    </div>
  );
};
export default App;
