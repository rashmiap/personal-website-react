import React from 'react'
import rec from '../data/Recommendation'
import RashSelfIcon from '../assets/images/rashmi.svg'
import { RecWrapper, RecBox, RecDes } from '../styles/recStyle.js'

const Recommendation = () => (
  <RecWrapper>
    <h1>Recommendation</h1>
    {
      rec.map(item => (<RecBox key={item.id} >
      <h3><a href={item.userLink}>{item.name}</a></h3>
        <p>{item.designation}</p>
        <p>{item.dated}</p>
        <RecDes>{item.description}</RecDes>
        <hr/>
      </RecBox>
      ))
    }
  </RecWrapper>
)

export default Recommendation
