import classes from "./Doctor.module.css";
import data from "../../data/data.json";

const Doctor = (props: { orientation: "landscape" | "portrait" }) => {
  const nameCN: string = data.displayProfileContents.docNameCn;
  const nameEN: string = data.displayProfileContents.docNameEn;
  const showComponent: boolean = data.displayProfileLayout.Doctor;

  if (!showComponent) {
    return null;
  } else if (props.orientation === "landscape") {
    return (
      <div className={classes.containerL}>
        <div className={classes.titleContainerL}>
          <p className={classes.titleL}>醫生 Doctor</p>
        </div>
        <div className={classes.docNameContainerL}>
          <p className={classes.docName_cnL}>{nameCN}</p>
          <p className={classes.docName_enL}>{nameEN}</p>
        </div>
      </div>
    );
  } else if (props.orientation === "portrait") {
    return (
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <p className={classes.title_cn}>醫生</p>
          <p className={classes.title_en}>Doctor</p>
        </div>
        <div className={classes.docNameContainer}>
          <p className={classes.docName_cn}>{nameCN}</p>
          <p className={classes.docName_en}>{nameEN}</p>
        </div>
      </div>
    );
  }
  return null;
};

export default Doctor;
