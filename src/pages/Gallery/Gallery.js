import React, { Link, Route, useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((resp) => setItems(resp.data));
    // .then((resp) => console.log(resp.data));
  });

  return (
    <div>
      <div>
        {items.map((item) => (
          <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <img src={item.url} />
            <div>{item.thumbnailUrl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
