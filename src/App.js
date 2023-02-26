import React, { useState, useEffect } from 'react';
import ScheduleData from './components/ScheduleData';
import DateSelector from './components/DateSelector';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import Error from './components/Error';
import Loading from './components/Loading';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    const fetchData = async() => {        
      try{
        const response = await  fetch('https://mocki.io/v1/5f3faf3d-b238-4d44-b0fc-f448faf2e2eb');
        console.log(response)
        const result = await response.json();
        setData(result)
        
      }catch(error){
        setError(true)
      } finally {
        setLoading(false)
      }
    }; 
    fetchData();
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  if (loading) {
    return <Loading />;
  }

  // if (error) {
  //   return <Error />;
  // }

  const filteredData = selectedDate
    ? data.filter((item) => item.item_date === selectedDate)
    : data;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scheduling Patterns</h1>
        <DateSelector handleDateSelect={handleDateSelect} data={data} />
      </header>
      <div className = 'App-header'>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            <ScheduleData data={filteredData} />
          </tbody>
        </table>
      </div>
      </div>
      <div className="chart-container">
        <BarChart data={filteredData} />
        <PieChart data={filteredData} />
      </div>
    </div>
  );
}

export default App;


