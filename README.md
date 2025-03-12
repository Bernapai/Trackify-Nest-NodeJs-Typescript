# 📦 Trackify API

🚀 **Trackify API** es una API REST desarrollada con NestJS que permite rastrear envíos en tiempo real desde múltiples empresas de mensajería, centralizando la información en un solo lugar.

---

## 🛠️ Tecnologías

- 🟢 **NestJS** (Framework para Node.js)
- 🔵 **TypeScript**
- 🗄️ **PostgreSQL / MongoDB** (Base de datos)
- 🔐 **JWT** (Autenticación)
- 🌍 **REST API** (Arquitectura)

---

## 📖 Características
  
✅ Notificaciones sobre cambios de estado 🔔  
✅ Autenticación segura con JWT 🔑  
✅ Gestión de usuarios y envíos 📋  

---

## 📌 Endpoints principales

### 🔑 **Autenticación**
- `POST /auth/register` → Registrar usuario
- `POST /auth/login` → Iniciar sesión

### 📦 **Gestión de envíos**
- `POST /shipments` → Agregar un número de tracking
- `GET /shipments` → Listar envíos del usuario
- `GET /shipments/{trackingId}` → Obtener detalles de un envío
- `DELETE /shipments/{trackingId}` → Eliminar un envío

### 🚛 **Proveedores de mensajería**
- `GET /providers` → Listar empresas de mensajería
- `GET /providers/{provider}/track/{trackingId}` → Obtener estado de un paquete

### 🔔 **Notificaciones**
- `POST /notifications` → Configurar alertas de cambios de estado
- `GET /notifications` → Ver notificaciones activas

