module.exports = function transform (arr) {
  if (!Array.isArray(arr)) throw new Error()

  const transformed = []

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++
        break

      case '--discard-prev':
        if (transformed.length && arr[i - 2] !== '--discard-next') transformed.pop()
        break

      case '--double-next':
        if (i < arr.length - 1) transformed.push(arr[i + 1])
        break

      case '--double-prev':
        if (i && arr[i - 2] !== '--discard-next') transformed.push(arr[i - 1])
        break

      default:
        transformed.push(arr[i])
    }
  }

  return transformed
}
