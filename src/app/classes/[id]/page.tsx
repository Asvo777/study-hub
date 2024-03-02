import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const title = params.id.toUpperCase();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-10 text-2xl bg-red-200 p-5">
        <Link href="/classes">Home</Link>
        <span className="font-bold">{title}</span>
      </div>
      <div className="flex flex-row gap-10 bg-blue-200 p-5">
        <Link href={`${params.id}/q-and-a`}>
          <div>Q&A</div>
        </Link>
        <Link href={`${params.id}/project`}>
          <div>Project</div>
        </Link>
        <Link href={`${params.id}/chatbot`}>
          <div>Chatbot</div>
        </Link>
      </div>
    </div>
  );
}
