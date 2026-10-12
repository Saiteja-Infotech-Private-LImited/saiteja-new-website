# Stage 1: build the Spring Boot JAR
FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw && sed -i 's/\r$//' mvnw

COPY src ./src

RUN ./mvnw -B package -DskipTests

# Stage 2: run on a JRE
FROM eclipse-temurin:21-jre

WORKDIR /app

# Create a non-root user
RUN groupadd --system appgroup && \
    useradd --system --gid appgroup appuser

COPY --from=build /app/target/website-backend-0.0.1-SNAPSHOT.jar app.jar

USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
