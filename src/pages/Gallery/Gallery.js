import React, { Link, Route, useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [items, setItems] = useState([]);
  let ItemsLength = 24;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((resp) => setItems(resp.data));
  });

  return (
    <div>
      <div>
        {items.map((item) => (
          <div>{item.id}</div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
