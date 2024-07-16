import fs from "node:fs/promises";
import { URL } from "node:url";

const readPJson =  async () => {
  const pjsonpath = new URL("./package.json", import.meta.url).pathname;
  console.log(JSON.parse(await fs.readFile(pjsonpath)));
};

const writeFile = async () =>{
  const newFile = new URL('./demo.js', import.meta.url).pathname;
  await fs.writeFile(newFile, `console.log('hello')`)
}

readPJson();
writeFile();
