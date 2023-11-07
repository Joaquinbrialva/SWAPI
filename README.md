# API de sincronizacion de datos de Star Wars

Este proyecto es una API RESTful que sincroniza datos de la API de Star Wars (SWAPI) en una base de datos local todos los dias a las 00:00hs, ejecutado por un cron. Permite acceder a información sobre personajes, peliculas, naves y planetas de Star Wars.

## Como Iniciar el Servidor:

Instala las dependencias del proyecto:
npm install

Inicia el servidor:
npm start

Se puede acceder a los siguientes endpoints:

GET /films: Obtener informacion sobre peliculas de Star Wars.
GET /people: Obtener informacion sobre personajes de Star Wars.
GET /starships: Obtener informacion sobre naves de Star Wars.
GET /planets: Obtener informacion sobre planetas de Star Wars.

Se pueden usar parámetros de consulta para filtrar los resultados. A continuacion las consultas disponibles:

## Peliculas (films)
title: Filtrar por titulo de pelicula.
director: Filtrar por director de la pelicula.

## Personajes (people)
name: Filtrar por nombre del personaje.
gender: Filtrar por genero del personaje.

## Planetas (planets)
name: Filtrar por nombre del planeta.
climate: Filtrar por clima del planeta.
terrain: Filtrar por terreno del planeta.
population: Filtrar por poblacion del planeta.
diameter: Filtrar por diametro del planeta.

## Naves Espaciales (starships)
name: Filtrar por nombre de la nave.
model: Filtrar por modelo de la nave.
manufacturer: Filtrar por fabricante de la nave.
cost_in_credits: Filtrar por costo en creditos de la nave.
length: Filtrar por longitud de la nave.
crew: Filtrar por cantidad de tripulacion de la nave.
passengers: Filtrar por cantidad de pasajeros de la nave.
consumables: Filtrar por consumo de recursos de la nave.
starship_class: Filtrar por clase de la nave.

Todas las busquedas son insensibles a mayusculas o minusculas.
