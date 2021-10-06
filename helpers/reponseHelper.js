function jsonResponse(res, status, data) {
  return res.status(status).send(
    JSON.stringify({
      ...data,
    })
  );
}

module.exports = { jsonResponse };
