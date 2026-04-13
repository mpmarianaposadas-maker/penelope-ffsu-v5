// data.js - Mock data layer for Sistema Penélope FFSU v5

// EXPEDIENTES
const expedientes = [
  {
    id: 'EXP-2025-001-FFSU',
    numeroOriginal: 'EX-2025-00000001-XXXXXX',
    estado: 'en_tramite',
    fecha: '2025-01-15',
    sujeto: 'SUJ-001',
    lineaCredito: 'LC-FFSU-2025',
    deuda: 'DEU-001',
    monto: 1500000,
    moneda: 'ARS',
    fase: 'preliminar',
    observaciones: 'Solicitud en evaluación de requisitos formales',
    etapa: 'Verificación de requisitos'
  },
  {
    id: 'EXP-2025-002-FFSU',
    numeroOriginal: 'EX-2025-00000002-XXXXXX',
    estado: 'observado',
    fecha: '2025-01-10',
    sujeto: 'SUJ-002',
    lineaCredito: 'LC-FFSU-2025',
    deuda: 'DEU-002',
    monto: 2800000,
    moneda: 'ARS',
    fase: 'preliminar',
    observaciones: 'Falta documentación de ingresos actualizada',
    etapa: 'Observaciones pendientes'
  },
  {
    id: 'EXP-2025-003-FFSU',
    numeroOriginal: 'EX-2025-00000003-XXXXXX',
    estado: 'aprobado',
    fecha: '2025-01-05',
    sujeto: 'SUJ-003',
    lineaCredito: 'LC-FFSU-2024',
    deuda: 'DEU-003',
    monto: 950000,
    moneda: 'ARS',
    fase: 'sustanciacion',
    observaciones: 'Expediente aprobado - Continúa con sustanciación',
    etapa: 'Aprobado'
  }
];

// SUJETOS
const sujetos = [
  {
    id: 'SUJ-001',
    tipo: 'persona_fisica',
    nombreCompleto: 'GONZÁLEZ, María Laura',
    documento: '35.456.789',
    cuit: '27-35456789-4',
    email: 'mlgonzalez@example.com',
    telefono: '+54 11 4567-8901',
    domicilio: 'Av. Corrientes 1234, CABA',
    expedientesAsociados: ['EXP-2025-001-FFSU']
  },
  {
    id: 'SUJ-002',
    tipo: 'persona_fisica',
    nombreCompleto: 'RODRÍGUEZ LÓPEZ, Carlos Alberto',
    documento: '28.123.456',
    cuit: '20-28123456-8',
    email: 'crodriguez@example.com',
    telefono: '+54 11 5678-9012',
    domicilio: 'Calle Falsa 456, Rosario, Santa Fe',
    expedientesAsociados: ['EXP-2025-002-FFSU']
  },
  {
    id: 'SUJ-003',
    tipo: 'persona_juridica',
    razonSocial: 'COMERCIALIZADORA DEL SUR S.A.',
    cuit: '30-71234567-9',
    email: 'info@comsur.com.ar',
    telefono: '+54 341 456-7890',
    domicilio: 'Av. Pellegrini 2200, Rosario',
    expedientesAsociados: ['EXP-2025-003-FFSU']
  }
];

// LÍNEAS DE CRÉDITO
const lineasCredito = [
  {
    id: 'LC-FFSU-2025',
    nombre: 'FFSU - Fondo Fiduciario del Servicio Universal 2025',
    descripcion: 'Línea de crédito para empresas de servicios de telecomunicaciones (RGSU)',
    normativa: ['RGSU-1182/2022', 'RES-950/2025', 'RES-1191/2025', 'RES-1385/2025'],
    montoMaximo: 5000000,
    tasaInteres: 0,
    plazoMaximo: 36,
    vigente: true,
    fechaInicio: '2025-01-01',
    fechaFin: '2025-12-31'
  },
  {
    id: 'LC-FFSU-2024',
    nombre: 'FFSU - Fondo Fiduciario del Servicio Universal 2024',
    descripcion: 'Línea de crédito histórica del año 2024',
    normativa: ['RGSU-1182/2022', 'RES-800/2024'],
    montoMaximo: 4500000,
    tasaInteres: 0,
    plazoMaximo: 36,
    vigente: false,
    fechaInicio: '2024-01-01',
    fechaFin: '2024-12-31'
  }
];

