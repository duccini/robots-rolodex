import React from 'react'
import './RobotList.css'
import { RobotCard } from '../RobotCard/RobotCard'

export const RobotList = ({ robots }) => {
  return (
    <div className="card-list">
      { 
        robots.map(robot => <RobotCard key={robot.id} robot={robot} />) 
      }
    </div>
  )
}