import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8081',
  realm: 'config-generator',
  clientId: 'angular-client'
};

export const keycloak = new Keycloak(keycloakConfig);
