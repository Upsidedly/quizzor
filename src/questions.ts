import { combinedQuestionsArray } from "./generated-questions";
import { Question, QuestionType, simpleDefinitions } from "./helpers";

const numbers = `100 - cien
200 - doscientos
300 - trescientos
400 - cuatrocientos
500 - quinicientos
600 - seiscientos
700 - setecientos
800 - ochocientos
900 - novecientos
1000 - mil
`
//.trim().split('\n').map((v) => v.split(' - '))

export const questions: Question[] = [
	// ...(numbers.map((v) => ({
	// 	type: QuestionType.ShortText,
	// 	prompt: `What is this number [${v[0]}] in spanish?`,
	// 	answers: [v[1]]
	// })) as Question<QuestionType.ShortText>[]),
	// ...simpleDefinitions(numbers),
	...combinedQuestionsArray,
	// {
	// 	type: QuestionType.ShortText,
	// 	prompt: 'What is the present continuous form of the verb [bailar]?',
	// 	answers: ['bailando']
	// },
	// {
	// 	type: QuestionType.MultipleChoice,
	// 	prompt: 'Which of these verbs means [to be liked].',
	// 	choices: [
	// 		{ text: 'gustar', correct: true },
	// 		{ text: 'caminar' },
	// 		{ text: 'delectar' }
	// 	]
	// }
]