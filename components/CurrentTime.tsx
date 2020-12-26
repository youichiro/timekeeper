import React, { useState, useEffect } from 'react'

const CurrentTime = () => {
  const [now, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // 現在時刻を返す関数
    const tick = () => {
      setCurrentTime(new Date())
    }
    // 1秒ごとに現在時刻を取得する
    const intervalID = setInterval(tick, 1000)
    // cleanup
    return () => {
      console.log('unsubscribe')
      clearInterval(intervalID)
    }
  })

  return (
    <>
      <p>{now.toLocaleTimeString()}</p>
    </>
  )  
}

export default CurrentTime
