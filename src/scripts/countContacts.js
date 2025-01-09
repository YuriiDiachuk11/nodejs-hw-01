import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const countContacts = async () => {
  try {
    const numberOfContacts = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(numberOfContacts).length;
  } catch (error) {
    console.error('Cannot count contacts, try again', error);
  }
};

console.log(await countContacts());
