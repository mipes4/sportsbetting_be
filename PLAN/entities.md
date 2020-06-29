## Entities

### User

| Key              | Datatypes | Required | Notes                                              |
| ---------------- | --------- | -------- | -------------------------------------------------- |
| id               | pk        | yes      | Already added by model:generate                    |
| username         | string    | yes      | unique: true                                       |
| email            | string    | yes      |                                                    |
| password         | string    | yes      |                                                    |
| frontName        | string    | yes      |                                                    |
| lastName         | string    | yes      |                                                    |
| phoneNumber      | string    | yes      | validation in frontend form for pattern            |
| admin            | boolean   | no       | default false                                      |
| totaalToto       | boolean   | no       | default true                                       |
| createdAt        | date      | yes      | Already added by model:generate                    |
| updatedAt        | date      | yes      | Already added by model:generate                    |
| clubPreferenceId | integer   | no       | Foreign key (references API GET team/search/{name} |

##### Relations:

- a user (clubPreferenceId) belongs to API GET team/search/{name}
- a user has many predictions

### Prediction

| Key               | Datatypes | Required | Notes                                                                             |
| ----------------- | --------- | -------- | --------------------------------------------------------------------------------- |
| id                | pk        | yes      | Already added by model:generate                                                   |
| predGoalsHomeTeam | integer   | yes      |                                                                                   |
| predGoalsAwayTeam | integer   | yes      |                                                                                   |
| createdAt         | date      | yes      | Already added by model:generate                                                   |
| updatedAt         | date      | yes      | Already added by model:generate                                                   |
| fixtureId         | integer   | yes      | Foreign key (references API GET team/{team}/{league_id}?timeone=Europe/Amsterdam) |
| userId            | integer   | yes      | Foreign key (references user)                                                     |
| scoreId           | integer   | yes      | Foreign key (references score)                                                    |

##### Relations:

- a prediction (fixtureId) belongs to API GET team/{team}/{league_id}?timeone=Europe/Amsterdam
- a prediction (userId) belongs to user
- a prediction (scoreId) belongs to score

### Score

| Key       | Datatypes | Required | Notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | pk        | yes      | Already added by model:generate |
| fullScore | integer   | yes      |                                 |
| totoScore | integer   | yes      |                                 |
| goalBonus | integer   | yes      |                                 |
| createdAt | date      | yes      | Already added by model:generate |
| updatedAt | date      | yes      | Already added by model:generate |

##### Relations:

- a score is used by many predictions
