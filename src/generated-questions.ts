import { Question, QuestionType } from './helpers';

const questionsArray = [
    // Numbers
    {
        type: QuestionType.ShortText,
        prompt: 'How do you say 100 in Spanish?',
        answers: ['cien'],
    },
    {
        type: QuestionType.ShortText,
        prompt: 'What is the Spanish word for 500?',
        answers: ['quinientos'],
    },
    // Words to describe a school
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Mixto" mean?',
        choices: [
            { text: 'Mixed (male and female students allowed)', correct: true },
            { text: 'Secondary' },
            { text: 'Catholic' },
            { text: 'Private' },
        ],
    },
    // Basic Adjectives
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Bonito/a" mean?',
        choices: [{ text: 'Red' }, { text: 'Beautiful', correct: true }, { text: 'Old' }, { text: 'Spacious' }],
    },
    // Uniform
    {
        type: QuestionType.ShortText,
        prompt: 'How do you say "uniform" in Spanish?',
        answers: ['El uniforme'],
    },
    // Facilities
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "La piscina"?',
        choices: [{ text: 'Library' }, { text: 'Pool', correct: true }, { text: 'Football field' }, { text: 'Auditorium' }],
    },
    // Phrases and Questions
    {
        type: QuestionType.ShortText,
        prompt: 'How do you ask "Where is the facility?" in Spanish?',
        answers: ['Donde esta la instalacion?'],
    },
    // Some schools in Latin America
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "El Convento de la Neustra Senora"?',
        choices: [{ text: 'Hospital' }, { text: 'Church' }, { text: 'School', correct: true }, { text: 'Library' }],
    },
    // Los Medios de Transporte
    {
        type: QuestionType.ShortText,
        prompt: 'Translate "El carro" to English.',
        answers: ['car'],
    },
    // Viajar
    {
        type: QuestionType.ShortText,
        prompt: 'What is the first person singular form of the verb "viajar"?',
        answers: ['viajo'],
    },
    // Las Partes del Cuerpo
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "La boca" refer to?',
        choices: [{ text: 'Teeth' }, { text: 'Mouth', correct: true }, { text: 'Nose' }, { text: 'Ear' }],
    },
    // Las enfermedades
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "La fiebre"?',
        choices: [{ text: 'Cough' }, { text: 'Fever', correct: true }, { text: 'Flu' }, { text: 'Cold' }],
    },
    // Las profesiones
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is a "Cocinero/a"?',
        choices: [{ text: 'Doctor' }, { text: 'Chef', correct: true }, { text: 'Teacher' }, { text: 'Police officer' }],
    },
    // Working hours (Horas de trabajo)
    {
        type: QuestionType.ShortText,
        prompt: 'What are the working hours mentioned?',
        answers: ['8:30 am or 9:30 am to 1:30 pm then 4:30 pm or 5:00 pm to 8:00 pm'],
    },
    // Pasatiempos (Hobbies)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "Jugar videojuegos"?',
        choices: [
            { text: 'To play sports' },
            { text: 'To read novels' },
            { text: 'To play video games', correct: true },
            { text: 'To play musical instruments' },
        ],
    },
    // Feliz Navidad 🎅🏾
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Feliz Navidad" mean?',
        choices: [{ text: 'Happy New Year' }, { text: 'Merry Christmas', correct: true }, { text: 'Happy Birthday' }, { text: 'Good morning' }],
    },
] as Question[];

