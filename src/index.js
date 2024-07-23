import * as fs from 'node:fs/promises';
import { PATH_DB } from './constants/contacts';

fs.readFile(PATH_DB, { encoding: 'UTF-8' })
  .then((data) => JSON.parse(data))
  .catch((error) => console.error(error));
