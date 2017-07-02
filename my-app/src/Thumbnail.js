import React from 'react';

const Thumbnail = props => {
  const imgUrl = props.imgUrl;
  const imgLabel = props.imgLabel;
  const imgDescription = props.imgDescription;
  return (
    <div>
      <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img src={imgUrl} alt="..." />
          <div className="caption">
            <h3>{imgLabel}</h3>
            <p>{imgDescription}</p>
            <p><a href="#" className="btn btn-primary" role="button">Add to cart</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Thumbnail;
