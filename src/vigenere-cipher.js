class VigenereCipheringMachine {
  constructor (isReverse) {
    this.isReverse = isReverse === false
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  encrypt (message, key) {
    this.checkParams(message, key)
    return this.getString(message, key)
  }

  decrypt (message, key) {
    this.checkParams(message, key)
    return this.getString(message, key, true)
  }

  checkParams (message, key) {
    if (!message || !key) throw new Error()
  }

  getString (message, key, isDecrypt = false) {
    let string = ''

    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!key[j]) j = 0

      if (!this.alphabet.includes(message[i])) {
        string += message[i]
        continue
      }

      let keyIndex = this.alphabet.indexOf(key[j])
      let keyRow = this.alphabet.slice(keyIndex, this.alphabet.length).concat(this.alphabet.slice(0, keyIndex))
      let messageIndex = (isDecrypt ? keyRow : this.alphabet).indexOf(message[i])

      string += (isDecrypt ? this.alphabet : keyRow)[messageIndex]
      j++
    }

    return this.isReverse ? string.split('').reverse().join('') : string
  }
}

module.exports = VigenereCipheringMachine
