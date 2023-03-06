import React, { useContext } from 'react'
import { FamilyContext } from '../context/FamilyContext'

const style = {
  color: 'red',
  fontWeight: '900',
}

function Child() {
  const data = useContext(FamilyContext)
  console.log('data', data)

  return (
    <div>
      나는 누구에요
      <br />
      나는 이 집안의 <span style={style}>{data.houseName}</span>를 계승 받아 용돈을 <span style={style}>{data.pocketMoney}</span>
      만큼 받습니다
    </div>
  )
}

export default Child
