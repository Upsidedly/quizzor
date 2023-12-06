'use client';

import Image from 'next/image';
import { spanishQuestions } from '@/questions/spanish';
import { Button, Kbd, Input, Textarea } from '@nextui-org/react';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Choice, Question, QuestionType, shuffle } from '@/helpers';
import { RotateCcw, Smile } from 'lucide-react';
import Editor from '@monaco-editor/react'
import { historyQuestions } from '@/questions/history';

const chunk = function<const T>(arr: T[], size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) =>
    arr.slice(i * size, i * size + size)
);
}

let choicesResult = 
[shuffle([...spanishQuestions]).map((v) => {
  if ("choices" in v) {
    const a = { ...v }
    a.choices = shuffle(a.choices)
    return a
  }
}), shuffle([...historyQuestions]).map((v) => {
  if ("choices" in v) {
    const a = { ...v }
    a.choices = shuffle(a.choices)
    return a
  }
})] as Question[][];
// [spanishQuestions, historyQuestions]

const Inputs = {
  [QuestionType.ShortText]: (
    _: Question<any>,
    __: [number, Dispatch<SetStateAction<number>>],
    setInput: [string, Dispatch<SetStateAction<string>>],
    ___: [number[], Dispatch<SetStateAction<number[]>>]
  ) => (
    <Input
      variant='bordered'
      className='w-[30rem]'
      classNames={{ input: ['text-center', 'text-lg'] }}
      onChange={(e) => setInput[1](e.target.value)}
    />
  ),
  [QuestionType.MultipleChoice]: (
    q: Question<any>,
    [index, setIndex]: [number, Dispatch<SetStateAction<number>>],
    _: [string, Dispatch<SetStateAction<string>>],
    __: [number[], Dispatch<SetStateAction<number[]>>]
  ) => (
    <>
      {(q.choices as Choice[]).map((choice, i) => (
        <Button key={choice.value ?? choice.text} variant={i === index ? 'solid' : 'bordered'} onClick={() => setIndex(i)} className='min-w-[38rem] max-w-[38rem] px-5 break-all break-normal'>
          {choice.text}
        </Button>
      ))}
    </>
  ),

  [QuestionType.Multiselect]: (
    q: Question<any>,
    _: [number, Dispatch<SetStateAction<number>>],
    __: [string, Dispatch<SetStateAction<string>>],
    [indexes, setIndexes]: [number[], Dispatch<SetStateAction<number[]>>]
  ) => (
    <>
      {q.choices.map((choice: Choice, i: number) => (
        <Button key={choice.value ?? choice.text} variant={indexes.includes(i) ? 'solid' : 'bordered'} className='break-words hyphens-auto min-w-[38rem] max-w-[38rem] px-5' onClick={() => indexes.includes(i) ? setIndexes(indexes.filter((v) => v !== i)) : setIndexes([...indexes, i])}>
          {choice.text}
        </Button>
      ))}
    </>
  )
};

