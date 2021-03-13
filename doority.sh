#!/usr/bin/env bash

case "$1" in
  start)
    docker-compose up -d
  ;;
  stop)
    docker-compose stop
  ;;
  clean)
    docker-compose stop
    docker rm -f docker-keycloak-sso_keycloak_1 docker-keycloak-sso_db_1 docker-keycloak-sso_app2_1 docker-keycloak-sso_app1_1
  ;;
  *)
    echo 'Parameter not supported.'
  ;;
esac
