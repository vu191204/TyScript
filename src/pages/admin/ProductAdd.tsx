import React from 'react';

type Props = {};

const ProductAdd = (props: Props) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };
  return (
    <div>
      <h2>ProductAdd</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="price"
            id="price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            id="description"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductAdd
