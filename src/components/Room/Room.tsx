import classes from "./Room.module.css";
import data from "../../data/data.json";

const Room = (props: {orientation: "landscape" | "portrait"}) => {
  const num: string = data.displayProfileContents.roomNum;
  const showComponent: boolean = data.displayProfileLayout.Room;

  if (!showComponent) {
    return null;
  } else if (props.orientation === "landscape") {
    return (
      <div className={classes.containerL}>
        <p className={classes.titleL}>診症室 Room</p>
        <h1 className={classes.roomNumL}>{num}</h1>
      </div>
    );
  } else if (props.orientation === "portrait") {
    return (
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <p className={classes.title_cn}>診症室</p>
          <p className={classes.title_en}>Room</p>
        </div>
        <div className={classes.roomNumContainer}>
          <h1 className={classes.roomNum}>{num}</h1>
        </div>
      </div>
    );
  }
  return null;
};

export default Room;
