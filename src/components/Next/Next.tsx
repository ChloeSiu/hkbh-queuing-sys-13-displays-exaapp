import classes from "./Next.module.css";
import data from "../../data/data.json";

const Next = (props: { orientation: "landscape" | "portrait" }) => {
  const numArray: string[] = data.displayProfileContents.nextTicketNo;
  const showComponent: boolean = data.displayProfileLayout.Next;

  if (!showComponent) {
    return null;
  } else if (props.orientation === "landscape") {
    return (
      <div className={classes.containerL}>
        <div className={classes.titleContainerL}>
          <p className={classes.title}>下一位 Next</p>
        </div>
        <div className={classes.numContainerL}>
          {numArray.map((num) => {return<p className={classes.numberL}>{num}</p>;})}   
        </div>
      </div>
    );
  } else if (props.orientation === "portrait") {
    return (
      <div className={classes.container}>
      <div className={classes.titleContainer}>
        <p className={classes.title_cn}>下一位</p>
        <p className={classes.title_en}>Next</p>
      </div>
      <div className={classes.numContainer}>
        {numArray.map((num) => {return<p className={classes.number}>{num}</p>;})}
      </div>
    </div>
    );
  }
  return null;
};

export default Next;
