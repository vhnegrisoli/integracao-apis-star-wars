import CharacterClient from "../client/CharacterClient.js";

class CharacterService {
  async findAll(req) {
    try {
      let response = await CharacterClient.findAll();
      return this.formatResponse(response);
    } catch {
      return { results: [] };
    }
  }

  async findByName(req) {
    try {
      let response = await CharacterClient.findByName(req.params.name);
      return this.formatResponse(response);
    } catch {
      return { results: [] };
    }
  }

  formatResponse(response) {
    if (response && response.results && response.results.length > 0) {
      return {
        results: response.results.map((result) => {
          return {
            name: result.name,
            height: result.height,
            birth_year: result.birth_year,
            gender: result.gender,
            homeworld: result.homeworld,
            films: result.films,
          };
        }),
      };
    }
  }
}

export default new CharacterService();
