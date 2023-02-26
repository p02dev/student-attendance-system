import React from 'react';


function ScheduledData({data}) {
  const scheduleByDate = data.reduce((acc, item) => {
    const {item_date, slot} = item;
    if(!acc[item_date]){
      acc[item_date] = {
      L: 0,
      D: 0
    };
  }
  acc[item_date][slot]++;
  return acc;
},{});

return (
  <>{Object.entries(scheduleByDate).map(([date, counts]) => (
    <tr key={date}>
    <td>{date}</td>
    <td>{counts.L}</td>
    <td>{counts.D}</td>
    </tr>
  )
  )} 
  </>
)
}
export default ScheduledData;
