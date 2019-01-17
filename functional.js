let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//urls: Imperative version:
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach((state) => {
    urls.push(state.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function functionalUrls(elements) {
  return elements.map((element) => urlify(element));
}

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach((element) => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

function functionalSingles(elements) {
  return elements.filter((element) => element.split(/\s+/).length === 1);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach((element) => {
    total += element;
  });
  return total;
}

console.log(imperativeSum(numbers));

function functionalSum(elements) {
  return elements.reduce((total, element) => {
    total += element;
    return total;
  }, 0);
}
console.log(functionalSum(numbers));
