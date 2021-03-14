SSO Keycloak POC
=====================

This `SSO Demo` uses four container instances:
- keycloak: the OAuth2(OpenID connection) server instance
- db: the mysql server instance for keycloak backend
- app1: simple php web app
- app2: simple php web app


## Pre Install
Be sure that the `docker engine` & `docker-compose` are installed.

- Install docker engine: https://docs.docker.com/engine/installation/
- Install docker-compose: https://docs.docker.com/compose/install/

---

## Config the `keycloak` server
- import the project config
- add the test user for SSO
- add the password to the test user


<a href="https://youtu.be/G4IQlV65Sl0">
  <img src="img/1.png" width=400/>
</a>

## Demostrate the web apps with `sso`

<a href="https://youtu.be/M2pz9RoE9zA">
  <img src="img/2.png" width=400/>
</a>


## Start and clean up
start the container instanc
```bash
# start the containers
bash run.sh start 

# stop the containers
bash run.sh stop

# clean up the containers
bash run.sh clean
```

### Keycloak Admin Login
```bash
user: admin
password: admin
```
### Two Web Apps
Open the two app on the following URLs
```html
http://localhost:8091/
http://localhost:8092/
```

