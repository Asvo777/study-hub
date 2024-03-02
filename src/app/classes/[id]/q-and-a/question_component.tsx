"use client";

import React, { useState } from "react";

type ClassProps = {
  question: string;
  numberOfAnswers: number;
  id: number;
};

export default function Question(props: ClassProps) {
  return (
    <>
      <div className="border border-slate-600 p-4 m-8 min-h-30 bg-slate-100 rounded-md text-xl">
        <h2 className="text-xl	">{props.question}</h2>
        <div className="flex justify-between">
          <h4 className="text-sm	inline-block">
            Answers: {props.numberOfAnswers}
          </h4>
          <h5 className="inline-block text-sm text-slate-300">{props.id}</h5>
        </div>
      </div>
    </>
  );
}
