import "./DragNDrop.css";

function DragNDrop() {
  function handleClick() {
    console.log("Hello");
  }
  return (
    <div className="container">
      <h1 className="top">Upload your Image here !!!</h1>
      <div className="input-area">
        <p>Drag and Drop your Image Here</p>
        or
        <button className="browse" onClick={handleClick}>Browse</button>
      </div>
    </div>
  );
}

export default DragNDrop;
