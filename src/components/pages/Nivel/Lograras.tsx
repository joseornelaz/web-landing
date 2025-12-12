import React from "react";
import { NivelTypes } from "../../../types/NivelTypes";
import { SectionLograras } from "../../molecules/SectionLograras/SectionLograras";
import type { NivelInterface } from "../../../types/NivelInterface";

import Prepa1 from '../../../assets/prepa/icon1.svg?react';
import Prepa2 from '../../../assets/prepa/icon2.svg?react';
import Prepa3 from '../../../assets/prepa/icon3.svg?react';
import Prepa4 from '../../../assets/prepa/icon6.svg?react';
import Prepa5 from '../../../assets/prepa/icon6.svg?react';

import Lic1 from '../../../assets/licenciatura/icon01.svg?react';
import Lic2 from '../../../assets/licenciatura/icon02.svg?react';
import Lic3 from '../../../assets/licenciatura/icon04.svg?react';
import Lic4 from '../../../assets/licenciatura/icon04.svg?react';

import Ing1 from '../../../assets/ingenieria/icon01.svg?react';
import Ing2 from '../../../assets/ingenieria/icon02.svg?react';
import Ing3 from '../../../assets/ingenieria/icon03.svg?react';
import Ing4 from '../../../assets/ingenieria/icon04.svg?react';


interface LograrasData {
    nivel: string;
    title: string;
    data: { 
      Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, 
      text: string }[];
}

const data: LograrasData[] = [
    {
      nivel: NivelTypes.PREPA,
      title: 'Con Prepa Coppel lograrás:',
      data: [
        { 
          Icon: Prepa1,
          text: 'Construir un futuro mas prometedor paras ti y tu familia, y mejorar tu calidad de vida.'
        },
        {
          Icon: Prepa2,
          text: 'Concluir una etapa, completa tu formación y fortalece las bases para tu vida laboral.',
        },
        {
          Icon: Prepa3,
          text: 'Iniciar un camino de oportunidades. Al superarte podrás tener acceso a más y mejores oportunidades.'
        },
        {
          Icon: Prepa4,
          text: 'Adquirir conocimientos significativos para actualizar tus habilidades y potenciar tu desarrollo profesional.'
        },
        {
          Icon: Prepa5,
          text: 'Dar el primer paso en tu formación para continuar estudiando y prepararte a nivel superior.'
        },
        ]
    },
    {
      nivel: NivelTypes.LIC,
      title: 'En la Licenciatura en Gerenciamiento:',
      data: [
        {
          Icon: Lic1,
          text: 'Aprenderás a dirigir equipos, tomar decisiones estratégicas y motivar a otros hacia el logro de objetivos comunes dentro de tu organización.'
        },
        {
          Icon: Lic2,
          text: 'Este programa académico brinda una base sólida en los principios y prácticas de gestión empresarial que te permitirán sumar un valor agregado a tus habilidades.'
        },
        {
          Icon: Lic3,
          text: 'Adquidirás una comprensión integral del funcionamiento de las organizaciones para tomar decisiones fundamentadas y contribuir al éxito de una empresa.'
        },
        {
          Icon: Lic4,
          text: 'Aprenderás sobre la gestión de empresas en contextos culturales diversos y como adaptarte a las dinámicas globales en constante cambio.'
        },
      ]
    },
    {
      nivel: NivelTypes.ING,
      title: 'En la Ingeniería en Desarrollo de Software lograrás:',
      data: [
        {
          Icon: Ing1,
          text: 'Inmersión en el mundo digital y tecnológico. Llevar tu carrera al siguiente nivel para brindar soluciones creativas y lógicas.'
        },
        {
          Icon: Ing2,
          text: 'Habilidades lógicas y analíticas para descomponer problemas complejos y encontrar respuestas efectivas.'
        },
        {
          Icon: Ing3,
          text: 'La ingeniería en Desarrollo de Software te ayudará a crear y construir sólidamente en forma creativa de inicio a fin aplicaciones y sistemas.'
        },
        {
          Icon: Ing4,
          text: 'Desarrollar habilidades de colaboración para aprender el proceso colaborativo para trabajar con diseñadores, ingenieros y otros profesionales.'
        },
      ]
    },
    {
      nivel: NivelTypes.MAESTRIA,
      title: 'En la Maestría en Dirección De Negocios lograrás:',
      data: [
        {
          Icon: Ing1,
          text: 'Profundizar tus conocimientos y habilidades en áreas como estrategia, finanzas, marketing, operaciones y liderazgo.'
        },
        {
          Icon: Ing2,
          text: 'Avanzar en tu carrera profesional, adquiriendo las herramientas y conocimientos necesarios para destacarte en un entorno empresarial competitivo.'
        },
        {
          Icon: Ing3,
          text: 'Expandir tu red profesional, teniendo la oportunidad de conectarte con profesionales de diversos sectores y establecer contactos valiosos en el mundo empresarial.'
        },
        {
          Icon: Ing4,
          text: 'Adquirir una perspectiva global, comprendiendo los aspectos internacionales del entorno empresarial, así como las dinámicas culturales y económicas a nivel mundial.'
        },
      ]
    }
];

export const Lograras: React.FC<NivelInterface> = ({type}) => {
    const [info, setInfo] = React.useState<LograrasData | null>(null);
    
    React.useEffect(() => {
        setInfo(data.find(item => item.nivel.toLowerCase() === type?.toLowerCase()) || null);
    },[type]);

    return(
      info && <SectionLograras item={{ title: info.title, itemsCarousel: info.data }} />
    )
}