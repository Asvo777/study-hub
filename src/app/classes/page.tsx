import Class from "./class_component";


export default function Page() {
  const carousel = false
  // const [carousel, setCarousel] = useState(true);

  
  return (
    carousel? 
    <></> // Put the courses in a carousel format
     :
    (<div className="grid grid-cols-1 gap-4 p-5">
      <Class id="mat-101" title="Calculus 101" />
      <Class id="mat-101" title="English 101" />
      <Class id="mat-101" title="Science 101" />
      <Class id="mat-101" title="History 101" />
      <Class id="mat-101" title="History 555" />
    </div>)
  );
}
