// components
import { Grid, Text, Button, Tooltip } from "@nextui-org/react";
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
        <span className={style.service_num}>
          <Text
            as="h4"
            sm={"false"}
            css={{
              textGradient: "45deg, $blue500 -20%, $pink500 50%",
            }}
          >
            {num}
          </Text>
        </span>
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
          <Text sm="false" color="secondary">
            Daha fazlasını keşfedin
          </Text>
          <Tooltip
            content="Yakında etkin olacaktır"
            shadow
            placement="top"
            offset={0}
            color={"secondary"}
          >
            <Button color="secondary" auto rounded>
              <CgArrowTopRight fontSize={22} />
            </Button>
          </Tooltip>
        </Grid>
      </div>
    </Grid>
  );
}

export default Service;
