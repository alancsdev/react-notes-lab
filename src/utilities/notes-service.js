import * as notesAPI from './notes-api';

export async function createNote(noteData) {
  const note = await notesAPI.addNote(noteData);

  return note;
}
