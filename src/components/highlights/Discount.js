import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 50);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.percentage()}>
            <div className='discount_percentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto accusamus, magni facere, quidem fuga corporis optio
                in nemo molestiae, nostrum laborum eum necessitatibus dicta! Eum
                id nobis perferendis ut repudiandae.
              </p>
              <MyButton
                text='Purchase Tickets'
                bck='#ffa800'
                color='#fff'
                link='http://google.com'
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
