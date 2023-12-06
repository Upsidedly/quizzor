'use client';

import Image from 'next/image';
import { questions } from '@/questions';
import { Button, Kbd } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Choice, Question, QuestionType } from '@/helpers';
import { RotateCcw, Smile } from 'lucide-react';

const Inputs = {
  [QuestionType.ShortText]: (
    q: Question<any>,
    [n, setIndex]: [number, Dispatch<SetStateAction<number>>],
    setInput: [string, Dispatch<SetStateAction<string>>],
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
    setInput: [string, Dispatch<SetStateAction<string>>],
  ) => (
    <>
      {q.choices.map((choice: Choice, i: number) => (
        <Button key={choice.value ?? choice.text} variant={i === index ? 'solid' : 'bordered'} onClick={() => setIndex(i)}>
          {choice.text}
        </Button>
      ))}
    </>
  ),
};

export default function Home() {
  const [inGame, setInGame] = useState(false);
  const [score, setScore] = useState(0);
  const amount = questions.length;
  const [where, setWhere] = useState(0);
  const [bhindex, setBHIndex] = useState(-1);
  const [input, setInput] = useState<string>('');
  const [reminder, setReminder] = useState<string>('');

  const [rw, setRW] = useState<[string | null, string | null]>([null, null]);

  console.log(inGame, score, amount, where, bhindex, input, reminder, [rw[0], rw[1]]);

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
          typeof v === 'string' ? v.toLowerCase() === input.trim().toLowerCase() : new RegExp(v, 'i').test(input.toLowerCase()),
        );

        if (gotIt) {
          setWhere(where + 1);
          setScore(score + 1);
        } else {
          setRW([question.answers[0], input.trim()]);
          setBHIndex(-1);
          setInput('');
        }
        break;
      }

      case QuestionType.MultipleChoice: {
        const q2 = question as Question<QuestionType.MultipleChoice>;
        const gotIt = 'correct' in q2.choices[bhindex];
        setBHIndex(-1);
        setInput('');

        // Made flops not bad
        if (gotIt) {
          setWhere(where + 1);
          setScore(score + 1);
        } else {
          setRW([q2.choices.find((v) => "correct" in v)!.text, q2.choices[bhindex].text]);
          setBHIndex(-1);
          setInput('');
        }
        setWhere(where + 1);
      }

      default:
        setWhere(where - 1);
    }
    setWhere(where + 1);
  }

  return inGame ? (
    <div
      onKeyUp={(k) => (k.key === 'Enter' ? onSubmit() : false)}
      className='absolute flex min-h-screen min-w-full flex-col justify-center items-center'>
      <div id='inside' className='h-[95%] border-1 border-white rounded-3xl p-10 flex justify-center items-center flex-col gap-5'>
        {rw[0] !== null && rw[1] !== null ? (
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
            <Button variant='flat' color="success">Restart <RotateCcw width={16} height={16} /> </Button>
          </Fragment>
        ) : (
          <Fragment>
            {questions[where].title && <h1>{questions[where].title}</h1>}
            <p className='text-2xl text-center'>{questions[where].prompt}</p>
            <div className='flex flex-row w-full px-5 gap-5 items-center justify-center'>
              {Inputs[questions[where].type](questions[where], [bhindex, setBHIndex], [input, setInput])}
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
