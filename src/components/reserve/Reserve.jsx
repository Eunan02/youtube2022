import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Reverse.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Reserve = ({setOpen, hotelId}) => {
    const [SelectedRooms,setSelectedRooms] = useState([])
    const {data,loading,error} = useFetch(`/hotels/room/${hotelId}`)
    
    const handleSelect = (e) =>{

    }
    return (
    <div className="reserve">
        <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)}/>
        <span>Select your Rooms:</span>
        {data.map((item) => (
            <div className="rItem">
             <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">Max People: <b>{item.maxPeople}</b></div>
                </div>
                <div className="rPrice">{item.price}</div>   
             <div/> 
        </div>
        ))}
        </div>
    </div>
    ) 
}

export default Reserve;