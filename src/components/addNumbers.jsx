//Reactjs component with 2 input fields and a button to add the numbers
//using the math functions from utils/math.js
//Apply tailwindcss classes to the elements

import React, { useState } from 'react';

import { add } from '../utils/math';


export const AddNumbers = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleAdd = () => {
        setResult(add(num1, num2));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                className="border p-2 m-2"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                className="border p-2 m-2"
            />
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white p-2 m-2"
            >
                Add
            </button>
            <div className="m-2">{result}</div>
        </div>
    );
}



