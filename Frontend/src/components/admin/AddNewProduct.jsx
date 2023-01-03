import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const AddNewProduct = () => {
  const [category, setCategory] = useState(() => "SUNGLASSES");
  const [subCategory, setSubCategory] = useState(null);

  const sample = useSelector((state) => state.products.sample);
  const categories = Object.keys(sample);

  useEffect(() => {
    setSubCategory(Object.keys(sample[category]));
  }, []);

  useEffect(() => {
    setSubCategory(Object.keys(sample[category]));
  }, [category]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(category);
  console.log(subCategory);

  return (
    <div className="new-product-form">
      <h1>Add a new Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-row mt-5">
        <div className="col-md-12 mb-3">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              {...register("category")}
            >
              {categories?.map((cat, i) => (
                <option value={cat} key={i}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {subCategory?.map((subCat, i) => {
          return (
            <div className="col-md-12 mb-3" key={i}>
              <div className="form-group">
                <label htmlFor="category">{subCat}</label>
                <select
                  className="form-control"
                  {...register(subCat)}
                  onChange={(e) => setValue(subCat, e.target.value)}
                >
                  {sample[category][subCat].map((element, i) => (
                    <option value={element} key={i}>
                      {element}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          );
        })}

        <div className="col-md-12 mb-3 ">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Short Description
              </label>
              <textarea
                className="form-control"
                rows="3"
                {...register("description")}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-3 d-flex">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                className="form-control"
                placeholder="model"
                {...register("model")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                className="form-control"
                placeholder="size"
                {...register("size")}
              />
            </div>
          </div>
        </div>

        <div className="col-md-12 mb-3 d-flex">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="form-control"
                placeholder="color"
                {...register("color")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="price"
                {...register("price")}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
