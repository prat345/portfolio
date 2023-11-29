import React from 'react'

export default function Skill() {
  return (
    <div id='skill' className='text-center p-4'>
      <h1>Skills</h1>
      <ul className='d-flex justify-content-evenly'>
        {[...Array(5)].map((x, i) =>
            <li><img src={`/images/s${i+1}.png`} alt="" /></li>
          )
        }
      </ul>
    </div>
  )
}
