"use client";

import Chat from "../components/Chat.jsx";
import Click from "../components/Click.jsx";
import Contacts from "../components/Contacts.jsx";
import { useState , useEffect } from "react";

export default function Home() {

  const [contact , setContact] = useState(0) ;

  const [windowWidth , setWindowWidth] = useState(0) ;


  const handleResize = () => {
      setWindowWidth(  contact && (window.innerWidth < 640)  );
  };

  console.log(windowWidth , contact);

 useEffect(() => {

    handleResize()

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [contact ]);

  return (
    <div className="flex h-screen bg-black text-white">

      {/* Contacts List */}
      <Contacts  style={" w-full sm:w-1/3  " + (windowWidth ? "hidden" : "")  } setContact={setContact} />

    {!contact ?  <Click style={" hidden  w-2/3 sm:flex "}/>  :    <Chat style={" w-full    sm:w-2/3   "} setContact={setContact} /> }

    </div>
  );
}
