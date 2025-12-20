import React from "react";

function Button({text, isprimary, onClick, onSubmit}){
    return(
        <button onClick={onClick} onSubmit={onSubmit} className={isprimary ? "bg-red-600 text-white px-4 py-2 rounded-md roboto uppercase font-bold" : "bg-gray-200 text-black px-4 py-2 rounded-md"}>{text}</button>
    )
}
export default Button;