const additionalQuestionsArray = [
    // Christmas Day
    {
        type: QuestionType.MultipleChoice,
        prompt: 'When is Christmas Day celebrated?',
        choices: [{ text: 'December 25th', correct: true }, { text: 'November 25th' }, { text: 'January 1st' }, { text: 'October 31st' }],
    },
    // Verbs
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct conjugation for "Yo" with ER verbs?',
        choices: [{ text: 'o' }, { text: 'es' }, { text: 'e' }, { text: 'emos' }],
    },
    // IR verb conjugation
    {
        type: QuestionType.ShortText,
        prompt: 'How do you conjugate "Nosotros" with IR verbs?',
        answers: ['imos'],
    },
    // AR verb conjugation
    {
        type: QuestionType.ShortText,
        prompt: 'What is the conjugation for "Ustedes" with AR verbs?',
        answers: ['an'],
    },
    // Abverbs of Frequency
    {
        type: QuestionType.MultipleChoice,
        prompt: 'Which adverb means "always"?',
        choices: [{ text: 'A menuda' }, { text: 'A veces' }, { text: 'Siempre', correct: true }, { text: 'Nunca' }],
    },
    // Verbs that take Object Pronouns
    {
        type: QuestionType.MultipleChoice,
        prompt: 'Which verb uses object pronouns like "Me gusta"?',
        choices: [{ text: 'Hacer' }, { text: 'Querer' }, { text: 'Gustar', correct: true }, { text: 'Tener' }],
    },
    // Affirmative Familiar Commands
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct command form for "Tener" with the tú method?',
        choices: [{ text: 'tengo' }, { text: 'ten', correct: true }, { text: 'tienes' }, { text: 'tenemos' }],
    },
    // Quinceañera
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does the changing of the shoes symbolize during a Quinceañera?',
        choices: [
            { text: 'Maturation into womanhood' },
            { text: 'Acceptance of responsibilities', correct: true },
            { text: 'Acknowledgment of parents' },
            { text: 'Passing on tradition' },
        ],
    },
    // Names
    {
        type: QuestionType.MultipleChoice,
        prompt: 'In Spanish-speaking countries, what is typically given as a second name?',
        choices: [{ text: 'Mother’s name' }, { text: 'Father’s name' }, { text: 'Godparent’s name' }, { text: 'Saint’s name', correct: true }],
    },
    // Quinceañera (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'What is the significance of the Crowning Ceremony during a Quinceañera?',
        answers: ['Symbolizes the birthday girl as a princess in the eyes of God.', 'Acceptance of responsibilities as a woman.'],
    },
] as Question[];

