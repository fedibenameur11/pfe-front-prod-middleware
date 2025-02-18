import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8081',
  realm: 'myrealm',
  clientId: 'angular-client'
};

export const keycloak = new Keycloak(keycloakConfig);
