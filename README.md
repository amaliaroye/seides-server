![Switching SEIdes](https://i.imgur.com/vljwNkr.png)

# 📡 Switching SEIdes, Server-side!

The Express API for my final Capsone Project, Switching SEIdes. Check out the links below for more information!

## 🔗 Links

- [Deployed Server](https://seides-server.herokuapp.com/)
- [Deployed Client](https://amaliaroye.github.io/seides-client/)
- [Client Repo](https://github.com/amaliaroye/seides-client)

## 🚀 Routes

### 🎮 Games

| Verb   | URI Pattern  | Controller#Action |
| ------ | ------------ | ----------------- |
| GET    | `/games`     | `games#index`     |
| POST   | `/games`     | `games#create`    |
| GET    | `/games/:id` | `games#show`      |
| PATCH  | `/games/:id` | `games#update`    |
| DELETE | `/games/:id` | `games#delete`    |

### 👤 NPCs

| Verb  | URI Pattern | Controller#Action |
| ----- | ----------- | ----------------- |
| POST  | `/npcs`     | `npcs#create`     |
| GET   | `/npcs/:id` | `npcs#show`       |
| PATCH | `/npcs/:id` | `npcs#update`     |

> There are paths to index all npcs or delete an npc, but they are currently not in use. They are not a protected resource and can be edited via cURL scripts. If an npc from a game were deleted, the game would break.

### 🔒 Authentication

| Verb   | URI Pattern         | Controller#Action |
| ------ | ------------------- | ----------------- |
| POST   | `/sign-up`          | `users#signup`    |
| POST   | `/sign-in`          | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

## 📊 Entity Relationship Diagram

![Entity Relationship Diagram](https://i.imgur.com/sfQIKYH.png)
