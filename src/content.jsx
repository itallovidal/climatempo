import React, {useEffect} from "react";
import {getWeather} from "./getWeather.jsx";
import {Success} from "./success.jsx";
import {Error} from "./error.jsx";

export function Content({place}) {

    const [el, setElement] = React.useState(null)

    React.useEffect(()=>{
        const main = document.querySelector('main')
        main.classList.add('loading')
        main.addEventListener('animationend', ()=>{
            main.classList.remove('loading')
        })

        getWeather(place)
            .then((response)=>{
                if(response.data !== false){
                    setElement(<Success data={response.json}/>)
                }
                else{
                    setElement(<Error value={2}/>)
                }
            })
    }, [place])


    return el !== null ? el : null
}