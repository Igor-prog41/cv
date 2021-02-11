
let outS1 = '<div class="outWeather">';
let outS2 = '<div class="dayWeather">Current</div>'; //no in day and detail
let outS21 = '<div class="dayWeather">Date</div>'; //no in current
let outS22 = '<div class="timeWeather">Time</div>'; //no in current 
let outS3 = '<div class="cityName">City</div>';
let outS4 = '<div class="tempreature">tempreature</div>';
let outS5 = '<div class="cloud">cloud</div>';
let outS6 = '<div class="icon">icon</div>';
let outS7 = '<p>windy speed</p>';
let outS8 = '<div class="windy">windy speed</div>';
let outS81 = '<button class="b3">Show daily forecast in detail</button>';//no in current and detail
let outS9 = '</div>';

document.querySelector('.b1').onclick = f1;

function f1() {

    let periodWeather = +document.querySelector('.s-period').value;  //get number of day
    let idCity = document.querySelector('.s-city').value;              // get ID town

    if (periodWeather == 1) {
        f3(idCity);     //Current weather
    }

    else {
        f2(periodWeather);
        f4(periodWeather, idCity);
    }
}

function f3(idCity) {     //Current weather

    let strRequest = 'https://api.openweathermap.org/data/2.5/weather?id=' + idCity +
        '&appid=77360f9f6a8ef3a5313f19595e830158';

    fetch(strRequest)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            //console.log(data);

            let outBlockResult = outS1 + outS2 + outS3 + outS4 + outS5 + outS6 + outS7 + outS8 + outS9;
            document.querySelector('.outWeather1').innerHTML = outBlockResult;

            document.querySelector('.cityName').textContent = data.name;
            document.querySelector('.tempreature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.cloud').textContent = data.weather[0]["description"];
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.windy').textContent = data.wind.speed;
        })
        .catch(function () {
            //catch any errors
        });
};

function f2(periodWeather) {
    let outBlockResult = "";

    for (let i = 1; i < periodWeather + 1; i++) {
        outBlockResult += outS1 + outS21 + outS22 + outS3 + outS4 + outS5 + outS6 + outS7 + outS8 + outS81 + outS9;
    }

    document.querySelector('.outWeather1').innerHTML = outBlockResult;

    let bb3 = document.querySelectorAll('.b3');
    for (let i = 0; i < periodWeather; i++) {
        bb3[i].onclick = function (e) {
            dayForDetail = e.path[1].querySelector('.dayWeather').textContent;
            f7(dayForDetail);
        }
    }
}

function f4(periodWeather, idCity) {

    let strRequest1 = 'https://api.openweathermap.org/data/2.5/forecast?id=' + idCity +
        '&appid=77360f9f6a8ef3a5313f19595e830158';

    fetch(strRequest1)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            //console.log(data)

            //f2(periodWeather);

            let t1col = document.querySelectorAll('.outWeather');

            let k = 0;  // the counter is added after displaying each day of the period
            let arrWeather = f10getArrWeather(data);// arr with necessary information for forming the weather block

            for (let key in arrWeather) {

                if (k == periodWeather) break;

                if (k == 0) {
                    let kk = 1
                    for (let key2 in arrWeather[key]) {
                        if (kk == 2) break;
                        time1 = arrWeather[key][key2][1];
                        kk++;
                    }

                }
                else {    // '11:00' or '12:00'
                    let kk = 1
                    for (let key2 in arrWeather[key]) {
                        if (kk == 5) break;
                        time1 = arrWeather[key][key2][1];
                        kk++;
                    }
                };

                //console.log(arrWeather)

                t1col[k].children[0].innerHTML = arrWeather[key][time1][0];
                t1col[k].children[1].innerHTML = arrWeather[key][time1][1];
                t1col[k].children[2].innerHTML = arrWeather[key][time1][2];
                t1col[k].children[3].innerHTML = arrWeather[key][time1][3];
                t1col[k].children[4].innerHTML = arrWeather[key][time1][4];
                t1col[k].children[5].innerHTML = arrWeather[key][time1][5];
                t1col[k].children[7].innerHTML = arrWeather[key][time1][6];

                k++;
            }
        });
    ;
}


function f6(rip) {    // rip- kollichestvo povtoreni
    let outBlockResult = "";

    for (let i = 1; i <= rip; i++) {
        outBlockResult += '<div class="outWeather dayND">' +
            outS21 + outS22 + outS3 + outS4 + outS5 + outS6 + outS7 + outS8 + outS9;
    }

    document.querySelector('.outWeatherDetail').innerHTML = outBlockResult;

}

function f7(dayForDetail) {
    let idCity = document.querySelector('.s-city').value;

    let strRequest1 = 'https://api.openweathermap.org/data/2.5/forecast?id=' + idCity +
        '&appid=77360f9f6a8ef3a5313f19595e830158';

    fetch(strRequest1)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            //console.log(data)
            let arrWeather = f10getArrWeather(data);

            let arrLength = 0;
            for (let key in arrWeather[dayForDetail]) {
                arrLength++;
            }

            f6(arrLength);

            let t1col = document.querySelectorAll('.dayND');
            let k = 0;
            for (let key in arrWeather[dayForDetail]) {
                t1col[k].children[0].innerHTML = arrWeather[dayForDetail][key][0];
                t1col[k].children[1].innerHTML = arrWeather[dayForDetail][key][1];
                t1col[k].children[2].innerHTML = arrWeather[dayForDetail][key][2];
                t1col[k].children[3].innerHTML = arrWeather[dayForDetail][key][3];
                t1col[k].children[4].innerHTML = arrWeather[dayForDetail][key][4];
                t1col[k].children[5].innerHTML = arrWeather[dayForDetail][key][5];
                t1col[k].children[7].innerHTML = arrWeather[dayForDetail][key][6];
                k++;
            }
        });
    ;

}

function f10getArrWeather(data) {

    let arrWeather = {};
    let arrWeather1 = {};
    let arrDay = '';

    for (let i = 0; i < 40; i++) {

        let dataN = data.list[i].dt;
        let d = new Date(dataN * 1000);

        let d1 = d.getHours();
        let d2 = d.getDate();
        let d3 = d.getMonth();
        let d4 = d.getFullYear();

        let dataForComparison = d2 + '-' + (d3 + 1) + '-' + d4;

        let arrWeather2 = [
            dataForComparison,
            d1 + ':00',
            data.city.name,
            Math.round(data.list[i].main.temp - 273) + '&deg;',
            data.list[i].weather[0].description,
            `<img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png">`,
            data.list[i].wind.speed,
        ];

        if (i == 0) {
            arrDay = dataForComparison;
        }
        if (arrDay == dataForComparison) {
            arrWeather1[arrWeather2[1]] = arrWeather2;
        }
        else {
            arrWeather[arrDay] = arrWeather1;
            arrWeather1 = [];
            arrWeather1[arrWeather2[1]] = arrWeather2;
            arrDay = dataForComparison;
        }
        if (i == 39) {
            arrWeather[arrDay] = arrWeather1;
        }
    }
    return arrWeather;
}
