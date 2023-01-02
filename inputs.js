const [cars, setCars] = useState(carsData);
const [productName, setProductName] = useState("");
const [priceMin, setPriceMin] = useState(0);
const [priceMax, setPriceMax] = useState(0);
const [filteredCategory, setFilteredCategory] = useState([]);

let filteredCars = cars;

//!checkbox all
const onFilteredCategoryChange = (e) => {  
  // wenn checkbox gechecked, dann add e.target.value zu array
  if (e.target.checked) {
    setFilteredCategory([...filteredCategory, e.target.value]);
  }
  // wenn checkbox unchecked, dann remove e.target.value from array
  else {
    const newFilteredCategory = filteredCategory.filter((item) => {
      return item !== e.target.value;
    });
    setFilteredCategory(newFilteredCategory);
  }
}

  if (filteredCategory.length) {
    filteredCars = filteredCars.filter((car) => {
      return filteredCategory.includes(car.category);
    });
  }

  <div className="filterByCategory">
  <input
    type="checkbox"
    name="categories"
    value="Toyota"
    onChange={onFilteredCategoryChange}
  />
  <span>Toyota</span>
</div>

//! checkbox one
if (filteredCategory) {
    filteredCars = filteredCars.filter((car) => {
      return car.category.includes(filteredCategory);
    });
  }

  <div className="filterByCategory">
  <input
    type="radio"
    name="categories"
    value="Toyota"
    onChange={(e) =>  setFilteredCategory(e.target.checked ? e.target.value : '')}
  />
  <span>Toyota</span>
</div>

//! inputs
  if (productName) {
    filteredCars = filteredCars.filter((car) => {
      return car.name.toLowerCase().includes(productName.toLowerCase());
    });
  }

  <div className="productName">
  Car name:{" "}
  <input
    type="text"
    value={productName}
    onChange={(e) => {
      setProductName(e.target.value);
    }}
  />
</div>

  if (priceMin) {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= priceMin;
    });
  }

  if (priceMax) {
    filteredCars = filteredCars.filter((car) => {
      return car.price <= priceMax;
    });
  }