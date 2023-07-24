import DisplayCards from "../DisplayCards";
import Title from "../Title";

const ShoppingList = () => {
    return ( 
        <div className="p-2">
            <Title title={'Shopping List'} />
            <DisplayCards listType={'shopping item'} />
        </div>
     );
}
 
export default ShoppingList;