export default function Home() {
  const [inGame, setInGame] = useState(false);
  const [score, setScore] = useState(0);
  const [where, setWhere] = useState(0);
  const [bhindex, setBHIndex] = useState(-1);
  const [msindexes, setMSIndexes] = useState<number[]>([]);
  const [input, setInput] = useState<string>('');
  const [reminder, setReminder] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>('white');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [customEditing, setCustomEditing] = useState<boolean>(false)
  const [editorV, setEditorValue] = useState<string>('')
  console.log(questions)
  const amount = questions.length;

  const [rw, setRW] = useState<[string | null, string | null]>([null, null]);

  // console.log(inGame, score, amount, where, bhindex, input, reminder, [rw[0], rw[1]]);

  const choices = [{ text: 'Spanish Questions' }, { text: 'History Questions'}, { text: 'Custom (If you dont know what this is leave it alone)' }];

  function onSetQuestions() {
    if (customEditing) {
      try {
        const json = JSON.parse(editorV
          .trim()
          .replaceAll('QuestionType.ShortText', '0')
          .replaceAll('QuestionType.MultipleChoice', '1')
          .replaceAll('QuestionType.Multiselect', '2')
          )
        console.log(json)
        if (json === undefined) return setCustomEditing(false)
        setQuestions(json)
        setBHIndex(-1)
        setCustomEditing(false)
      } catch {
        setCustomEditing(false)
      }
      return
    }

    if (amount > 0) return

    if (bhindex === choices.length - 1) {
      setCustomEditing(true)
    } else {
      setQuestions(choicesResult[bhindex]);
      setBHIndex(-1);
    }
  }

  function onSubmit() {
    if (rw[0] !== null && rw[1] !== null) {
      setRW([null, null]);
      return;
    }

    const question = questions[where];
    const type = question.type;
    switch (type) {
      case QuestionType.ShortText: {
        console.log('desso');
        let justSet = reminder !== '';
        setReminder('');
        if (input.trim() === '') return setReminder(justSet ? '' : 'You have to put in input to submit!');
        const gotIt = question.answers.some((v) =>
          typeof v === 'string' ? v.startsWith('!') ? input.toLowerCase().includes(v.trim().toLowerCase()) :  v.toLowerCase() === input.trim().toLowerCase() : new RegExp(v, 'i').test(input.toLowerCase()),
        );

        if (gotIt) {
          setWhere(where + 1);
          setScore(score + 1);
          setBorderColor('green-300');
          setTimeout(() => setBorderColor('white'), 3000);
        } else {
          setRW([question.answers[0].startsWith('!') ? question.answers[0].slice(1) : question.answers[0], input.trim()]);
          setBHIndex(-1);
          setInput('');
        }
        break;
      }

      case QuestionType.MultipleChoice: {
        const q2 = question as Question<QuestionType.MultipleChoice>;
        const gotIt = 'correct' in q2.choices[bhindex];
        console.log(gotIt, q2)
        setBHIndex(-1);
        setInput('');

        // Made flops not bad
        if (gotIt) {
          setWhere(where + 1);
          setScore(score + 1);
        } else {
          setRW([q2.choices.find((v) => 'correct' in v)!.text, q2.choices[bhindex].text]);
          setBHIndex(-1);
          setInput('');
        }
        setWhere(where + 1);
        break;
      }

      case QuestionType.Multiselect: {
        const q2 = question as Question<QuestionType.Multiselect>;
        const gotIt = msindexes.every((v) => "correct" in q2.choices[v]) && msindexes.length === q2.choices.filter((c) => "correct" in c).length
        if (gotIt) {
          setMSIndexes([])
          setWhere(where + 1);
          setScore(score + 1);
        } else {
          setRW([q2.choices.filter((v) => "correct" in v).map(v => v.text).join(', '), msindexes.map((v) => q2.choices[v].text).join(', ')])
        }
      }

      default:
        setWhere(where - 1);
    }
    setWhere(where + 1);
  }

  function onEnd() {
    setWhere(0)
    setScore(0)
    setQuestions([])
    setBHIndex(-1)
    setMSIndexes([])
    setInput('')
    choicesResult = ([shuffle([...spanishQuestions]).map((v) => {
      if ("choices" in v) {
        const a = { ...v }
        a.choices = shuffle(a.choices); return a
      }
    }), shuffle([...historyQuestions]).map((v) => {
      if ("choices" in v) {
        const a = { ...v }
        a.choices = shuffle(a.choices); return a
      }
    })]) as Question[][];
  }

  return inGame ? (
    <div
      onKeyUp={(k) => (k.key === 'Enter' ? where === amount ? onEnd() : (questions.length === 0 ? customEditing ? k.ctrlKey ? onSetQuestions() : true : onSetQuestions() : onSubmit()) : false)}
      className='absolute flex min-h-screen min-w-full flex-col justify-center items-center'>
      <div id='inside' className={`h-[95%] border-1 border-${borderColor} rounded-3xl p-10 flex justify-center items-center flex-col gap-5`}>
        {customEditing ? <Fragment>
          <p className='text-2xl text-center'>Add questions in JSON Array format</p>
          <p className='italic text-slate-500'>Types:<br />0: Short Text<br />1: Multiple Choice<br />2: Multiselect</p>
          <Editor language='json' theme='vs-dark' width='60vw' height='60vh' onChange={(value) => value ? setEditorValue(value) : true} />
          <Button variant='flat' onPress={() => onSetQuestions()}>
            Next <Kbd keys={['ctrl', 'enter']} />
          </Button>
        </Fragment> : amount === 0 ? (
          <Fragment>
            <p className='text-2xl text-center'>Which question set would you like to do?</p>
            <div className='flex flex-col w-full px-5 gap-5 items-center justify-center'>
              {Inputs[QuestionType.MultipleChoice](
                { type: QuestionType.MultipleChoice, choices },
                [bhindex, setBHIndex],
                [input, setInput],
                [msindexes, setMSIndexes]
              )}
            </div>
            <Button variant='flat' onPress={() => onSetQuestions()}>
              Next <Kbd keys={['enter']} />
            </Button>
          </Fragment>
        ) : rw[0] !== null && rw[1] !== null ? (
          <Fragment>
            <h1 className='text-2xl text-center'>
              You entered: <span className='text-red-400'>{rw[1]}</span>
              <br />
              The correct response is: <span className='text-green-300'>{rw[0]}</span>
            </h1>
            <Button variant='flat' onPress={() => onSubmit()}>
              Next <Kbd keys={['enter']} />
            </Button>
          </Fragment>
        ) : where === amount ? (
          <Fragment>
            <h1 className='text-2xl text-center'>
              Score: [{score}/{amount}]
            </h1>
            <Button variant='flat' color='success' onClick={() => onEnd()}>
              Restart <RotateCcw width={16} height={16} />
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            {questions[where].title && <h1>{questions[where].title}</h1>}
            <p className='text-2xl text-center'>{questions[where].prompt}</p>
            {questions[where].image && <Image src={questions[where].image!} alt="User generated image, no alt" width={700} height={700} />}
            <div className='flex flex-col w-full px-5 gap-5 items-center justify-center'>
              {Inputs[questions[where].type](questions[where], [bhindex, setBHIndex], [input, setInput], [msindexes, setMSIndexes])}
            </div>
            <Button variant='flat' onPress={() => onSubmit()}>
              Submit <Kbd keys={['enter']} />
            </Button>
            <p className='italic text-slate-500'>{reminder}</p>
            <p>
              Score: {score}/{amount}
            </p>
          </Fragment>
        )}
      </div>
    </div>
  ) : (
    <main className='absolute flex min-h-screen min-w-full flex-col justify-center px-25 gap-5 items-center'>
      <p className='text-3xl text-center'>Are you ready?</p>
      <Button variant='flat' className='mx-12 text-md p-3' onClick={() => setInGame(true)}>
        Yup <Smile width={16} height={16} />
      </Button>
    </main>
  );
}
