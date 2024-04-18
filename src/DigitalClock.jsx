import React, {useEffect, useState} from 'react';

function DigitalClock() {

   const [time, setTime] = useState(new Date());

   useEffect(()=>{
       const interval = setInterval(() => {
           setTime(new Date());
       } , 1000)

       return () => {
           clearInterval(interval);
       }
   }, [time])

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridian = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
    }

    function padZero(num) {
       return num.toString().padStart(2, '0');
    }



console.log(time)
    return (
        <div className='clock-container'>
            <div className='clock'>
                <span className='clock-number'>{formatTime()}</span>

            </div>

        </div>
    );
}

export default DigitalClock;
