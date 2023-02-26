import React from 'react';
import {Pie} from 'react-chartjs-2';

// function PieChart({ data, date }) {
//   const filteredData = data.filter((item) => item.item_date === date);
//   const scheduleBySlot = filteredData.reduce(
//     (acc, item) => {
//       acc[item.slot]++;
//       return acc;
//     },
//     { L: 0, D: 0 }
//   );

function PieChart({data, date}) {
  const filteredData = data.filter((item)=> item.item_date === date);
  const scheduleBySlot = filteredData.reduce(
  (acc,item) =>{
    acc[item.slot]++;
    return acc;
  },
  {L: 0, D: 0}
)

 

  // const chartData = {
  //   labels: ['Lunch', 'Dinner'],
  //   datasets: [
  //     {
  //       data: [scheduleBySlot.L, scheduleBySlot.D],
  //       backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
  //       borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  const chartData = {
    labels: ['Lunch', 'Dinner'],
    datasets: [
      {
        data: [scheduleBySlot.L, scheduleBySlot.D],
        backgroundColor:['white','coral'],
        borderColor: ['yellow','pink'],
        borderWidth: 1,
      },
    ],
  };



  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: `Scheduled Meals on ${date}`,
  //       font: {
  //         size: 24,
  //       },
  //     },
  //     legend: {
  //       display: true,
  //       position: 'bottom',
  //     },
  //   },
  // };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `Scheduled Meals on ${date}`,
        font: {
            size: 24,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  
  return (
    <div>
      <Pie data= {chartData} options ={options}/>
    </div>
  )

}

export default PieChart;

