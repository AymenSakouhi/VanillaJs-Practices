
(function () {
    let score = 0;
    let Question = function (question,answers,correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.randomQuestion = function (arr) {
            let x = arr[Math.floor((Math.random() * 3))]
            let q =x.question;
            let a =x.answers;
            console.log('---------');
            console.log('Question is: ' + q);
            console.log('Choose the answers from: ' + '\n 1 - '+a[0]+' \n 2 - '+a[1]+' \n 3 - '+a[2]+'');
            console.log('---------');
            return  x;
        }
        this.rightAnswer = function () {
            let x = this.randomQuestion(questions);
            let z = prompt('Choose what you think is the right answer:')
            switch (z) {
                case '1' :
                    if (x.correct==0){
                        console.log('Right Answer');
                        score++;
                        console.log(score);
                        return z;
                    }
                    else
                    {console.log('You chose wrongly, Try again');

                    }
                    break;
                case '2' :
                    if (x.correct==1){
                        console.log('Right Answer');
                        score++;
                        console.log(score);
                        return z;
                    }else {console.log('You chose wrongly, Try again');
                    }
                    break;
                case '3' :
                    if (x.correct==2){
                        console.log('Right Answer');
                        score++;
                        console.log(score);
                        return z;
                    }else {console.log('You chose wrongly, Try again');
                    } break;

                case 'exit' :
                    console.log('you are really exiting the game');
                    return z;
                    break;

                default :
                    console.log('you chose a wrong number, please choose between 0, 1 and 2.');
            }

        };
        this.rebelote = function (){
            let z = this.rightAnswer(questions);
            switch (z) {
                case 'exit'    :
                    console.log('You exited the game');
                    console.log('You exited the game');
                    console.log('You exited the game');
                    console.log('You exited the game');
                    break;
                default :
                    this.rebelote();
            }
        }

    }

    let questions = [];
    questions[0] = new Question('Where is Nikola Tesla from?',['Tunisia','USA','SERBIA'],2);
    questions[1] = new Question('What is the capital of Russia',['Moscow','KievskayaRus','Saint Petersburg'],0);
    questions[2] = new Question('When was the last tunisian revolution',['2010','2011','2012'],1);

    questions[0].rebelote();
})();

