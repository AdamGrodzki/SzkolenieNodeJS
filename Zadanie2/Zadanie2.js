import fs from "fs";
import { Task1 } from "../Zadanie1/Zadanie1.js";

const createFiles = () => {
    const data = Task1();
    data.forEach((el) => {
        fs.writeFileSync(
            `${el.Miasto}-${el.Imie}-${el.Nazwisko}.json`,
            JSON.stringify(el)
        );
    });
}

createFiles();