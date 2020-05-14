const State = require("../models/StateModel");
const City = require("../models/CityModel");

exports.index = async (request, response) => {
  const { page, limit, id } = request.query;

  page = parseInt(page);
  limit = parseInt(limit);
  id = parseInt(id);

  const state = await State.find({ id });

  const cities = await City.paginate(
    { state },
    { page, limit, select: "-createdAt -updatedAt -__v -_id -state" }
  );

  response.status(200).send({ cities });
};
