// // Create the function to use to make a call to that API
// export async function fetchCars() {
//     // provide the header for Rapid API
//     const headers = {
//         headers: {
//             //'X-RapidAPI-Key': 'a34ee22a11mshcae8e2cd85f3858p10e7c6jsn34560ee24a3a',
//             'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bKzuUzVLzA',
//             'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//         }
//     }
//     // make the call to the API to target a specific endpoint
//     const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
//         headers: headers,
//     });

import { CarProps } from "@/types";

//     // parse the response as Json 
//     const result = await response.json();
//     return result;  // return result as the actual car
// }

// // Call the function to get the cars
export async function fetchCars() {
    // provide the header for Rapid API
    const headers = {
        'X-RapidAPI-Key': 'a34ee22a11mshcae8e2cd85f3858p10e7c6jsn34560ee24a3a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    try {
        // make the call to the API to target a specific endpoint
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
            headers: headers
        });

        // check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // parse the response as Json 
        const result = await response.json();
        return result;  // return result as the actual car data
    } catch (error) {
        console.error('Error fetching the car data:', error);
        throw error;  // rethrow the error for further handling
    }
}

// Call the function to Price for rental car base on year and model :
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

// Call the Function to Generate Car Image Url
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    // Key... is the API key for the Imagin.Studion/car-image-api
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    // API-Key : "hrjavascript-mastery"
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ') [0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}   