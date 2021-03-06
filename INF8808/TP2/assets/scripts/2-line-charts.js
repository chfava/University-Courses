"use strict";

/**
 * Fichier permettant de dessiner les graphiques "focus" et "contexte".
 */


/**
 * Crée une ligne SVG en utilisant les domaines X et Y spécifiés.
 * Cette fonction est utilisée par les graphiques "focus" et "contexte".
 *
 * @param x               Le domaine X.
 * @param y               Le domaine Y.
 * @return d3.svg.line    Une ligne SVG.
 *
 * @see https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89      (voir line generator)
 */
function createLine(x, y) {
  // TODO: Retourner une ligne SVG (voir "d3.line"). Pour l'option curve, utiliser un curveBasisOpen.

  var line = d3.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.count); })
                .curve(d3.curveBasisOpen);

    return line;
  }

/**
 * Crée le graphique focus.
 *
 * @param g         Le groupe SVG dans lequel le graphique doit être dessiné.
 * @param sources   Les données à utiliser.
 * @param line      La fonction permettant de dessiner les lignes du graphique.
 * @param color     L'échelle de couleurs ayant une couleur associée à un nom de rue.
 */
function createFocusLineChart(g, sources, line, color) {
  // TODO: Dessiner le graphique focus dans le groupe "g".
  // Pour chacun des "path" que vous allez dessiner, spécifier l'attribut suivant: .attr("clip-path", "url(#clip)").



  for(var d in sources) {

    g.append("path")
      .datum(sources[d].values)
      .attr("class", "focus line")
      .attr("id", sources[d].name)
      .attr("d", line)
      .attr("clip-path", "url(#clip)")
      .style("stroke-width", sources[d].name === "Moyenne" ? 2:1)
      .style("stroke", sources[d].name === "Moyenne" ? "black":color(sources[d].name));

  }
}

/**
 * Crée le graphique contexte.
 *
 * @param g         Le groupe SVG dans lequel le graphique doit être dessiné.
 * @param sources   Les données à utiliser.
 * @param line      La fonction permettant de dessiner les lignes du graphique.
 * @param color     L'échelle de couleurs ayant une couleur associée à un nom de rue.
 */
function createContextLineChart(g, sources, line, color) {
  // TODO: Dessiner le graphique contexte dans le groupe "g".

  for(var d in sources) {

    g.append("path")
      .datum(sources[d].values)
      .attr("class", "context line")
      .attr("id", sources[d].name + "Context")
      .attr("d", line)
      .attr("clip-path", "url(#clip)")
      .style("stroke-width", sources[d].name === "Moyenne" ? 2:1)
      .style("stroke", sources[d].name === "Moyenne" ? "black":color(sources[d].name));

  }
}
