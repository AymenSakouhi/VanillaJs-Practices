/*
let bm1, bm2, m1, m2, h1, h2;
m1 = 79;
m2 = 69;
h1= 1.76;
h2 = 1.76;

bm1 = m1 / (h1*h1);
bm2 = m2 / (h2*h2);

(bm1 < bm2 ) ? console.log('Josh has better BMI than Alex') : console.log('Alex has better BMI than Josh');
console.log(bm1,bm2);


switch (true) {
    case bm1>10 :
        console.log('what i need to know here is that is it positive');
        break;
    default:
        console.log('show nothing just say woooo');
}*/


/*let john = [100, 120, 103];
let mike = [120, 94, 123];
let mary = [120, 134, 105];

let average = (x) => {
    let total = 0;
    let avg = 0;
    for (let i = 0; i < x.length ; i++) {
         total += x[i];
    }
     avg = total / x.length;
    return avg;
};

console.log(average(john),average(mike),average(mary));


if (average(john) > average(mike) && average(john) > average(mary)) {
        console.log('John has the highest score');
    } else if (average(mike) > average(mary) && average(mike) > average(john)){
        console.log('Mike has the highest score');
    } else {
    console.log('Mary has the highest score');
}*/

/*
let tips  = [];
let bills = [100, 48, 268];

let calculateTip = (x) => {
    for (let i = 0; i < x.length; i++) {
        switch(true)  {
            case x[i]<50 : tips[i] = x[i]*0.2;bills[i] += tips[i];
            break;
            case (x[i]>50 && x[i]<200) : tips[i] = x[i]*0.15;bills[i] += tips[i];
            break;
            case x[i]>200 : tips[i] = x[i]*0.1; bills[i] += tips[i];
            break;
            default :
                console.log('Please check the table of bills');
        }
    }
};


console.log(bills);
calculateTip(bills);
console.log(tips);
console.log(bills);
*/

/*
let Aymen = {
    age : 26,
    weight : 76,
    height : 1.76,
    calcBMI : function () {
        this.BMI = this.weight/(this.height * this.height);
    }
};

let Melek = {
    age : 26,
    weight : 76,
    height : 1.78,
    calcBMI : function () {
        this.BMI = this.weight/(this.height * this.height);
    }
};
let Rania = {
    age : 26,
    weight : 55,
    height : 1.6,
    calcBMI : function () {
       return this.BMI = this.weight/(this.height * this.height);
    }
};

Aymen.calcBMI();
console.log(Aymen);
Melek.calcBMI();
Rania.calcBMI();

if (Aymen.BMI > Melek.BMI && Aymen.BMI > Rania.BMI) {
    console.log('Aymen Has the highest BMI');
} else if(Melek.BMI > Aymen.BMI && Melek.BMI > Rania.BMI) {
    console.log('Melek Has the highest BMI');
} else {
    console.log('Rania Has the highest BMI');
}
*/

let calcAverage = (t) => {
    let sum = 0;
    for (let i = 0; i < t.length; i++) {
        sum += t[i];
    }
    return sum / t.length;
};


let john = {
     age: 26,
     bills : [100, 48, 268, 180, 42],
     calcTips : function (x) {
        let tips= [];
        let total = x;
         for (let i = 0; i < x.length ; i++) {
             switch(true)  {
                 case x[i]<50 : tips[i] = x[i]*0.2;total[i] += tips[i];
                     break;
                 case (x[i]>50 && x[i]<200) : tips[i] = x[i]*0.15;total[i] += tips[i];
                     break;
                 case x[i]>200 : tips[i] = x[i]*0.1; total[i] += tips[i];
                     break;
                 default :
                     console.log('Please check the table of bills');
             }
         }
         this.tips = tips;
         return this.total = total;
     }
};



john.calcTips(john.bills);
console.log(john.bills,john.tips,john.total);
console.log('the bill average is equal to ' + calcAverage(john.total));
