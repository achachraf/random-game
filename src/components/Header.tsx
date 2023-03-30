import { Score } from "./types";

const Header = (
    { highScore, scoreValue, score ,handleNumberChange, handleSubmit}
    :
    { highScore: number,scoreValue:number, score: Score,
         handleNumberChange: (e:any)=>void, handleSubmit: (e:any)=>void }
) => {
    return (
        <div>
             <div className="mt-5 flex justify-center">
                    <h1 className="text-3xl">Random Game</h1>
                </div>
                <div className="mt-5 flex justify-center">
                    <h3>Make the minimum number of clicks to get all the colors the same.</h3>
                </div>
                <div className="mt-1 flex justify-center">
                    <h5>Long press on a color to freeze it.</h5>
                </div>
                <div className="mt-5 flex justify-center">
                    <h3>How many colors you want ?</h3>
                </div>
                <div className="mt-2 flex justify-center">
                    <input onKeyDown={handleSubmit} onChange={handleNumberChange} type="number" className="ml-2 w-1/6" max={10} min={2} />
                </div>
                <div className="mt-5 flex justify-center">
                    <h3 className="text-xl font-bold text-red-500">
                        High Score : {highScore}
                    </h3>
                </div>
                <div className="mt-3 flex justify-center">
                    <h3 className="text-xl font-bold text-cyan-200">
                        Current Score : {score.clicks} clicks, {score.frozen} frozen, {score.colors} colors =&gt; {scoreValue} total
                    </h3>
                </div>
        </div>
    );
};

export default Header;