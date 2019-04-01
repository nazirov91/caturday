import React, { useState } from "react";
import {
  Header,
  Segment,
  Image,
  Placeholder,
  Button,
  Container,
  Label,
  Icon,
  Checkbox
} from "semantic-ui-react";
import './Caturday.css';
import {useDarkMode, useFetchImage} from './customHooks';

const Caturday = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [mehCount, setMehCount] = useState(0);

  const [darkMode, setDarkMode] = useDarkMode();
  const { data, loading } = useFetchImage(
    "https://api.thecatapi.com/v1/images/search",
    likeCount,
    mehCount
  );

  return (
    <Container id="image-container">
      <Segment raised>
      <Header className="ui basic segment centered">Caturday</Header>
        <Segment>
          <Checkbox onChange={() => setDarkMode(!darkMode)} toggle floated='right' label="Dark mode"/>
        </Segment>
        {
          loading ?
          <Placeholder fluid><Placeholder.Image className="main-placeholder"/></Placeholder> :
          <Image src={data[0] ? data[0].url : ''} className="main-img"/>
        }
        <Segment textAlign="center">
          <Button as="div" labelPosition="right">
            <Button onClick={() => setLikeCount(likeCount+1)} icon color="green">
              <Icon name="heart" />
              Like
            </Button>
            <Label as="a" basic pointing="left">
              {likeCount}
            </Label>
          </Button>
          <Button as="div" labelPosition="left">
            <Label as="a" basic pointing="right">
              {mehCount}
            </Label>
            <Button onClick={() => setMehCount(mehCount+1)} color="red" icon>
              <Icon name="thumbs down" />
              Meh
            </Button>
          </Button>
        </Segment>
      </Segment>
    </Container>
  );
};

export default Caturday;
