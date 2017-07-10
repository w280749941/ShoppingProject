import React, {Component} from 'react';
import './AdminThumbnail.css';

class AdminThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      flag: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSection = this.handleSection.bind(this);
  }

  deleteItem = () => {
    fetch('http://localhost:8080/products/deleteproduct/'+this.state.product._id, {
      method: 'DELETE'
    }).then(response => {
      return response.json(); })
      .then(data => {console.log(data);window.location.reload();});
  }
  handleSection() {
    const targetElement = document.getElementById(this.state.product._id);
    if(targetElement.style.display === 'block') {
      targetElement.style.display = 'none';
    } else {
      targetElement.style.display = 'block';
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let updatedProduct = this.state.product;
    updatedProduct.modifyDate = new Date();
    if (name === 'filetoupload') {
      updatedProduct['imageUrl'] = "localhost:8080/productImages/" + target.files[0].name;
      this.setState({
        product: updatedProduct,
        flag: 1,
      });
      // For image preview.
      const reader = new FileReader();
      reader.onloadend = () => {
        document.getElementById("myImg").src = reader.result;
      }
      reader.readAsDataURL(target.files[0])
    } else {
      updatedProduct[name] = value;
      this.setState({
        product: updatedProduct,
      });
    }


  }
  handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:8080/products/modifyproduct/'+this.state.product._id, {
      method: 'PUT',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(this.state.product),
    }).then(response => { return response.json(); })
      .then(data => {
        console.log(data);
        // Execute this part only when there is file added.
        if(this.state.flag === 1) {
          const myFile = document.getElementById("myFile");
          let formData = new FormData();
          formData.append('filetoupload', myFile.files[0], myFile.files[0].name);
          const requestOptions = {
            method: 'POST',
            body: formData,
          };
          fetch('http://localhost:8080/products/fileupload', requestOptions)
          .then(response => { return response.json(); })
            .then(data => {
              console.log(data);
              window.location.reload();
            });
        } else {
          window.location.reload();
        }
      });
  }
  render() {
    return (
      <div>
        <div className="col-sm-4 col-md-3 col-lg-3">
          <div className="thumbnail onSizeChange">
            <img id="myImg" src={'http://'+this.state.product.imageUrl} alt="..." />
            <div className="caption">
              <h4>{this.state.product.name}</h4>
              <p>{this.state.product.description}</p>
              {this.state.product.isOnSale ? (<p><strong className='rightMargin textColor'>On sale: {this.state.product.discountedPrice}</strong><s>Price: {this.state.product.originalPrice}</s></p>)
                        : (<p><strong>Price: {this.state.product.originalPrice}</strong></p>)}
              <p>
                <button type="button" id='hideshow' className="btn btn-warning" onClick={this.handleSection}>Modify</button>
                <button type="button" className="btn btn-danger pull-right" onClick={this.deleteItem}>Delete</button>
              </p>
              <div id={this.state.product._id} className="targetElementDisplay">
                <form id="myForm" onSubmit={this.handleSubmit}>
                    <p><strong>Name: </strong></p>
                    <input type="text" name="name" value={this.state.product.name} onChange={this.handleInputChange} />
                    <p><strong>Category: </strong></p>
                    <input type="text" name="category" value={this.state.product.category} onChange={this.handleInputChange}/>
                    <p><strong>Description: </strong></p>
                    <input type="text" name="description" value={this.state.product.description} onChange={this.handleInputChange}/>
                    <p><strong>ImageUrl: </strong></p>
                    <input type="url" name="imageUrl" value={this.state.product.imageUrl} onChange={this.handleInputChange}/>
                    <p><strong>Quantity: </strong></p>
                    <input type="number" name="quantity" value={this.state.product.quantity} onChange={this.handleInputChange}/>
                    <p><strong>OriginalPrice: </strong></p>
                    <input type="number" name="originalPrice" value={this.state.product.originalPrice} onChange={this.handleInputChange}/>
                    <p><strong>DiscountedPrice: </strong></p>
                    <input type="number" name="discountedPrice" value={this.state.product.discountedPrice} onChange={this.handleInputChange}/>
                    <p>
                      <input type="checkbox" name="isOnSale" value={this.state.product.isOnSale ? ("true") : ("false ")} onChange={this.handleInputChange} checked={this.state.product.isOnSale}/><strong> On sale</strong>
                    </p>
                    <p><strong>Select a file to upload: </strong><input type="file" id="myFile" name="filetoupload" onChange={this.handleInputChange} /></p>
                    <button type="submit" value="Submit" className="btn btn-success">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminThumbnail;
