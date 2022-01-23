// components
import { Card, Text, Col, Row, Button } from "@nextui-org/react";
import { BiLinkAlt } from "react-icons/bi";

function Project({ image, title, url }) {
  return (
    <Card cover>
      {/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text
            sm="false"
            size={12}
            weight="bold"
            transform="uppercase"
            color="#ffffffAA"
          >
            New
          </Text>
          <Text sm="false" h3 color="black">
            {title}
          </Text>
        </Col>
      </Card.Header> */}
      <Card.Body>
        <Card.Image
          src={image}
          height={400}
          width="100%"
          alt="Card background"
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col css={{ overflow: "hidden" }}>
            <Text sm="false" color="#000" size={12}>
              {title}
            </Text>
            <Text sm="false" color="#000" size={12}>
              {url}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                auto
                rounded
                color="secondary"
                css={{ width: 140 }}
                iconRight={<BiLinkAlt />}
                onClick={() => window.open(url, "_blanck")}
              >
                <Text
                  sm="false"
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Ziyaret et
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Project;
