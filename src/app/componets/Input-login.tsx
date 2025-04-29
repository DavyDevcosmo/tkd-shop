import React from "react";

interface inputRegisterProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

const InputLogin: React.FC<inputRegisterProps> = ({ placeholder, ...props }) => {
    return (
        <input
            {...props}
            placeholder={placeholder}
            className="border-b-2 border-gray-400 text-[#050F58] outline-none
             sm:w-80 h-16
             md: text-base  px-1 mb-10 
             lg:w-[429px] lg:h-11 lg:px-2 lg:mb-3 
              
              font-poppins placeholder:text-[#000842] hover:border-[#091A97] transition-colors  "
        />
    );
};

export default InputLogin;