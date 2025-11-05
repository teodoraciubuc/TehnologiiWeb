import fs from "fs";
import { rimraf } from "rimraf";

const folderName = "./testDir";
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
  console.log(` Directorul "${folderName}" a fost creat.`);
}

const filePath = `${folderName}/fisier.txt`;
fs.writeFileSync(filePath, "Acesta este un fișier creat automat.");
console.log(` Fișierul "${filePath}" a fost creat.`);

const content = fs.readFileSync(filePath, "utf-8");
console.log(`Conținutul fișierului: "${content}"`);

await rimraf(folderName);
console.log(` Directorul "${folderName}" a fost șters complet.`);
