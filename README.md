SSO Keycloak POC
=====================


# Pre Install
Be sure that the `docker engine` & `docker-compose` are installed.

- Install docker engine: https://docs.docker.com/engine/installation/
- Install docker-compose: https://docs.docker.com/compose/install/


# step 1: start the container instanc
`bash doority.sh start`


# step 2: Login on `keycloak` on `localhost:8080`
![login keycloak](img/web_keycloak.png)

```angular2html
user: admin
password: admin
```


# step 3: create new `realm` named `myrealm`
![add new realm](img/add_realm.png)


