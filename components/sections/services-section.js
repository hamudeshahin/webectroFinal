// components
import { Grid, Text } from "@nextui-org/react";
function ServicesSection() {
  return (
    <Grid.Container css={{ padding: "40px 0" }}>
      <Grid xs={12} sm={6}>
        <Grid.Container direction="column">
          <Grid>
            <Text as="h1" sm="false">
              <span className={`section__title-sec`} data-title="Servisler">
                Sunduğumuz Servisler
              </span>
            </Text>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12} sm={6}>
        Services list
      </Grid>
    </Grid.Container>
  );
}

export default ServicesSection;
