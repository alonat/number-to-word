<div align="center">
  <h1>Numbers to words app</h1>
</div>

A simple app that can numeric string convert into a list of corresponding words in the style of [T9](https://en.wikipedia.org/wiki/T9_(predictive_text)) or [Phonewords](https://en.wikipedia.org/wiki/Phoneword). For example, given input "23" the output should be: ad, ae, af, bd, be, bf, cd, ce, cf.

---

## Project setup
### Initial setup
Before first run please exec this command:
```bash
  yarn run bootstrap
```

This command will install all dependencies, create database and insert all known words into it.

### Preparation
You need to create .env for front and back
```bash
  cp .env.example .env
  cp src/server/.env.example src/server/.env
```

### Development mode
For running project into development mode please run this commands in different terminal windows
```bash
  yarn start # for running frontend part
  yarn run server:up # for the backend part
```

If you want to stop all docker containers run:
```bash
  yarn run server:stop
```

If you want to reload a server (stop all containers and run them again)
```bash
  yarn run server:reload
```
