/*
let nickName = function(a) {
    return a + 'daymoun'
};

let Person = function (name, yearOfBirth, profession,fn) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.profession = profession;
    this.presentation = function () {
        console.log('this guy\'s name is ' + this.name + ' and he is a ' + this.profession + ' But his real name is '+ fn(this.name));
    };
    this.city = function (job) {
        if(job === 'Digital Campaign Manager'){
            return function(name){
                console.log('Ahla si  ' + name + ' , from fouchana');
            }
        } else if(job === 'Student'){
            return function(name){
                console.log('Ahla si  ' + name + ' , from Monastir');
            }
        } else{
            console.log('GHALTA ALLAH GHALEB');
        }
    };
};

Person.prototype.calculateAge = function(yearOfBirth){
    return (2020 - this.yearOfBirth);
};

/!*Person.prototype.city = 'Fouchana';*!/


let aymen = new Person('Aymen', 1994, 'Digital Campaign Manager',nickName);
let melek = new Person('Melek', 1993, 'Student', nickName);
aymen.presentation();
melek.presentation();
aymen.city(aymen.profession)(aymen.name);
melek.city(melek.profession)(melek.name);*/

/*let isMyCarPolished = (c) => {
    switch (c) {
        case 'Pink' :
            console.log('that pinky pinky bro');
            break;
        case 'Blue' :
            console.log('that manly manly brother');
            break;
        default :
            console.log('NAAH IS NOT');
    }
}

let Car = function(name, house, year, color, fn) {
    this.name = name;
    this.house = house;
    this.year = year;
    this.color = color;
    this.newOrNot = function (){
        if(2020 - this.year>= 10){
            console.log('Your car is old fam');
        } else {
            console.log('your car is new bang bang fam');
        }
    };
    this.polish = function (){
        return fn(this.color);
    };
}

Car.prototype.city = 'BlizTown';

Car.prototype.mover = function (car,town){
    return function (name){
        console.log(car + ' is moving from ' + town + ' to the new city '+ name)
    }
}

let orka = new Car('Orka', 'BMW', '2008', 'Pink',isMyCarPolished);
let rika = new Car('Rika', 'Chevrolet', '2018', 'Blue', isMyCarPolished);
orka.newOrNot();
rika.newOrNot();
orka.polish();
rika.polish();
console.log('----------');
orka.city;
rika.city;
orka.mover(orka.name,orka.city)('HollyNi88a');
rika.mover(rika.name,rika.city)('MasterWood');*/

/*function InterviewQuestion(job) {
    let a,b,c;
    a = ' Can you explain what UX design is?';
    b = ' What subject do you teach?';
    c = ' What is your main job?';
    switch(job) {
        case 'Designer' :
            return function (name) {
                console.log('Hi, ' + name + a);
            }
            break;
        case 'Teacher' :
            return function (name) {
                console.log('Hello, ' + name + b);
            }
            break;
        default :
            return function (name) {
                console.log('Salut, ' + name + c);
            }
    }
}

let designer = InterviewQuestion('Designer');
let teacher = InterviewQuestion('Teacher');
let anything = InterviewQuestion('Software Engineer');


anything('Ranoun');
designer('Melek');
teacher('Aymen');*/


let Person = function (name,age,position) {
    this.name = name;
    this.age = age;
    this.position = position;
}


let john = new Person('John',18,'Designer');
let emily = new Person('Emily', 21, 'Computer Scientist');

Person.prototype.showPosition = function (erp,years) {
    console.log(this.name +' is working for the company '+erp+' for '+years+' years.');
}

john.showPosition('Libertex',10);
john.showPosition.call(emily,'WorkSpace', 11);
john.showPosition.apply(emily,['tolal',20]);
let showPosYears = john.showPosition.bind(john,'Libertex');
showPosYears(15);
















