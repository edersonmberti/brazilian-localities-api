# Brazilian Localities API
Inspired by [Municipios-Brasileiros](https://github.com/kelvins/Municipios-Brasileiros) and [IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1).

Rest API developed to provide the name and location of Brazilian states and cities in an easy way with pagination option.

## Documentation 

### States

Get the Units of the Federation of Brazil from the respective identifiers:

```sh
https://brazilian-municipalities-api.herokuapp.com/states/{ID}
```

#### Returns 
state : {
  name: String,
  id: Number,
  uf: String,
  latitude: Number,
  longitude: Number
}

Get the set of Units of the Federation of Brazil:

```sh
https://brazilian-localities-api.herokuapp.com/states
```

#### Returns 
docs: [ state : {
  name: String,
  id: Number,
  uf: String,
  latitude: Number,
  longitude: Number
}]

It is possible to get by pagination passing the "limit" by pages and the "page" from query parameters: 

```sh
https://brazilian-localities-api.herokuapp.com/states?page=1&limit=10
```

### Cities 

Get a set of cities according to the state identifier:

```sh
https://brazilian-localities-api.herokuapp.com/cities?page=1&limit=10?id=43
```

#### Returns 
docs: [{
  name: String,
  latitude: Number,
  longitude: Number
}]

## Dependencies and Technologies

- [NodeJS](https://nodejs.org/en/) - Build the server
- [express](https://expressjs.com/) - Router of the Application
- [MongoDB](https://www.mongodb.com/) - Database
- [mongoose](https://mongoosejs.com/) - Object Modeling + DB Connector
- [nodemon](https://nodemon.io/) - Process Manager used in the development
- [dotenv](https://github.com/motdotla/dotenv) - Environment loader
- [morgan](https://github.com/expressjs/morgan) - Http request logger
- [cors](https://github.com/expressjs/cors#readme) - Enable CORS

## Contribute

Contributions are always welcome!
Please read the [CONTRIBUTING.md](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
