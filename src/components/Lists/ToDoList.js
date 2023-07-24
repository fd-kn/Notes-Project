import DisplayCards from "../DisplayCards";
import Title from "../Title";

const ToDoList = () => {
    return ( 
        <div className="p-2">
            <Title title={'To Do List'} />
            <DisplayCards listType={'task'} />
        </div>
     );
}
 
export default ToDoList;