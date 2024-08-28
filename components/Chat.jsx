import ImageComp from "./ImageComp.jsx";
import Image from "next/image";
const Chat = ({ style, setContact }) => {

  const handleBackButton = () => {
    setContact(0);
  };


  return (
    <div className={" bg-gray-900 p-4 flex flex-col " + style}>
      {/* chat header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ImageComp />
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <div className="flex gap-2 ">
              <p className="text-gray-400">Online </p>
              <span className=" w-[10px] h-[10px] border-2 border-red-600 bg-red-600 rounded-full translate-y-[8px]"></span>
              {/* <span className=" w-[10px] h-[10px] border-2 border-green-600 bg-green-600 rounded-full translate-y-[8px]"></span> */}
            </div>
          </div>
        </div>
        <div className=" border-0 rounded-full bg-white sm:hidden ">
          <Image src="/back.png" width={35} height={35} alt="Back button loading " className="cursor-pointer " onClick={handleBackButton}/>
        </div>
      </div>
      {/* chatting messages */}
      <div className="flex-grow overflow-y-auto">
        <div className="mb-4">
          <div className="bg-gray-700 p-4 rounded-lg w-3/4">
            <p>Hello! How are you?</p>
          </div>
        </div>
        <div className="mb-4 text-right">
          <div className="bg-blue-500 text-white p-4 rounded-lg w-3/4 ml-auto">
            <p>I am good, thank you! lorem100</p>
          </div>
        </div>
        <div className="mb-4 text-right">
          <div className="bg-blue-500 text-white p-4 rounded-lg w-3/4 ml-auto">
            <p>I am good, thank you! lorem100</p>
          </div>
        </div>
        <div className="mb-4 text-right">
          <div className="bg-blue-500 text-white p-4 rounded-lg w-3/4 ml-auto">
            <p>I am good, thank you! lorem100</p>
          </div>
        </div>
        {/* Add more messages as needed */}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-700 bg-gray-800 text-white rounded-lg"
          placeholder="Type your message..."
        />
        <button className="ml-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
