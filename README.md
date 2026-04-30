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

![Preparación de la rama](ruta/a/tu/captura_1_git_checkout.png)

### Paso 2: Configuración del Servidor MCP de GitHub
Para permitir que nuestro cliente de IA interactúe con el repositorio, levantamos el servidor oficial `github-mcp-server` mediante Docker. 

Primero, generamos un *Personal Access Token* (Classic) en GitHub aplicando el principio de mínimos privilegios (solo acceso al *scope* `repo`).

![Permisos del Token GitHub](ruta/a/tu/captura_3_token_scopes.png)

A continuación, inyectamos el token como variable de entorno y ejecutamos el contenedor Docker, estableciendo la conexión con los servidores de GitHub.

![Servidor MCP Ejecutándose](ruta/a/tu/captura_5_docker_mcp.png)

### Paso 3: Conexión con el Cliente IA (VS Code)
Para integrar esta arquitectura en nuestro flujo diario, configuramos el cliente de Claude dentro de Visual Studio Code. Mediante la edición de la configuración MCP global, le otorgamos al asistente las directrices para ejecutar el contenedor Docker y utilizar nuestras credenciales.

![Configuración mcp.json en VS Code](ruta/a/tu/captura_6_mcp_json.png)

### Paso 4: Desacoplamiento con RabbitMQ
Para la gestión de eventos asíncronos del proyecto, levantamos un broker de mensajería RabbitMQ en un contenedor Docker, exponiendo tanto el puerto de comunicación (5672) como el panel de administración (15672).

![Despliegue de RabbitMQ](ruta/a/tu/captura_7_docker_rabbitmq.png)

### Paso 5: Prueba de Funcionamiento y Validación
Una vez conectados todos los componentes, realizamos una prueba de fuego pidiendo a Claude desde VS Code que utilizara sus herramientas MCP para escanear nuestro repositorio local. 

Como se observa en la evidencia, la IA fue capaz de leer la estructura de ramas del proyecto (detectando `feature/integracion-mcp-rabbitmq` y `main`) de forma autónoma, validando así el éxito de la integración de toda la arquitectura.

![Prueba exitosa de lectura del repositorio con Claude](ruta/a/tu/captura_8_claude_chat.png)
