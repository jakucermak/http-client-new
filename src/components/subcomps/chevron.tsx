import { useState } from "react";
import { useClassName } from "../ContextProvider";
export function ChevronIcon() {

    const [isOpen, setIsOpen] = useState(false);
    const { changeClassName } = useClassName()
  
    const handleClick = () => {
      setIsOpen(!isOpen); 
      if (isOpen){
        changeClassName('hidden')
      }else{
        changeClassName('visible')
      }
    };
  
    return (
      <div className="chevronBox">
        <a className={`arrow-icon ${isOpen ? 'open' : ''}`} onClick={handleClick}>
          <span className="left-bar"></span>
          <span className="right-bar"></span>
        </a>
      </div>
    );
  }
  