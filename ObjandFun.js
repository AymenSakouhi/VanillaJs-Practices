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

/*Person.prototype.city = 'Fouchana';*/


let aymen = new Person('Aymen', 1994, 'Digital Campaign Manager',nickName);
let melek = new Person('Melek', 1993, 'Student', nickName);
aymen.presentation();
melek.presentation();
aymen.city(aymen.profession)(aymen.name);
melek.city(melek.profession)(melek.name);