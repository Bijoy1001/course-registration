import { useEffect } from "react";
import { useState } from "react";




const Card = () => {
     const[cards, setCards] = useState([]);

      useEffect( () => {
             fetch('carddata.json')
             .then(res => res.json())
             .then(data => setCards(data))
     }, [])
    return (
        <div className="bg-gray-100">
            
            <div>
            <h1 className='text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 pt-10'>Programming Hero</h1>
            <h3 className="text-center font-bold text-3xl pt-4">Course Registration</h3>
             </div>

            
            
             <div className="pl-14 justify-between gap-4 grid grid-cols-3 pr-14 pt-8">
                                               
                
                   {
                    cards.map((Card) =>  (
                      
                        <div key={Card.btn} className="">
                        <div className="w-96 bg-white shadow-xl rounded-xl">
                        <figure className="px-12 pt-4">
                            <img src="https://i.ibb.co/XY1tmwH/Rectangle-2-2.png" />
                        </figure>
                        <div className="card-body items-center text-center">
                        <h2 className=" font-bold text-xl pt-4">Introduction to C Programming</h2>
                        <p className="pt-4 text-start pl-11 text-slate-600">It is a long established fact that a reader <br /> will be distracted by the readable content <br/>of a page when looking at its layout.</p>
                        <div className="flex gap-14 pl-14 pt-4">
                         <p>Prices</p>
                         <p>Credit</p>
                         </div>
                        <div className="card-actions pt-4 pb-2">
                        <button className="btn btn-wide w-80 h-12 px-12 bg-blue-500 text-white rounded-xl">Select</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            
                  
                    ))
                   }

                    <div className=" pt-8 ">
                    
                    <div className="card w-96 bg-white shadow-xl"> 
                    <div className="card-body items-center text-center">
                    <h1 className="font-bold text-2xl pt-2 pb-2 text-blue-500">Credit Hour Remaining  hr</h1>
                    <hr />
                    <h2 className="font-bold pt-2 text-xl">Course Name</h2>
                    <br />
                    <br />
                    <br />
                    <hr />
                    <h3 className="font-bold pt-2 pb-2">Total Credit Hour : </h3>
                    <hr />
                    <h2 className="font-bold pt-2">Total Price : </h2>
                    </div>
                    </div>
                  </div>    
                 
               </div>   

          </div>
          

    

       
    );
};

export default Card;