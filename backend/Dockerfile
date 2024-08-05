# backend/Dockerfile
FROM openjdk:17-jdk-alpine3.14
RUN addgroup -S reservasbackend && adduser -S -G reservasbackend reservasbackend
USER reservasbackend
WORKDIR /app/
COPY p03-0.0.1-SNAPSHOT.jar .
COPY --chown=reservasbackend . .
ENTRYPOINT [ "java","-jar","/app/p03-0.0.1-SNAPSHOT.jar" ]
EXPOSE 8787