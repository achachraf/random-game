import ClickableComponent from "./ClickableComponent"
import { Clickable } from "./types"
import styles from "../styles/Game.module.css"
import classname from "classnames"

const Game = ({
    handleClick,
    handleOnTouchStart,
    handleOnTouchEnd,
    clickables 
}
:
{
    handleClick:(c:Clickable)=>void,
    clickables:Clickable[],
    handleOnTouchStart:(c:Clickable)=>void,
    handleOnTouchEnd:()=>void
}) => {

    return(
        <div className={classname("grid gap-16 content-between", styles.gameContainer)}>
            <div className="flex justify-between">
                <div>
                    <ClickableComponent 
                        handleOnTouchStart={handleOnTouchStart}
                        handleOnTouchEnd={handleOnTouchEnd}
                        handleClick={handleClick} 
                        clickable={clickables[0]} 
                    />
                </div>
                <div >
                    <ClickableComponent
                        handleOnTouchStart={handleOnTouchStart}
                        handleOnTouchEnd={handleOnTouchEnd}
                        handleClick={handleClick} 
                        clickable={clickables[1]} 
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <ClickableComponent 
                    handleOnTouchStart={handleOnTouchStart}
                    handleOnTouchEnd={handleOnTouchEnd}
                    handleClick={handleClick}
                    clickable={clickables[2]} 
                />
            </div>
            <div className="flex justify-between">
                <div >
                    <ClickableComponent 
                        handleClick={handleClick}
                        handleOnTouchStart={handleOnTouchStart}
                        handleOnTouchEnd={handleOnTouchEnd}
                        clickable={clickables[3]} 
                    />
                </div>
                <div >
                    <ClickableComponent
                        handleClick={handleClick}
                        handleOnTouchStart={handleOnTouchStart}
                        handleOnTouchEnd={handleOnTouchEnd}
                        clickable={clickables[4]}
                    />
                </div>
            </div>
        </div>
    )
}


export default Game