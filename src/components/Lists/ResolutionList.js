import DisplayCards from "../DisplayCards";
import Title from "../Title";

const ResolutionList = () => {
    return ( 
        <div className="p-2">
            <Title title={'Resolutions'} />
            <DisplayCards listType={'resolution'} />
        </div>
     );
}
 
export default ResolutionList;