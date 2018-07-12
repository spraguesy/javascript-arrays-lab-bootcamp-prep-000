// Add your functions and code here

kittens = ['Bill','Bob','Jane']
function destructivelyAppendKitten (element) {
  kittens.push(element);
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens
}

function destruictivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}