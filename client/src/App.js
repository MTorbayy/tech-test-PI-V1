import {useEffect, useState} from "react";
import "./App.css";
import axios from "axios"

export default function App() {

  const [roomsByMonth, setRoomsByMonth] = useState([1])

  useEffect(() => {

    axios.get(`http://localhost:80/test-tech-pi/front/rooms/3`)
    .then(response => {
      
      let roomsByMonthArray = []

      for(let i = 0; i < response.data.length; i++) {
        if(i === 0 || response.data[i].stay_date != response.data[i-1].stay_date) {
          let newDate = {stay_date : response.data[i].stay_date, room_nights : 0, room_revenues : 0}

          roomsByMonthArray.push(newDate)
        } 
      }

      for(let j = 0; j < response.data.length; j++) {
        roomsByMonthArray.forEach(item => {
          if(item.stay_date === response.data[j].stay_date) {
            item.room_nights += parseInt(response.data[j].room_nights)
            item.room_revenues += parseInt(response.data[j].room_revenues)
          }
        })
      }

      console.log(roomsByMonthArray)
      setRoomsByMonth(roomsByMonthArray)
      

      console.log(roomsByMonth)
    })

  }, [])
  
  return (
    <>
      TEST
      
    </>
  );
}
