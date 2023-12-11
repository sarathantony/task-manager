import { NEW_LINE } from '../constants'

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

function prepareCSV (data) {
  if (!data.length) return ''

  const jsonData = data.map((row) => {
    const [_, { question, options, participants}] = row
    const optionList = options.map(({ answer, score }) => `${answer}: ${score}${NEW_LINE}`).join(' ')

    return { question, participants, optionList }
  })

  return jsonData
}

export {
  capitalizeFirstLetter,
  toPascalCase,
  prepareCSV
}
