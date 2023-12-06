import { Question, QuestionType } from "@/helpers";

const revolutionQuestions = [
	{
		type: QuestionType.ShortText,
		prompt: 'Define revolution.',
		answers: ['A sudden or complete change in something', 'A radical and pervasive change in society and the social structure', 'An overthrow and replacement of an established government or political system by the people governed'],
	},
	{
		type: QuestionType.Multiselect,
		prompt: 'What are the types of revolutions?',
		choices: [
			{ text: 'Economic', correct: true },
			{ text: 'Political', correct: true },
			{ text: 'Social & Cultural', correct: true },
			{ text: 'Technological' },
		],
	},
	{
		type: QuestionType.MultipleChoice,
		prompt: 'What is the Incubation Stage of a revolution?',
		choices: [
			{ text: 'The stage involving direct action as a result of causes' },
			{ text: 'The stage of recovery from extreme disruptions' },
			{ text: 'The stage when symptoms start to show' },
			{ text: 'The stage when causes of revolution appear', correct: true },
		],
	},
	{
		type: QuestionType.ShortText,
		prompt: 'Explain the Crisis Stage of a revolution.',
		answers: ['The make or break part of the struggle involving conflict between for and against sides', 'Successful revolutions survive this stage, and ones that fail are rebellions'],
	},
	{
		type: QuestionType.MultipleChoice,
		prompt: 'What is the Convalescence stage of a revolution?',
		choices: [
			{ text: 'The recovery stage from the extreme disruptions of the crisis stage', correct: true },
			{ text: 'The stage involving street-level riots and publications' },
			{ text: 'The stage when the individual is at their worst and may either get better or not recover' },
			{ text: 'The recovery stage where the person will eventually be healthy again' },
		],
	},
	{
		type: QuestionType.ShortText,
		prompt: 'Distinguish between revolution and rebellion.',
		answers: ['A revolution is successful, while a rebellion fails.'],
	},
	{
		type: QuestionType.Multiselect,
		prompt: 'Provide examples of political and economic revolutions from the 17th to the 20th century.',
		choices: [
			{ text: 'Haitian Revolution', correct: true },
			{ text: 'French Revolution', correct: true },
			{ text: 'Cuban Revolution', correct: true },
			{ text: 'Industrial Revolution', correct: true },
			{ text: 'Agrarian Revolution', correct: true },
		],
	},
] satisfies Question[];

export const historyQuestions = [...revolutionQuestions] as Question[];