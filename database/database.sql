CREATE TABLE estudiante{
    id SERIAL PRIMARY KEY,
    email VARCHAR,
    nombre VARCHAR
};

CREATE TABLE asistencia{
    id SERIAL PRIMARY KEY,
    id_estudiante INT NOT NULL,
    id_seccion INT NOT NULL,
    sala VARCHAR NOT NULL,
    seccion VARCHAR,
    entrada VARCHAR,
    salida VARCHAR,
    CONSTRAINT fk_seccion
        FOREIGN KEY(id_seccion)
            references seccion(id),
    CONSTRAINT fk_estudiante
        FOREIGN KEY(id_estudiante)
            references estudiante(id)
};

CREATE TABLE curso{
    id SERIAL PRIMARY KEY,
    id_seccion INT NOT NULL,
    id_estudiante INT NOT NULL,
    CONSTRAINT fk_seccion
        FOREIGN KEY(id_seccion)
            references seccion(id),
    CONSTRAINT fk_estudiante
        FOREIGN KEY(id_estudiante)
            references estudiante(id)
};

CREATE TABLE seccion{
    id SERIAL PRIMARY KEY,
    nombre VARCHAR NOT NULL
};
