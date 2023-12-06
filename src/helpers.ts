export const enum QuestionType {
	ShortText,
	MultipleChoice,
	Multiselect
}

export interface Choice {
	text: string,
	value?: string,
	correct?: true
}

interface QuestionTypes {
	[QuestionType.ShortText]: {
		type: QuestionType.ShortText
		answers: [string, ...(string | RegExp)[]]
	},

	[QuestionType.MultipleChoice]: {
		type: QuestionType.MultipleChoice
		choices: Choice[]
	},

	[QuestionType.Multiselect]: {
		type: QuestionType.Multiselect,
		choices: Choice[]
	}
}

export type Question<T extends QuestionType = QuestionType> = {
	prompt: string,
	title?: string,
	image?: string
} & QuestionTypes[T]

function shuffle<const T>(array: T[]): T[] {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex > 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

export function simpleDefinitions(origin: string, prompt = 'What is [%a] in Spanish?') {
	const questions: Question[] = []
	const modified = origin.trim().split('\n').map((v) => v.split(' - '))

	for (const [index, pair] of modified.entries()) {
		// Multiple choice
		if (Math.random() > 0) {
			questions.push(({
				type: QuestionType.MultipleChoice,
				prompt: prompt.replace('%a', pair[0]),
				
				choices: shuffle([{ text: pair[1], correct: true }, ...shuffle(modified.toSpliced(index, 1)).slice(0, 3).map((v) => ({ text: v[1] }))])
			}) as Question<QuestionType.MultipleChoice>)
		}

		else {
			questions.push(({
				type: QuestionType.ShortText,
				prompt: prompt.replace('%a', pair[0]),
				answers: [pair[1].toLowerCase()]
			}) as Question<QuestionType.ShortText>)
		}
	}

	return questions
}
