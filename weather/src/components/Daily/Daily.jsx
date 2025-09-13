import { useSelector } from 'react-redux';
import s from './daily.module.scss'
import DailyItem from './DailyItem'
import { useState } from 'react';

const Daily = () => {
    const [show, setShow] = useState(true)
    const {daily} = useSelector((state)=>state.weather.weather);
    // console.log(daily);
  return (
    <div className={s.daily}>
        <div className={s.daily__controls}>
            <button onClick={()=>{setShow(true)}} className={`${s.daily__btn} ${ show ? s.active : ''}`}>На неделю</button>
            <button  onClick={()=>{setShow(false)}} className={`${s.daily__btn} ${ !show ? s.active : ''}`}>Отменить</button>
        </div>
        <div className={`${s.daily__content} ${!show ? s.active : ''}`}>
            {
                daily.map((elem, index)=>(
                    <DailyItem key={elem.dt} day={elem} index={index} />
                )).slice(0, 7)
            }
        </div>
    </div>
  )
}

export default Daily