/** @ignore */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function sample(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)];
}
