document.getElementById("search").addEventListener("change" ,()=>{
    var e = document.getElementById('search').value;
    api(e);

});


async function api(loc){ 
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${loc}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d2ba4e13emshddd27fd39badc56p1541a8jsn000523fa9e91',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


	const response = await fetch(url, options);
	const data =await response.json();
  
    var main = document.getElementById('main')
    main.innerHTML = ` <div class="flex flex-col bg-violet-50 rounded p-4 w-full max-w-xs">
    <div class="font-bold text-xl">${data.location.name}-${data.location.region}-${data.location.country}</div>
    <div class="text-sm text-gray-500">${data.location.localtime}</div>
    <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    </div>
    <div class="flex flex-row items-center justify-center mt-6">
        <div class="font-medium text-6xl">${data.current.temp_c}°</div>
        <div class="flex flex-col items-center ml-6">
            <div>${data.current.condition.text}</div>
            
        </div>
    </div>
    <div class="flex flex-row justify-between mt-6">
        <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Wind</div>
            <div class="text-sm text-gray-500">${data.current.wind_kph}k/h</div>
        </div>
        <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Humidity</div>
            <div class="text-sm text-gray-500">${data.current.humidity}%</div>
        </div>
        <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Visibility</div>
            <div class="text-sm text-gray-500">${data.current.vis_km}km</div>
        </div>
    </div>
</div>`;
	console.log(result['current']['temp_c']);
    

    Notification.requestPermission().then(perm=>{
        if(perm === "granted"){ 
        const notification = new Notification(
            "Today Weather" ,{
                body: `${data.location.name} Temperature ${data.current.temp_c}°`,
                icon: 'main.png',
            }
        )
    }
     });
   
}
getLocation();

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      
    }
  }
  
  function showPosition(position) {
  api(position.coords.latitude +","+ position.coords.longitude);
  }

