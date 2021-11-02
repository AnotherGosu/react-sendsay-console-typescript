export default function validateJSON(stringJSON: string) {
  try {
    const json = JSON.parse(stringJSON);
    if (json && typeof json === 'object') return json;
  } catch (e) {
    return false;
  }
}
