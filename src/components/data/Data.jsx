/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Data = ({selectCard, remaning, totalcost}) => {
    console.log(selectCard);
    
    return (
        <div>
            
             <div key={selectCard.btn} className="card w-96 bg-white shadow-xl"> 
                    <div className="card-body items-center text-center">
                    <h1 className="font-bold text-2xl pt-2 pb-2 text-blue-500">Credit Hour Remaining hr</h1>
                    <hr />
                    <h2 className="font-bold pt-2 text-xl">Course Name </h2>
                    <br />        
                    {selectCard.map((_data) => (
                        <li>{_data.title}</li>
                        ))}
                    <br />      
                    <hr />
                    <h3 className="font-bold pt-2 pb-2">Total Credit Hour: </h3>
                    <hr />
                    <h2  className="font-bold pt-2">Total Price:{totalcost} USD</h2>
                    </div>
                    </div>
                  

 
        </div>
       
    );
};


export default Data;