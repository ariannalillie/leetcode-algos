// const pipedMetadata = (duration, language, date, referenceNumber) => {
//   const data = [duration, language, date, referenceNumber];
//   let piped = "";

//   data.forEach((el) => {
//     el ? (piped += `${el} | `) : "";
//   });

//   return piped.slice(0, piped.length - 3);
// };

const pipedMetadata = (duration, language, date, referenceNumber) => {
    const data = [duration, language, date, referenceNumber];
    
    let piped = data.map(el => {
        return el ? `${el} | ` : "";
    })

    let pipedString = piped.join('');
    return pipedString.slice(0, pipedString.length - 3)
  };

const duration = "22:46:40";
const language = null;
const date = "03/18/2013";
const referenceNumber = "UE264UE264";

console.log(pipedMetadata(duration, language, date, referenceNumber));
