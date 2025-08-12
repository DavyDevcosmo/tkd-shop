import { useState } from "react";

interface CounterProps {
    initialValue: number;
    onChange: (value: number) => void;
}

const Counter = ({ initialValue, onChange }: CounterProps) => {
    const [count, setCount] = useState(initialValue);

    const decrement = () => {
        if (count > 1) {
            const newValue = count - 1;
            setCount(newValue);
            onChange(newValue);
        }
    };

    const increment = () => {
        const newValue = count + 1;
        setCount(newValue);
        onChange(newValue);
    };


    return (
        <div className='flex items-center gap-2 border border-[#090129] h-9 rounded-2xl'>
            <button
                className='w-6 h-6 text-[#090129] font-bold p-2 flex items-center justify-center cursor-pointer'
                onClick={decrement}
            >
                -
            </button>
            <span className='font-bold text-[#090129] text-lg  px-4 w-10'>
                {initialValue}
            </span>
            <button
                className='text-[#090129] font-bold p-2 flex items-center justify-center cursor-pointer'
                onClick={increment}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
