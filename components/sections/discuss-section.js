// components
import { Grid, Text, Link, Button } from "@nextui-org/react";
import { BiMessageSquareDetail, BiCurrentLocation } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
// styles
import style from "./discuss-section.module.css";
function DiscussSection() {
  return (
    <Grid.Container gap={2} css={{ paddingTop: "$20", paddingBottom: "$20" }}>
      <Grid xs={12} sm={5} direction="column" css={{ gap: "10px" }}>
        <Text as="h1" sm="false">
          <span className={`section__title-sec`} data-title="İletişim">
            Projenizi Tartışalım
          </span>
        </Text>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            css={{ borderTop: "$text 1px solid", padding: "$10 0 $10 0" }}
          >
            <div className={style.item}>
              <div className={style.icon}>
                <Grid
                  as="span"
                  alignItems="center"
                  justify="center"
                  css={{
                    display: "flex",
                    background: "$bg",
                    color: "$text",
                    w: "50px",
                    h: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <BiMessageSquareDetail />
                </Grid>
              </div>
              <div className={style.desc}>
                <Text sm="false">E-posta</Text>
                <Text sm="false">
                  <Link color={"secondary"}>Webectro@zohomail.com</Link>
                </Text>
              </div>
            </div>
          </Grid>
          <Grid
            xs={12}
            css={{ borderTop: "$text 1px solid", padding: "$10 0 $10 0" }}
          >
            <div className={style.item}>
              <div className={style.icon}>
                <Grid
                  as="span"
                  alignItems="center"
                  justify="center"
                  css={{
                    display: "flex",
                    background: "$bg",
                    color: "$text",
                    w: "50px",
                    h: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <BiCurrentLocation />
                </Grid>
              </div>
              <div className={style.desc}>
                <Text sm="false">Konum</Text>
                <Text sm="false">
                  <Link color={"secondary"}>Şanlıurfa/Türkiye</Link>
                </Text>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12} sm={7} justify="center" css={{ minHeight: 450 }}>
        <Grid
          as="div"
          css={{
            w: "422px",
            backdropFilter: "blur",
            border: "$text solid 1px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            as="div"
            css={{
              w: "100%",
            }}
          >
            <Grid.Container
              justify="space-between"
              alignItems="center"
              css={{
                position: "relative",
                "&::after": {
                  content: "",
                  position: "absolute",
                  width: "100%",
                  height: "1px",
                  background: "$text",
                  bottom: 0,
                  transform: "rotate(8deg)",
                },
              }}
            >
              <Grid as="span">
                <Text
                  sm="false"
                  as="span"
                  css={{ marginInlineEnd: "10px", fontSize: 26 }}
                >
                  👋
                </Text>
                <Text sm={"false"} as="span">
                  Bize Merhaba Deyin!
                </Text>
              </Grid>
              <Button
                auto
                color="secondary"
                css={{
                  fontSize: 24,
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
                onClick={() =>
                  window.open("https://wa.me/905442104733", "_blank")
                }
              >
                <BsArrowUpRight />
              </Button>
            </Grid.Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid.Container>
  );
}

export default DiscussSection;
