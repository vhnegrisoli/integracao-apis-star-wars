FROM gradle:6.9.0-jdk11 AS build
COPY --chown=gradle:gradle . /usr/films-api/src
WORKDIR /usr/films-api/src
RUN gradle build -x test --no-daemon
CMD ["java", "-jar", "build/libs/films-api-0.0.1-SNAPSHOT.jar"]