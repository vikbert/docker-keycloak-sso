let keycloakConfig = {
    "realm": "myrealm",
    "auth-server-url": "http://127.0.0.1:8080/auth",
    "ssl-required": "external",
    "resource": "web-app1",
    "credentials": {
        "secret": "90d014fa-89bf-45b5-ab87-bcd8a9028c7f"
    },
    "confidential-port": 0,
    "clientId": "web-app1"
};
window.keycloak = new Keycloak(keycloakConfig);

$(function() {
    console.log(keycloakConfig);
    window.keycloak.init({
        flow: 'implicit',
        onLoad: 'check-sso'
    }).success(function(authenticated) {
        console.log(authenticated ? 'authenticated' : 'not authenticated');
    }).error(function() {
        console.log('failed to initialize');
    });
});
