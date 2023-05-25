import React from "react";
import {SearchBar} from "./SearchBar.jsx";
import {Content} from "./content.jsx";
import {Error} from "./error.jsx";



function App() {
    const [place, setPlace] = React.useState(null)
    const [showError, setError] = React.useState(false)

    function check(){
        const placeGiven = document.querySelector('input').value

        if(placeGiven.length > 3){
            setError(false)
            setPlace(placeGiven)
        }
        else{
            console.log('menor que 3 letras')
            setPlace(null)
            setError(true)
        }
    }


    return (
        <>
            <SearchBar func={check} />
            {showError && <Error value={1}/>}
            {place && <Content place={place}/>}
        </>
    )
}


export default App
