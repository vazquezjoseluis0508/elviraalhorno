# Elvira al Horno - Pizzería en Grand Bourg

Landing page moderna y responsive para la pizzería Elvira al Horno, ubicada en Grand Bourg.

## 🍕 Características

- **Diseño Responsive**: Mobile-first con breakpoints para desktop
- **UI Moderna**: Construida con Chakra UI y colores cálidos
- **SEO Optimizado**: Meta tags, schema.org JSON-LD, y estructura semántica
- **Integración WhatsApp**: Botones directos para pedidos
- **Funcionalidades Interactivas**: Copiar dirección, abrir Google Maps
- **TypeScript**: Código tipado y mantenible

## 🚀 Tecnologías

- **Vite** - Build tool rápida
- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Chakra UI** - Componentes de UI
- **Framer Motion** - Animaciones

## 📱 Secciones

1. **Header Fijo** - Logo y botones de WhatsApp
2. **Hero** - Imagen de fondo con superposición cálida
3. **Menú de Pizzas** - Cards responsive con precios
4. **Empanadas** - Información de sabores y precios
5. **Horarios** - Días y horarios de atención
6. **Dirección** - Ubicación con botones de acción
7. **Contacto** - Teléfonos y WhatsApp
8. **Footer** - Copyright

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd elvira-al-horno

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Menu.tsx
│   ├── Empanadas.tsx
│   ├── Schedule.tsx
│   ├── Location.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── JsonLd.tsx
├── data.ts             # Datos del negocio
├── theme.ts            # Tema de Chakra UI
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 🎨 Personalización

Los datos del negocio se pueden editar fácilmente en `src/data.ts`:

- Información de contacto
- Menú de pizzas y precios
- Información de empanadas
- Horarios y dirección

## 📞 Contacto

- **Teléfonos**: 11 6047 3637 / 11 6580 0666
- **Dirección**: Bailén 1127, Grand Bourg
- **Horarios**: Viernes a domingos, 19:30 a 23:00

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
