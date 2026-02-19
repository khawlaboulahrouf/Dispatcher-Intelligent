export function Validation(nameT) {
  const regex = /^[A-Za-z0-9 ]{5,50}$/;
  return regex.test(nameT);
}