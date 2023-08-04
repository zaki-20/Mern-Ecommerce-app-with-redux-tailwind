import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";


const Rating = ({ value, text }) => {
    return (
        <div className='flex space-x-1 items-center'>
            <span className=''>
                {value >= 1 ? <BsStarFill className='text-yellow-500' /> : value >= 0.5 ? <BsStarHalf className='text-orange-600' /> : ""}
            </span>
            <span className=''>
                {value >= 2 ? <BsStarFill className='text-yellow-500' /> : value >= 1.5 ? <BsStarHalf className='text-orange-600' /> : ""}
            </span>
            <span className=''>
                {value >= 3 ? <BsStarFill className='text-yellow-500' /> : value >= 2.5 ? <BsStarHalf className='text-orange-600' /> : ""}
            </span>
            <span className=''>
                {value >= 4 ? <BsStarFill className='text-yellow-500' /> : value >= 3.5 ? <BsStarHalf className='text-orange-600' /> : ""}
            </span>
            <span className=''>
                {value >= 5 ? <BsStarFill className='text-yellow-500' /> : value >= 4.5 ? <BsStarHalf className='text-orange-600' /> : ""}
            </span>
            <span>{text && text}</span>
        
        </div>
    )
}

export default Rating