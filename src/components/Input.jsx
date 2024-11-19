import React, { useState } from 'react';

const TextInput = ({ label, supportingText, type = "text", value, onChange }) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => {
        if (value === '') setFocused(false);
    };

    // Alterna entre mostrar y ocultar contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative w-full mt-5">
            <label
                className={`absolute left-2 transition-all duration-200 ease-in-out ${
                    focused || value
                        ? '-top-3 left-3 text-xs text-blue-500 bg-white px-1'
                        : 'top-2 text-gray-500'
                }`}
            >
                {label}
            </label>
            <input
                type={type === "password" && !showPassword ? "password" : "text"}
                className="w-96 p-2 pt-4 border border-gray-300 rounded-md outline-none focus:border-blue-500"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange} // Aquí usamos el onChange del padre
                value={value} // Aquí usamos el value del padre
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
                >
                    <img
                        src={showPassword ? '/eye-slash.svg' : '/eye.svg'}
                        alt={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        className="w-5 h-5 mt-1"
                    />
                </button>
            )}
            <p className="text-xs text-gray-500 mt-1">{supportingText}</p>
        </div>
    );
};

export default TextInput;
