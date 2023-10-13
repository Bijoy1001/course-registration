/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Data from "../data/Data";





const Card = () => {
     const[cards, setCards] = useState([]);
     const[selectCard, setSelectCard] = useState ([]);
     const[remaning, setRemaning] = useState (0);
     const[totalcost, setTotalcost] = useState (0);

      useEffect( () => {
             fetch('carddata.json')
             .then(res => res.json())
             .then(data => setCards(data))
     }, []);


            const handleCardinfo = (Card)=>{
                const isExist = selectCard.find((item) => item.id == Card.id);

                let count = Card.price;

                if (isExist){
                    return alert("Already Your Select This Item");
                } else {
                    selectCard.forEach((item) => {
                        count = count + item.price;
                    });

                    const totalRemaning = 50000 - count;

                    setTotalcost(count);
                    console.log(totalRemaning);
                    setSelectCard([...selectCard, Card]);
                }
                
            };
           



    return (
        <div className="bg-gray-100">
            
            <div>
            <h1 className='text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 pt-10'>Programming Hero</h1>
            <h3 className="text-center font-bold text-3xl pt-4">Course Registration</h3>
             </div>

            
            
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-6  pt-8 ">
                                               
                
                   {
                    cards.map((Card) =>  (
                      
                        <div key={Card.id} className="">
                        <div className="w-96 bg-white shadow-xl rounded-xl">
                        <figure className="px-12 pt-4">
                            <img src={Card.cover} />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h2 className=" font-bold text-xl pt-4">{Card.title}</h2>
                        <p className="pt-4 text-start pl-11 pr-11 text-slate-600">{Card.paragraph}</p>
                        <div className="flex gap-14 pl-10 pt-4">
                         <p>$ Prices : {Card.price}</p>
                         <p> Credit: {Card.credit} hr</p>
                         </div>
                        <div className="card-actions pt-4 pb-2">
                        <button onClick={()=>handleCardinfo(Card)} className="btn btn-wide w-80 h-12 px-12 bg-blue-500 text-white rounded-xl">Select</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            
                  
                    ))
                   }

                    <div className=" pt-8 ">
                    <Data selectCard={selectCard} remaning={remaning}></Data>
                    
                  </div>    
                 
               </div>   

          </div>
          

    

       
    );
};

export default Card;