// DEUDAS
const deudas = [
  {
    id: 'DEU-001',
    expediente: 'EXP-2025-001-FFSU',
    sujeto: 'SUJ-001',
    concepto: 'Solicitud crédito FFSU - Ampliación infraestructura',
    montoOriginal: 1500000,
    montoActual: 1500000,
    moneda: 'ARS',
    fechaAlta: '2025-01-15',
    estado: 'pendiente_aprobacion'
  },
  {
    id: 'DEU-002',
    expediente: 'EXP-2025-002-FFSU',
    sujeto: 'SUJ-002',
    concepto: 'Crédito FFSU - Equipamiento tecnológico',
    montoOriginal: 2800000,
    montoActual: 2800000,
    moneda: 'ARS',
    fechaAlta: '2025-01-10',
    estado: 'observada'
  },
  {
    id: 'DEU-003',
    expediente: 'EXP-2025-003-FFSU',
    sujeto: 'SUJ-003',
    concepto: 'Crédito FFSU - Despliegue red',
    montoOriginal: 950000,
    montoActual: 950000,
    moneda: 'ARS',
    fechaAlta: '2025-01-05',
    estado: 'aprobada'
  }
];

// NORMAS
const normas = [
  {
    id: 'RGSU-1182/2022',
    tipo: 'Reglamento',
    titulo: 'Reglamento General del Servicio Universal (RGSU)',
    numero: 'RESOL-2022-1182-APN-ENACOM#JGM',
    fecha: '2022-12-28',
    organismo: 'ENACOM',
    boletin: 'BO 28/12/2022',
    url: 'https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-1182-2022-376788',
    resumen: 'Aprueba el Reglamento General del Servicio Universal (RGSU) para los Servicios de Tecnologías de la Información y las Comunicaciones.',
    aplicable: true
  },
  {
    id: 'RES-950/2025',
    tipo: 'Resolución',
    titulo: 'Aprueba Reglamento Particular sobre acceso al crédito del FFSU',
    numero: 'RESFC-2025-950-APN-ENACOM#JGM',
    fecha: '2025-03-15',
    organismo: 'ENACOM',
    boletin: 'BO 18/03/2025',
    url: '#',
    resumen: 'Establece requisitos y procedimientos para el acceso al crédito del Fondo Fiduciario del Servicio Universal (FFSU).',
    aplicable: true
  },
  {
    id: 'RES-1191/2025',
    tipo: 'Resolución',
    titulo: 'Aprueba Reglamento Particular sobre líneas de crédito FFSU 2025',
    numero: 'RESFC-2025-1191-APN-ENACOM#JGM',
    fecha: '2025-04-22',
    organismo: 'ENACOM',
    boletin: 'BO 25/04/2025',
    url: '#',
    resumen: 'Detalla las líneas de crédito disponibles del FFSU para el ejercicio fiscal 2025.',
    aplicable: true
  },
  {
    id: 'RES-1385/2025',
    tipo: 'Resolución',
    titulo: 'Actualización de montos máximos y condiciones crediticias',
    numero: 'RESFC-2025-1385-APN-ENACOM#JGM',
    fecha: '2025-05-30',
    organismo: 'ENACOM',
    boletin: 'BO 02/06/2025',
    url: '#',
    resumen: 'Modifica los montos máximos y condiciones de las líneas de crédito FFSU vigentes.',
    aplicable: true
  }
];

// PLAZOS PROCESALES
const plazos = [
  {
    id: 'PLZ-001',
    etapa: 'Presentación de solicitud',
    plazo: 'Sin plazo específico',
    normativa: 'RGSU Art. 15',
    descripcion: 'El solicitante presenta la solicitud ante ENACOM con toda la documentación requerida.',
    tipo: 'administrado'
  },
  {
    id: 'PLZ-002',
    etapa: 'Verificación formal de requisitos',
    plazo: '10 días hábiles',
    normativa: 'RES 950/2025 Art. 8',
    descripcion: 'ENACOM verifica el cumplimiento de los requisitos formales. Si hay observaciones, notifica al solicitante.',
    tipo: 'enacom'
  },
  {
    id: 'PLZ-003',
    etapa: 'Subsanación de observaciones',
    plazo: '15 días hábiles',
    normativa: 'RES 950/2025 Art. 9',
    descripcion: 'El solicitante debe subsanar las observaciones formuladas por ENACOM.',
    tipo: 'administrado'
  },
  {
    id: 'PLZ-004',
    etapa: 'Evaluación de admisibilidad',
    plazo: '20 días hábiles',
    normativa: 'RES 950/2025 Art. 12',
    descripcion: 'ENACOM evalúa la admisibilidad de la solicitud y emite dictamen técnico.',
    tipo: 'enacom'
  },
  {
    id: 'PLZ-005',
    etapa: 'Resolución final',
    plazo: '30 días hábiles',
    normativa: 'RGSU Art. 25',
    descripcion: 'ENACOM emite resolución aprobando, rechazando o requiriendo información adicional.',
    tipo: 'enacom'
  }
];

// EXPORT
window.DATA = {
  expedientes,
  sujetos,
  lineasCredito,
  deudas,
  normas,
  plazos
};
