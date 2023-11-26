import React from 'react';
import styled from '@emotion/styled';
import Slide from './Slider';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative
  background: red
  width: 100%
  height: 100vh
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

function mod(a: any, b: any) {
  return ((a % b) + b) % b;
}

interface IVerticalCarousel {
  slides: any;
  offsetRadius: any;
  showNavigation: any;
  animationConfig: any;
}

class VerticalCarousel extends React.Component<IVerticalCarousel> {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false,
  };
  handleScroll = (event: any) => {
    const delta = Math.sign(event.deltaY); // Get scroll direction (+1 for scroll down, -1 for scroll up)
    if (delta === 1) {
      this.moveSlide(1); // Scroll down to the next slide
    } else if (delta === -1) {
      this.moveSlide(-1); // Scroll up to the previous slide
    }
    document.addEventListener('wheel', this.handleScroll);
  };
  componentDidMount = () => {
    document.addEventListener('keydown', (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        this.moveSlide(-1);
      }
      if (event.keyCode === 40) {
        this.moveSlide(1);
      }
    });
    document.addEventListener('wheel', this.handleScroll);
  };
  componentWillUnmount() {
    // Cleanup: Remove event listener when the component is unmounted
    document.removeEventListener('wheel', this.handleScroll);
  }
  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object,
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object,
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 120, friction: 14 },
  };

  modBySlidesLength = (index: any) => {
    return mod(index, this.props?.slides.length);
  };

  moveSlide = (direction: any) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null,
    });
  };

  clampOffsetRadius(offsetRadius: any) {
    const { slides }: any = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { slides }: any = this.props;
    const { index } = this.state;
    let { offsetRadius }: any = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  render() {
    const { animationConfig, offsetRadius, showNavigation }: any = this.props;
    return (
      <React.Fragment>
        <Wrapper>
          {this.getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide.content}
              moveSlide={this.moveSlide}
              offsetRadius={this.clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default VerticalCarousel;
