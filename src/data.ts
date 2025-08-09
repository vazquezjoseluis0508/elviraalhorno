export interface Pizza {
  name: string;
  price: number;
  description: string;
}

export interface Empanada {
  flavors: string;
  dozenPrice: number;
  halfDozenPrice: number;
  unitPrice: number;
  description: string;
}

export interface ContactInfo {
  phones: string[];
  address: string;
  schedule: string;
}

export interface BusinessData {
  name: string;
  subtitle: string;
  pizzas: Pizza[];
  empanadas: Empanada;
  contact: ContactInfo;
  whatsappMessage: string;
}

export const businessData: BusinessData = {
  name: "ELVIRA AL HORNO",
  subtitle: "Pizzería de barrio",
  pizzas: [
    { 
      name: "Muzza", 
      price: 7000,
      description: "Salsa de tomate, mozzarella y orégano"
    },
    { 
      name: "Jamón", 
      price: 8000,
      description: "Salsa de tomate, mozzarella, jamón y orégano"
    },
    { 
      name: "Napolitana", 
      price: 9000,
      description: "Salsa de tomate, mozzarella, tomate y albahaca"
    },
    { 
      name: "Jamón y Morrón", 
      price: 9000,
      description: "Salsa de tomate, mozzarella, jamón y morrón"
    },
    { 
      name: "Jamón y Huevo", 
      price: 9000,
      description: "Salsa de tomate, mozzarella, jamón y huevo"
    },
    { 
      name: "Jamón y Napo", 
      price: 9000,
      description: "Salsa de tomate, mozzarella, jamón y napolitana"
    },
    { 
      name: "Huevo", 
      price: 8000,
      description: "Salsa de tomate, mozzarella y huevo"
    },
  ],
  empanadas: {
    flavors: "Carne, Pollo y Jamón y Queso.",
    dozenPrice: 11000,
    halfDozenPrice: 6000,
    unitPrice: 1200,
    description: "Empanadas caseras con masa fina y rellenos tradicionales"
  },
  contact: {
    phones: ["1160473637", "1165800666"],
    address: "Bailén 1127, Grand Bourg, Malvinas Argentinas",
    schedule: "Viernes, sábados y domingos — 19:30 a 23:00",
  },
  whatsappMessage: "Hola, quiero hacer un pedido para hoy 👋",
};

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString('es-AR')}`;
};

export const buildWhatsAppLink = (phone: string, text: string): string => {
  const normalizedPhone = phone.replace(/\D/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${normalizedPhone}?text=${encodedText}`;
};

export const getGoogleMapsUrl = (address: string): string => {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};
