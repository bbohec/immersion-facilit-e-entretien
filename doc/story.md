# Exercice Immersion Facilité

## Conditions de l'exercice

- Ce qui compte c'est ton cheminement intellectuel
  - Pas de choix tech prédéfinie
  - Pas de pattern de code prédéfinie
  - Pas de méthodologie prédéfinie
  - Pas d'outillage imposé
  - Pas d'appriori sur le moyen de prouver le fonctionnement du besoin (IHM, tests, console ...)
  - On a posé un starter mais tu peux le modifier si tu n'es pas à l'aise avec. Si tu as ton propre starter que tu peux monter rapidement avec tes choix technologiques, fais toi plaisir.
  - Tu es libre de consulter ce que tu veux (web, doc, l'équipe, stackoverflow, github ...)
- 15 minutes max
- Il n'est pas nécéssaire de terminer l'exercice
- Fais comme si tu étais déjà dans l'équipe
- Tu peux nous poser des questions, des conseils, ....
- L'exercice démarre quand tu es prêt

## Objectifs de l'exercice par priorité

> Partage ton écran

1. Make it work
2. Make it well
3. Make it fast

## Expression du Besoin

### Feature : Récupération des villes d'un département

```
En tant que visiteur,
Afin de m'aider à retrouver des villes plus facilement,
Je peux obtenir la liste des villes pour un département donné.
```

#### Scénario - Récupération des villes du 95:

- Sachant qu'il y a une liste de villes suivante:
  ```
  | Ville     | Département |
  | ---       | ---         |
  | Cergy     | 95          |
  | Beauvais  | 60          |
  | Pontoise  | 95          |
  ```
- Quand on veut récupèrer les villes du **_95_**.
- Alors on retourne les villes suivantes:
  ```
  | Ville     |
  |  ---      |
  | Cergy     |
  | Pontoise  |
  ```

---

#### Scénario - Récupération des villes du 60:

- Sachant qu'il y a une liste de villes suivante:

  ```
  | Ville     | Département |
  | ---       | ---         |
  | Cergy     | 95          |
  | Beauvais  | 60          |
  | Pontoise  | 95          |
  ```

- Quand on veut récupèrer les villes du **_60_**.
- Alors on retourne les villes suivantes:
  ```
  | Ville     |
  |  ---      |
  | Beauvais  |
  ```

---

#### Scénario - Récupération des villes du 75:

- Sachant qu'il y a une liste de villes suivante:
  ```
  | Ville     | Département |
  | ---       | ---         |
  | Cergy     | 95          |
  | Beauvais  | 60          |
  | Pontoise  | 95          |
  ```
- Quand on veut récupèrer les villes du **_75_**.
- Alors on ne retourne pas de villes.
- Et on a une notification d'erreur qui indique:
  > Il n'y a pas de villes dans le département 95.

---
