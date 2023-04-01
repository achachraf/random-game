import Image from "next/image";
import won from "../../public/won.png";
import { Score } from "./types";

const Results = (
    { score, scoreValue, handleReplay }: { score: Score, scoreValue:number, handleReplay: () => void }
) => {

    const handleShareRecord = () => {
        alert("You think I've no life to implement this feature ? bro just screenshot it and share it manually :D");
        // if (navigator.share) {
        //     navigator.share({
        //         title: 'Random Game',
        //         text: `I won in ${score.clicks} clicks using ${score.frozen} freez with ${score.colors} colors`,
        //         url: 'https://random-game.vercel.app/',
        //     })
        //         .then(() => console.log('Successful share'))
        //         .catch((error) => console.log('Error sharing', error));
        // }
    }

    return (
        <div>
            <div className="mt-5 flex justify-center">
                <h3 className="text-center text-xl font-bold">You won in {score.clicks} clicks using {score.frozen} freez with {score.colors} colors</h3>
            </div>
            <div className="mt-5 flex justify-center">
                <h3 className="text-center text-xl font-bold text-green-400">Total: {scoreValue}</h3>
            </div>
            <div className="mt-5 flex justify-center">
                <Image alt="WON" src={won}   className="w-[200px] h-[150px] lg:w-[400px] lg:h-[310px]" />
            </div>
            <div className="mt-7 flex justify-center">
                <button onClick={handleShareRecord} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Share your record
                </button>
                <button onClick={handleReplay} className="ml-5 bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
                    Replay ?
                </button>
            </div>
        </div>
    );
};

export default Results;