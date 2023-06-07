import React from 'react'
import pokeball1 from '../../assets/pokeball.png';
import pokeball2 from '../../assets/pokeball2.png';

type Props = {}

const Background = (props: Props) => {
  return (
    <div className='background'>
        <img className=' pokeball pokeball1 ' src={pokeball1} alt="pokeball1" />
        <img className=' pokeball pokeball2 ' src={pokeball2} alt="pokeball2" />
        <img className=' pokeball pokeball3 ' src={pokeball1} alt="pokeball1" />
        <img className=' pokeball pokeball4 ' src={pokeball2} alt="pokeball2" />
        <img className=' pokeball pokeball5 ' src={pokeball1} alt="pokeball1" />
        <img className=' pokeball pokeball6 ' src={pokeball2} alt="pokeball2 " />
    </div>
  )
}

export default Background