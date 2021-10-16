import json5 from "json5";
import { data } from "./mydata";
import * as yaml from 'js-yaml'

const myStringify: string = json5.stringify(data);
const myStringify2: string = yaml.dump(data)

console.log(`${myStringify} is my json5 string`);
console.log(`${myStringify2} is my jsyaml string`)