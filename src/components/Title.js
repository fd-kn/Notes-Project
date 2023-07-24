const Title = ({title}) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const current = new Date();
    let day = weekday[current.getDay()];
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return ( 
        <div className="pt-10 ml-10">
            <div className="text-black font-serif fixed invisible md:visible">
                <h2 className="font-normal text-4xl italic ">{day}</h2>
                <h2 className="font-thin text-2xl">{date}</h2>
            </div>
            <h2 className="flex justify-center text-4xl -translate-x-10 font-semibold tracking-tight">{title}</h2>
        </div>
     );
}
 
export default Title;
