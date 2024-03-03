"use client";

import React, { useEffect, useState } from "react";
import Question from "./question_component";

export default function Page({ params }: { params: { id: string } }) {
  const [questions, setQuestions] = useState();
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/questions?id=${params.id}`);
      const body = await res.json();
      setQuestions(body.message);
    })();
  }, [params.id]);

  const [questionSelected, setQuestionSelected] = useState(0);

  return (
    questions && (
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
        <section className="float-left min-h-screen w-3/5 p-8 flex flex-col content-center bg-red-100 fixed">
          <div className="grow">
            <div className="flex flex-col gap-8">
              {questionSelected == null ? (
                <p>Ask a question to the community</p>
              ) : (
                <h2 className="text-3xl">
                  {questions[questionSelected].question}
                </h2>
              )}
              <div>{questions[questionSelected].body}</div>
            </div>
          </div>
          <div>
            <input
              placeholder=""
              className="w-4/5 border-2 border-solid p-2"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="bg-slate-800 text-white p-3">
              Ask Question
            </button>
          </div>
        </section>
      </>
    )
  );
}
