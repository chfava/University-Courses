"use strict";

/**
* Fichier permettant de gérer le zoom/brush.
*/


/**
 * Permet de redessiner le graphique focus à partir de la zone sélectionnée dans le graphique contexte.
 *
 * @param brush     La zone de sélection dans le graphique contexte.
 * @param g         Le groupe SVG dans lequel le graphique focus est dessiné.
 * @param line      La fonction permettant de dessiner les lignes du graphique.
 * @param xFocus    L'échelle en X pour le graphique focus.
 * @param xContext  L'échelle en X pour le graphique contexte.
 * @param xAxis     L'axe X pour le graphique focus.
 * @param yAxis     L'axe Y pour le graphique focus.
 *
 * @see http://bl.ocks.org/IPWright83/08ae9e22a41b7e64e090cae4aba79ef9       (en d3 v3)
 * @see https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172    ==> (en d3 v5) <==
 */
function brushUpdate(brush, g, line, xFocus, xContext, xAxis, yAxis) {

  // TODO: Redessiner le graphique focus en fonction de la zone sélectionnée dans le graphique contexte.
  var s = d3.event.selection ;
  if(!s) return;
  const rangeMax = xContext.range(); 
  d3.select("g .x.brush").on("click", function(){
    d3.select(this).
      call(brush.move, 
        d3.min(s)==d3.min(rangeMax) && d3.max(s)==d3.max(rangeMax) ? null : rangeMax);     
    } );   //brush update and reset

  xFocus.domain(s.map(xContext.invert, xContext));
  g.selectAll(".focus.line").transition().duration(1000).attr("d", line);
  g.select("g .x.axis").call(xAxis);  
  g.select("g .y.axis").call(yAxis);  

}
