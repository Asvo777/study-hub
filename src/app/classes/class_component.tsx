import Link from "next/link";

type ClassProps = {
  title: string;
  id: string
};

export default function Class(props: ClassProps) {
  return (
    <>
        <Link href={`/classes/${props.id}`}>
            <div className="border border-slate-600 p-5 min-h-40 bg-slate-100 rounded-md text-xl">
                <h2 className="font-bold">{props.title}</h2>
            </div>
        </Link>
        
    </>
  );
}
