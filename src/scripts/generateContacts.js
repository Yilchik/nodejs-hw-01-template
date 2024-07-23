import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = [];

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  let currentContacts = [];

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    currentContacts = JSON.parse(data);
  } catch (error) {
    console.error(error);
  }

  currentContacts = currentContacts.concat(contacts);

  await fs.writeFile(
    PATH_DB,
    JSON.stringify(currentContacts, null, 2),
    'utf-8',
  );
};

generateContacts(3);
