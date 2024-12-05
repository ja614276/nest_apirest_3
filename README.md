# Nest API REST

Este es un proyecto básico de API REST utilizando **NestJS** y **MySQL** para la gestión de productos. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en productos almacenados en una base de datos MySQL.

## Requisitos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes programas:

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **MySQL**: [Descargar MySQL](https://dev.mysql.com/downloads/)
- **Git**: [Descargar Git](https://git-scm.com/)

## Instalación

## 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/ja614276/nest_apirest_3.git
cd nest_apirest_3
```

## 2. Instalar dependencias

Instala las dependencias del proyecto utilizando npm:

```bash
npm install
```

### 3. Configurar la base de datos
Asegúrate de tener una base de datos MySQL en funcionamiento. Crea una base de datos llamada nest_db_13 (o el nombre que prefieras) en MySQL:

```bash
CREATE DATABASE nest_db_13;
```

### 4. Configurar las credenciales de la base de datos
Abre el archivo src/app.module.ts y asegúrate de que las credenciales de tu base de datos MySQL estén correctas en la configuración de TypeORM:

```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',  // Usuario de MySQL
  password: '1234',  // Contraseña de MySQL
  database: 'nest_db_13',
  entities: [Product],
  synchronize: true,
  logging: true,
}),
```

### 5. Ejecutar el proyecto
Una vez configurado, puedes ejecutar el proyecto usando el siguiente comando:

```bash
npm start
```


### Pruebas
Puedes usar Postman o cualquier cliente de API para probar las rutas mencionadas.

```bash
Realiza una petición POST a /products para agregar un producto.
Realiza una petición GET a /products para ver todos los productos.
Realiza una petición GET a /products/:id para ver un producto específico.
Realiza una petición PUT a /products/:id para modificar un producto específico.
Realiza una petición DELETE a /products/:id para eliminar un producto.
```

### Tecnología

```bash
NestJS: Framework para Node.js basado en TypeScript.
MySQL: Base de datos relacional para almacenar los productos.
TypeORM: ORM que permite interactuar con la base de datos de forma sencilla.
Postman: Herramienta para probar las APIs.
```

### Licencia
Este proyecto está licenciado bajo la ja614276 License - consulta el archivo LICENSE para más detalles.


