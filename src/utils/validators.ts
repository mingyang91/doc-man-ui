export const isValidRequired = (
  value: string,
  message = 'Field is required.'
) => {
  const str = value.replace(/\s/g, '')
  return str !== undefined && str !== null && str !== '' ? undefined : message
}
