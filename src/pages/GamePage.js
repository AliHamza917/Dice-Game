import React, {useEffect, useState} from 'react';
import dice1 from '../assets/dice_1.png'
import dice2 from'../assets/dice_2.png'
import dice3 from'../assets/dice_3.png'
import dice4 from'../assets/dice_4.png'
import dice5 from'../assets/dice_5.png'
import dice6 from'../assets/dice_6.png'


const GamePage = () => {
    const arrayNum = [1,2,3,4,5,6];
    const image = [dice1 , dice2 ,dice3 , dice4 , dice5 , dice6]

    const [score , setScore] = useState(0)
    const [error , setError] = useState('')
    const [showRule ,setRole] = useState(false)
    const [currentDice , setCurrentDice] = useState(dice1)
    const [number , setNumber] = useState()






    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };




    const handleDice = () => {

        const diceImg = randomNumberInRange(1,6)
        setCurrentDice(diceImg)
        if (number) {
            console.log("Selected Number is : " ,number)
            console.log("And Dice is At " ,currentDice)

            if (number === diceImg){
                setScore(score+2)
                setError('')
                setNumber(0)
            }else{
                setScore(score-2)
                setError('Wrong Guess')
                setNumber(0)
            }
        }else{

            setError('You Have not selected any Number')
        }


    };

    const resetBtn =()=>{
        setError('');
        setCurrentDice(0)
        setNumber(0)
        setScore(() => 0);

    }



    return (

       <>
           {/*Header Starts Here*/}
           <div className='flex justify-between'>
               <div className='text-center mt-9 ml-9 w-1/5  '>
                   <p className='text-8xl mt-2'>{score}</p>
                   <p className='text-2xl font-extrabold'>Total Score</p>
               </div>
               <div>
                   <p className='mt-8 mb-3 text-xl text-red-500 text-right mr-11 '>{error}</p>
                   <div className='flex gap-6  mb-4 mr-10'>
                       {arrayNum.map((value , i)=>(

                           <div key={i} onClick={()=>{setNumber(value)}} className={`px-7 py-4 text-2xl font-extrabold border-2 border-black w-fit hover:bg-black hover:text-white cursor-pointer ${value===number ? "bg-black text-white" : "bg-white"}`}>{value}</div>
                       ))}

                    </div>

                   <p className='text-right text-2xl font-bold mr-11'>Select Number:</p>
               </div>

           </div>
       {/*    Header Ends Here*/}

           <div className="flex mt-16  ">
               <div className='m-auto'>

                   <img className='m-auto' onClick={handleDice}  src={image[currentDice-1] || dice1} alt="Dice Image"  />
                   <p className='text-3xl my-4 font-bold'>Click on Dice to roll</p>
                   <button className='px-[4.2rem] py-3 border-2 border-black  rounded-2xl font-bold  text-2xl text-black hover:bg-black hover:text-white transition duration-300 hover:ease-in ease-out' onClick={resetBtn}>Reset Score</button><br/>
                   <button className='mt-8 border-2 border-black px-[4.4rem] py-3 rounded-2xl font-bold bg-black text-2xl text-amber-50 hover:bg-white hover:text-black transition duration-300 hover:ease-in ease-out' onClick={()=>setRole(!showRule)}>Show Rules</button>
               </div>
           </div>

       {/*    How To Play Section   */}
           {showRule && (
           <div className=' mt-4 w-full'>
               <div className='ml-[25vw] p-10 w-2/4 bg-red-100 rounded-3xl '>
                   <h2 className='text-xl font-extrabold pb-3 '>How to play game</h2>
                   <p className='text-sm pb-2'>Select any number</p>
                   <p className='text-sm pb-2' >Click on dice image</p>
                   <p className='text-sm pb-2' >after click on dice if selected number is equal to the dice number you will get some point as dice</p>
                   <p className='text-sm pb-2' >If you get wrong guess then 2 point will be dedcuted</p>

               </div>

           </div>)}


       </>
    );
};

export default GamePage;