// components
import { Grid, Text, Button } from "@nextui-org/react";
import { CgArrowTopRight } from "react-icons/cg";
// styles
import style from "./service.module.css";
function Service({ title, description, link, num }) {
  return (
    <Grid
      justify="center"
      alignItems="center"
      css={{ borderTop: "1px solid $text" }}
    >
      <div className={style.services_item}>
        <Text as="h2" sm="false">
          <span className={style.services_item_title}>{title}</span>
        </Text>
        <Text sm="false">{description}</Text>
        <Grid
          as="div"
          css={{ display: "flex", padding: 0 }}
          justify="space-between"
          alignItems="center"
        >
          <Text sm="false" color="error">
            Daha fazlasını keşfedin
          </Text>
          <Button color="secondary" auto rounded>
            <CgArrowTopRight fontSize={22} />
          </Button>
        </Grid>
      </div>
    </Grid>
  );
}

export default Service;
