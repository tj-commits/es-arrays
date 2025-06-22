var GetIntrinsic = require("get-intrinsic");
var __global = require("global/window");
var hasOwn = require("hasown");
var $Float16Array = require("@petamoriken/float16").Float16Array;

var arrayIntrinsicNames = ["Array", "TypedArray", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "Float16Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"];

function getCachedArrayIntrinsics() {
  var result = [];
  for (var i = 0; i < arrayIntrinsicNames.length; i++) {
    var intrinsicName = arrayIntrinsicNames[i];
    var intrinsic;
    if (intrinsicName === "Float16Array" && !hasOwn(__global, "Float16Array")) {
      intrinsic = $Float16Array;
    } else {
      intrinsic = GetIntrinsic("%" + intrinsicName + "%");
    }
    result.push(intrinsic);
  }
  return result;
}
var arrayIntrinsics = getCachedArrayIntrinsics();

var toExport = {}

for (var i = 0; i < arrayIntrinsics.length; i++) {
  toExport[arrayIntrinsicNames[i]] = arrayIntrinsics[i]
}

module.exports = toExport