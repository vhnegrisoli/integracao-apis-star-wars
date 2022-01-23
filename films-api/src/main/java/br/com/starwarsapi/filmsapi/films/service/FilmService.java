package br.com.starwarsapi.filmsapi.films.service;

import br.com.starwarsapi.filmsapi.films.client.FilmClient;
import br.com.starwarsapi.filmsapi.films.dto.StarWarsApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilmService {

    @Autowired
    private FilmClient filmClient;

    public StarWarsApiResponse findAll() {
        try {
            return filmClient
                .findAll()
                .orElse(StarWarsApiResponse.createEmptyResult());
        } catch (Exception ex) {
            ex.printStackTrace();
            return StarWarsApiResponse.createEmptyResult();
        }
    }

    public StarWarsApiResponse findMovieByTitle(String title) {
        try {
            return filmClient
                .findByMovieTitle(title)
                .orElse(StarWarsApiResponse.createEmptyResult());
        } catch (Exception ex) {
            ex.printStackTrace();
            return StarWarsApiResponse.createEmptyResult();
        }
    }
}
