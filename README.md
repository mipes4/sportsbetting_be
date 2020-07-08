.env keys:
DATABASE_DEV=YOUR_POSTGREE_DB_HERE
API_URL_DEMO=api-football.com/demo
API_URL=api-football.com
API_KEY=YOUR_API_KEY_HERE

When seeding files:
migrate:undo:all
migrate
let api run by running index.js
seed:all
