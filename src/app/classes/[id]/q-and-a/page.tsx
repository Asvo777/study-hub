"use client";

import React, { useState } from "react";
import Question from "./question_component";

export default function Page() {
  const [userInput, setUserInput] = useState("");
  const questions = [
    { id: 0, numberOfAnswers: 12, question: "How to derive this function: 2x" },
    {
      id: 1,
      numberOfAnswers: 12,
      question: "What causes the creation of Canada ?",
    },
    { id: 2, numberOfAnswers: 12, question: "Question 3" },
    { id: 3, numberOfAnswers: 12, question: "Question 4" },
    { id: 4, numberOfAnswers: 12, question: "Question 5" },
    { id: 5, numberOfAnswers: 12, question: "Question 6" },
  ];

  const [questionSelected, setQuestionSelected] = useState(4);

  return (
    <>
      <section className="float-right w-2/5 bg-slate-300 min-h-screen">
        {questions.map((question) => (
          <span
            key={question.id}
            className="cursor-pointer"
            onClick={(e) => setQuestionSelected(question.id)}
          >
            <Question
              id={question.id}
              numberOfAnswers={question.numberOfAnswers}
              question={question.question}
            />
          </span>
        ))}
      </section>
      <section className="float-left min-h-screen w-3/5 p-8 flex flex-col justify-between content-center bg-red-100 fixed">
        <div>
          {questionSelected == null ? (
            <p>Ask a question to the community</p>
          ) : (
            <h2 className="text-3xl">{questions[questionSelected].question}</h2>
          )}
        </div>
        <div>
          <input
            placeholder=""
            className="w-4/5 border-2 border-solid p-2"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="bg-slate-800">Ask Question</button>
        </div>
      </section>
    </>
  );
}
