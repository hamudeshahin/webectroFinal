// components
import { Grid, Text } from "@nextui-org/react";
import Service from "../utils/service";
// servics data
import servicesData from "../../data/services";
// styles
import style from "./services-section.module.css";
function ServicesSection(props) {
  return (
    <Grid.Container gap={2} css={{ padding: "40px 0" }}>
      <Grid xs={12} sm={6}>
        <Grid.Container gap={2} direction="column">
          <Grid>
            <Text as="h1" sm="false">
              <span className={`section__title-sec`} data-title="Servisler">
                Sunduğumuz Servisler
              </span>
            </Text>
          </Grid>
          <Grid>
            <Text
              as="p"
              sm="false"
              className={"section__text-sec"}
              css={{
                position: "relative",
                paddingInlineStart: "2em",
                "&::before": {
                  background: "$text",
                  content: "",
                  position: "absolute",
                  width: "1.3em",
                  height: "2px",
                  left: 0,
                  top: "0.8em",
                },
              }}
            >
              Bilinirlik oluşturarak, web trafiğini arttırarak, müşterilerle
              bağlantı kurarak ve genel satışları artırarak sizin gibi iddialı
              işletmelerin daha fazla kâr elde etmesine yardımcı oluyoruz
            </Text>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12} sm={6}>
        <Grid.Container gap={2} direction="column">
          {servicesData.map((service, i) => (
            <Service
              key={service.id}
              title={service.title}
              description={service.description}
              num={`0${i + 1}`}
            />
          ))}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default ServicesSection;
