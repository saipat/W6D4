class DOMNodeCollection{
  constructor(nodes){
    this.nodes = nodes;
  }
  
  html (string) {
    if (string === undefined) {
      //return inner html of the first node inthe array
      return this.nodes[0].innerHTML;
      
    } else {
      //string will become the innerhtml for each of the nodes
      for(let i = 0; i< this.nodes; i++) {
        this.nodes[i].innerHTML = string;
      }
    }
  }
  
  empty () {
    for(let i = 0; i< this.nodes; i++) {
      this.nodes[i].html("");
    }
  }
  
  append (child) {
    //string
    //jquery object
    //htmlElement
    if (typeof child === "string") {
      for(let i = 0; i < this.length; i++) {
        this[i].innerHTML += child;
      }
    } else if (typeof child === "object" && !(child instanceof DOMNodeCollection)) {
      child = $l(child);
      this.nodes.push(child);  
    } else {
      this.nodes.push(child);
    }
  }
  
  addClass (name) {
    for(let n = 0; n < this.nodes.length; n++){
      const node = this.nodes[n];
      node.classList.add(name);
    }
  }
  
  removeClass(oldClass) {
    for(let n = 0; n < this.nodes.length; n++){
      const node = this.nodes[n];
      node.classList.remove(oldClass);
    }
  }

  attr (dataType, value) {
    if (value === undefined) {
      return this.nodes[0].getAttribute(dataType);
    } else {
      for(let n = 0; n < this.nodes.length; n++){
        const node = this.nodes[n];
        node.setAttribute(dataType, value);
      }
    }
  }
  
  children(){
    const childArray = [];
    for(let n=0; n<this.nodes.length; n++){
      const node = this.nodes[n];
      for(let i = 0; i< node.children.length; i++){
        childArray.push(node.children[i]);
      }
    }
    return new DOMNodeCollection(childArray);
  }
  
  parent () {
    const parentArray = [];
    for(let n=0; n<this.nodes.length; n++){
      const node = this.nodes[n];
      parentArray.push(node.parentNode);
    }
    return new DOMNodeCollection(parentArray);
  }
  
  find (selector) {
    const selectorArray = [];
    const nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
      selectorArray.push(nodeList[i]);
    }
    return new DOMNodeCollection(selectorArray);
  }
  
}

module.exports = DOMNodeCollection;