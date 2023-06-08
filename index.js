cats = ["Milo", "Otis", "Garfield"];
function cats(){
  console.log(cats)
}
cats;

function destructivelyAppendCat(name){
  cats.push ('Ralph')
}
destructivelyAppendCat;

function destructivelyPrependCat(name){
  cats.unshift ('Bob')
}
destructivelyPrependCat;

function destructivelyRemoveLastCat(){
  cats.pop()
}
destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat(){
  cats.shift()
}
destructivelyRemoveFirstCat;

function appendCat(name) {
  const newCats = cats.slice();
  newCats.push(name);
  return newCats;
}
function prependCat(name) {
  const newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}
function removeFirstCat(name) {
  const newCats = cats.slice();
  newCats.shift(name);
  return newCats;
}
function removeLastCat(name) {
  const newCats = cats.slice();
  newCats.pop(name);
  return newCats;
}


