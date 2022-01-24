import { useState } from "react";
// components
import { Grid, Text, Button, Spacer } from "@nextui-org/react";
import { FiSend, FiInstagram } from "react-icons/fi";
import ContactUs from "../modals/contact-us";
// styles
import style from "./starting-section.module.css";
function StartingSection() {
  const [visible, setVisible] = useState(false);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Grid.Container gap={2} direction="column" css={{ padding: "40px 0" }}>
      <Grid xs={12}>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={4} justify="center" alignItems="center">
            <Grid.Container gap={0}>
              <Grid xs={12}>
                <Text as="h1" sm="false">
                  <span className={`section__title-sec`} data-title="Selam">
                    Geliştirme Deneyimimiz Var
                  </span>
                </Text>
              </Grid>
              <Grid xs={12} direction="column">
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
                  Merhaba! Biz webectro ekibiyiz. Yeni teknolojiler, en yüksek
                  performans ile web siteleri ve web uygulamaları oluşturuyoruz.
                </Text>
                <Grid.Container gap={1}>
                  <Grid>
                    <Button
                      shadow
                      iconRight={<FiSend />}
                      color="secondary"
                      css={{ width: 160 }}
                      onClick={() => setVisible(true)}
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
              onClick={() =>
                window.open("https://www.instagram.com/webectro/", "_blank")
              }
            />
          </Grid>
        </Grid.Container>
      </Grid>
      <ContactUs visible={visible} closeHandler={closeHandler} />
    </Grid.Container>
  );
}

export default StartingSection;
