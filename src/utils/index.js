/**
 * (capitalize) => (Capitalize)
 * 
 * @param {value} string 
 * @returns string
 */
function capitalizeFirstLetter(value) {
  if (!value) return ''

  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * (to pascal case) => (To Pascal Case)
 * 
 * @param {value} string 
 * @returns string
 */
function toPascalCase(value) {
  if (!value) return ''

  return value.split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ')
}

export {
  capitalizeFirstLetter,
  toPascalCase
}
