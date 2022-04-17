import Navigation from 'components/Navigation/Navigation';
import Layout from 'layouts/Layout';
import Footer from "components/Footer/index";
import React, {createContext,useState} from 'react';

export const webContext = createContext(null);
const App = () => {
  const [isActive, setIsActive] = useState();
  return (
    <div className='app'>
      <webContext.Provider value={{isActive,setIsActive}}>
        <Navigation />
        <Layout />
        <Footer />
      </webContext.Provider>
    </div>
  );
};
export default App;
