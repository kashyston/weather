const key = 'Lln1tm7FACNORdw7kKxRKaa8RC17pfbG'

const getWeather = async (nid) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${nid}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
};

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};



