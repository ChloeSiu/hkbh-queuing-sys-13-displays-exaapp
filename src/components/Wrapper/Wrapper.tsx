import { useState, useEffect } from "react";

import classes from "./Wrapper.module.css";
import data from "../../data/data.json";

import Header from "../Header/Header";
import Room from "../Room/Room";
import Doctor from "../Doctor/Doctor";
import NowServing from "../NowServing/NowServing";
import Next from "../Next/Next";

const Wrapper = () => {
  const [orientation, setOrientation] = useState<"landscape" | "portrait">(
    "landscape"
  );
  const wrapperStyle = {
    width: data.displayProfileLayout.Width,
    height: data.displayProfileLayout.Height,
  };

  useEffect(() => {
    if (wrapperStyle.width === "1920px" && wrapperStyle.height === "1080px") {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }, [wrapperStyle.width, wrapperStyle.height]);

  return (
    <div className={classes.wrapperContainer} style={wrapperStyle}>
      <Header orientation={orientation}/>
      {orientation === "landscape" ? (
        <div className={classes.contentWrapper}>
          <div className={classes.leftColumn}>
            <Room orientation={orientation}/>
            <Next orientation={orientation}/>
          </div>
          <div className={classes.rightColumn}>
            <Doctor orientation={orientation}/>
            <NowServing orientation={orientation}/>
          </div>
        </div>
      ) : (
        <div className={classes.wrapperContainer}>
          <Room orientation={orientation}/>
          <Doctor orientation={orientation}/>
          <NowServing orientation={orientation}/>
          <Next orientation={orientation}/>
        </div>
      )}
    </div>
  );
};

export default Wrapper;
