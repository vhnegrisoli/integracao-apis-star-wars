import CharacterService from "../service/CharacterService.js";

class CharacterController {
  async findAll(req, res) {
    let response = await CharacterService.findAll();
    return res.json(response);
  }

  async findByName(req, res) {
    let response = await CharacterService.findByName(req);
    return res.json(response);
  }
}

export default new CharacterController();
