export function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var dayName = a.toLocaleDateString("en-US", { weekday: "long" });
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  // var time =
  //   date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return [dayName, date, month, year, hour, min, sec];
}

export function ChangeTimeFormat(hour) {
  let Hour
  if (hour >= 0 && hour <= 12) {
    // console.log(timeConverter(data.dt)+ "AM")
    if (hour === 0) {
      Hour = String(hour + 12 + "am");
    } else {
      Hour = String(hour + "am");
    }
  } else if (hour >= 13 && hour <= 23) {
    // console.log( timeConverter(data.dt), "PM")
    Hour = String(hour - 12 + "pm");
  }
  return [Hour]
}

export function changeTemp(value, option) {
  switch (option) {
    case 1:
      return Math.floor(value - 273.15);
    // case 2:
    //   return value;
    case 2:
      return Math.floor(((value - 273.15) * 9) / 5 + 32);

    default:
      return Math.floor(value - 273.15);
  }
}

export function changT(option) {
  switch (option) {
    case 1:
      return "C°";
    case 2:
      return "F";
    case 3:
      return "F°";

    default:
      return "C°";
  }
}

export function changeSpeed(option, speed) {
  switch (option) {
    case 1:
      return speed;
    case 2:
      let v = speed * 2.2369;
      return v.toFixed(2);
    default:
      return speed;
  }
}
