"use strict";

/**
 * Fichier permettant de traiter les données provenant du fichier JSON.
 */


/**
 * Précise le domaine de l'échelle de couleurs qui est utilisée pour distinguer chacune des stations de BIXI.
 *
 * @param color   Échelle de couleurs.
 * @param data    Données provenant du fichier JSON.
 */
function domainColor(color, data) {
  // TODO: Préciser le domaine de l'échelle de couleurs en y associant les stations de BIXI utilisées.
  window.stations = data.map(function(station){ return station.name; })
  color.domain(window.stations)

}

/**
 * Précise le domaine de l'échelle utilisée pour l'axe X du diagramme à bandes.
 *
 * @param x       Échelle X à utiliser.
 * @param data    Données provenant du fichier JSON.
 */
function domainX(x, data) {
  // TODO: Préciser le domaine pour la variable "x" en y associant les stations de BIXI utilisées.
  x.domain(window.stations)
  x.paddingInner(0.08);
}

/**
 * Précise le domaine de l'échelle utilisée pour l'axe Y du diagramme à bandes.
 *
 * @param y             Échelle Y à
 * @param currentData   Les données qui sont actuellement utilisées par le diagramme.
 */
function domainY(y, currentData) {
  // TODO: Préciser le domaine pour la variable "y" en prenant comme minimum et maximum le nombre de trajets vers une station de BIXI.
  let countList = currentData.destinations.map(function(station) { return station.count})
  y.domain([d3.min(countList), d3.max(countList)]);
}

/**
 * Obtient la matrice d'adjacence à partir des données spécifiées pour créer le diagramme à cordes.
 *
 * @param data        Données provenant du fichier JSON.
 * @return {Array}    Une matrice de 10 x 10 indiquant le nombre de trajets partant et se dirigeant vers une station précise.
 */
function getMatrix(data) {
  // TODO: Calculer la matrice d'adjacence pour créer le diagramme à cordes.
  let matrix = []

data.forEach(function(d) {
 
    let stationDepart = []

    d.destinations.forEach(
      function(station){stationDepart.push(station.count) 
      })   

    matrix.push(stationDepart);

  });
  
  return matrix;
}

/**
 * Obtient le nombre total de trajets réalisés pour le mois d'août 2015.
 *
 * @param data    Données provenant du fichier JSON.
 */

function getTotal(data) {
  // TODO: Calculer le nombre total de trajets réalisés pour le mois d'août 2015.
  return d3.sum(data, stationDepart => d3.sum(stationDepart.destinations, destination => destination.count));

}
