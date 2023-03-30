import Image from "next/image";
import won from "../../public/won.png";
import { Score } from "./types";

const Results = (
    { score, scoreValue, handleReplay }: { score: Score, scoreValue:number, handleReplay: () => void }
) => {
    return (
        <div>
            <div className="mt-5 flex justify-center">
                <h3 className="text-xl font-bold">You won in {score.clicks} clicks using {score.frozen} freez with {score.colors} colors</h3>
            </div>
            <div className="mt-5 flex justify-center">
                <h3 className="text-xl font-bold text-red-600">Total: {scoreValue}</h3>
            </div>
            <div className="mt-5 flex justify-center">
                <Image alt="WON" src={won} quality={100} width={400} height={400} />
            </div>
            <div className="mt-7 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Share your record
                </button>
                <button onClick={handleReplay} className="ml-5  bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                    Replay ?
                </button>
            </div>
        </div>
    );
};

export default Results;