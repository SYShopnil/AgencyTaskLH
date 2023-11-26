import React, { Component } from 'react';
import VerticalCarousel from './VerticalCarousel';
import { config } from 'react-spring';
import { IVerticalCarouselSectionMain } from '@src/types/compound/vertical-slider-section';

export default class VerticalCarouselMain extends Component<IVerticalCarouselSectionMain> {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
    showNavigation: false,
    config: config.gentle,
  };

  render() {
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
          margin: '0 auto',
        }}
      >
        <VerticalCarousel
          slides={this.props.slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
