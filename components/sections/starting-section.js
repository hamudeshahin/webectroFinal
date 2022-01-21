// components
import { Grid, Text, Button, Spacer } from "@nextui-org/react";
import { FiSend, FiInstagram } from "react-icons/fi";
// styles
import style from "./starting-section.module.css";
function StartingSection() {
  return (
    <Grid.Container gap={2} direction="column">
      <Grid xs={12}>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={4} justify="center" alignItems="center">
            <Grid.Container gap={0}>
              <Grid xs={12}>
                <Text as="h1" sm="false">
                  <span className={style.desc}>Geliştirme Deneyimimiz Var</span>
                </Text>
              </Grid>
              <Grid xs={12} direction="column">
                <p className={style.our_text}>
                  Merhaba! Biz webectro ekibiyiz. yeni teknolojiler ve en yüksek
                  performans ile web siteleri ve web uygulamaları oluşturuyoruz
                </p>
                <Grid.Container gap={1}>
                  <Grid>
                    <Button
                      shadow
                      iconRight={<FiSend />}
                      color="secondary"
                      css={{ width: 160 }}
                    >
                      İletişime Geçin
                    </Button>
                  </Grid>
                </Grid.Container>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={8} justify="center" alignItems="center">
            <img
              src="/svgs/experience.svg"
              alt="our experience svg"
              className={style.svg_style}
            />
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={1} alignItems="center">
          <Grid>Check out our</Grid>
          <Grid>
            <Button
              auto
              color="error"
              icon={<FiInstagram style={{ fontSize: 24 }} />}
              // onClick={() => alert("Hello World !")}
            />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default StartingSection;
