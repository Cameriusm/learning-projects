import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };
  return (
    <div>
      <h1>{item.data.item.name}</h1>
      <img src="{item.data.item.images.icon}" alt="" />
    </div>
  );
}

export default ItemDetail;
