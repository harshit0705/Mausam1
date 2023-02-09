import React, {  } from "react";
import Inf from "./Info.module.css";
import {
  WiThermometer,
  WiThermometerExterior,
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiBarometer,
} from "react-icons/wi";
import { BiBody } from "react-icons/bi";
import { MdPinDrop } from "react-icons/md";
export default function Info(props) {
 
  const time = (unix, timezone) => {
    const date = new Date(unix * 1000);
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60 * 1000;
    const utc = localTime + localOffset;
    const targetTime = utc + timezone * 1000;
    var gmtTime = new Date(targetTime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return gmtTime;
  };
  

  
  return (
    <div
      className={Inf.main_container1}style={{
        backgroundImage: `url("${props.bg}${props.day_night}.jpg")`,
        // backgroundImage: `url('clear1.jpg')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      
    >
      <div className={Inf.padding_con}>
      <div className={Inf.topwhite}>
        <div className={Inf.container_white1}>
          <div className={Inf.left_top}>
            <div className={Inf.left_top1}> <h1><WiThermometer/><span id={Inf.temp_main}>{props.temp}</span>&deg;<span>c</span> </h1></div>
            <div className={Inf.left_top2}><h1><MdPinDrop/>{props.city}'{props.country}</h1></div>
          </div>
          <div className={Inf.right_top}>
            <img src={`${props.icon}${props.day_night}.png`} alt="" />
            <div >{props.weather}</div>

            </div>
        </div>
        <div className={Inf.main_container2}>
          <div className={Inf.container_white2}>
            <div className={Inf.max_temp}>
              <WiThermometer />
              Max:{props.max_temp}&deg;<span>c</span>
            </div>
            <div className={Inf.min_temp}>
              <WiThermometerExterior />
              Min:{props.min_temp}&deg;<span>c</span>
              
            </div>
          </div>
          <div className={Inf.container_white3}>
            <div className={Inf.left}>
              <div className={Inf.mini_div}>
                <div className={Inf.end_info}>
                  <WiHumidity />
                  Humidity:
                </div>
                <div>{props.Humidity}%</div>
              </div>
              <div className={Inf.mini_div}>
                <div className={Inf.end_info}>
                  <WiStrongWind />
                  Wind:
                </div>
                <div>{props.wind} m/s</div>
              </div>
              <div className={Inf.mini_div}>
                <div className={Inf.end_info}>
                  <WiSunrise />
                  Sunrise:
                </div>
                <div>{time(props.sunrise, props.timezone)}</div>
              </div>
            </div>
            <div className={Inf.right}>
              <div className={Inf.mini_div}>
                <div className={Inf.end_info}>
                  <BiBody />
                  Feels Like:
                </div>
                <div>
                  {props.feels_like}&deg;<span>c</span>
                  
                </div>
              </div>
              <div className={Inf.mini_div}>
                <div className={Inf.end_info}>
                  <WiBarometer />
                  Pressure:
                </div>
                <div>{props.pressure} hPa</div>
              </div>
              <div className={Inf.mini_div}>
                <div className={Inf.end_info}>
                  <WiSunset />
                  Sunset:
                </div>
                <div>{time(props.sunset, props.timezone)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
