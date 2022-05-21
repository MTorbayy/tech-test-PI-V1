// import {useEffect, useState} from "react";
import "./App.css"
import ChartPage from "./Pages/ChartPage/ChartPage"
// import axios from "axios"
// import {v4 as uuidv4} from 'uuid'

export default function App() {

  // const [roomsByMonth, setRoomsByMonth] = useState([1])

  // let monthNames = ["January", "February", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December"]



  // useEffect(() => {

  //   axios.get(`http://localhost:80/test-tech-pi/front/rooms/2`)
  //   .then(response => {
      
  //     let roomsByMonthArray = []

  //     for(let i = 0; i < response.data.length; i++) {
  //       if(i === 0 || response.data[i].stay_date != response.data[i-1].stay_date) {
  //         let newDate = {stay_date : response.data[i].stay_date, room_nights : 0, room_revenues : 0}

  //         roomsByMonthArray.push(newDate)
  //       } 
  //     }

  //     for(let j = 0; j < response.data.length; j++) {
  //       roomsByMonthArray.forEach(item => {
  //         if(item.stay_date === response.data[j].stay_date) {
  //           item.room_nights += parseInt(response.data[j].room_nights)
  //           item.room_revenues += parseInt(response.data[j].room_revenues)
  //         }
  //       })
  //     }
  //     setRoomsByMonth(roomsByMonthArray)

      
      
  //   })

  // }, [])
  
  return (
    <>
      <ChartPage/>
      {/* {roomsByMonth.map(item => {
        return <p key={uuidv4()}>Date : {item.stay_date}, Nombre de nuitées réservées : {item.room_nights}, Revenus : {item.room_revenues}</p>
      })} */}
    </>
  );
}
