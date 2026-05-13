// 10. Mapped Types with Key Remapping

// Car interface
interface Car {

  // Make
  make: string;

  // Model
  model: string;
}

// Mapped type
type ApiResponse<T> = {

  // Rename keys
  [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

// New type
type CarApiResponse = ApiResponse<Car>;

// Object
const carResponse: CarApiResponse = {

  // Uppercase keys
  DATA_MAKE: "Toyota",
  DATA_MODEL: "Innova"
};

// Print values
console.log(carResponse.DATA_MAKE);
console.log(carResponse.DATA_MODEL);