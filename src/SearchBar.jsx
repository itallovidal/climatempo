export const SearchBar = ({func})=>{
    return (
        <>
            <article id="container_search">
                <input placeholder="Digite seu local :D" type="text" name="" id="local"></input>
                <button onClick={func}><i className="fa-solid fa-magnifying-glass"></i></button>
            </article>
        </>
    )
}

