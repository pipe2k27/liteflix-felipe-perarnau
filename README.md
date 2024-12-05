## Getting Started

You will need to install sqlite3 to run this project:

```
  brew install sqlite3
  #OR
  npm install --build-from-source
```

First, run the development server:

```bash
npm run dev
```

## Liteflix - Live Coding Challenge


### Database

This project uses sqlite. The database can be recreated from scratch with
```
sqlite3 ./database/movie.db < database/schema.sql
```
