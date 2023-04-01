import { ReactElement, useState, useEffect } from "react";
import Image from "next/image";
import bg from "../../public/bg.jpg";
import { Clickable, Score } from "./types";
import Game from "./Game";
import Header from "./Header";
import Results from "./Results";
import ClickablesServiceImpl from "@/services/ClickablesServiceImpl";
import ClickablesService from "@/services/ClickablesService";
// import styles from "../styles/Home.module.css";

const MainPage = () => {

    const [colors, setColors] = useState<string[]>([]);

    const [clickables, setClickables] = useState<Clickable[]>([])

    const [moveFunction, setMoveFunction] = useState<(x: number) => number>(()=>1);

    const [numberOfColors, setNumberOfColors] = useState(2);

    const [pressTimer, setPressTimer] = useState<any>(null);

    const [isLongPress, setIsLongPress] = useState(false);

    const [gameEnded, setGameEnded] = useState(false);

    const [highScore, setHighScore] = useState<number>(0);

    const [scoreValue, setScoreValue] = useState<number>(0);

    const [clicks, setClicks] = useState(0);

    const [frozenNumber, setFrozenNumber] = useState(0);

    const clickableService:ClickablesService = new ClickablesServiceImpl();


    useEffect(() => {
        setColors(clickableService.getRandomColors(numberOfColors));
        if(localStorage.getItem("highScore") !== null) {
            setHighScore(parseInt(localStorage.getItem("highScore") as string));
        }
    }, []);

    useEffect(() => {
        if(colors.length > 0) {
            setClickables(clickableService.getRandomInitialClickables(colors));
            setMoveFunction(()=>clickableService.getMoveFunction(colors.length));
            setScoreValue(ClickablesServiceImpl.INITIAL_SCORE+30*(numberOfColors-2));
        }
    }, [colors]);

    useEffect(() => {
        if(clicks > 0 || frozenNumber > 0) {
            setScoreValue(clickableService.computeScore({clicks: clicks, colors: numberOfColors, frozen: frozenNumber}));
        }
    }, [frozenNumber, clicks]);

    useEffect(() => {
        if(clickables.length > 0 && !gameEnded && scoreValue != ClickablesServiceImpl.INITIAL_SCORE) {
            if(clickables.every((c) => c.color === clickables[0].color)) {
                if(scoreValue > highScore) {
                    setHighScore(scoreValue);
                    localStorage.setItem("highScore", scoreValue.toString());
                }
                setGameEnded(true);
            }
        }
    }, [scoreValue]);


    const submitNumberOfColors = () => {
        if(numberOfColors != undefined && numberOfColors > 1 && numberOfColors < 11){
            setColors(clickableService.getRandomColors(numberOfColors));
        }
        else{
            alert("Please enter a number between 2 and 10");
        }
    }


    const handleSubmit = (e: any) => {
        if (e.key === "Enter") {
            submitNumberOfColors();
        }
    }

    const handleClick = (clickable: Clickable) => {
        if(clickable.isFrozen){
            alert("You can't click on a frozen color");
            return;
        }
        if(isLongPress === false){
            setClicks(clicks + 1);
            setClickables(clickables.map(c => {
                if (c.id !== clickable.id && !c.isFrozen) {
                    return {
                        ...c,
                        color: colors[moveFunction(colors.indexOf(c.color)) % colors.length],
                    }
                }
                return c;
            }));
        }
       
    }

    const handleOnTouchStart = (clickable:Clickable) => {
        startPressTimer(clickable);
    }

    const handleOnTouchEnd = () => {
        clearTimeout(pressTimer);
    }

    const handleReplay = () => {
        setClicks(0);
        setFrozenNumber(0);
        setScoreValue(ClickablesServiceImpl.INITIAL_SCORE)
        setColors(clickableService.getRandomColors(numberOfColors));
        setGameEnded(false);
        
    }

    const startPressTimer = (clickable: Clickable) => {
        setIsLongPress(false);
        setPressTimer(setTimeout(() => {
            if(clickables.filter(c => !c.isFrozen).length === 3 && !clickable.isFrozen){
                alert("You can't freeze more than 2 colors");
                return;
            }
            setClickables(clickables.map(c => {
                if (clickable.id === c.id) {
                    return {
                        ...c,
                        isFrozen: !c.isFrozen,
                    }
                }
                return c;
            }));
            setIsLongPress(true);
            setFrozenNumber(frozenNumber + 1);
        }, 700));
    }


    return (
        <div >
            <div>
                <Image
                    alt="travel"
                    src={bg}
                    layout="fill"
                    objectFit="cover"
                    priority
                    style={styles.imageStyle}
                    
                />
            </div>
            <div>
                <Header 
                    highScore={highScore}
                    score={{clicks: clicks, colors: numberOfColors, frozen: frozenNumber}}
                    scoreValue={scoreValue}
                    numberOfColors={numberOfColors}
                    setNumberOfColors={setNumberOfColors}
                    handleSubmit={handleSubmit}
                    gameEnded={gameEnded}
                    submitNumberOfColors={submitNumberOfColors}
                />
               
                {/* HTML code to have 4 button the 4 corners of the page */}
                {!gameEnded && clickables && clickables.length > 0 && (
                    <Game 
                        clickables={clickables}
                        handleClick={handleClick}
                        handleOnTouchStart={handleOnTouchStart} 
                        handleOnTouchEnd={handleOnTouchEnd} 
                    />
                )}
                {gameEnded && (
                    <Results 
                        handleReplay={handleReplay}
                        score={{clicks: clicks, colors: numberOfColors, frozen: frozenNumber}}
                        scoreValue={scoreValue}
                    />
                )}
            
                
            </div>
        </div>
    )
}

const styles = {

    imageStyle: {
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundRepeat: "repeat",
    },
}

export default MainPage;