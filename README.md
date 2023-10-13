
# Course Registration

FAQ


## 

#### Add at least 3 Project features

Answer: This is a Course Registration page. I'm useing some features:

                           1. Card
                           2. Dynamic
                           3. Responsive   

Card code:
```bush
    <div className="">
        <div className="w-96 bg-white shadow-xl rounded-xl">
        <figure className="px-12 pt-4">
          <img src={Card.cover} />
            </figure>
              <div className="card-body items-center text-center">
                <h2 className=" font-bold text-xl pt-4">{Card.title}</h2>
                  <p className="pt-4 text-start pl-11 pr-11  text-slate-600">{Card.paragraph}</p>
                   <div className="flex gap-14 pl-10 pt-4">
                    <p>$ Prices : {Card.price}</p>
                      <p> Credit: {Card.credit} hr</p>
                      </div>
                        <div className="card-actions pt-4 pb-2">
                       <button onClick={()=>handleCardinfo(Card)}   className="btn btn-wide 
                       w-80 h-12 px-12 bg-blue-500 text-white rounded-xl">Select</button>
                   </div>
                </div>
             </div>
           </div>
```
#### Discuss how you managed the state in your assignment project.

Answer: This is similar to traditional project management but includes the caveat that each task needs to be completed before the next one starts. Steps are linear and progress flows in one direction—like a waterfall. Because of this, attention to task sequences and timelines is very important in this type of project management. Often, the size of the team working on the project will grow as smaller tasks are completed and larger tasks begin.



