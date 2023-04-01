import { Clickable } from "./types";
import styles from "../styles/Game.module.css";

const ClickableComponent = ({
        handleClick,
        handleOnTouchStart,
        handleOnTouchEnd,
        clickable 
    }
    :
    {
        handleClick:(c:Clickable)=>void,
        clickable:Clickable,
        handleOnTouchStart:(c:Clickable)=>void,
        handleOnTouchEnd:()=>void
    }) => {

    const getOpacity = (clickable: Clickable) => {
        if(clickable.isFrozen){
            return 0.5;
        }
        return 1;
    }

    return (
        <div
            onClick={() => handleClick(clickable)}
            onTouchStart={() => handleOnTouchStart(clickable)}
            onTouchEnd={handleOnTouchEnd}
            onMouseDown={() => handleOnTouchStart(clickable)}
            onMouseUp={handleOnTouchEnd}
            style={{backgroundColor:clickable.color, opacity: getOpacity(clickable)}}
            className={styles.clickable}
        />
    );
};



export default ClickableComponent;