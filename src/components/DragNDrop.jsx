import "./DragNDrop.css";

function DragNDrop() {
  function handleClick() {
    console.log("Hello");
  }
  return (
    <div className="wrapper">
      <div className="heading">
        <h1>Drag and Drop Image Here !!!</h1>
      </div>
      <div className="container">
        <p>Drag and Drop Your Image here!!!</p>
        <span role="button" className="select" onClick={handleClick}>
          Browse
        </span>
        <input type="file" multiple />
      </div>
      <div>
        <button>Upload</button>
      </div>
    </div>
  );
}

export default DragNDrop;
