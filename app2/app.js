let keycloakConfig = {
    "realm": "myrealm",
    "auth-server-url": "http://127.0.0.1:8080/auth",
    "ssl-required": "external",
    "resource": "web-app2",
    "credentials": {
        "secret": "2e55ee9a-0a39-48e1-abe5-259aa7eb1139"
    },
    "confidential-port": 0,
    "clientId": "web-app2"
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
