// components
import { Card, Grid, Text, Link } from "@nextui-org/react";
import { FiInstagram, FiGithub } from "react-icons/fi";
function TeamSection() {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Text as="h1" sm="false">
          <span className="section__title-sec">Webectro Ekibi</span>
        </Text>
      </Grid>
      <Grid xs={12}>
        <Grid.Container gap={2} justify="center" alignItems="center">
          <Grid xs={12} sm={4} justify="center">
            <Card css={{ w: "330px" }}>
              <Text sm="false" h4 color="secondary">
                Mahmut Can TATLI
              </Text>
              <Text sm="false">🚀 Founder</Text>
              <Text sm="false">💻 Frontend Developer</Text>
              <Card.Footer>
                <Grid.Container gap={1}>
                  <Grid>
                    <Link
                      color={"secondary"}
                      css={{ fontSize: 18 }}
                      target="_blank"
                      href="https://instagram.com/mahmutcan.tatli"
                    >
                      <FiInstagram />
                    </Link>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} justify="center">
            <Card css={{ w: "330px" }}>
              <Text sm="false" h4 color="secondary">
                Hamude SHAHİN
              </Text>
              <Text sm="false">🚀 Founder</Text>
              <Text sm="false">💻 Frontend Developer</Text>
              <Text sm="false">💻 Backend Developer</Text>
              <Card.Footer>
                <Grid.Container gap={1}>
                  <Grid>
                    <Link
                      color={"secondary"}
                      css={{ fontSize: 18 }}
                      target="_blank"
                      href="https://instagram.com/hamudeshahin"
                    >
                      <FiInstagram />
                    </Link>
                  </Grid>
                  <Grid>
                    <Link
                      color={"secondary"}
                      css={{ fontSize: 18 }}
                      target="_blank"
                      href="https://github.com/hamudeshahin"
                    >
                      <FiGithub />
                    </Link>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={4} justify="center">
            <Card css={{ w: "330px" }}>
              <Text sm="false" h4 color="secondary">
                Salih MUSLEM
              </Text>
              <Text sm="false">🚀 Founder</Text>
              <Text sm="false">💻 Frontend Developer</Text>
              <Card.Footer>
                <Grid.Container gap={1}>
                  <Grid>
                    <Link
                      color={"secondary"}
                      css={{ fontSize: 18 }}
                      target="_blank"
                      href="https://instagram.com/salih_muslum__63"
                    >
                      <FiInstagram />
                    </Link>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default TeamSection;
