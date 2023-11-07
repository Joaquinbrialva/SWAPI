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

Se pueden usar parametros de consulta para filtrar los resultados. Por ejemplo: /films?title=a%new%hope A continuacion las consultas disponibles:

## Peliculas (films)
title, director.

## Personajes (people)
name, gender.

## Planetas (planets)
name, climate, terrain, population, diameter.

## Naves Espaciales (starships)
name, model, manufacturer, cost_in_credits, length, crew, passengers, consumables, starship_class.

Todas las busquedas son insensibles a mayusculas o minusculas.
