export class Question {
    imageFileName: string;
    answer1: string;
    answer2: string;
    answer3: string;
    correctAnswer: string;

    constructor(
        imageFileName: string,
        answer1: string,
        answer2: string,
        answer3: string,
        correctAnswer: string
    ) {
        this.imageFileName = imageFileName;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.correctAnswer = correctAnswer;
    }
}
