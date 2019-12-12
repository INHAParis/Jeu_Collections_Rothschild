# Jeu_Mecenes_Rothschilds

Ce jeu, conçu par Laura de Fuccia dans le cadre du programme « [Les collections Rothschild dans les institutions publiques françaises](https://collections.rothschild.inha.fr/fr/index.html) » (Paris, 04/12/2019) a été développé en html, css et javascript par l'équipe de la CID.

Vous pouvez jouer [en cliquant ici](https://collections.rothschild.inha.fr/fr/quel-rothschild-etes-vous.html)

## Structure du jeu

La structure du jeu se compose de quatre blocs de trois questions x trois réponses (9 options A-I)

| Q | R (A) | R (B) | R (C) |
| :----: | :----: | :----: | :----: |
| 1 | A | B | C |
| 2 | D | E | F |
| 3 | G | H | I |

Il suffit mélanger les 9 options (A-I) dans les différents blocs selon l'ordre des questions et des réponses. 
Par exemple :

| Q | R (A) | R (B) | R (C) |
| :----: | :----: | :----: | :----: |
| 1 | B | C | G |
| 2 | D | I | H |
| 3 | F | A | E |

Chaque réponse ajoute une valeure à un array (var results = [];). La valeur que remporte plus d'occurences, détermine le resultat final.

## Références

Voir la [Table récapitulative des questions](https://github.com/INHAParis/Jeu_Collections_Rothschild/blob/master/reponses.md) (**Q** -> 1-12), réponses (**R** -> A-C), et valeurs des resultats (**V** -> A-I)

Pour le devéloppement nous avons utilisé :
* [jquery](https://github.com/jquery/jquery)
* [clipboard-polyfill.js](https://github.com/lgarron/clipboard-polyfill)
