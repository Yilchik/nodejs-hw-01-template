import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = [];

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  const filePath = path.resolve('src', 'db', 'db.json');
  let currentContacts = [];

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    currentContacts = JSON.parse(data);
  } catch (error) {
    console.error(error);
  }

  currentContacts = currentContacts.concat(contacts);

  await fs.writeFile(
    filePath,
    JSON.stringify(currentContacts, null, 2),
    'utf-8',
  );
};

generateContacts(5);
