function getWeekDay(d){
    const date = new Date(d)
    const day = date.getDay()
    console.log(day)

    switch (day){
        case 0:
            return 'segunda'
        case 1:
            return 'Terça'
        case 2:
            return 'Quarta'
        case 3:
            return 'Quinta'
        case 4:
            return 'Sexta'
        case 5:
            return 'Sábado'
        case 6:
            return 'Domingo'
    }
}

function getIcon(condition){
    switch(condition){
        case 'Parcialmente nublado':
            return'./images/parcialmentenublado.png'
        case 'Céu limpo':
            return './images/ceulimpo.png'
        case 'Sol':
            return'./images/sol.png'
        case 'Neblina':
            return './images/neblina.png'
        case 'Possibilidade de chuva irregular':
            return './images/possibilidadechuva.png'
        default:
            return './'
    }
}

export const Success = ({data})=> {
    console.log(data)
    document.querySelector('body').style.cssText = "--altura: 80vh"

    return (
        <>
            <article id="container_success">
                <section id="container_forecast">
                    <picture id="container_icon">
                        <img src={getIcon(data.current.condition.text)} alt=""></img>
                    </picture>

                    <div id="container_forecastInfo">
                        <div>
                            <p id="span_temp">{data.current.temp_c}</p>

                        </div>

                        <p id="p_forecast">{data.current.condition.text}</p>

                    </div>
                </section>
                <section id="container_moreInfo">
                    <div className="info">
                        <p id="span_dayNight">{data.current.is_day === 0 ? "Está de Noite!" : "Está de dia!"}</p>
                        <div>
                            <i id="icon_dayNight" className={data.current.is_day === 0 ? " fa-solid fa-moon" : "fa-solid fa-sun"}></i>
                        </div>
                    </div>
                    <div className="info">
                        <p>Vento <i className="fa-solid fa-wind"></i></p>
                        <div>
                            <span id="span_wind">{data.current.gust_kph}</span>
                        </div>
                    </div>
                </section>
                <section id="container_nextDays">
                    <div>
                        <h1>{getWeekDay(data.forecast.forecastday[1].date)}</h1>
                        <picture>
                            <img src={getIcon(data.forecast.forecastday[1].day.condition.text)} alt=""/>
                        </picture>
                        <p>{data.forecast.forecastday[1].day.condition.text}</p>
                    </div>
                    <div>
                        <h1>{getWeekDay(data.forecast.forecastday[2].date)}</h1>
                        <picture>
                            <img src={getIcon(data.forecast.forecastday[2].day.condition.text)} alt=""/>
                        </picture>
                        <p>{data.forecast.forecastday[2].day.condition.text}</p>
                    </div>
                </section>
            </article>
        </>
    )
}

