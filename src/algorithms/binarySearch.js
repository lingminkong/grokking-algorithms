"use strict";
exports.__esModule = true;
/*
 *   list must be a sorted array
 *   returns the index of the target in the list if found
 *   returns undefined if not found
 */
var binarySearch = function (list, target) {
    var notFoundMessage = "".concat(target, " not found in the list");
    var length = list.length;
    if (length === 0) {
        return undefined;
    }
    var min = 0;
    var max = list.length - 1;
    while (min <= max) {
        var mid = Math.floor((max + min) / 2);
        if (list[mid] === target) {
            return mid;
        }
        if (list[mid] > target) {
            max = mid - 1;
        }
        if (list[mid] < target) {
            min = mid + 1;
        }
    }
    return undefined;
};
exports["default"] = binarySearch;
