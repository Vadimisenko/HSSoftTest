import React, {useState, useContext} from 'react'
import './index.css';
import LastNodeContext from '../lastNodeContext';

function Item ({name, children}) {

  const lastNode = useContext(LastNodeContext);
  
  const [isVisible, setIsVisible] = useState(true);

  const [lastNodeClicked, setLastNodeClicked] = useState(false)

  function toggle(e) {
    if (e.currentTarget.textContent === lastNode) {
      setLastNodeClicked(true)
    }
    setIsVisible(isVisible => !isVisible);
  }

  if (lastNodeClicked) {
    return (
      <li>
        <span  onClick={toggle}>{name}</span>
      </li>
    )
  } 
  
  return (
    <li>
      <span  onClick={toggle}>{name}</span>
        {isVisible && (
          <div>
            {children}
          </div>
          )
        }
    </li>
  )

}

export default Item;