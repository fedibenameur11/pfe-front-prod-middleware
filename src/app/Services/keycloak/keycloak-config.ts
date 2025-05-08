import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://192.168.37.129:8081',
  realm: 'config-generator',
  clientId: 'angular-client'
};

export const keycloak = new Keycloak(keycloakConfig);
