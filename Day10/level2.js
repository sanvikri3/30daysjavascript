const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([4, 5, 6, 7, 8]);
// ques1
function union(setA, setB) {
    let unionSet = new Set(setA);
    for (let elem of setB) {
        unionSet.add(elem);
    }
    return unionSet;
}

const unionAB = union(a, b);
console.log('Union of a and b:', unionAB);

// ques2
function intersection(setA, setB) {
    let intersectionSet = new Set();
    for (let elem of setA) {
        if (setB.has(elem)) {
            intersectionSet.add(elem);
        }
    }
    return intersectionSet;
}

const intersectionAB = intersection(a, b);
console.log('Intersection of a and b:', intersectionAB);

// ques3
function difference(setA, setB) {
    let differenceSet = new Set(setA);
    for (let elem of setB) {
        differenceSet.delete(elem);
    }
    return differenceSet;
}

const differenceAWithB = difference(a, b);
console.log('Difference of a with b:', differenceAWithB);