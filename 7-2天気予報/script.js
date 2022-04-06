"use strict";

//geolocation
function success(pos) {
  ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
  alert("位置情報の取得に失敗しました。エラーコード:" + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

//UNIX UTCの変換
function utcToJSTime(utcTime) {
  return utcTime * 1000;
}

//データ取得
function ajaxRequest(lat, long) {
  const url = "https://api.openweathermap.org/data/2.5/forecast";
  const appId = "c26a4b94bb24f46d4c5d5d630ccdcfc8";

  $.ajax({
    url: url,
    data: {
      appId: appId,
      lat: lat,
      lon: long,
      units: "metric",
      lang: "ja"
    }
  })

    .done(function (data) {

      $('#place').text(data.city.name + "," + data.city.country);


      //天気予報データ
      data.list.forEach(function (forecast, index) {
        const dateTime = new Date(utcToJSTime(forecast.dt));
        const month = dateTime.getMonth() + 1;
        const date = dateTime.getDate();
        const hours = dateTime.getHours();
        const min = String(dateTime.getMinutes()).padStart(2, "0");
        const temperature = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;
        const iconPath = `images/${forecast.weather[0].icon}.svg`;

        if (index === 0) {
          const currentWeather = `
        <div class="icon"><img src="${iconPath}"></div>
        <div class="info">
          <p>
            <span class="description">現在の天気:${description}</span>
            <span class="temp">${temperature}</span>℃
          </p>
        </div>`;
          $("#weather").html(currentWeather);
        }
        else {
          const tableRow = `
        <tr>
          <td class="info">
            ${month}/${date} ${hours}:${min}
          </td>
          <td class="icon"><img src="${iconPath}"></td>
          <td><span class="description">${description}</span></td>
          <td><span class="temp">${temperature}℃</span></td>
        </tr>`;
          $("#forecast").append(tableRow);
        }

        console.log("日時:" + `${month}/${date} ${hours}:${min}`);
        console.log("気温:" + temperature);
        console.log("天気:" + description);
        console.log("画像パス:" + iconPath);
      })


    })

    .fail(function () {
      console.log("$.ajax failed!");
    })
}