import { useState } from "react";
import ToDoList from "./Lists/ToDoList";
import ShoppingList from "./Lists/ShoppingList";
import ApptList from "./Lists/ApptList";
import ReadingList from "./Lists/ReadingList";
import BucketList from "./Lists/BucketList";
import ResolutionList from "./Lists/ResolutionList";
import book from '../Images/BookLogo.svg';
import todo from '../Images/ToDoLogo.svg'
import shopping from '../Images/ShoppingLogo.svg';
import appointment from '../Images/ApptLogo.svg';
import resolutions from '../Images/ResolutionsLogo.svg';
import bucket from '../Images/BucketLogo.svg';

const Home = () => {

    var savedTheme;
    if(JSON.parse(localStorage.getItem('theme'))){
        savedTheme = JSON.parse(localStorage.getItem('theme'));
    } else{
        savedTheme = '';
    }

    const handleClick = (theme) => {
        setList(theme)
        localStorage.setItem("theme", JSON.stringify(theme));
    }

    const [list, setList] = useState(savedTheme)

    const buttonClass = (theme, buttonName, logo) => {
        return(
    
                <button className={`text-black  pl-2 lg:pr-4 py-2 my-2 mx-4 rounded-md hover:scale-110 duration-300  ${list === theme ? 'shadow-black' : 'shadow-none'} shadow-md`} 
                 onClick={() => handleClick(theme)}>
                    <div className="flex w-36 sm:w-32">
                        <img className="pr-2 h-7 w-10" src={logo} alt='logo'/>{buttonName}
                    </div>
                </button>
            
        )
    }
    return ( 
        //bg-home bg-no-repeat bg-cover

        <div className="bg-home min-h-screen ">
            <div className="p-4 z-10 bg-navbar border-b-2 border-b-blue-100 shadow-md shadow-blue-300 sticky top-0">
                <p className="text-4xl italic font-bold tracking-wide text-black flex justify-start pb-2">Noteify</p>
                <div className=" flex overflow-x-auto">               
                    {buttonClass('todo', 'To Do List',todo)}
                    {buttonClass('shopping', 'Shopping List',shopping)}
                    {buttonClass('appointment', 'Appointments',appointment)}
                    {buttonClass('reading', 'Reading List',book)}
                    {buttonClass('bucket', 'Bucket List',bucket)}
                    {buttonClass('resolution', 'Resolutions',resolutions)}
                </div>

            </div>
            {list === 'shopping' ? <ShoppingList /> : 
             list ==='todo'? <ToDoList /> : 
             list ==='appointment'? <ApptList /> : 
             list ==='reading'? <ReadingList /> : 
             list ==='bucket'? <BucketList /> :
             list ==='resolution'? <ResolutionList />: <ToDoList />}
            
        </div>
     );
}
 
export default Home;
