import { Project } from "./project";
import { User } from "./user";

export enum AuthenticationType {
    Keycloak,
    LDAP,
    OAuth2
}

export enum DatabaseType {
    PostgreSQL,
    Oracle,
    MySQL,
    MongoDB,
    Cassandra
}

export enum DeploymentType {
    Docker_Compose,
    Kubernetes,
    AWS,
    Azure,
    On_Premises
}

export enum MiddlewareType {
    RabbitMQ,
    ActiveMQ,
    Kafka,
    IBMMQ,
    NATS
}

export enum MonitoringType {
    Prometheus_et_Grafana,
    ELK

}

export class Configuration {
    id_config!: number;
    name!: string;
    databaseType!: DatabaseType;
    middleware!: MiddlewareType;
    deployment!: DeploymentType;
    authentication!: AuthenticationType;
    monitoring!: MonitoringType;
    user?: User;
    project?: Project;
}
