import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Loader from './components/Loader/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  
  AOS.init({
    duration:1000,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader></Loader> : <Home></Home>;
 
};

export default App;