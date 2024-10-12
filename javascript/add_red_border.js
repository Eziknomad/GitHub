// write a function to  find the longest common prefix string amongst an array of strings.
// find all images without alternate text.
// and add a red border to each image without alternate text.
// Test case 1
// Input: ["flower","flow","flight"]
// Output: "fl"
// Test case 2
// Input: ["dog","racecar","car"]
// Output: ""
// Test case 3
// Input: ["a"]
// Output: "a"

function findLongestCommonPrefix(strs) {
    let prefix = '';
    if (strs.length === 0) {
        return prefix;
    }
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix = prefix + char;
    }
    return prefix;
}

function findImagesWithoutAltText() {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        if (!images[i].alt) {
            images[i].style.border = '2px solid red';
        }
    }
}

// Test case 1
console.log(findLongestCommonPrefix(["flower", "flow", "flight"])); //Output: "fl"
// Test case 2
console.log(findLongestCommon)