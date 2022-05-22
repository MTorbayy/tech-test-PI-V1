import React from 'react'
import "./ChartPage.css"
import {useEffect, useState} from "react"
import axios from "axios"
import BarChart from '../../Components/Charts/BarChart'

export default function ChartPage() {

  const [roomsByMonth, setRoomsByMonth] = useState([1])
  const [monthNumber, setMonthNumber] = useState(1)
  const [monthName, setMonthName] = useState('January')

  let monthNames = ["January", "February", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December"]



  useEffect(() => {

    axios.get(`http://localhost:80/test-tech-pi/front/rooms/${monthNumber}`)
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
      setRoomsByMonth(roomsByMonthArray)

      
      
    })

  }, [monthNumber])

  const changeMonth = el => {
    setMonthNumber(el.target.value)

    setMonthName(monthNames[el.target.value - 1])
  }
  
  return (
    <div className='global-container'>
      <h1>Statistics of the month : {monthName}</h1>

      <form>
        <label htmlFor="month">Choose a month</label>
        <select onChange={changeMonth} id="month">
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">Jully</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </form>

      <div className="dashboard-container">
        <BarChart data={roomsByMonth} />
      </div>
    </div>
  );
}
