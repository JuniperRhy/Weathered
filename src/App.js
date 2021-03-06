import { useState } from "react";
import "./App.css";

const api = {
  // api key here
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [tempClick, setTempClick] = useState(false);
  const [homeClick, setHomeClick] = useState(false);
  const [advancedClick, setAdvancedClick] = useState(true);

  function WeatherIcon() {
    if (weather.weather[0].main === "Clear") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="peachpuff"
                stroke="gray"
                strokeWidth="4px"
                d="M256,144c-61.75,0-112,50.25-112,112c0,61.75,50.25,112,112,112
      s112-50.25,112-112C368,194.25,317.75,144,256,144z M256,336c-44.188,0-80-35.812-80-80s35.812-80,80-80s80,35.812,80,80
      S300.188,336,256,336z M256,112c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32
      C240,104.833,247.167,112,256,112z M256,400c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32
      C272,407.167,264.833,400,256,400z M380.438,154.167l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625
      c-6.25-6.25-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625
      C364.062,160.417,374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624
      s16.375,6.25,22.625,0l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256
      c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32
      c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167
      c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0
      c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0
      c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.374,0-22.625L380.459,357.812z"
              />
            </g>
          </g>
        </svg>
      );
    } else if (weather.weather[0].main === "Thunderstorm") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill="peachpuff"
                stroke="gray"
                strokeWidth="4px"
                d="M400,64c-5.312,0-10.562,0.375-15.792,1.125C354.334,24.417,307.188,0,256,0
      c-51.188,0-98.312,24.417-128.208,65.125C122.562,64.375,117.312,64,112,64C50.25,64,0,114.25,0,176s50.25,112,112,112
      c13.688,0,27.084-2.5,39.709-7.333c12.291,10.708,26.25,18.958,40.916,25.416l24.916-24.874
      c-23.458-7.626-44.166-21.271-59.604-39.876C144.938,250.5,129.125,256,112,256c-44.188,0-80-35.812-80-80s35.812-80,80-80
      c10.812,0,21.062,2.208,30.438,6.083C163.667,60.667,206.291,32,256,32s92.334,28.667,113.541,70.083
      C378.938,98.208,389.209,96,400,96c44.188,0,80,35.812,80,80s-35.812,80-80,80c-17.125,0-32.916-5.5-45.938-14.667
      c-10.375,12.521-23.312,22.667-37.625,30.584L303,312.25c20.875-6.562,40.5-16.938,57.291-31.583
      C372.916,285.5,386.312,288,400,288c61.75,0,112-50.25,112-112S461.75,64,400,64z M192,352l32,32l-32,96l96-96l-32-32l32-96
      L192,352z"
              />
            </g>
          </g>
        </svg>
      );
    } else if (weather.weather[0].main === "Clouds") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="50vh"
          height="40vw"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="peachpuff"
            stroke="gray"
            strokeWidth="4px"
            d="M400,160c-5.312,0-10.562,0.375-15.792,1.125
  C354.334,120.417,307.188,96,256,96s-98.312,24.417-128.208,65.125C122.562,160.375,117.312,160,112,160C50.25,160,0,210.25,0,272
  c0,61.75,50.25,112,112,112c13.688,0,27.084-2.5,39.709-7.333C180.666,401.917,217.5,416,256,416
  c38.542,0,75.333-14.083,104.291-39.333C372.916,381.5,386.312,384,400,384c61.75,0,112-50.25,112-112
  C512,210.25,461.75,160,400,160z"
          />
        </svg>
      );
    } else if (weather.weather[0].main === "Rain") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="peachpuff"
                stroke="gray"
                strokeWidth="4px"
                d="M400,64c-5.312,0-10.562,0.375-15.792,1.125
      C354.334,24.417,307.188,0,256,0s-98.312,24.417-128.208,65.125C122.562,64.375,117.312,64,112,64C50.25,64,0,114.25,0,176
      s50.25,112,112,112c13.688,0,27.084-2.5,39.709-7.333C180.666,305.917,217.5,320,256,320c38.542,0,75.333-14.083,104.291-39.333
      C372.916,285.5,386.312,288,400,288c61.75,0,112-50.25,112-112S461.75,64,400,64z M225,480c0,17.688,14.312,32,32,32
      s32-14.312,32-32s-32-64-32-64S225,462.312,225,480z M352,448c0,17.688,14.312,32,32,32s32-14.312,32-32s-32-64-32-64
      S352,430.312,352,448z M96,384c0,17.688,14.312,32,32,32s32-14.312,32-32s-32-64-32-64S96,366.312,96,384z"
              />
            </g>
          </g>
        </svg>
      );
    } else if (weather.weather[0].main === "Drizzle") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="peachpuff"
                stroke="gray"
                strokeWidth="4px"
                d="M33.604,256C32.562,250.833,32,245.479,32,240
      c0-44.188,35.812-80,80-80c10.812,0,21.062,2.208,30.438,6.083C163.667,124.667,206.291,96,256,96s92.334,28.667,113.541,70.083
      C378.938,162.208,389.209,160,400,160c44.188,0,80,35.812,80,80c0,5.479-0.562,10.833-1.625,16h32
      c0.792-5.271,1.625-10.521,1.625-16c0-61.75-50.25-112-112-112c-5.312,0-10.562,0.375-15.792,1.125
      C354.334,88.417,307.188,64,256,64s-98.312,24.417-128.208,65.125C122.562,128.375,117.312,128,112,128C50.25,128,0,178.25,0,240
      c0,5.479,0.854,10.729,1.625,16H33.604z M496,288H16c-8.833,0-16,7.167-16,16s7.167,16,16,16h480c8.833,0,16-7.167,16-16
      S504.833,288,496,288z M496,352H16c-8.833,0-16,7.167-16,16s7.167,16,16,16h480c8.833,0,16-7.167,16-16S504.833,352,496,352z
       M496,416H16c-8.833,0-16,7.167-16,16s7.167,16,16,16h480c8.833,0,16-7.167,16-16S504.833,416,496,416z"
              />
            </g>
          </g>
        </svg>
      );
    } else if (weather.weather[0].main === "Snow") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="peachpuff"
                stroke="gray"
                strokeWidth="4px"
                d="M326.042,443.688l-18-10.376
      c0.542-3.124,0.958-6.311,0.958-9.624c0-3.312-0.416-6.5-1-9.625l18.042-10.396c8.417-4.917,11.291-15.729,6.458-24.104
      c-4.876-8.479-15.667-11.375-24.125-6.5l-18.188,10.5c-4.876-4.146-10.375-7.396-16.5-9.604v-20.896
      c0-9.771-7.938-17.688-17.688-17.688s-17.666,7.917-17.666,17.688v20.875c-6.126,2.188-11.646,5.479-16.521,9.625l-18.146-10.5
      c-8.479-4.875-19.292-2-24.167,6.479c-4.875,8.417-1.938,19.25,6.5,24.126l17.959,10.375c-0.584,3.146-0.959,6.334-0.959,9.646
      c0,3.313,0.375,6.5,0.959,9.624L186,443.688c-8.459,4.875-11.375,15.75-6.5,24.188s15.688,11.312,24.125,6.438l18.167-10.438
      c4.874,4.125,10.396,7.375,16.542,9.562v20.938c0,9.749,7.916,17.624,17.666,17.624s17.688-7.875,17.688-17.624v-20.938
      c6.125-2.188,11.688-5.438,16.521-9.625l18.167,10.5c8.458,4.875,19.249,2,24.125-6.438
      C337.375,459.438,334.5,448.625,326.042,443.688z M256,441.375c-9.75,0-17.688-7.938-17.688-17.688s7.938-17.646,17.688-17.646
      s17.667,7.896,17.667,17.646S265.75,441.375,256,441.375z M474.166,396.25l-12.083-3.208c-0.291-3.833-1.208-7.479-2.896-10.979
      l8.771-8.771c4.125-4.125,4.104-10.792,0-14.854c-4.083-4.104-10.708-4.125-14.833,0l-8.791,8.75
      c-3.459-1.625-7.146-2.562-10.959-2.875l-3.209-12.062c-1.499-5.583-7.25-8.938-12.874-7.438
      c-5.604,1.521-8.875,7.271-7.417,12.875l3.209,11.896c-1.584,1.084-3.084,2.292-4.5,3.667c-1.375,1.417-2.542,2.916-3.626,4.459
      l-11.896-3.209c-5.604-1.499-11.396,1.876-12.896,7.438c-1.499,5.625,1.876,11.354,7.417,12.875l12,3.229
      c0.334,3.771,1.292,7.458,2.979,10.959l-8.812,8.812c-4.083,4.104-4.062,10.729,0.042,14.812
      c4.083,4.083,10.708,4.125,14.792,0.042l8.832-8.833c3.459,1.707,7.168,2.666,11.001,2.957l3.166,12.021
      c1.542,5.604,7.25,8.938,12.876,7.438c5.583-1.5,8.957-7.249,7.458-12.917l-3.209-11.896c1.5-1.062,3.042-2.25,4.459-3.625
      c1.375-1.396,2.542-2.938,3.624-4.479l11.917,3.209c5.604,1.5,11.375-1.854,12.854-7.417
      C483.062,403.541,479.75,397.792,474.166,396.25z M438.312,402.938c-4.125,4.125-10.771,4.104-14.875,0
      c-4.062-4.062-4.104-10.729,0-14.854c4.104-4.083,10.771-4.083,14.875,0C442.375,392.188,442.375,398.875,438.312,402.938z
       M118.938,342.5l-11.875,3.188c-1.104-1.5-2.25-3.021-3.646-4.438c-1.416-1.375-2.916-2.562-4.479-3.625l3.188-11.938
      c1.5-5.604-1.834-11.375-7.375-12.854c-5.625-1.5-11.375,1.834-12.875,7.417l-3.25,12.062c-3.812,0.312-7.458,1.25-10.938,2.896
      l-8.812-8.771c-4.125-4.125-10.75-4.104-14.834,0c-4.104,4.104-4.104,10.75,0,14.854l8.771,8.771
      c-1.646,3.5-2.604,7.188-2.896,10.979l-12.042,3.208c-5.625,1.542-8.959,7.25-7.458,12.875c1.521,5.583,7.271,8.875,12.896,7.417
      l11.875-3.23c1.062,1.604,2.25,3.105,3.688,4.501c1.375,1.375,2.875,2.604,4.438,3.625l-3.188,11.896
      c-1.5,5.625,1.834,11.417,7.416,12.917c5.626,1.5,11.334-1.833,12.834-7.438l3.25-12c3.812-0.312,7.5-1.271,11-2.938l8.791,8.792
      c4.084,4.124,10.709,4.041,14.834-0.042c4.062-4.062,4.125-10.708,0-14.812l-8.812-8.812c1.688-3.46,2.688-7.188,2.938-11.001
      l12.062-3.188c5.562-1.521,8.896-7.25,7.396-12.875C130.334,344.376,124.584,341.042,118.938,342.5z M88.562,370.958
      c-4.104,4.104-10.75,4.104-14.875,0c-4.062-4.083-4.062-10.771,0-14.833c4.125-4.083,10.771-4.083,14.875,0
      S92.625,366.875,88.562,370.958z M512,176c0-61.75-50.25-112-112-112c-5.312,0-10.562,0.375-15.792,1.125
      C354.334,24.417,307.188,0,256,0s-98.312,24.417-128.208,65.125C122.562,64.375,117.312,64,112,64C50.25,64,0,114.25,0,176
      s50.25,112,112,112c13.688,0,27.084-2.5,39.709-7.333C180.666,305.917,217.5,320,256,320c38.542,0,75.333-14.083,104.291-39.333
      C372.916,285.5,386.312,288,400,288C461.75,288,512,237.75,512,176z"
              />
            </g>
          </g>
        </svg>
      );
    } else if (
      weather.weather[0].main === "Fog" ||
      weather.weather[0].main === "Smoke"
    ) {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill="peachpuff"
                stroke="gray"
                strokeWidth="4px"
                d="M112,160h288c8.833,0,16-7.167,16-16s-7.167-16-16-16H112c-8.833,0-16,7.167-16,16S103.167,160,112,160z
       M400,192H112c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,192,400,192z M400,256H112
      c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,256,400,256z M400,320H112c-8.833,0-16,7.167-16,16
      s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,320,400,320z"
              />
            </g>
          </g>
        </svg>
      );
    } else if (weather.weather[0].main === "Mist") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                fill="peachpuff"
                stroke="gray"
                strokeWidth="4px"
                d="M112,160h288c8.833,0,16-7.167,16-16s-7.167-16-16-16H112c-8.833,0-16,7.167-16,16S103.167,160,112,160z
      M400,192H112c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,192,400,192z M400,256H112
      c-8.833,0-16,7.167-16,16s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,256,400,256z M400,320H112c-8.833,0-16,7.167-16,16
      s7.167,16,16,16h288c8.833,0,16-7.167,16-16S408.833,320,400,320z"
              />
            </g>
          </g>
        </svg>
      );
    } else {
      return "";
    }
  }

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((r) => r.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          setAdvancedClick(true);
          setTempClick(false);
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const appClassName = () => {
    if (weather.main === undefined) {
      return "App";
    } else if (weather.main.temp >= 90) {
      return "App Warmest";
    } else if (weather.main.temp > 75 && weather.main.temp < 90) {
      return "App Warm";
    } else if (weather.main.temp > 50 && weather.main.temp <= 75) {
      return "App Cold";
    } else if (weather.main.temp <= 50) {
      return "App Coldest";
    }
  };
  const backgroundBlurImage = () => {
    if (weather.main === undefined) {
      return "Blur";
    } else if (weather.main.temp >= 90) {
      return "Warmest Blur";
    } else if (weather.main.temp > 75 && weather.main.temp < 90) {
      return "Warm Blur";
    } else if (weather.main.temp > 50 && weather.main.temp <= 75) {
      return "Cold Blur";
    } else if (weather.main.temp <= 50) {
      return "Coldest Blur";
    }
  };

  const windDirection = () => {
    if (weather.main === undefined) {
      return "";
    } else if (weather.wind.deg >= 335) {
      return " North";
    } else if (weather.wind.deg < 25) {
      return " North";
    } else if (weather.wind.deg >= 25 && weather.wind.deg < 65) {
      return " NorthEast";
    } else if (weather.wind.deg >= 65 && weather.wind.deg < 115) {
      return " East";
    } else if (weather.wind.deg >= 115 && weather.wind.deg < 155) {
      return " SouthEast";
    } else if (weather.wind.deg >= 155 && weather.wind.deg < 205) {
      return " South";
    } else if (weather.wind.deg >= 205 && weather.wind.deg < 245) {
      return " SouthWest";
    } else if (weather.wind.deg >= 245 && weather.wind.deg < 295) {
      return " West";
    } else if (weather.wind.deg >= 295 && weather.wind.deg < 335) {
      return " NorthWest";
    }
  };

  console.log(weather);
  console.log(windDirection());

  return (
    <div>
      <div className={backgroundBlurImage()}></div>
      <div className={appClassName()}>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          <div>
            {typeof weather.main != "undefined" ? (
              <>
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}{" "}
                  </div>
                  <div>
                    Longitutde: {weather.coord.lon} Latitutde:??
                    {weather.coord.lat}
                  </div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div
                    className="temp"
                    onClick={(e) => setTempClick(!tempClick)}
                  >
                    {tempClick
                      ? Math.round(weather.main.feels_like)
                      : Math.round(weather.main.temp)}
                    ??f
                  </div>
                  <div className="feelsLike">
                    {tempClick ? "feels like" : ""}
                    <br />
                  </div>
                  <div>
                    <div
                      className="weather-icon"
                      onClick={(e) => setAdvancedClick(!advancedClick)}
                    >
                      <WeatherIcon
                        cl
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    {advancedClick ? (
                      <>
                        <div className="weather">{weather.weather[0].main}</div>{" "}
                      </>
                    ) : (
                      <>
                        <div className="advance weather">
                          <div className="weatherDescription">
                            {weather.weather[0].description}
                          </div>
                          Humidity: {weather.main.humidity}%
                          <br />
                          Pressure: {weather.main.pressure} hPa
                          <br />
                          Wind Speed: {weather.wind.speed} Mph
                          <br />
                          Wind Direction:
                          {windDirection()}
                          <br />
                          Visibility:
                          {weather.visibility} meters
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="location-box">
                <div
                  className="Title"
                  onClick={(e) => setHomeClick(!homeClick)}
                >
                  {homeClick ? "Search by City Name Above" : "Weathered"}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
