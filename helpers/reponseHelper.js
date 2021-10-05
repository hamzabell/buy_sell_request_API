function jsonResponse(res, status, message, data) {
  return res.status(status).send(
    JSON.stringify({
      message,
      data,
    })
  );
}

module.exports = { jsonResponse };
