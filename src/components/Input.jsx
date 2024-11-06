import React, { useState } from 'react';

const TextInput = ({ label }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => setFocused(true);
    const handleBlur = () => {
        if (value === '') setFocused(false);
    };

    return (
        <div className="relative w-full mt-5">
            <label
                className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out ${
                    focused || value ? 'text-xs -top-2 left-2 text-blue-500' : 'text-base'
                }`}
            >
                {label}
            </label>
            <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <p className="text-xs text-gray-500 mt-1">Supporting text</p>
        </div>
    );
};

export default TextInput;
