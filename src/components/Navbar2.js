import memoji1 from "../images/memoji1.png"
import appleMessage from "../images/apple-message.png"
import appleSettings from "../images/apple-settings.png"
import appleCalendar from "../images/appleCalendar.png"
import appleNote from "../images/note-apple.png"
import { useAuth0 } from "@auth0/auth0-react";



const Navbar2 = () => {
    const { user } = useAuth0();
    return (
        <>
            <div className="w-[242px] h-[680px] m-3  bg-[#171717] text-white rounded-lg font-roboto">
                <div className="flex">
                    <img
                        className="relative top-8  left-4 rounded-[50px] w-[68px] h-[68px] object-cover"
                        alt="Avatar"
                        loading="lazy"
                        src={user.picture}
                    />
                    <div>
                        <a className=" relative top-9 left-6 text-xl font-bold text-[inherit] inline-block w-[109px] h-6 [text-decoration:none]">
                            <p className="m-0">Nint#123</p>
                            <p className="m-0"></p>
                        </a>
                        <p className="relative top-8 left-6 text-[13px] font-light inline-block w-[119px] h-[21px]">
                            {user.name}
                        </p>
                    </div>
                </div>
                <div className="relative top-16 left-6">
                    <ul>
                        <div className="flex">
                            <img
                                className=" mr-4 w-[31px] h-[31px] object-cover"
                                alt=""
                                src={appleMessage}></img>
                            <p className="text-[19px] font-roboto">Chats</p>
                        </div>
                        <div className="flex mt-4">
                            <img
                                className=" mr-4 w-[31px] h-[31px] object-cover"
                                alt=""
                                src={appleSettings}></img>
                            <p className="text-[19px] font-roboto">Dashboard</p>
                        </div>
                        <div className="flex mt-4">
                            <img
                                className=" mr-4 w-[31px] h-[31px] object-cover"
                                alt=""
                                src={appleCalendar}></img>
                            <p className="text-[19px] font-roboto">Calendar</p>
                        </div>
                    </ul>
                </div>

            </div>

        </>
    );
};

export default Navbar2;
