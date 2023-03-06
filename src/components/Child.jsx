import React from 'react'

const style = {
  color: 'red',
  fontWeight: '900',
}

function Child({ houseName, pocketMoney }) {
  console.log(houseName)
  console.log(pocketMoney)
  return (
    <div>
      나는 이 집안의 <span style={style}>{houseName}</span>를 계승 받아 용돈을 <span style={style}>{pocketMoney}</span>만큼
      받습니다
    </div>
  )
}

export default Child
