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

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten (name) {
  return [...kittens,name]
}

function prependKitten (name) {
  return [name, ...]
}