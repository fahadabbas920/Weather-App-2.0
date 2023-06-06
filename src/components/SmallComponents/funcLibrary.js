// export function convertDaytimeToTimeUnits(daytimeText) {
//   const now = new Date(); // Get the current date and time
//   const daytime = new Date(daytimeText); // Parse the daytime text into a Date object

//   // Calculate the time difference in milliseconds
//   const timeDiff = Math.abs(daytime - now);

//   // Calculate the time units
//   const milliseconds = timeDiff % 1000;
//   const seconds = Math.floor((timeDiff / 1000) % 60);
//   const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
//   const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//   const months = Math.floor(days / 30);
//   const years = Math.floor(days / 365);

//   // Return the time units as an object
//   return {
//     milliseconds,
//     seconds,
//     minutes,
//     hours,
//     days,
//     months,
//     years
//   };
// }

export function convertDateTimeToComponents(dateTimeText) {
  const dateTime = new Date(dateTimeText);
  var dayName = dateTime.toLocaleDateString("en-US", { weekday: "long" });
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1; // Months are zero-indexed, so we add 1
  const year = dateTime.getFullYear();
  const sec = dateTime.getSeconds();

  return {
    dayName,
    hour,
    minute,
    day,
    month,
    year,
    sec,
  };
}

export function timeConverter(UNIX_timestamp) {
  // const d = adjustTimestampByTimezoneOffset(UNIX_timestamp);

  var a = new Date(UNIX_timestamp * 1000);
  // var a = new Date(UNIX_timestamp * 1000);
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

// function adjustTimestampByTimezoneOffset(timestamp, offset) {
//   // Convert offset to milliseconds
//   const offsetMilliseconds = offset * 60 * 60 * 1000;

//   // Adjust the timestamp by adding or subtracting the offset
//   const adjustedTimestamp = timestamp + offsetMilliseconds;

//   // Return the adjusted timestamp
//   return adjustedTimestamp;
// }

/////////////////////////   Convert Time into 24 Hour Format   ////////////////////////////////

export function ChangeTimeFormat(hour) {
  let Hour = convertTo12HourFormat(hour);
  return [Hour];
}

function convertTo12HourFormat(hour) {
  if (hour === 0) {
    return 12 + " AM";
  } else if (hour === 12) {
    return 12 + " PM";
  } else if (hour < 12) {
    return hour + " AM";
  } else {
    return hour - 12 + " PM";
  }
}

// export function convertTimestampToLocation(timestamp, timezoneOffset) {
//   // Create a new Date object using the provided timestamp
//   const date = new Date(timestamp);

//   // Get the UTC timestamp by adding the timezone offset in minutes
//   const utcTimestamp = timestamp + timezoneOffset * 60 * 1000;

//   // Create a new Date object using the adjusted UTC timestamp
//   const adjustedDate = new Date(utcTimestamp);

//   // Get the local date and time of the specific location
//   const locationDate = adjustedDate.toLocaleDateString();
//   const locationTime = adjustedDate.toLocaleTimeString();

//   const { dayName, hour, minute, day, month, year, sec } =
//     convertDateTimeToComponents(locationDate);

//   return {
//     locationDate,
//     locationTime,
//   };
// }

// export function changeTemp(value, option) {
//   switch (option) {
//     case 1:
//       return Math.floor(value - 273.15);
//     // case 2:
//     //   return value;
//     case 2:
//       return Math.floor(((value - 273.15) * 9) / 5 + 32);

//     default:
//       return Math.floor(value - 273.15);
//   }
// }

// export function changT(option) {
//   switch (option) {
//     case 1:
//       return "C°";
//     case 2:
//       return "F";
//     case 3:
//       return "F°";

//     default:
//       return "C°";
//   }
// }

// export function changeSpeed(option, speed) {
//   switch (option) {
//     case 1:
//       return speed;
//     case 2:
//       let v = speed * 2.2369;
//       return v.toFixed(2);
//     default:
//       return speed;
//   }
// }




export function getLocation(callback) {
  const handleSuccess = (position) => {
    const { latitude: lat, longitude: lon } = position.coords;
    const coords = { lat, lon };
    const status = true;
    const error = "";
    callback(coords, error, status);
  };

  const handleError = (error) => {
    const coords = { lat: null, lon: null };
    const status = false;
    const errorMessage = `Error occurred while retrieving location: ${error.message}`;
    callback(coords, errorMessage, status);
  };

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  if (navigator.permissions) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        if (permissionStatus.state === "granted") {
          fetchLocation();
        } else if (permissionStatus.state === "prompt") {
          const coords = { lat: null, lon: null };
          const status = false;
          const errorMessage = "Please Enable Live Location.";
          callback(coords, errorMessage, status);
          fetchLocation();
        } else {
          const coords = { lat: null, lon: null };
          const status = false;
          const errorMessage =
            "Live Location permission denied. Please enable Live Location and click the Live Location button.";
          callback(coords, errorMessage, status);
        }
      })
      .catch((error) => {
        const coords = { lat: null, lon: null };
        const status = false;
        const errorMessage = `Error occurred while checking permission: ${error.message}`;
        callback(coords, errorMessage, status);
      });
  } else {
    const coords = { lat: null, lon: null };
    const status = false;
    const errorMessage = "Geolocation is not supported by this browser.";
    callback(coords, errorMessage, status);
  }
}
