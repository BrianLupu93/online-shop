import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { addNewProduct } from "../../Slices/productsSlice";
import { useDispatch } from "react-redux";

const AddNewProduct = () => {
  const sampleState = useSelector((state) => state.products.sample);

  const [selectedCategory, setSelectedCategory] = useState(
    () => Object.keys(sampleState)[0]
  );

  const [subCategory, setSubCategory] = useState(
    () => sampleState[selectedCategory]
  );

  const [order, setOrder] = useState(() => false);

  const dispatch = useDispatch();

  useEffect(() => {
    reset();
    setSubCategory(sampleState[selectedCategory]);
  }, [selectedCategory]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);

    dispatch(addNewProduct(data));
    setOrder(false);
    reset();
  };

  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
  console.log(order);
  return (
    <div className="new-product-form">
      <h1>Add a new Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-row mt-5">
        <div className="col-md-12 mb-3">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              value={selectedCategory}
              className="form-control"
              {...register("category")}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {Object.keys(sampleState)?.map((cat, i) => (
                <option value={cat} key={i}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {Object.keys(subCategory)?.map((subCat, i) => {
          return (
            <div className="col-md-12 mb-3" key={i}>
              <div className="form-group">
                <label htmlFor="category">{subCat}</label>
                <select
                  className="form-control"
                  {...register(camelize(subCat))}
                  onChange={(e) => setValue(camelize(subCat), e.target.value)}
                >
                  {sampleState[selectedCategory][subCat]?.map((element, i) => (
                    <option value={camelize(element)} key={i}>
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
                {...register("price", {
                  required: {
                    value: true,
                    message: "The price is Required",
                  },
                })}
              />
              {errors.price && (
                <p className="error-message">{errors.price.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-3 d-flex">
          <div className="col-md-6 d-flex align-items-center">
            <div className="form-check form-switch">
              <input
                onClick={() => setOrder(!order)}
                className="form-check-input only-order"
                type="checkbox"
                id="flexSwitchCheckDefault"
                {...register("order")}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Only Order
              </label>
            </div>
          </div>

          {!order && (
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="price">Stock</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="stock"
                  {...register("stock", {
                    required: {
                      value: true,
                      message: "The stock is Required",
                    },
                  })}
                />
                {errors.stock && (
                  <p className="error-message">{errors.stock.message}</p>
                )}
              </div>
            </div>
          )}
        </div>
        {/* <div className="col-md-12 mb-3 d-flex">
          <div className="col-md-3">
            <div className="form-group">
              <div className="custom-file">
                <input
                  type="file"
                  multiple
                  className="custom-file-input"
                  {...register("file")}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Product Image
                </label>
              </div>
            </div>
          </div>
        </div> */}

        <button type="submit" className="btn btn-primary mb-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
