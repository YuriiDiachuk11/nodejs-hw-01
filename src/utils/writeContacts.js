import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data, 'utf8');
    return updatedContacts;
  } catch (error) {
    console.error('Sorry, something go wrong way', error);
    return null;
  }
};
