export async function getWeather(local){

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=24b39cd9f2e3444a849203011231405&q=${local}&days=3&aqi=no&alerts=no&lang=pt`)

    let r_status = response.status

    const json = await response.json()

    if(r_status === 200){
        return {data: true, json}
    }
    else{
        return {data: false, msg: json.error.message}
    }
}
