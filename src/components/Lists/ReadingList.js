import DisplayCards from "../DisplayCards";
import Title from "../Title";

const ReadingList = () => {
    return ( 
        <div className="p-2">
            <Title title={'Reading List'} />
            <DisplayCards listType={'reading item'} />
        </div>
     );
}
 
export default ReadingList;