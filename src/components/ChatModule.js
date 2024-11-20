import appleRocket from "../images/apple-rocket.png"
import appleMemoji from "../images/memoji-2.png"
import VideoChatButton from "./VideoChatButton";
const ChatModule = () => {
    const handleSubmit = () => {
        console.log("I just go clicked")
    }
    return (
        <>


            <div className="w-[553px] h-[600px] bg-[#171717] m-3 rounded-xl">
                <div className="m-3 relative top-3 bg-[#2c2c2c] w-120 rounded-xl h-14 ">
                    <div className="flex">
                        <img
                            className="relative bottom-2 opacity-100"
                            alt=""
                            src={appleMemoji}
                        />
                        <div>
                            <p className="text-white text-xl font-bold relative right-1 top-1 "> Kiko</p>
                            <p className="text-white text-xs font-thin right-2">Kirtan Seth</p>
                        </div>
                    </div>
                    <div className="flex">
                        <input className="relative top-[450px] bg-[#2c2c2c] w-[90%] rounded-xl text-white p-3 h-12"></input>
                        <div className="relative top-[450px] left-1 w-[50px] h-[50px] bg-green-400 rounded-[50%] ">
                            <button onClick={handleSubmit} >
                                <img
                                    className=" relative top-2 left-2 w-[33px] h-[33px] object-cover"
                                    alt=""
                                    src={appleRocket}
                                />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default ChatModule;
