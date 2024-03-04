"use client";
import "./simple.css"; 

interface SimpleLoaderProps {
    color?: string;
}

const SimpleLoader = ({color}:SimpleLoaderProps) => {
    return (
        <div className={`spinner center `}>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
            <div className= {`spinner-blade ${color=='white'?'white':'mute'}`}></div>
        </div>
    );
};

export default SimpleLoader;
