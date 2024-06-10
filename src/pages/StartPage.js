import React from 'react';
import dice from '../assets/dices.png'
import {Link} from "react-router-dom";
const StartPage = () => {
    return (
        <>
            <div className='grid grid-cols-2 mt-[10vh] p-9'>

                <div className='ml-4'>

                    <img  src={dice} alt='dice'/>
                </div>
                <div className='text-center '>

                    <p className='text-9xl pt-[17vh] p-6 font-extrabold' >DICE GAME</p>
                    <Link to='game-page' className=' px-16 py-2 rounded-2xl font-bold bg-black text-2xl text-amber-50 hover:bg-white hover:text-black transition duration-300 hover:ease-in ease-out'>Play Now</Link>
                </div>

            </div>
        </>
    );
};

export default StartPage;