## Expression du Besoin

### Feature : Récupération des villes d'un département

```
En tant que visiteur,
Afin de m'aider à retrouver des villes plus facilement,
Je peux obtenir la liste des villes pour un département donné.
```

Tout les scénarios utilisent la liste de ville standard suivante:

```
  | Ville     | Département |
  | ---       | ---         |
  | Cergy     | 95          |
  | Beauvais  | 60          |
  | Pontoise  | 95          |
```

#### Scénario - Récupération des villes du 95:

- Sachant qu'il y a la liste de villes standard.
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

- Sachant qu'il y a la liste de villes standard.
- Quand on veut récupèrer les villes du **_60_**.
- Alors on retourne les villes suivantes:
  ```
  | Ville     |
  |  ---      |
  | Beauvais  |
  ```

---

#### Scénario - Récupération des villes du 75:

- Sachant qu'il y a la liste de villes standard.
- Quand on veut récupèrer les villes du **_75_**.
- Alors on ne retourne pas de villes.
- Et on a une notification d'erreur qui indique:
  > Il n'y a pas de villes dans le département 75.

---
