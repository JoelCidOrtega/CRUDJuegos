# Integración de Arquitectura Avanzada: MCP y RabbitMQ en Laravel

Este documento detalla la implementación de una arquitectura orientada a microservicios y asistencia inteligente para el proyecto `CRUDJuegos`. El objetivo de esta integración es acercar el sistema a un entorno real de producción, abandonando el enfoque monolítico tradicional.

## Justificación de la Arquitectura

Nuestra arquitectura se divide en tres pilares fundamentales para garantizar el desacoplamiento y la automatización:

*   **Laravel y GitHub (El Núcleo):** Laravel se mantiene como el director del sistema (autenticación, API, base de datos), mientras que GitHub centraliza el código y el control de versiones.
*   **Servidor MCP de GitHub (Asistencia Inteligente):** En lugar de utilizar la IA como un simple diccionario desconectado, hemos implementado el protocolo MCP (Model Context Protocol). Esto añade una capa de apoyo inteligente que permite a nuestro asistente (Claude) leer el repositorio, gestionar *issues* y analizar código de forma nativa.
*   **RabbitMQ (Capa de Eventos):** Se introduce para distribuir eventos relevantes del sistema (ej. finalización de validaciones o apertura de Pull Requests) de forma asíncrona, evitando bloquear el flujo principal de Laravel.

---

## Proceso de Implementación

### Paso 1: Preparación del Entorno Local
Para mantener un flujo de trabajo organizado, se ha trabajado sobre una rama específica dedicada exclusivamente a esta característica, separándola del entorno de producción principal.

<img width="886" height="82" alt="image" src="https://github.com/user-attachments/assets/84019bfc-20b9-45d6-ac96-fcd382d9d6d6" />

### Paso 2: Configuración del Servidor MCP de GitHub
Para permitir que nuestro cliente de IA interactúe con el repositorio, levantamos el servidor oficial `github-mcp-server` mediante Docker. 

Primero, generamos un *Personal Access Token* (Classic) en GitHub aplicando el principio de mínimos privilegios (solo acceso al *scope* `repo`).

<img width="886" height="592" alt="image" src="https://github.com/user-attachments/assets/09698c00-697b-4a7d-a15d-8b18ede638e2" />

A continuación, inyectamos el token como variable de entorno y ejecutamos el contenedor Docker, estableciendo la conexión con los servidores de GitHub.

<img width="886" height="291" alt="image" src="https://github.com/user-attachments/assets/545f3e4c-aad9-4712-a82a-7494f7875b52" />

### Paso 3: Conexión con el Cliente IA (VS Code)
Para integrar esta arquitectura en nuestro flujo diario, configuramos el cliente de Claude dentro de Visual Studio Code. Mediante la edición de la configuración MCP global, le otorgamos al asistente las directrices para ejecutar el contenedor Docker y utilizar nuestras credenciales.

<img width="886" height="677" alt="image" src="https://github.com/user-attachments/assets/64b3d249-48f6-48d7-9705-3d66cf36c6b1" />

### Paso 4: Desacoplamiento con RabbitMQ
Para la gestión de eventos asíncronos del proyecto, levantamos un broker de mensajería RabbitMQ en un contenedor Docker, exponiendo tanto el puerto de comunicación (5672) como el panel de administración (15672).

<img width="886" height="297" alt="image" src="https://github.com/user-attachments/assets/4e44bc27-324e-43c6-9d61-9f2af4043fb2" />

### Paso 5: Prueba de Funcionamiento y Validación
Una vez conectados todos los componentes, realizamos una prueba de fuego pidiendo a Claude desde VS Code que utilizara sus herramientas MCP para escanear nuestro repositorio local. 

Como se observa en la evidencia, la IA fue capaz de leer la estructura de ramas del proyecto (detectando `feature/integracion-mcp-rabbitmq` y `main`) de forma autónoma, validando así el éxito de la integración de toda la arquitectura.

<img width="886" height="446" alt="image" src="https://github.com/user-attachments/assets/19ac9b6e-36ee-45de-a6f7-81f871ea89dc" />
