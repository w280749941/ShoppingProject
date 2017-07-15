import React, {Component} from 'react';
import './Thumbnail.css';

// Display discountedPrice if on sale
class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    if (typeof(Storage) !== undefined) {
      if(!localStorage.itemCount){
        localStorage.itemCount = 0;
      }
      const index = localStorage.itemCount;
      localStorage.setItem('item'+index, JSON.stringify(this.props.product));
      localStorage.itemCount = Number(index) + 1;
      alert("Added to cart");
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
  }
  render() {
    let needExtraLine = false;
    let needThreeDots = false;
    const threshold = 37;
    if (this.props.product.name.length < 27) {
      needExtraLine = true;
    } else if (this.props.product.name.length > threshold) {
      needThreeDots = true;
    }
    return (
      <div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="thumbnail onSizeChange">
            <img src={'http://'+this.props.product.imageUrl} alt="..." />
            <div className="caption">
              {needThreeDots ? <h3>{this.props.product.name.substring(0,threshold) + "..."}</h3>
                             : <h3>{this.props.product.name}</h3>}
              {needExtraLine ? <br /> : ""}
              <p>{this.props.product.description}</p>
              {this.props.product.isOnSale ? (<p><strong className='rightMargin textColor'>On sale: {this.props.product.discountedPrice}</strong><s>Price: {this.props.product.originalPrice}</s></p>)
                        : (<p><strong>Price: {this.props.product.originalPrice}</strong></p>)}
              <p><button type="button" className="btn btn-primary" onClick={this.addItem}>Add to cart</button></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Thumbnail;
