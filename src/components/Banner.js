import React from 'react';
import Typewriter from 'typewriter-effect';
const  Banner=()=>{
    return(
        <div className="banner">
            <div className="container-fluid">
                <div className="row overlay">
                   <div className="col-md-6 col-12">
                    <h1>Hello I'm Sudarshan Giri
                            <Typewriter 
                                onInit={(typewriter)=>{
                                    typewriter.typeString("I am a Web Developer").pauseFor(2000).deleteAll().start();
                                    typewriter.typeString("I do Web Development Projects ").pauseFor(2000).deleteAll();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                   </div>
                   <div className="col-md-6">
                       <div className="photo">
                           
                       </div>
                   </div>
            
                 

              
                    
                </div>
            </div>

        </div>
        
    )



}

export default Banner;