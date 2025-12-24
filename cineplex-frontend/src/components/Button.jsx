import React from "react";

function Button({text, isprimary, onClick, onSubmit, type}){
    return(
        <button type={type} onClick={onClick} onSubmit={onSubmit} className={isprimary ? " cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md roboto uppercase font-bold" : "bg-gray-200 cursor-pointer text-black px-4 py-2 rounded-md"}>{text}</button>
    )
}
export default Button;