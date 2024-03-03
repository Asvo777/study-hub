import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  const { searchParams } = new URL(
    request.url === undefined ? "" : request.url
  );
  const questions = [
    {
      id: 0,
      numberOfAnswers: 12,
      question: "How to derive this function: 2x",
      body: "This is the function:",
    },
    {
      id: 1,
      numberOfAnswers: 12,
      question: "What causes the creation of Canada ?",
      body: "I am asking this because..",
    },
    {
      id: 2,
      numberOfAnswers: 12,
      question: "Question 3",
      body: "What is this?",
    },
    {
      id: 3,
      numberOfAnswers: 12,
      question: "Question 4",
      body: "I was doing this question",
    },
    {
      id: 4,
      numberOfAnswers: 12,
      question: "Question 5",
      body: "Why does this happen?",
    },
    {
      id: 5,
      numberOfAnswers: 12,
      question: "Question 6",
      body: "Let me answer",
    },
  ];

  const id = searchParams.get("id");
  const message = questions;
  const status = 200;

  return NextResponse.json({ message: message }, { status: status });
}
