const DOMNodeCollection = require ('./dom_node_collection');

function $l(selector){
  // console.log(this);
  const array = [];
  if(selector instanceof HTMLElement){
    array.push(selector);
    return new DOMNodeCollection(array);
  }else {
    let elements = document.querySelectorAll(selector);
    elements = Array.from(elements);
    return new DOMNodeCollection(elements);
  }
}

window.$l = $l;