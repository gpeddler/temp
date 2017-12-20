import { QUESTIONS } from "application/modules/questions";
import { Question } from "application/modules/questions/model";
import { REDIRECT_LINK } from "application/modules/sitemap";
import { List } from "immutable";
import * as React from "react";

const styles = require("./styles.pcss");

interface State {
    step: number;
    countCorrectAnswer: number
}

export class QuestionsRoute extends React.Component<{}, State> {
    state = {
        step: 0,
        countCorrectAnswer: 0
    };

    render() {
        const { step } = this.state;
        const question = QUESTIONS[step];
        return (
            <div className={ styles.wrap }>
                <img src={ REDIRECT_LINK.IMAGE(question.imageFileName) } className={ styles.image } />
                { this.renderButtons(question) }
            </div>
        )
    }

    private renderButtons = (question: Question) => (
        List([
            question.answer1,
            question.answer2,
            question.answer3,
            question.correctAnswer
        ]).sortBy(Math.random).map((answer, i) =>
            <button
                key={ `buttons-${answer}` }
                className={ styles[`answer${i + 1}`] }
                onClick={ this.onClickAnswer(answer === question.correctAnswer) }
            >
                { answer }
            </button>
        )
    );

    private onClickAnswer = (correct: boolean) => () => {
        const { step, countCorrectAnswer } = this.state;
        const nextCount = correct ? countCorrectAnswer + 1 : countCorrectAnswer;

        if (step + 1 >= QUESTIONS.length) {
            location.href = REDIRECT_LINK.RESULT_PAGE(nextCount);
            return;
        }

        this.setState({
            step: step + 1,
            countCorrectAnswer: nextCount
        })
    }

}