const additional2QuestionsArray = [
    // Meals from El Salvador
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is a traditional dish from El Salvador with tortilla stuffed with beans, cheese, and pork?',
        choices: [{ text: 'Empanadas' }, { text: 'Arepa' }, { text: 'Pupusa', correct: true }, { text: 'Tamale' }],
    },
    // Cuban food
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is a national dish in Cuba that includes shredded pork and vegetables?',
        choices: [{ text: 'Ropa Vieja', correct: true }, { text: 'Arroz con Pollo' }, { text: 'Ceviche' }, { text: 'Paella' }],
    },
    // Mexican food
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is a characteristic of Mexican food?',
        choices: [
            { text: 'Mild and non-spicy' },
            { text: 'Seafood-based dishes' },
            { text: 'Regionally diverse and often spicy', correct: true },
            { text: 'Vegetarian-focused' },
        ],
    },
    // A video to watch
    {
        type: QuestionType.ShortText,
        prompt: 'What is the recommended video to watch?',
        answers: ['The wonders of Hispanic cuisine'],
    },
    // Physical descriptions
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Pelirroja/o" mean?',
        choices: [{ text: 'Brunette' }, { text: 'Blonde' }, { text: 'Red-haired', correct: true }, { text: 'Bald' }],
    },
    // Miscellaneous
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Antes de" mean in English?',
        choices: [{ text: 'After' }, { text: 'Before', correct: true }, { text: 'During' }, { text: 'Soon' }],
    },
    // Pasatiempos (Hobbies)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'Which hobby involves playing instruments?',
        choices: [{ text: 'Swimming' }, { text: 'Playing video games' }, { text: 'Reading novels' }, { text: 'Playing instruments', correct: true }],
    },
    // Feliz Navidad 🎅🏾 (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct translation of "Feliz Navidad" to English?',
        choices: [{ text: 'Happy New Year' }, { text: 'Merry Christmas', correct: true }, { text: 'Happy Birthday' }, { text: 'Good morning' }],
    },
    // ER verb conjugation
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct conjugation for "Tu" with ER verbs?',
        choices: [{ text: 'o' }, { text: 'es', correct: true }, { text: 'e' }, { text: 'emos' }],
    },
    // IR verb conjugation (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'Provide the conjugation for "Él/Ella/Usted" with IR verbs.',
        answers: ['e'],
    },
    // AR verb conjugation (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'How do you conjugate "Nosotros" with AR verbs?',
        answers: ['amos'],
    },
    // Abverbs of Frequency (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'Translate "Nunca" to English.',
        answers: ['Never'],
    },
    // Verbs that take Object Pronouns (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'What verb uses object pronouns like "Me gusta"?',
        answers: ['Gustar'],
    },
    // Affirmative Familiar Commands (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'What is the tú method for forming affirmative commands?',
        answers: ['Use the tú form of the verb and remove the ‘s’ at the end.'],
    },
    // Quinceañera (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'Who typically presents the birthday girl with a crown and sceptre during a Quinceañera?',
        choices: [{ text: 'Parents' }, { text: 'Godparents' }, { text: 'Guests' }, { text: 'Parents or godparents', correct: true }],
    },
    // Names (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'If a Spanish woman marries someone from another country, can she change her surname?',
        choices: [{ text: 'Yes' }, { text: 'No' }, { text: 'Only if her husband is Spanish' }, { text: 'Yes, if she wishes', correct: true }],
    },
    // Quinceañera (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'What is the significance of the first dance during a Quinceañera?',
        answers: ['Symbolizes the girl’s first public dance and presents her to the guests.'],
    },
    // AR verb conjugation (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'Provide the conjugation for "Ellos/Ellas/Ustedes" with AR verbs.',
        answers: ['an'],
    },
    // Verbs (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "Hacer" in English?',
        choices: [{ text: 'To be' }, { text: 'To have' }, { text: 'To make', correct: true }, { text: 'To go' }],
    },
    // Quinceañera (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does the girl do with her younger sister during a Quinceañera?',
        choices: [
            { text: 'Gives her a doll', correct: true },
            { text: 'Presents her with a crown' },
            { text: 'Shares the first dance' },
            { text: 'Acknowledges her maturity' },
        ],
    },
    // Miscellaneous (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'Translate "Despues de" to English.',
        answers: ['After'],
    },
    // Pasatiempos (Hobbies) (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "Mirar le televisión" in English?',
        choices: [{ text: 'To walk' }, { text: 'To read novels' }, { text: 'To watch television', correct: true }, { text: 'To play video games' }],
    },
    // Physical descriptions (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Moreno/a" mean?',
        choices: [{ text: 'Blonde' }, { text: 'Red-haired' }, { text: 'Dark-haired', correct: true }, { text: 'Gray-haired' }],
    },
    // Miscellaneous (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Tener exito" mean?',
        choices: [{ text: 'To be successful', correct: true }, { text: 'To be happy' }, { text: 'To be healthy' }, { text: 'To be ambitious' }],
    },
    // Pasatiempos (Hobbies) (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'What is the recommended hobby for someone who likes playing instruments?',
        answers: ['Playing instruments'],
    },
    // Meals from El Salvador (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What are some staples of El Salvadorian cuisine?',
        choices: [
            { text: 'Cassava roots and plantains', correct: true },
            { text: 'Pasta and pizza' },
            { text: 'Sushi and sashimi' },
            { text: 'Bread and cheese' },
        ],
    },
    // Physical descriptions (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Calvo" mean?',
        choices: [{ text: 'Blonde' }, { text: 'Red-haired' }, { text: 'Bald', correct: true }, { text: 'Dark-haired' }],
    },
    // Miscellaneous (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What does "Antes de" mean?',
        choices: [{ text: 'After' }, { text: 'Before', correct: true }, { text: 'During' }, { text: 'Soon' }],
    },
    // Pasatiempos (Hobbies) (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "Jugar videojuegos" in English?',
        choices: [
            { text: 'To play instruments' },
            { text: 'To cook and prepare food' },
            { text: 'To play video games', correct: true },
            { text: 'To read novels' },
        ],
    },
    // Feliz Navidad 🎅🏾 (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct translation of "Feliz Navidad" to English?',
        choices: [{ text: 'Happy New Year' }, { text: 'Merry Christmas', correct: true }, { text: 'Happy Birthday' }, { text: 'Good morning' }],
    },
    // ER verb conjugation (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct conjugation for "Nosotros" with ER verbs?',
        choices: [{ text: 'o' }, { text: 'es' }, { text: 'emos', correct: true }, { text: 'en' }],
    },
    // IR verb conjugation (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct conjugation for "Ellos/Ellas/Ustedes" with IR verbs?',
        choices: [{ text: 'o' }, { text: 'es' }, { text: 'e' }, { text: 'en', correct: true }],
    },
    // AR verb conjugation (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct conjugation for "Tu" with AR verbs?',
        choices: [{ text: 'o' }, { text: 'as', correct: true }, { text: 'a' }, { text: 'amos' }],
    },
    // Abverbs of Frequency (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'Which adverb means "rarely"?',
        choices: [{ text: 'A menuda' }, { text: 'A veces' }, { text: 'Raramente', correct: true }, { text: 'Nunca' }],
    },
    // Verbs that take Object Pronouns (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct translation of "Me gusta" to English?',
        choices: [
            { text: 'I like', correct: true },
            {
                text: 'I dislike',
            },
            { text: 'I want' },
            { text: 'I need' },
        ],
    },
    // Affirmative Familiar Commands (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the tú form of the affirmative command for the verb "Comer"?',
        choices: [{ text: 'Come', correct: true }, { text: 'Comes' }, { text: 'Comemos' }, { text: 'Comer' }],
    },
    // Quinceañera (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the main focus of a Quinceañera celebration?',
        choices: [
            { text: 'Religious ceremony' },
            { text: 'Dinner party' },
            { text: 'Coming-of-age celebration', correct: true },
            { text: 'Wedding reception' },
        ],
    },
    // Names (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'In Spanish-speaking cultures, which last name is usually mentioned first?',
        choices: [
            {
                text: "Father's last name",
            },
            {
                text: "Mother's last name",
            },
            { text: 'It depends on personal preference' },
            { text: "Father's last name, followed by Mother's last name", correct: true },
        ],
    },
    // Quinceañera (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: "What symbolizes the girl's transition from childhood to womanhood during a Quinceañera?",
        choices: [
            { text: 'Crown and sceptre' },
            { text: 'First dance' },
            { text: 'Presentation of a cross and a Bible' },
            { text: 'Changing into formal attire', correct: true },
        ],
    },
    // AR verb conjugation (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is the correct conjugation for "Vosotros/Vosotras" with AR verbs?',
        choices: [{ text: 'áis', correct: true }, { text: 'éis' }, { text: 'ís' }, { text: 'á' }],
    },
    // Verbs (continued)
    {
        type: QuestionType.MultipleChoice,
        prompt: 'What is "Decidir" in English?',
        choices: [{ text: 'To say' }, { text: 'To decide', correct: true }, { text: 'To go' }, { text: 'To hear' }],
    },
    // Quinceañera (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'What does the changing of shoes during a Quinceañera symbolize?',
        answers: ['Transition from childhood to womanhood'],
    },
    // Miscellaneous (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'Translate "En frente de" to English.',
        answers: ['In front of'],
    },
    // Pasatiempos (Hobbies) (continued)
    {
        type: QuestionType.ShortText,
        prompt: 'What is the English translation of "Bailar"?',
        answers: ['To dance'],
    },
] as Question[];

// Combine the original and additional questions
export const combinedQuestionsArray = [...questionsArray, ...additionalQuestionsArray, ...additional2QuestionsArray];
