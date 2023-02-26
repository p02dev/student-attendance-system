import React ,{useState} from 'react';
import './DateSelector.css';

const DateSelector = ({handleDateSelect, data})=> {
  const [selectedDate, setSelectedDate] = useState('');
  const uniqueDates = [...new Set(data.map((item) => item.item_date))];

  const handleSelectChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    handleDateSelect(selectedDate);
  };

  return (
    <div className = "date-selector">
      <label htmlFor ="date-picker"> Select Date: </label>
      <select id = "date-picker" onChange={handleSelectChange} value={selectedDate}>
        <option value="">All Dates</option>
        {uniqueDates.map((date) => 
        <option key={date} value={date}>
        {date}
      </option>
        )}
      </select>
    </div>
  )
}

export default DateSelector;
