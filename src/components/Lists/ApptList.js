import DisplayCards from "../DisplayCards";
import Title from "../Title";

const ApptList = () => {
    return ( 
        <div className="p-2">
            <Title title={'Appointments'} />
            <DisplayCards listType={'appointment'} />
        </div>
     );
}
 
export default ApptList;