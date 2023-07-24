import DisplayCards from "../DisplayCards";
import Title from "../Title";

const BucketList = () => {
    return ( 
        <div className="p-2">
            <Title title={'Bucket List'} />
            <DisplayCards listType={'bucket list item'} />
        </div>
     );
}
 
export default BucketList;