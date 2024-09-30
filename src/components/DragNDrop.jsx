import "./DragNDrop.css";

function DragNDrop() {
  function handleClick() {
    console.log("Hello");
  }
  return (
    <div className="wrapper">
      <div className="heading">
        <h1>Upload Your Image Here !!!</h1>
      </div>
      <div className="container">
        <img src="images.png" alt="file-upload-icon" />
        <p>Drag and Drop Your Image here...</p>
        or
        <button className="select" onClick={handleClick}>
          Browse
        </button>
        <input type="file" multiple />
      </div>
      <div className="bottom">
        <button>Upload</button>
      </div>
    </div>
  );
}

export default DragNDrop;
