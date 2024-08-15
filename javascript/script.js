function updateTime() {
  //Gaborone
  let gaboroneElement = document.querySelector("#gaborone");
  if (gaboroneElement) {
    let gaboroneDateElement = gaboroneElement.querySelector(".date");
    let gaboroneTimeElement = gaboroneElement.querySelector(".time");
    let gaboroneTime = moment().tz("Africa/Gaborone");

    gaboroneDateElement.innerHTML = gaboroneTime.format("MMMM Do YYYY");
    gaboroneTimeElement.innerHTML = gaboroneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Puerto_Rico
  let puertoricoElement = document.querySelector("#puertorico");
  if (puertoricoElement) {
    let puertoricoDateElement = puertoricoElement.querySelector(".date");
    let puertoricoTimeElement = puertoricoElement.querySelector(".time");
    let puertoricoTime = moment().tz("America/Puerto_Rico");

    puertoricoDateElement.innerHTML = puertoricoTime.format("MMMM Do YYYY");
    puertoricoTimeElement.innerHTML = puertoricoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} 
          <small>${cityTime.format("A")}</small>
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
