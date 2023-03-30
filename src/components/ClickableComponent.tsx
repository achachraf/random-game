import { Clickable } from "./types";

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
        <button
            onClick={() => handleClick(clickable)}
            onTouchStart={() => handleOnTouchStart(clickable)}
            onTouchEnd={handleOnTouchEnd}
            onMouseDown={() => handleOnTouchStart(clickable)}
            onMouseUp={handleOnTouchEnd}
            style={{...styles.clickable, backgroundColor:clickable.color, opacity: getOpacity(clickable)}}
        />
    );
};

const styles = {
    clickable: {
        cursor: "pointer",
        padding: "30px",
        borderRadius: "0.5rem",
        border: "1px solid black",
        margin: "0.5rem",
    },
}

export default ClickableComponent;