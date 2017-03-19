'user static'

// object -> map 으로 변환.
exports.objToStrMap = (obj) => {
  let strMap = new Map()
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k])
  }
  return strMap
}
