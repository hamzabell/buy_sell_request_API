import responseHelper from "../helpers/reponseHelper";

export async function getRequests(req, res) {
  try {
    return responseHelper.jsonResponse(res, 200, res.paginatedResult);
  } catch {
    return responseHelper.jsonResponse(res, 500, "Server Error", error.message);
  }
}
