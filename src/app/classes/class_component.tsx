type ClassProps = {
    title:string
}

export default function Class(props:ClassProps) {
    return <>
      <div >
        <h2>{props.title}</h2>
      </div>
    </>;
  }



