import { Score } from "./types";
import Modal from "./Modal";
import { useState } from "react";

const Header = (
    { highScore, scoreValue, score ,numberOfColors, setNumberOfColors, handleSubmit, gameEnded, submitNumberOfColors}
    :
    { highScore: number,scoreValue:number, score: Score, numberOfColors:number, submitNumberOfColors: ()=>void,
        setNumberOfColors: (e:any)=>void, handleSubmit: (e:any)=>void, gameEnded:boolean }
) => {

    const [showModal, setShowModal] = useState(false);

    const handleNumberChange = (e: any) => {
        const number = e.target.value;
        setNumberOfColors(number);
    }

    const handleAddColor = () => {
        if(numberOfColors >= 10){
            alert("You can't have more than 10 colors");
            return;
        }
        setNumberOfColors(numberOfColors+1);
        submitNumberOfColors()
    }

    const handleRemoveColor = () => {
        if(numberOfColors <= 2){
            alert("You can't have less than 2 colors");
            return;
        }
        setNumberOfColors(numberOfColors-1);
        submitNumberOfColors()
    }

    return (
        <div>
             <div className="mt-5 flex justify-center">
                    <h1 className="text-center text-3xl">Random Game</h1>
                </div>
                <div className="mt-5 flex justify-center">
                    <h3 className="text-center ">Make the minimum number of clicks to get all the colors the same.</h3>
                </div>
                <div className="mt-1 flex justify-center">
                    <h5 className="text-center ">Long press on a color to freeze it. 
                        <a className="ml-2 text-purple-400 underline" href="#" onClick={()=>setShowModal(true)}>See rules</a>
                    </h5>
                </div>
                { !gameEnded && (
                    <>
                        <div className="mt-5 flex justify-center">
                            <h3 className="text-center ">How many colors you want ?</h3>
                        </div>
                        <div className="mt-2 flex justify-center">
                            <input value={numberOfColors} onKeyDown={handleSubmit} onChange={handleNumberChange} type="number" className="ml-2 w-1/6" max={10} min={2} />
                            <button onClick={handleAddColor} className="ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-xl">
                                +
                            </button>
                            <button onClick={handleRemoveColor} className="ml-2 bg-slate-500 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded text-xl">
                                -
                            </button>
                        </div>
                    
                    </>
                )

                }
                
                <div className="mt-5 flex justify-center">
                    <h3 className="text-xl font-bold text-red-500">
                        High Score : {highScore}
                    </h3>
                </div>
                {!gameEnded && (
                    <>
                        <div className="mt-3 flex justify-center">
                            <h3 className="lg:text-xl md:text-lg sm:text-sm font-bold text-cyan-200 text-center">
                                Current Score : {score.clicks} clicks, {score.frozen} frozen, {score.colors} colors 
                            </h3>
                        </div>
                        <div className="mt-3 flex justify-center">
                            <h3 className="lg:text-xl md:text-lg sm:text-sm font-bold text-lime-600 text-center">
                                Total: {scoreValue}
                            </h3>
                        </div>
                    </>
                    
                )}

                {showModal && <Modal setOpenModal={setShowModal} />}
                
        </div>
    );
};

export default Header;