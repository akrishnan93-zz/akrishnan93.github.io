window.addEventListener('load', () => { //Once this window loads, this function comes up
    let long;
    let lat;

    let tempDesc = document.querySelector(".temperature-description");
    let tempDeg = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    let degreeSection = document.querySelector('.temperature');
    let degreeSpan = document.querySelector('.temperature span');

    let day1min = document.querySelector('.day1min');
    let day1max = document.querySelector('.day1max');
    let day1Title = document.querySelector('.day1Title');

    let day2min = document.querySelector('.day2min');
    let day2max = document.querySelector('.day2max');
    let day2Title = document.querySelector('.day2Title');

    let day3min = document.querySelector('.day3min');
    let day3max = document.querySelector('.day3max');
    let day3Title = document.querySelector('.day3Title');

    let day4min = document.querySelector('.day4min');
    let day4max = document.querySelector('.day4max');
    let day4Title = document.querySelector('.day4Title');

    let day5min = document.querySelector('.day5min');
    let day5max = document.querySelector('.day5max');
    let day5Title = document.querySelector('.day5Title');


    let iconMap = new Map();
    //K: open weather main
    //V: skycon weather word
    iconMap.set("Clouds", "CLOUDY");
    iconMap.set("Clear", "CLEAR_DAY");
    iconMap.set("Mist", "FOG");
    iconMap.set("Fog", "FOG");
    iconMap.set("Snow", "SNOW");
    iconMap.set("Rain", "RAIN");
    iconMap.set("Drizzle", "RAIN");
    iconMap.set("Thunderstorm", "RAIN");


    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var now = new Date();
    let day = days[now.getDay()];
    let today = days.indexOf(day);

    var suffix;
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();

    let time = document.querySelector('.time');
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    suffix = "AM"

    if (hours > 12) {
        hours = hours - 12;
        suffix = "PM"
    }
    time.textContent = "As of: " + hours + ":" + minutes + " " + suffix;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
            exclude=minutely,hourly&appid=7a3989410eec686937ab5e7bf3b6e073`;

            fetch(api)
            .then (response => {
                return response.json();
            }) //only run once the data comes back
            .then(data => {
                console.log(data);
                const {temp} = data.current;
                const {description, main} = data.current.weather[0];


                //Set DOM elements from the API:
                let fahrenheit = (temp * 9 / 5) - 459;
                let celsius = (temp - 273);
                tempDeg.textContent = Math.floor(fahrenheit);
                tempDesc.textContent = description;
                locationTimezone.textContent = data.timezone.replace(/_/g, ' ');
                setIcons(main, document.getElementById("icon"));
                convertTemp(fahrenheit, celsius);

                day1min.textContent = Math.floor(fixTemp(data.daily[1].temp.min)) + ' F';
                day1max.textContent = Math.floor(fixTemp(data.daily[1].temp.max)) + ' F';
                setIcons(data.daily[0].weather[0].main, document.getElementById("icon1"));
                day1Title.textContent = days[(today + 1) % 7];

                day2min.textContent = Math.floor(fixTemp(data.daily[2].temp.min)) + ' F';
                day2max.textContent = Math.floor(fixTemp(data.daily[2].temp.max)) + ' F';
                setIcons(data.daily[1].weather[0].main, document.getElementById("icon2"));
                day2Title.textContent = days[(today + 2) % 7];

                day3min.textContent = Math.floor(fixTemp(data.daily[3].temp.min)) + ' F';
                day3max.textContent = Math.floor(fixTemp(data.daily[3].temp.max)) + ' F';
                setIcons(data.daily[2].weather[0].main, document.getElementById("icon3"));
                day3Title.textContent = days[(today + 3) % 7];

                day4min.textContent = Math.floor(fixTemp(data.daily[4].temp.min)) + ' F'
                day4max.textContent = Math.floor(fixTemp(data.daily[4].temp.max)) + ' F';
                setIcons(data.daily[3].weather[0].main, document.getElementById("icon4"));
                day4Title.textContent = days[(today + 4) % 7];

                day5min.textContent = Math.floor(fixTemp(data.daily[5].temp.min)) + ' F'
                day5max.textContent = Math.floor(fixTemp(data.daily[5].temp.max)) + ' F';
                setIcons(data.daily[4].weather[0].main, document.getElementById("icon5"));
                day5Title.textContent = days[(today + 5) % 7];
            })

        });
    } else {
        h1.textContent = "This page needs your location. Please allow location services!";
    }    

    function setIcons(icon, iconID) {
        var skycons = new Skycons({color: "white"})
        const realIcon = (iconMap.get(icon)).toUpperCase();
        skycons.play(); 
        return skycons.add(iconID, Skycons[realIcon]);
    }

    function convertTemp(fahrenheit, celsius) {
        degreeSection.addEventListener('click', () => {
            if (degreeSpan.textContent === "F") {
                degreeSpan.textContent = "C";
                tempDeg.textContent = Math.floor(celsius);
            } else {
                degreeSpan.textContent = "F";
                tempDeg.textContent = Math.floor(fahrenheit);
            }
        })
    }

    function fixTemp(oldTemp) {
        return (oldTemp * 9 / 5) - 459;
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}); 