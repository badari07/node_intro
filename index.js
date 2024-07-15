#!/usr/bin/env node

//import  data, { count } from "./utils/utils.js";
import fs from "fs;";
import http from "node:http";
import * as util from "./utils/index.js";

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now(),
};

console.log(newNote, util.count(4), util.name);
