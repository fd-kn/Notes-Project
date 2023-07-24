import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import logo from '../Images/EditLogo.png';
import add from '../Images/AddLogo.png';
import bin from '../Images/DeleteLogo.png'
import confirm from '../Images/ConfirmLogo.png'
import cancel from '../Images/CancelLogo.jpg';

const DisplayCards = ({listType}) => {

 
    const dataStorage =
            listType ==='task' ? 'fullData' : 
            listType ==='shopping item' ? 'shopfulldata':
            listType ==='appointment' ? 'apptfulldata':
            listType ==='reading item' ? 'readingfullData' : 
            listType ==='bucket list item' ? 'bucketfullData' : 
            listType ==='resolution' ? 'resolutionfullData' : 
            null
        
    
    const idStorage = 
            listType ==='task' ? 'IDs' : 
            listType ==='shopping item' ? 'shopIDs' :
            listType ==='appointment' ? 'apptIDs' : 
            listType ==='reading item' ? 'readingIDs' : 
            listType ==='bucket list item' ? 'bucketIDs' :
            listType ==='resolution' ? 'resolutionIDs' : 
            null

  

    var savedIDs;
    if(JSON.parse(localStorage.getItem(idStorage))){
        savedIDs = JSON.parse(localStorage.getItem(idStorage));
    } else{
        savedIDs = [];
    }

    var savedData = [];
    if(JSON.parse(localStorage.getItem(dataStorage))){
        savedData = JSON.parse(localStorage.getItem(dataStorage));
    } else{
        savedData = [];
    }
    


    const [update, setUpdate] = useState()
    const [updateTwo, setUpdateTwo] = useState()
    const [last, setLast] = useState()
    const [id, setId] = useState(savedIDs);
    const [fulldata, setFulldata] = useState(savedData)
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (newId) => {
      if(id.includes(newId)){
        const filteredIDs = id.filter((item) => item !== newId)
        setId(filteredIDs)
        localStorage.setItem(idStorage, JSON.stringify(filteredIDs));
      }
      else{
        setId([...id,newId]);
        localStorage.setItem(idStorage, JSON.stringify([...id,newId]));
      }
    }
    

    const handleSubmit = (event) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const currTime = new Date().toLocaleTimeString();
        event.preventDefault();
        if(update){
            const randomID = uuidv4()
            setFulldata([...fulldata,{
                id : randomID,
                data : update,
                dateAdded : date,
                timeAdded : currTime
            }])
            event.target.reset();
            setUpdate();
            localStorage.setItem(dataStorage, JSON.stringify([...fulldata,{
                id : randomID,
                data : update,
            }]))
        }


    }

    const deleteItem = (i) => {
        const filteredData = fulldata.filter((item) => item.id !== i)
        const filteredIDs = id.filter((idItem) => idItem !== i)

        localStorage.setItem(idStorage, JSON.stringify(filteredIDs));
        localStorage.setItem(dataStorage, JSON.stringify(filteredData))
        setFulldata(filteredData)
        setId(filteredIDs)
    }

    const editItem = (card) => {
        setIsOpen(true)
        setLast(card)
        setUpdateTwo(card.data)
    }

    const handleEdit = (card) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const currTime = new Date().toLocaleTimeString();

        if(updateTwo){
            setFulldata(fulldata.map((item) => {
                if(item.id === card.id) {
                    item.data = updateTwo; item.dateAdded = date; item.timeAdded = currTime} return item;}))
                

            localStorage.setItem(dataStorage, JSON.stringify(
                    fulldata.map((item) => {
                    if(item.id === card.id) {
                    item.data = updateTwo; item.dateAdded = date; item.timeAdded = currTime} return item;})))
            }
        setIsOpen(false)
                
    }

    const handleCancel = () => {
        setIsOpen(false)
        setUpdate()
    }

    let completedCount = savedIDs.length;
    let totalAmount = savedData.length;
    let completedPercentage = Math.round(completedCount/totalAmount * 100);
    if(!completedPercentage){
        completedPercentage = 0;
    }

    return (

        <div>


            <div className="flex justify-center p-5">

                <form onSubmit={handleSubmit}>
    
                    <input className="p-1 bg-transparent border-2 border-gray-600  rounded-md "  type="text" name="name" placeholder={`Enter ${listType}...`}
                    onChange={(e) => { setUpdate(e.target.value)}}  onInput={(e) => { setUpdate(e.target.value) }} />
                    
                    <button className="text-white px-4 pt-2 pb-2 m-2 border-2 border-sky-300 bg-blue-300 rounded-full 
                            hover:scale-110 duration-300  " type="submit" ><img className="h-4" src={add} alt="add" /></button>

                </form>
            </div>

            <div className="-translate-x-6 text-2xl font-normal p-2 italic ">
                    <p className='flex justify-center'>Completed: {completedCount}/{totalAmount} </p>

                    <div className="flex justify-center">
                        <div className="flex m-5 h-4 rounded-full bg-pink-100" style={{width:350}} >
                            <div className="flex h-4 rounded-full bg-sky-500" style={completedCount===0 ?{width:0}: {width:completedCount/totalAmount * 350}}></div>
                        </div>
                        <div className="translate-y-2 font-bold">{completedPercentage + '%'}</div>
                    </div>
            </div>
        
            <div>
                {fulldata.length > 0 ?
                fulldata.map((card) => (

                    <div className="box-content md:w-2/4 border-2 border-solid border-gray-600 rounded-md m-auto my-3 p-1 " key={card.id}>
                            
                            {isOpen && last === card?      
                                <div>
                                  <form onSubmit={() => handleEdit(card)}>  
                                        <input className="p-1 bg-transparent border-2 border-gray-600  rounded-md ml-4 mt-10 h-8 -translate-y-1" value={updateTwo} type="text" name="name"  placeholder={`Enter ${listType}...`}
                                        onChange={(e) => { setUpdateTwo(e.target.value)}} 
                                        onInput={(e) => { setUpdateTwo(e.target.value) }} />
                                        
                                        <button className={`border-2 border-sky-300 ${!updateTwo ? 'bg-gray-500':'bg-blue-300'} text-white px-2 py-1 m-1 ml-4 rounded-md hover:scale-110 duration-300`}
                                        disabled={!updateTwo ? 'true' : null}>
                                            <img className='h-5' src={confirm} alt='confirm' />
                                        </button>

                                        <button className="border-2 border-gray-300 bg-red-500 text-white px-2 py-1 m-1 rounded-md
                                        hover:scale-110 duration-300" onClick={() => handleCancel()}>
                                            <img className='h-5' src={cancel} alt='cancel' />
                                        </button>

                                    </form>
                                </div>

                                :<div>
                                    <label htmlFor={card.id} className={`text-2xl break-words sm:break-words ${id.includes(card.id) ? 'line-through': 'no-underline'}`}>{card.data}</label>
                                    <p>Last updated: {card.dateAdded} {card.timeAdded}</p>
                                </div>
                                
                            } 
                            
                        <div className="flex justify-end">
                            <input className="w-10 h-10 mr-5 mt-2" type='checkbox'  id={card.id} 
                            onChange={() => handleChange(card.id)} checked={id.includes(card.id)} ></input>

                            <button className="border-2 border-sky-300 bg-blue-300 text-white px-4 py-2 my-2 mr-2 rounded-md
                            hover:scale-110 duration-300 " onClick={()=>editItem(card)}><img className='h-5' src={logo} alt='edit' /></button>
                            
                            <button className="border-2 border-red-300 bg-red-500 text-white px-4 py-2 my-2 mr-2 rounded-md
                            hover:scale-110 duration-300 " onClick={() => deleteItem(card.id)}><img className='h-5' src={bin} alt='delete' /></button>
                        </div>
                    </div>
                )) : <h1 className="flex justify-center pt-6 text-2xl italic text-gray-500 -translate-x-6">This list is empty...</h1>}
            </div>
        </div>
     );
}
 
export default DisplayCards;