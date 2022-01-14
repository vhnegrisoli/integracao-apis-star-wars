package br.com.starwarsapi.filmsapi.films.controller;

import br.com.starwarsapi.filmsapi.films.dto.StarWarsApiResponse;
import br.com.starwarsapi.filmsapi.films.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FilmController {

    @Autowired
    private FilmService filmService;

    @GetMapping
    public StarWarsApiResponse findAll() {
        return filmService.findAll();
    }

    @GetMapping("title/{title}")
    public StarWarsApiResponse findMovieByTitle(@PathVariable String title) {
        return filmService.findMovieByTitle(title);
    }
}
