# API de sincronizacion de datos de Star Wars

Este proyecto es una API RESTful que sincroniza datos de la API de Star Wars (SWAPI) en una base de datos local todos los dias a las 00:00hs, ejecutado por un cron. Permite acceder a información sobre personajes, peliculas, naves y planetas de Star Wars.

## Como Iniciar el Servidor:

Inicia tu base de datos local de mongod.

Instala las dependencias del proyecto:<br>
<b>npm install</b>

Inicia el servidor:<br>
<b>npm start</b>

Se puede acceder a los siguientes endpoints:

GET /films: Obtener informacion sobre peliculas de Star Wars.<br>
GET /people: Obtener informacion sobre personajes de Star Wars.<br>
GET /starships: Obtener informacion sobre naves de Star Wars.<br>
GET /planets: Obtener informacion sobre planetas de Star Wars.<br>

Se pueden usar parametros de consulta para filtrar los resultados. Por ejemplo: /films?title=anewhope A continuacion las consultas disponibles:

## Peliculas (films)
title, director.

## Personajes (people)
name, gender.

## Planetas (planets)
name, climate, terrain, population, diameter.

## Naves Espaciales (starships)
name, model, manufacturer, cost_in_credits, length, crew, passengers, consumables, starship_class.

Todas las busquedas son insensibles a mayusculas o minusculas.

## ⚠️⚠️ IMPORTANTE ⚠️⚠️
La sincronizacion esta programada para que se ejecute todos los dias a las 00:00hs. Para probar la sincronizacion manualmente, debe ir al archivo app.js y cambiar esta parte del codigo:<br><br>
cron.schedule('42 21 * * *', () => {<br>
    syncData(urls, models);<br>
});

Por esta:<br><br>
<b>syncData(urls, models);</b>

Hay que quitar la funcion de cron que envuelve la funcion syncData.
