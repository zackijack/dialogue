![dialogue](https://raw.githubusercontent.com/zackyjack/dialogue/master/dialogue.png)

[![Dependency Status](https://david-dm.org/atom/atom.svg)](https://david-dm.org/zackyjack/dialogue)

> Real-time chat application

## Getting Started

Getting it up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Clone this repository and install the dependencies

    ```sh
    git clone https://github.com/zackyjack/dialogue
    cd dialogue; npm install
    ```
3. Start the application

    ```
    npm start
    # or "npm run dev" for development
    ```

Or with Docker, this is even easier.

1. Clone this repository and build the Docker image

    ```sh
    git clone https://github.com/zackyjack/dialogue
    cd dialogue
    docker build -t <your username>/dialogue .
    ```
2. Run the container

    ```sh
    docker run -p 3030:3030 -d <your username>/dialogue
    ```

## Usage

#### API
You can easily run it in Postman with this button:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ca767c9cfbabd807c903)

Or import collections into Postman with this [link](https://www.getpostman.com/collections/ca767c9cfbabd807c903).

#### Front-end
You just need to open `localhost:3030` in the browser.

## Testing

Simply run `npm test` and all tests in the `test/` directory will be run.

## Changelog

__0.1.0__

- Initial release

__1.0.0__

- Add user authentication
- Add user information, including profile picture (with Gravatar)

__1.1.0__

- Add frontend client

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
