import React from 'react'
import rec from '../data/Recommendation'
import RashSelfIcon from '../assets/images/rashmi.svg'

const Recommendation = () => (
  <div>
    <img src={RashSelfIcon} alt="rashmi ap" />
    <p style={{color: 'white'}}>Recommendation add here</p>
    <p></p>
    {
      rec.map(item => (<div key={item.id} style={{background: 'pink'}}>
      <p style={{color: 'white'}}>{item.name}</p>
        <p style={{color: 'white'}}>{item.description}</p>
        <p style={{color: 'white'}}>{item.dated}</p>
        <p style={{color: 'white'}}>{item.designation}</p>

          </div>
      ))
    }
  </div>
)

export default Recommendation
