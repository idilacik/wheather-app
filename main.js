// html'den aktarilanlar
const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

// btn'i izleme
btn.addEventListener("click", () => {
  console.log(cityInput.value);

  getData(cityInput.value);
});

function getData(name) {
  // console.log(name)

  // API key tanimlama
  const API = "f38ecb5ab424e0f407ec0846e73d3f99";
  // baseURL tanimlama
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

  console.log(baseURL);

  //   fetch ile promise dondur ve json'a cevir
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like, humidity },
        wind: { speed },
        weather: [{ description }],
      } = data;
      //   console.log(
      //     name,
      //     country,
      //     temp ° ,
      //     feels_like,
      //     description,
      //     humidity % ,
      //     speed km/s
      //   );

      //   verileri js'e cevirme
      const city = document.querySelector("#sehir");
      const temperature = document.querySelector("#sicaklik");
      const weatherDesc = document.querySelector("#havaDurumu");
      const feel = document.querySelector("#hissedilen");
      const hum = document.querySelector("#humidity");
      const wind = document.querySelector("#wind");
      console.log(city, temperature, weatherDesc, feel, hum, wind);

      //   js'e cekilen elemanlari html elemanlari yerine yerlestirme
      city.textContent = `${name}, ${country} `;
      temperature.innerText = `${temp}°C`;
      hum.textContent = `Nem: % ${humidity}`;
      wind.innerHTML = `Ruzgar: ${speed} km/s`;
      weatherDesc.textContent = `Hava Durumu: ${description}`;
      feel.innerText = `Hissedilen Sicaklik: ${feels_like}°C`;
    })
    .catch((err) => console.log(err));

  cityInput.value = "";
  cityInput.focus();
}
