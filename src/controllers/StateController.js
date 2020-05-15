const State = require("../models/StateModel");

exports.show = async (request, response) => {
  let { page = 1, limit = 27 } = request.query;

  page = parseInt(page);
  limit = parseInt(limit);

  const states = await State.paginate(
    {},
    {
      page,
      limit,
      sort: { name: "asc" },
      select: "-createdAt -updatedAt -__v -cities -_id",
    }
  );

  response.status(200).send({ states });
};

exports.index = async (request, response) => {
  const { id } = request.params;

  const state = await State.findOne({ id }).select(
    "-cities -createdAt -updatedAt -__v -_id"
  );

  response.status(200).send({ state });
};
