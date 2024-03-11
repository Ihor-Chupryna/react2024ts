const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

const cars = './cars';

const urls = {
    cars: {
        all: cars,
        byId: (id: string) => `${cars}/${id}`
    }
}

export { baseURL, urls }