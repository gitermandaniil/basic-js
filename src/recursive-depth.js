module.exports = class DepthCalculator {
  calculateDepth (arr) {
    let depth = 1

    for (const item of arr) {
      if (Array.isArray(item)) {
        depth = Math.max(depth, this.calculateDepth(item) + 1)
      }
    }

    return depth
  }
}
