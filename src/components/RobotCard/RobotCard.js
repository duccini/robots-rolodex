import React from 'react'

import './RobotCard.css'

export const RobotCard = ({ robot }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${robot.id}?set=set1&size=180x180`} alt={robot.name} />
      <h2>{ robot.name }</h2>
      <p>{robot.email}</p>
    </div>
  ) 
}