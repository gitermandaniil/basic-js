module.exports = function repeater (str, {
  repeatTimes = 1,
  separator = '+',
  addition,
  additionRepeatTimes = 1,
  additionSeparator = '|'
}) {
  const prepare = []

  for (let i = 0; i < repeatTimes; i++) {
    prepare.push(String(str))

    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        prepare.push(String(addition))
        if (j !== additionRepeatTimes - 1) prepare.push(additionSeparator)
      }
    }

    if (i !== repeatTimes - 1) prepare.push(separator)
  }

  return prepare.join('')
}
