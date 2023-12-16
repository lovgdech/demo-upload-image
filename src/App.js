import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

import { storage } from "./firebase";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFild] = useState(null);
  const [imageList, setImageList] = useState([]);

  const uploadFileHandler = () => {
    if (selectedFile === null) return;

    const imageRef = ref(storage, `images/${v4() + selectedFile.name}`);

    uploadBytes(imageRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        alert(`Uploaded file`);
      });
    });
  };

  useEffect(() => {
    const imageListRef = ref(storage, "images/");

    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="app">
      <div className="form-group">
        <input
          type="file"
          onChange={(e) => setSelectedFild(e.target.files[0])}
        />
        <button onClick={uploadFileHandler}>Upload</button>
      </div>

      <div className="content">
        {imageList.map((url, index) => (
          <img width={200} height={200} key={index} src={url} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;
