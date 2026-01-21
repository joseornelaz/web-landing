//FORMULARIO EN HOME (FORMULARIO AMARILLO)
export interface AsesoriaPayload {
    nombreContacto: string;
    numContacto: string;
    emailContacto: string;
    pragramaContacto: number;
    numEmpleadoContacto: string;
    recaptchaResponse?: any;
} 

//FORMULARIO AL DAR CLIC EN QUIERO INSCRIBIRME, CONTACTAR ASESOR
export interface ContactoPayload {
    nombreQuiero: string;
    apellidosQuiero: string;
    numQuiero: string;
    dirQuiero?: string;
    correoQuiero: string;
    comentariosQuiero: string;
    recaptchaResponse?: any;
} 