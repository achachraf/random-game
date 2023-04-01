export default function Modal({ setOpenModal } : {setOpenModal: (open:boolean) => void}) {
    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto  ">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8 ">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg ">
                        <div className="mt-3 sm:flex">
                            <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6 text-red-600">
    <path d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24v-32L136 279.1C122.8 279.1 111.1 269.2 111.1 256c0-13.2 10.85-24.01 24.05-24.01L167.1 232v-32c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24C271.1 269.2 261.2 280 247.1 280zM431.1 344c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40s39.1 17.88 39.1 40S454.1 344 431.1 344zM495.1 248c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z"/></svg>

                            </div>
                            <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <h4 className="text-lg font-medium text-gray-800">
                                    How to play ?
                                </h4>
                                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                    <ul>
                                        <li> - Make the minimum number of clicks to get all the colors the same.</li>
                                        <li> - Click on a color to change the color of all the other cells.</li>
                                        <li> - Long press on a color to freeze it.</li>
                                        <li> - If you freeze a color, it will not change from other cells</li>
                                        <li> - You can change the number of colors at any time, but the current round is lost.</li>
                                        <li> - The score is calculated based on the number of colors, freezing operations and clicks.</li>
                                        <li> - The more colors you have, the more points you get. (the less point you lose)</li>
                                        <li> - The more freezing operations you use, the less points you get. (the more points you lose)</li>
                                        <li> - The value of freezing & click operations changes based on number of colors</li>
                                        <li> - The explicit formula of computing the score is hidden ^^</li>
                                        <li>*** GOOD LUCK ***</li>
                                    </ul>
                                </p>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white bg-purple-600 rounded-md outline-none ring-offset-2 ring-purple-600 focus:ring-2"
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}    