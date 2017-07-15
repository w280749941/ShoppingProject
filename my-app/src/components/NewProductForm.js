import React, {Component} from 'react';


class NewProductForm extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      previewUrl: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let updatedProduct = this.state.product;
    updatedProduct.modifyDate = new Date();
    if (name === 'filetoupload') {
      updatedProduct['imageUrl'] = target.files[0].name;
      console.log('Image Here');
      // For image preview.
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log('Set state here');
        console.log(reader.result);
        this.setState({
          product: updatedProduct,
          previewUrl: reader.result,
        });
        //document.getElementById("myImg").src = reader.result;
      }
      reader.readAsDataURL(target.files[0])
    } else {
      updatedProduct[name] = value;
      this.setState({
        product: updatedProduct,
      });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8080/products/postnewproduct/', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(this.state.product),
    }).then(response => { return response.json(); })
      .then(data => {
        console.log(data);
        const myNewFile = document.getElementById("myNewFile");
        let formData = new FormData();
        formData.append('filetoupload', myNewFile.files[0], myNewFile.files[0].name);
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
      });
  }
  render() {
    return (
      <div id="newProductForm" className="targetElementDisplay">
        <div className="thumbnail">
          <img id="myImg" src={this.state.previewUrl} alt="..." />
          <div className="caption">
            <h4>{this.state.product.name}</h4>
            <p>{this.state.product.description}</p>
            {this.state.product.isOnSale ? (<p><strong className='rightMargin textColor'>On sale: {this.state.product.discountedPrice}</strong><s>Price: {this.state.product.originalPrice}</s></p>)
                      : (<p><strong>Price: {this.state.product.originalPrice}</strong></p>)}
          </div>
        </div>
        <div>
          <form id="myForm" onSubmit={this.handleSubmit}>
            <p>
              <input type="file" id="myNewFile" name="filetoupload" onChange={this.handleInputChange} />
              <strong>Select a file to upload </strong>
            </p>
            <p><strong>Name: </strong></p>
            <input type="text" name="name" value={this.state.product.name} onChange={this.handleInputChange} />
            <p><strong>Category: </strong></p>
            <input type="text" name="category" value={this.state.product.category} onChange={this.handleInputChange}/>
            <p><strong>Description: </strong></p>
            <input type="text" name="description" value={this.state.product.description} onChange={this.handleInputChange}/>
            <p><strong>ImageUrl: </strong></p>
            <input type="text" name="imageUrl" value={this.state.product.imageUrl} onChange={this.handleInputChange}/>
            <p><strong>Quantity: </strong></p>
            <input type="number" name="quantity" value={this.state.product.quantity} onChange={this.handleInputChange}/>
            <p><strong>OriginalPrice: </strong></p>
            <input type="number" name="originalPrice" value={this.state.product.originalPrice} onChange={this.handleInputChange}/>
            <p><strong>DiscountedPrice: </strong></p>
            <input type="number" name="discountedPrice" value={this.state.product.discountedPrice} onChange={this.handleInputChange}/>
            <p>
              <input type="checkbox" name="isOnSale" value={this.state.product.isOnSale ? ("true") : ("false ")} onChange={this.handleInputChange} checked={this.state.product.isOnSale}/><strong> On sale</strong>
            </p>
            <button type="submit" value="Submit" className="btn btn-success">Post New</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewProductForm;
