import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {Chart} from 'chart.js/auto';


function BarChart({ data }) {                                        
                                                                   
  console.log(data);
  // Aggregate the scheduling data by time slot
  const scheduleByTime = data.reduce((acc, item) => {
     if(!acc[item.slot]) {
         acc[item.slot]= {
        '9am-12pm':0,
        '12pm-3pm':0,
        '3pm-6pm':0,
        '6pm-9pm': 0,
      };
    }

    

    // Extract the hour from the schedule time and group it into time slots
    const hour = parseInt(item.schedule_time?.substring(0,2));
    if (hour >= 9 && hour < 12) {
      acc[item.slot]['9am-12pm']++;
    } else if (hour >= 12 && hour < 15) {
      acc[item.slot]['12pm-3pm']++;
    } else if (hour >= 15 && hour < 18) {
      acc[item.slot]['3pm-6pm']++;
    } else if (hour >= 18 && hour < 21) {
      acc[item.slot]['6pm-9pm']++;
    }

    return acc;
}, {});

  // Prepare the data for the chart
  const chartData = {
    labels: ['9am-12pm', '12pm-3pm', '3pm-6pm', '6pm-9pm'],
    datasets: [
      {
        label: 'Lunch',
        data: [
          scheduleByTime['L'] ? scheduleByTime['L']['9am-12pm'] : 0,
          scheduleByTime['L'] ? scheduleByTime['L']['12pm-3pm'] : 0,
          scheduleByTime['L'] ? scheduleByTime['L']['3pm-6pm'] : 0,
          scheduleByTime['L'] ? scheduleByTime['L']['6pm-9pm'] : 0,
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,        
      },
      {
        label:'Dinner',
        data: [
          scheduleByTime['D'] ? scheduleByTime['D']['9am-12pm'] : 0,
          scheduleByTime['D'] ? scheduleByTime['D']['12pm-3pm'] : 0,
          scheduleByTime['D'] ? scheduleByTime['D']['3pm-6pm'] : 0,
          scheduleByTime['D'] ? scheduleByTime['D']['6pm-9pm'] : 0,
        ],
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,        
      },
    ],
  };

  // Configure the options for the chart
  const chartOptions = {
      scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
        ticks: {
          beginAtZero: true,
          stepSize: 2,
        },
      },
      },
    };


  return (
    <div className="chart-container">
      <Bar data={chartData} options={chartOptions}/>
      <Line data= {chartData} options={chartOptions}/>
    </div>
  );
};

export default BarChart;







