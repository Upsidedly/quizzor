import { Question, QuestionType } from "@/helpers";

const revolutionQuestions = [
	{
		type: QuestionType.MultipleChoice,
		prompt: 'Define the concept of a revolution.',
		choices: [
			{ text: 'An overthrow and replacement of an established government or political system.', correct: true },
			{ text: 'A gradual shift in societal norms.' },
			{ text: 'A peaceful transition of power.' },
			{ text: 'A change in economic policies only.' },
		],
	},
	{
		type: QuestionType.Multiselect,
		prompt: 'What are the types of revolutions',
		choices: [
			{ text: 'Economic', correct: true },
			{ text: 'Political', correct: true },
			{ text: 'Social & Cultural', correct: true },
			{ text: 'Technological' },
			{ text: 'Emotional' },
			{ text: 'Religious' },
		],
	},
	{
		type: QuestionType.MultipleChoice,
		prompt: 'What is the Fever model? In which stage does direct action occur?',
		choices: [
			{ text: 'Incubation' },
			{ text: 'Symptomatic', correct: true },
			{ text: 'Crisis' },
			{ text: 'Convalescence' },
		],
	},
	{
		type: QuestionType.MultipleChoice,
		prompt: 'Explain the Crisis stage in the Fever model of a revolution.',
		choices: [
			{ text: 'A period of rest and recovery.' },
			{ text: 'The stage involving direct action and competition between sides.', correct: true },
			{ text: 'The initial phase of revolutionary ideas.' },
			{ text: 'A time of reflection and contemplation.' },
		],
	},
	{
		type: QuestionType.MultipleChoice,
		prompt: 'How does a rebellion differ from a revolution?',
		choices: [
			{ text: 'Results in a complete change of government or social structure' },
			{ text: 'Does not result in any fundamental changes', correct: true },
			{ text: 'Both are the same' },
			{ text: 'Rebellion is more intense than revolution' },
		],
	},
	{
		type: QuestionType.Multiselect,
		prompt: 'Provide examples of rebellions from the given table.',
		choices: [
			{ text: 'Tacky’s Rebellion', correct: true },
			{ text: 'Morant Bay Rebellion', correct: true },
			{ text: 'The Haitian Rebellion' },
			{ text: 'Sam Sharpe Rebellion', correct: true },
		],
	},
	{
		type: QuestionType.MultipleChoice,
		prompt: 'What characterizes an economic revolution?',
		choices: [
			{ text: 'Rapid change in the economic system or system of production of a society', correct: true },
			{ text: 'Gradual change in the economic system' },
			{ text: 'No change in the economic system' },
			{ text: 'Only affects a small group in society' },
		],
	},
	{
		type: QuestionType.MultipleChoice,
		prompt: 'Define a political revolution.',
		choices: [
			{ text: 'An uprising of common people against the government' },
			{ text: 'A rapid change in the political system', correct: true },
			{ text: 'A peaceful transition of power' },
			{ text: 'A change in the legal system only' },
		],
	},
	{
		type: QuestionType.Multiselect,
		prompt: 'Select the political revolutions',
		choices: [
			{ text: 'The Haitian Revolution', correct: true },
			{ text: 'The Cuban Revolution', correct: true },
			{ text: 'The Agrarian Revolution' },
			{ text: 'The Industrial Revolution' }
		]
	}
] satisfies Question[];

export const historyQuestions = [...revolutionQuestions] as Question[];