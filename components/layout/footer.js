// components
import { Grid, Text } from "@nextui-org/react";
function Footer() {
  return (
    <div className="container">
      <Grid.Container
        as="footer"
        gap={2}
        css={{
          borderTop: "$text solid 1px",
          padding: "10px 0 10px 0",
          position: "relative",
          zIndex: "100",
        }}
      >
        <Grid xs={6} justify="flex-start" alignItems="center">
          <Text sm="false">
            &copy;{new Date().getFullYear()} Bütün hakları saklıdır
          </Text>
        </Grid>
        <Grid xs={6} justify="flex-end" alignItems="center">
          <Text sm="false">Webectro</Text>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Footer;
