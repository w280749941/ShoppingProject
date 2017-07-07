import React from 'react';

const TotalSection = props => {
  const total = props.total;
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3 col-lg-3">
          <p><strong>Total amount:</strong></p>
        </div>
        <div className="col-xs-6 col-md-7 col-lg-7">
        </div>
        <div className="col-xs-6 col-md-2 col-lg-2 text-center">
          <p><strong>Subtotal: ${total}</strong></p>
          <p><strong>Taxes: ${Math.ceil(total*0.06 * 100) / 100}</strong></p>
          <p><strong>Sum: ${Math.ceil(total*1.06 * 100) / 100}</strong></p>
        </div>
      </div>
      <hr className="hrStyle" />
    </div>
  );
}
export default TotalSection
