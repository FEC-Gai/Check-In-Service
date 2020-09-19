import React from 'react';
import styles from './CheckIn.css';
import Fields from './Fields';
// import ReactDOM from 'react-dom';

class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDetailedPricing: false,
    };
  }

  render() {
    const { availability, pricing } = this.props;
    const { displayDetailedPricing } = this.state;
    const { base_price } = pricing;
    console.log(pricing);
    return (
      <div id={styles.checkInService}>
        <div id={styles.heading}>
          <p id={styles.price}>
            ${base_price}
            <span id={styles.nightText}> / night</span>
          </p>
          <p id={styles.ratings}>
            <span id={styles.star}>★</span>
            {' 4.95 '}
            <span id={styles.reviewCount}>(386)</span>
          </p>
        </div>
        <div>
          <Fields availability={availability} pricing={pricing} />
        </div>
      </div>
    );
  }
}

export default CheckIn;
