var GetIntrinsic = require("get-intrinsic");
var typedArrays = require("available-typed-arrays");

var arrayIntrinsicNames = ["Array", "TypedArray"].concat(typedArrays);

function getCachedArrayIntrinsics() {
  var result = [];
  for (var i = 0; i < arrayIntrinsicNames.length; i++) {
    result.push(GetIntrinsic("%" + arrayIntrinsicNames[i] + "%"));
  }
  return result;
}
var arrayIntrinsics = getCachedArrayIntrinsics();

var toExport = {}

for (var i = 0; i < arrayIntrinsics.length; i++) {
  toExport[arrayIntrinsicNames[i]] = arrayIntrinsics[i]
}

module.exports = toExport