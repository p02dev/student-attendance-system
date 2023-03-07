import React, { useState } from "react";


const Form = ({ onAddStudent }) => {

    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !roll) return;

        onAddStudent(name, roll);
        setName('');
        setRoll('');

    }

    return (
        <div className=" w-full md:w1/2 ">
            <h2 className="text-1g font-bold mb-2">Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4 ">
                    <label htmlFor='name'>Name</label>
                    <input
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder='Name'
                        type='text'
                        id='name'
                        value={name}
                        maxLength='15'
                        onChange={e => setName(e.target.value)}
                        required />

                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor='name'>Roll No</label>
                    <input
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 

                        placeholder='Roll No'
                        type='Number'
                        id='roll'
                        value={roll}
                        onChange={e => setRoll(e.target.value)}
                        required />
                </div>

                <button className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-md">Add Student</button>

            </form>
        </div>
    )
};

export default Form;