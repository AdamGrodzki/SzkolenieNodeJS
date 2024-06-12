import fs from "fs"

export const Task1 = () => {
  try {
    const data = fs.readFileSync("../dane.json");
    const dataParsed = JSON.parse(data);
    console.log(dataParsed);
    return dataParsed;
  } catch (err) {
    console.log(err);
  }
}
Task1()






















