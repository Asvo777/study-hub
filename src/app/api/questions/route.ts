import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

let questions = [
  {
    id: 0,
    numberOfAnswers: 12,
    question: "How to derive this function: 2x",
    body: "This is the function:",
    answers: [],
  },
  {
    id: 1,
    numberOfAnswers: 12,
    question: "What causes the creation of Canada ?",
    body: "I am asking this because..",
    answers: [],
  },
  {
    id: 2,
    numberOfAnswers: 12,
    question: "Question 3",
    body: "What is this?",
    answers: [],
  },
  {
    id: 3,
    numberOfAnswers: 12,
    question: "Question 4",
    body: "I was doing this question",
    answers: [],
  },
  {
    id: 4,
    numberOfAnswers: 12,
    question: "Question 5",
    body: "Why does this happen?",
    answers: [],
  },
  {
    id: 5,
    numberOfAnswers: 12,
    question: "Question 6",
    body: "Let me answer",
    answers: [],
  },
];

export async function GET(request: NextApiRequest) {
  const { searchParams } = new URL(
    request.url === undefined ? "" : request.url
  );

  const id = searchParams.get("id");
  const message = questions;
  const status = 200;

  return NextResponse.json({ message: message }, { status: status });
}

export async function POST(request: Request) {
  const { id, question, body } = await request.json();

  questions.push({
    id: 7,
    numberOfAnswers: 22,
    question: question,
    body: body,
  });

  return NextResponse.json({ message: questions }, { status: 200 });
}
