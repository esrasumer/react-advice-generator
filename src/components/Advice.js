import React from 'react'
import { BsFillDice5Fill } from 'react-icons/bs';
import './Advice.css'

function Advice() {
    return (
        <div className='advice'>
            <p>api buraya gelecek</p>
            <div className='line'/>
            <button className='btn'>
                <BsFillDice5Fill className='dice' />
            </button>
        </div>
    )
}

export default Advice;