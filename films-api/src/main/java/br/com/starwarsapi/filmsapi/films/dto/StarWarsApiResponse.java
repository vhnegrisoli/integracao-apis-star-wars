package br.com.starwarsapi.filmsapi.films.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StarWarsApiResponse {

    private List<FilmResponse> results;

    public static StarWarsApiResponse createEmptyResult() {
        var response = new StarWarsApiResponse();
        response.setResults(Collections.emptyList());
        return response;
    }
}
