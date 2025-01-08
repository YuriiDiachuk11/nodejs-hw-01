import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    const contacts = data ? JSON.parse(data) : [];

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    console.log(`${number} new contacts added successfully!`);
  } catch (error) {
    console.error('Cannot add contacts, sorry', error);
  }
};

generateContacts(5);
