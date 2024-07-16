import { slideItemType } from '../types'
import SlideItem from './SlideItem'
import "./Slide.css"

interface Props{
    items: Array<slideItemType> 
}

const Slide = ({items}: Props) => {
  return (
    <div className='slide-container'>
        <ul className='item-list'>
            {items.map((item, index) => (
                <SlideItem key={index}{...item}/>
            ))}
        </ul>
    </div>
  )
}

export default Slide