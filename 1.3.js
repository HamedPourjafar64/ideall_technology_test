// Imperative: Flatten an Array
function impFlattenArray(arr) {
    var flattenedArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var nestedArray = impFlattenArray(arr[i]);
            flattenedArray = flattenedArray.concat(nestedArray);
        } else {
            flattenedArray.push(arr[i]);
        }
    }

    return flattenedArray;
}

// Input array
var nestedArray = [4, [[5], [6, [7], 8], 9, 10]];

// Call the flattenArray function
var flattenedArray = impFlattenArray(nestedArray);

console.log(flattenedArray); // Output: [4, 5, 6, 7, 8, 9, 10]



// Declarative: Flatten an Array
function decFlattenArray(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? decFlattenArray(toFlatten) : toFlatten);
    }, []);
}


