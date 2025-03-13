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

## 🔑 **Autenticación**
- `POST /auth/register` → Registrar usuario .
- `POST /auth/login` → Iniciar sesión .

---

## 📦 **Gestión de envíos**
- `POST /shipments` → Registrar un envío y generar un número de tracking aleatorio.
- `GET /shipments` → Listar envíos registrados.
- `GET /shipments/{trackingId}` → Obtener detalles de un envío.
- `DELETE /shipments/{trackingId}` → Eliminar un envío.

---

## 🚛 **Proveedores de mensajería (Simulados)**
- `GET /providers` → Listar empresas de mensajería disponibles.

