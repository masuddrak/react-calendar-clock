import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const Home = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    console.log(selectedDate)
    return (
        <div>
            <label htmlFor="calender">Calender</label>
            <br />
            <Calendar onChange={(value)=>setSelectedDate(value)}/>
        </div>
    );
};

export default Home;