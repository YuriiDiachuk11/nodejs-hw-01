import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();

      await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');

      return contacts;
    } else {
      console.log('No contacts to remove');
    }
  } catch (error) {
    console.error('Oops, some troubles', error);
  }
};

removeLastContact();
