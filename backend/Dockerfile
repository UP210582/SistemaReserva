# backend/Dockerfile
FROM openjdk:17-jdk-alpine
RUN addgroup -S reservasbackend && adduser -S -G reservasbackend reservasbackend
USER reservasbackend
WORKDIR /app/
COPY --chown=reservasbackend . .
RUN chmod +x gradlew
EXPOSE 8787
CMD ["./gradlew","bootRun"]
