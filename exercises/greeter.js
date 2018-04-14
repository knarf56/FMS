var name = prompt('What is your name?');

var checkName = function(){
  if(name === "") {
    name = prompt(`What is your name? I'm Samuel L. Jackson! Stop playing with me muthafucka!`);

    checkName(); // repeats until a name exists
  }
}

checkName(); // kicks off the name-checking the first time

alert('Hello ' + name + '! ' + `It wasn't that hard, was it?`);
