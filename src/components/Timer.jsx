import React, {useEffect, useState} from 'react'

function useTimer(ms)
{
  const [time, setTime] = useState(false);

    useEffect(()=>{
          const id =  setTimeout(()=>{
            setTime(true);
          },ms)

      return ()=>clearTimeout(id);

    },[ms])

  return time;
}


export const Timer = () => {
    const timer = useTimer(5000);
    return (
        <div>
            {timer ? "Welcome" : "...Loading"}
        </div>
    )
}
