// components
import { Grid, Text } from "@nextui-org/react";
// styles
import style from "./starting-section.module.css";
function StartingSection() {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} sm={4} justify="center" alignItems="center">
        <Text as="h1" sm="false">
          <span className={style.desc}>Geliştirme Deneyimimiz Var</span>
        </Text>
      </Grid>
      <Grid xs={12} sm={8} justify="center" alignItems="center">
        <img
          src="/svgs/experience.svg"
          alt="our experience svg"
          className={style.svg_style}
        />
      </Grid>
    </Grid.Container>
  );
}

export default StartingSection;
