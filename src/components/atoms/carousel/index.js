import React, {Component} from 'react';
import Card from '../../../components/atoms/card';
import {Carousel, Image, Col} from 'react-bootstrap';
import blackHole from '../../../assets/img/icons/black_hole.png';

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
                <Col xs={0} md={4}/>
            <Card
              dim={true}
              id={'moreSophStars2'}
              category="We do not know exactly what physics contols the inner workings of neutron stars. However, people from around the world have tried to guess at the solutions to an unknown equation of state. This post highlights a collaboration with Princeton's Kent Yagi to model some ofthese solutions"
              title="More Sophisticated Stars"
              xs={12}
              md={4}
              content={
                <Image
                  className="centered"
                  src={blackHole}
                  rounded
                  responsive
                />
              }
            />
        </Carousel.Item>
      </Carousel>
    );
  }
}

