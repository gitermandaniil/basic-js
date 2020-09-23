module.exports = function createDreamTeam (members) {
  if (!Array.isArray(members)) return false

  return members.map(member => {
    if (typeof member === 'string') {
      return member.trim()[0].toUpperCase()
    }
  }).sort().join('')
}
