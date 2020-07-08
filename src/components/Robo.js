import React from 'react';


const Robo=(props)=>{
    // if(true){
    //     throw new Error('nooooooo!!');
    // }
    return(
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}`}/>
            <div>
                <h1 className="f3">{props.name}</h1>
                <h2>{props.username}</h2>
                <h3>{props.email}</h3>
                
            </div>
        </div>


    );
}

export default Robo;