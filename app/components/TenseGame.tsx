'use client';

import React, { useState } from 'react';
import { Gamepad2, CheckCircle2, XCircle, Flame, RotateCcw, Trophy, ArrowRight } from 'lucide-react';
import { buildTenseGame, type GameQuestion } from '../data/hindiLearning';

const ROUND_SIZE = 10;
const LETTERS = ['A', 'B', 'C', 'D'];

export default function TenseGame() {
  // Questions are random, so build them only after the player starts (avoids a server/client mismatch).
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);

  const start = () => {
    setQuestions(buildTenseGame(ROUND_SIZE));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setCombo(0);
  };

  const current = questions[index];
  const finished = questions.length > 0 && index >= questions.length;

  const choose = (opt: string) => {
    if (selected || !current) return;
    setSelected(opt);
    if (opt === current.answer) {
      setScore((s) => s + 1);
      setCombo((c) => c + 1);
    } else {
      setCombo(0);
    }
  };

  const next = () => {
    setSelected(null);
    setIndex((i) => i + 1);
  };

  return (
    <div className="rounded-3xl bg-burgundy text-ivory p-4 sm:p-6 shadow-2xl shadow-burgundy/25">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-ivory/10 flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-bronze" />
          </span>
          <div>
            <h3 className="font-serif text-xl font-semibold">Tense Challenge</h3>
            <p className="text-xs text-ivory/75 font-hindi">खेलकर सीखें · {ROUND_SIZE} सवाल</p>
          </div>
        </div>
        {questions.length > 0 && !finished && (
          <div className="flex items-center gap-2 text-xs font-bold">
            {combo >= 2 && (
              <span className="flex items-center gap-1 rounded-full bg-bronze px-2.5 py-1">
                <Flame className="w-3.5 h-3.5" /> {combo}
              </span>
            )}
            <span className="rounded-full bg-ivory/10 px-2.5 py-1">Score {score}</span>
          </div>
        )}
      </div>

      {/* Intro */}
      {questions.length === 0 && (
        <div className="mt-6 space-y-4">
          <p className="text-sm text-ivory/85 leading-relaxed font-hindi">
            वाक्य का tense पहचानें, हिंदी वाक्य का सही English अनुवाद चुनें और हिंदी पहचान (जैसे “रहा था”) से tense बताएँ।
          </p>
          <ul className="space-y-2 text-sm">
            {['Identify the tense', 'Hindi → English translation', 'Hindi ending clue'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bronze" /> {t}
              </li>
            ))}
          </ul>
          <button
            onClick={start}
            className="w-full mt-2 rounded-xl bg-ivory text-burgundy font-bold py-3 hover:bg-bronze-soft transition-colors"
          >
            Start game
          </button>
        </div>
      )}

      {/* Playing */}
      {current && !finished && (
        <div className="mt-5" key={current.id}>
          <div className="h-1.5 rounded-full bg-ivory/15 overflow-hidden">
            <div
              className="h-full bg-bronze transition-all duration-300"
              style={{ width: `${((index + (selected ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-wider text-ivory/60">
            Question {index + 1} / {questions.length}
          </p>

          <div className="mt-3 rounded-2xl bg-paper text-walnut-deep p-4 animate-rise">
            <p className="text-xs font-semibold text-walnut">{current.instruction}</p>
            <p className="text-xs text-bronze-dark font-hindi">{current.instructionHi}</p>
            {current.type === 'clue' ? (
              <p className="mt-3 inline-block rounded-lg bg-bronze-soft px-3 py-2 font-hindi font-bold text-lg text-bronze-dark">
                {current.prompt}
              </p>
            ) : (
              <p className="mt-3 font-serif text-lg sm:text-xl leading-snug break-words">{current.prompt}</p>
            )}
            {selected && current.promptHint && <p className="mt-1 text-sm text-walnut font-hindi">{current.promptHint}</p>}
          </div>

          <div className="mt-3 space-y-2">
            {current.options.map((opt, i) => {
              const isAnswer = opt === current.answer;
              const isPicked = opt === selected;
              const state = !selected ? 'idle' : isAnswer ? 'correct' : isPicked ? 'wrong' : 'dim';
              const cls = {
                idle: 'bg-ivory/10 border-ivory/20 hover:bg-ivory/20',
                correct: 'bg-success-soft border-success text-success',
                wrong: 'bg-danger-soft border-danger text-danger',
                dim: 'bg-ivory/5 border-ivory/10 opacity-60',
              }[state];
              return (
                <button
                  key={opt}
                  onClick={() => choose(opt)}
                  disabled={!!selected}
                  className={`w-full flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${cls}`}
                >
                  <span className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold bg-ivory/10">
                    {state === 'correct' ? <CheckCircle2 className="w-5 h-5" /> : state === 'wrong' ? <XCircle className="w-5 h-5" /> : LETTERS[i]}
                  </span>
                  <span className="min-w-0 break-words">{opt}</span>
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-3 rounded-xl bg-ivory/10 p-3 text-sm">
              <p className="font-bold">{selected === current.answer ? 'Correct! सही जवाब' : 'Not quite — सही जवाब ऊपर देखें'}</p>
              <p className="text-ivory/85 mt-1 font-hindi">{current.explanation}</p>
              <button
                onClick={next}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ivory text-burgundy font-bold py-2.5 hover:bg-bronze-soft transition-colors"
              >
                {index === questions.length - 1 ? 'See result' : 'Next question'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Result */}
      {finished && (
        <div className="mt-6 text-center space-y-3 animate-rise">
          <Trophy className="w-12 h-12 text-bronze mx-auto" />
          <p className="font-serif text-4xl font-bold">
            {score} / {questions.length}
          </p>
          <p className="font-hindi text-ivory/85">
            {score >= 8 ? 'बहुत बढ़िया! आप tenses अच्छे से समझते हैं।' : 'अच्छी कोशिश! notes दोहराकर फिर से खेलें।'}
          </p>
          <button
            onClick={start}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ivory text-burgundy font-bold py-3 hover:bg-bronze-soft transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Play again
          </button>
        </div>
      )}
    </div>
  );
}
