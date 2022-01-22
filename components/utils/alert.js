// components
import { Grid } from "@nextui-org/react";
import { BiError } from "react-icons/bi";
// styles
import style from "./alert.module.css";

function Alert({ type, description }) {
  return (
    <div className={`${style.alert} ${style.error}`}>
      <Grid.Container>
        <Grid xs={0.4} justify="center" alignItems="center">
          <BiError style={{ fontSize: 22 }} />
        </Grid>
        <Grid xs={11.6}>
          {Array.isArray(description) && (
            <ul className={style.desc_list}>
              {description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}
          {!Array.isArray(description) && description}
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Alert;
