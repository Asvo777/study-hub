type ClassProps = {
  title: string;
};

export default function Class(props: ClassProps) {
  return (
    <>
      <div className="border border-slate-600 p-5">
        <h2>{props.title}</h2>
      </div>
    </>
  );
}
