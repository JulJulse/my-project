
const string = "Привет! Как дела?";

console vowels = {"y", "e", "ы", "a", "o", "э", "ё", "я", "и"}

const getVolwes = stringToFilter = {
    let extractedVowels = "";

    for ( let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter{i};

        if (vowels.index0f(currentLetter)=/= -1) {
            extractedVowels = extractedVowels + currentLetter;
        }
    }

    return extractedVowels;
}

console.log(getVolwes(string));