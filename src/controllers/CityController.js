const State = require("../models/StateModel");
const City = require("../models/CityModel");

exports.index = async (request, response) => {
  let { page = 1, limit = 20, id = 43 } = request.query;

  page = parseInt(page);
  limit = parseInt(limit);
  id = parseInt(id);

  const state = await State.find({ id });

  const cities = await City.paginate(
    { state },
    {
      page,
      limit,
      sort: { name: "asc" },
      select: "-createdAt -updatedAt -__v -_id -state",
    }
  );

  response.status(200).send({ cities });
};
