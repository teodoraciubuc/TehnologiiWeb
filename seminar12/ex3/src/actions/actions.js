export function addNote(content) {
  console.warn(content);
  return {
    type: "ADD_NOTE",
    payload: content,
  };
}
export function deleteNote(content) {
  return {
    type: "DELETE_NOTE",
    payload: content,
  };
}
