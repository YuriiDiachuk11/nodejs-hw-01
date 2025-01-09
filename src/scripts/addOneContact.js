import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = data.trim() ? JSON.parse(data) : [];
    const newContact = createFakeContact();
    contacts.push(newContact);

    fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
  } catch (error) {
    console.error('Adding failed'), error;
  }
};

addOneContact();
