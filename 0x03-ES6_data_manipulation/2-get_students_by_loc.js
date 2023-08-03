/**
 * Retrieves students in a particular location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * @param {String} city - The location.
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
