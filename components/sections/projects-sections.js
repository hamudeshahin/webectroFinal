// components
import { Card, Col, Grid, Text, Row, Button } from "@nextui-org/react";
import Project from "../utils/project";
// data
import data from "../../data/projects";
function ProjectSections() {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Text as="h1" sm="false">
          <span className={`section__title-sec`} data-title="Porjeler">
            Son Projelerimiz
          </span>
        </Text>
      </Grid>
      <Grid xs={12}>
        <Grid.Container
          gap={3}
          css={{ width: "100%" }}
          justify="center"
          alignItems="center"
        >
          {data.map((project) => (
            <Grid xs={12} sm={4} key={project.id}>
              <Project
                image={project.image}
                title={project.title}
                url={project.url}
              />
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default ProjectSections;
