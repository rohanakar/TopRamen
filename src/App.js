import React, { useEffect } from 'react';

import './App.css';
import Countries from './components/Countries';
import API from './api/API';
import { useDispatch } from 'react-redux';
import { updateData } from './redux/actions';

const App = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await API.get().then((response) => {

        const countiresMap = {};
        response.data.forEach((dataEle) => {
          if (countiresMap[dataEle.Country])
            countiresMap[dataEle.Country].push(dataEle);
          else
            countiresMap[dataEle.Country] = [dataEle];
        })
        dispatch(updateData({ countryMap: countiresMap, data: response.data }));
      }).catch((error) => {
        alert('error while fetching');
        console.log(error);
      })
    }
    fetchData();
  }, [dispatch]);




  return (
      < div className="App" >
        <Countries />
      </div >
  );
}

export default App;
