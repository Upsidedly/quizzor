import { Question, QuestionType } from "@/helpers";
import { questions } from "@/questions";
import { Link } from "@nextui-org/react";

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

const agrarianQuestions = [
	// Definition
	{
		title: 'Agrarian Revolution: Definition',
		type: QuestionType.ShortText,
		prompt: 'When did the Agrarian revolution begin?',
		answers: ['18th century', /18(th)? +century/]
	},
	{
		title: 'Agrarian Revolution: Definition',
		type: QuestionType.ShortText,
		prompt: 'When did the Agrarian revolution end?',
		answers: ['19th century', /19(th)? +century/]
	},
	{
		title: 'Agrarian Revolution: Definition',
		type: QuestionType.ShortText,
		prompt: 'The agrarian revolution is a _ of the _ system (comma separated)',
		answers: ['progressive modification, conventional agricultural', /progressive (modification|change), (conventional|traditional) agricultural/]
	},
	{
		title: 'Agrarian Revolution: Definition',
		type: QuestionType.Multiselect,
		prompt: 'Which changes occured as a result of this revolution',
		choices: [
			{ text: 'Reallocation of land ownership to make more compact farms', correct: true },
			{ text: 'Increased investment in technical improvements,', correct: true },
			{ text: 'New farming techniques such as crop rotation', correct: true },
			{ text: 'Revitalize old farming techniques and make them better, i.e. ' }
		]
	},
	// Concepts
	{
		type: QuestionType.ShortText,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Define Revolution',
		answers: ['Overthrow and replacement of an established government or political system; A radical or pervasive change in society and the social structure', 'overthrow and replacement of an established government or political system', /(a )?radical or pervasive change in society and the (social|societal) structure/]
	},
	{
		type: QuestionType.ShortText,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Define Agrarian',
		answers: ['Referring to land used for farming', /(Relating|Reffering) to (land used for farming|farmland)/]
	},
	{
		type: QuestionType.ShortText,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Define economic revolution',
		answers: ['Rapid change in the economic system or system production of a society', /Rapid change in the (economic system|system production)(or (system production|economic system))? of (a )?society/]
	},
	{
		type: QuestionType.ShortText,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Define political revolution',
		answers: ['Upheaval in which the government is replaced or the form of government altered', '!upheaval in which the form of government is altered']
	},
	{
		type: QuestionType.ShortText,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Define political revolution',
		answers: ['Upheaval in which the government is replaced or the form of government altered', '!upheaval in which the form of government is altered']
	},
	{
		type: QuestionType.ShortText,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Define technological innovations',
		answers: ['New tools or processes that help humans solve problems']
	},
	{
		type: QuestionType.MultipleChoice,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Define seed drill',
		choices: [
			{ text: 'A sowing device that sows the seeds precisely in the soil at proper depth and distance and then covers them with soil ', correct: true },
			{ text: 'A heat engine that performs mechanical work using steam as its working fluid' },
			{ text: 'A spinning machine powered by water that produced a cotton yarn suitable for warp' },
			{ text: 'A type of weaving shuttle' }
		]
	},
	{
		type: QuestionType.Multiselect,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'What does cropy rotation consist of',
		choices: [
			{ text: 'Improving soil health', correct: true },
			{ text: 'Planting different crops sequentially on the same plot of land', correct: true },
			{ text: 'Planting different crops at the same time on different plots of land' },
			{ text: 'Optimizing nutrients in the soil', correct: true },
			{ text: 'Welcoming weed pressure and combating pests' },
			{ text: 'Allows some pests to maximize soil nutrients' },
			{ text: 'Combat pests and weed pressure', correct: true }
		]
	},
	{
		type: QuestionType.MultipleChoice,
		title: 'Agrarian Revolution: Concepts',
		prompt: <>What is the enclosure act?</>,
		choices: [
			{ text: 'A push in the 18th-19th century to take formerly common land and change it to walled or fenced private land', correct: true },
			{ text: 'A push in the 18th-19th century to wall and fence common land' },
			{ text: 'A push in the 18th-19th century to make privatized land that was once common land and return it to common land' },
		]
	},
	{
		type: QuestionType.ShortText,
		title: 'Agrarian Revolution: Concepts',
		prompt: 'Maring was a commong _ technique for farming in the _ (era) where farmers spread _ containing _ onto their soil. (comma separated)',
		answers: ['fertilization, Middle Ages, clay, lime carbonate']
	}
] satisfies Question[];

// export const historyQuestions = [
// 	{
// 		type: QuestionType.Multiselect,
// 		title: 'Agrarian Revolution: Concepts',
// 		prompt: <>What is the enclosure act?</>,
// 		choices: [
// 			{ text: 'A push in the 18th-19th century to take formerly common land and change it to walled or fenced private land', correct: true },
// 			{ text: 'A push in the 18th-19th century to wall and fence common land' },
// 			{ text: 'A push in the 18th-19th century to make privatized land that was once common land and return it to common land' },
// 		]
// 	}
// ] satisfies Question[];
export const historyQuestions = [...revolutionQuestions, ...agrarianQuestions] as Question[];