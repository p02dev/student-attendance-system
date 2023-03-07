import React from "react";
import StudentAttendance from "./components/StudentAttendance";

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-500 text-white text-center py-4">
                <h1 className='text-x1 font-bold'>Student Attendance Sytem</h1>
            </header>

            <div className = "container mx-auto px-2 md:px-4 lg:px-8">
            <StudentAttendance />
            </div>
          
        </div>
    );
};

export default App;