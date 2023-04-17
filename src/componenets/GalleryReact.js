import React, { useState } from "react";
import Gellary from "./Gellary";
import classes from "./GalleryReact.module.css";

const GellaryReact = () => {
  const [items, setItems] = useState(Gellary);
  const [searchImage, setSearchImage] = useState();

  const clickHandler = (e) => {
    const updated = Gellary.filter((event) => {
      return event.category === e.target.value;

    });
  
    setItems(updated);
  
  };

  const searchEventHandler = (event) => {
    const result = event.target.value;

     const result2 = Gellary.filter((event) => {


       return  event.category=== result;
     });

     
     setItems(result2);
     
    // console.log(result);
  };

  return (
    <div>
      <header>
        <h1 className={classes.h1}>Flower Gallery</h1>
        {/* /<div className={classes.tabs}> */}
          <div className={classes.menutabs}>
            <button
            value="rose"
              className={classes.button}
              onClick={clickHandler}
            >
              Rose
            </button>
            <button
              className={classes.button}
              value="daisy"
              onClick={clickHandler}
            >
              Daisy
            </button>
            <button
              className={classes.button}
              value="orchid"
              onClick={clickHandler}
            >
              Orchid
            </button>
            <button
              className={classes.button}
              value="sunflower"
              onClick={clickHandler}
            >
              Sun Flower
            </button>
            <button
              value={Gellary}
              className={classes.button}
              onClick={() => setItems(Gellary)}
            >
              All
            </button>
          </div>
        {/* </div> */}
        {/* <div className=""> */}
          <input
            type="text"
            placeholder="search for flower"
            value={searchImage}
            onChange={searchEventHandler}
            autoComplete="disable"
          />
          <button type="submit" className={classes.search}>
            search
          </button>
        {/* </div> */}
      </header>
      <main>
        <div className={classes.mainitems}>
          {items.map((event) => {
            const { id, image, name, category } = event;

            return (
              <div className="">
                <img
                  src={event.image}
                  alt={event.name}
                  className={classes.images}
                />
                <p className={classes.name}>{event.name}</p>
              </div>
            );
          })}
          <div className={classes.row}>
            <div className={classes.col}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GellaryReact;
