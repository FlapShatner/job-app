export function findEmptyStrings(obj: { [s: string]: unknown } | ArrayLike<unknown>) {
    return Object.entries(obj).filter(([key, value]) => value === '').map(([key]) => key)
  }

  const requiredFields = ['firstName','lastName', 'email', 'phone', 'address', 'city', 'state', 'zip', 'country', 'pitch', 'appeal']

  export const missingRequired = (array: string[]) => {
    const missing = requiredFields.filter(field => array.includes(field));
    console.log(missing)
    return missing
  };