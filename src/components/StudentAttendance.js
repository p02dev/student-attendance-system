import React, { useState, useEffect } from 'react';
import Child from './Child';
import Form from './Form';


const StudentAttendance = () => {

    const [students, setStudents] = useState([]);
    const [numPresent, setNumPresent] = useState(0);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('studentData'));
        if (storedData && storedData.length) {
            setStudents(storedData);
        }
    }, []);

    useEffect(() => {
        setNumPresent(students.filter(student => student.present).length);

        localStorage.setItem('studentData', JSON.stringify(students));
    }, [students]);


    const addStudent = (name, roll) => {
        if (students.find(student => student.roll === roll)) {
            alert(`A student with roll number ${roll} already exists!`);
            return;
        }
        const now = new Date();
        const newStudent = {roll, name, present: true,checkInTime: now}
        setStudents((prevState) => [...prevState,newStudent]);
    };

    const deleteStudent = (roll) => {
        setStudents(prevState => 
            prevState.filter(student => student.roll !== roll)
        );
        setNumPresent(prevState => prevState -1);
    }

    const handleCheckOut = (roll) => {
        const now = new Date();
        setStudents((prevState) => 
        prevState.map((student)=>
        student.roll === roll 
        ? {...student,present:false, checkOutTime:now}
        : student
        ))
    };


    const handleCheckoutAll =() => {
        const updatedStudents = students.map((student) =>{
        if(student.present && !student.checkOutTime){
            return {
                ...student,
                checOutTime: new Date()
            };
        }
        return student;
        }) ;
        setStudents(updatedStudents);
    }


    return (
        <div className="w-auto">
            <div className="flex flex-wrap justify-between mb-4">
                <p className="text-1g">Number of students present: <b>{numPresent}</b></p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <Form onAddStudent={addStudent} />
                <Child 
                students={students}  
                onDelete={deleteStudent}
                handleCheckout={handleCheckOut}
                handleCheckoutAll={handleCheckoutAll}
                />
            </div>
        </div>
    );
};
export default StudentAttendance;