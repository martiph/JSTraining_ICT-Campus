var body = document.getElementsByTagName('body')[0];
var personList = document.createElement('ul');
body.appendChild(personList);

function person(name,vorname,alter){
    this.name = name;
    this.vorname = vorname;
    this.alter = alter;

    this.getAge = function(){
        return this.alter;
    }
}

person.prototype.getName = function(){
    return this.name + " " + this.vorname + " " + this.alter;
}


var persons = new Array();

persons.push(new person("Baiutti","Joris",26));
persons.push(new person("Kahr","Roman",23));
persons.push(new person("Zani","Noah",26));



persons.forEach((e,i) => {
    var listElement = document.createElement('li');
    listElement.innerText = e.getName();
    personList.appendChild(listElement);
});


