import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader></Loader> : <Home></Home>;
 
};

export default App;