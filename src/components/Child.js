
import React, { useState, useEffect } from "react";

const Child = ({ students, onDelete, handleCheckout }) => {
  const [allCheckedOut, setAllCheckedOut] = useState(false);
  const [allDeleted, setAllDeleted] = useState(false);
  const [numPresent, setNumPresent] = useState(0);

  useEffect(() => {
    setNumPresent(students.filter(student => student.present).length);
    setAllCheckedOut(numPresent === 0);
  }, [students, numPresent]);

  const handleDelete = (roll) => {
    onDelete(roll);
  };

  const handleDeleteAll = () => {
   students.forEach((student) => {
    if(student.present){
      handleCheckout(student.roll);
    }
    onDelete(student.roll);
   })
   setAllDeleted(false);
   setAllCheckedOut(false)
  };

  const handleCheckOutAll = () => {
    students.forEach((student) => {
      if (student.present) {
        handleCheckout(student.roll);
      }
    });
    setAllCheckedOut(true);
  };

  const handleCheckoutStudent = (roll) => {
    handleCheckout(roll);
    setNumPresent(numPresent - 1);
  };

  const formatDate = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear().toString().padStart(4, "0");
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };


  


  return (
    <div className="w-full md:w-50% ">
      <h2 className="text-1g font-bold mb-2 ">Student List</h2>

      <ul className="border rounded-md flex flex-col " >
        {students.map((student) => (
          <li key={student.roll} className="flex items-center border-b">
            <span className="py-3 px-3">{student.name}</span>
            <span className="py-3 px-3">{student.roll}</span>
            <span className="py-2 px-3">
              {student.checkInTime
                ? `Check-In Time: ${formatDate(student.checkInTime)}` : ""}

            </span>
            <span className="py-2 px-3">
              {student.checkOutTime
                ? `Check-Out Time:${formatDate(student.checkInTime)}` : ""}

            </span>

            
            <button
              className={`py-2 px-2 ${student.present ? "bg-green-500 text-white rounded" : "bg-gray-300 w-auto"
                }`}
              onClick={() => handleCheckoutStudent(student.roll)}
              disabled={!student.present} 
            >
              {!student.present ? "Checked-out" : "Check-out"}
            </button>
            <button
              className="py-2 px-2  bg-red-500 text-white ml-3 rounded"
              onClick={() => handleDelete(student.roll)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between my-4">

        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          onClick={handleCheckOutAll}
          disabled={allCheckedOut || students.length === 0}
        >
          {allDeleted
            ? "No Students to Check-out"
            : students.length === 0
              ? "No Students to Check-out"
              : allCheckedOut ? 'All Checked-Out' : 'CheckOut-All'}
        </button>

        <button
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
          onClick={handleDeleteAll}
          disabled={allCheckedOut && students.length === 0}
        >
          {allCheckedOut && students.length === 0
            ? "No Students to be Deleted"
            : 'Delete All'
}
        </button>
      </div>
    </div>
  );
};

export default Child;