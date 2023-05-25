export const Error = ({value})=>{
    document.querySelector('body').style.cssText = `--altura: ${1000}px`

    if(value === 1){
        return (
            <>
                <article className="hide" id="container_error">
                    <h1>Digite mais de 3 letras!</h1>
                    <i className="fa-solid fa-circle-exclamation"></i>
                </article>
            </>
        )
    }
    else{
        return (
            <>
                <article className="hide" id="container_error">
                    <h1> Local não encontrado!</h1>
                    <i className="fa-solid fa-circle-exclamation"></i>
                </article>
            </>
        )
    }

}