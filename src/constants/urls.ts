const baseURL : string = 'http://owu.linkpc.net/carsAPI/v1'

const urls = {
    allCars: "/cars",
    carById: (carId: number) => `/cars/${carId}`
}

export {
    baseURL,
    urls
}