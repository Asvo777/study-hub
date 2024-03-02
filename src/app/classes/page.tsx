import Class from "./class_component";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      <Class title="Calculus 101" />
      <Class title="English 101" />
      <Class title="Science 101" />
      <Class title="History 101" />
      <Class title="History 555" />
    </div>
  );
}
