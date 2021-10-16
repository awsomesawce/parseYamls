#!/usr/bin/env node

import { data } from '/mydata';
import * as json5 from 'json5';
import * as yaml from 'js-yaml';

// Do the actual parsing here and stringifying
console.table(data);
/* const str1 = json5.stringify(data);
const str2 = yaml.dump(data);

console.log(`${str1} is my json5 string`);
console.log(`${str2} is my jsyaml string`);
 */