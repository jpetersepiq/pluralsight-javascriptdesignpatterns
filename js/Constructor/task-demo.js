// Course: Javascript Practical Design Patterns - Jonathan Mills
// task demo - Objects in Javascript
var task = {};

task.title = 'My task';
task.description = 'My Description';
task.toString = function() {
  return this.title + ' ' + this.description;
}

console.log(task.toString());

var task = {
  title: 'New Title',
  description: 'New Description'
};

task.toString = function() {
  return this.title + ' ' + this.description;
}

console.log(task.toString());

//new -> Creates a constructor function

 
