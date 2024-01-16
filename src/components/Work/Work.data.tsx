import { SiTailwindcss, SiGithub, SiReact, SiNextdotjs, SiTestinglibrary,SiAngularjs,SiCplusplusbuilder,SiCsharp,SiVisualbasic,SiMicrosoftexcel,SiMicrosoftaccess,SiCsswizardry} from "react-icons/si";
import { ImDatabase } from "react-icons/im";

export const cardContent = [
  {
    id: 0,
    title: "<span style='color:#F9E79F'>GShe</span>",
    description:
      "Mi <span style='color:orange'>primera aplicación profesional</span> desarrollada para una tienda de complementos. Incluye gestión completa de <span style='color:cyan'> inventario, ventas, tickets, devoluciones, proveedores, cambio de temporadas, contabilidad </span>básica ... desarrollada en Borland <span style='color:orange'>C++</span> para windows en 2002 y en producción hasta jubilación reciente. Base de datos <span style='color:orange'>paradox</span> , al menos, durante más de 15 años",
    imageUrl: "/logo_bolso_zapato2.png",
    skills: [
      {
        icon: <SiCplusplusbuilder size="40" />
      },
      {
        icon: <ImDatabase size="40"/>
      }

    ]
  },
  {
    id: 1,
    title: "<span style='color:#F9E79F'>GTest</span>",
    description:
      "Aplicación desarrollada específicamente para una academia de oposiciones. Permite gestionar los <span style='color:cyan'> test de evaluación. Crear, editar, imprimir, exportar, importar</span>, año desarrollo 2007 Borland <span style='color:orange'>C++</span>, base de datos <span style='color:orange'>sql server</span>.",
    imageUrl: "/logo_test.png",
    skills: [
      {
        icon: <SiCplusplusbuilder size="40" />
      },
      {
        icon: <ImDatabase size="40"/>
      }
    ]
  },
  {
    id: 2,
    title: "<span style='color:#F9E79F'>Gestión Documental</span>",
    description:
      "Es esta primera estapa laboral, aunque corta, pude participar en la implementación y a aportar ideas para el desarrollo de una aplicación <span style='color:cyan'>OCR</span>, que, permitiría <span style='color:cyan'> reconocer y clasificar documentos automaticamente </span>. Desarrollo en <span style='color:orange'>.net C# con libreria leadtools</span>, fue mi primera contratación en sustitución del programador principal que estaba de baja. 2005.",
    imageUrl: "/logo_gestion_documentos.png",
    skills: [
      {
        icon: <SiCsharp  size="40" />
      },
    ]
  },
  {
    id: 3,
    title: "<span style='color:#F9E79F'>Control de Accesos, Presencia, programación tcp de terminales</span>",
    description:
      "Es esta etapa profesional, además de desarrollar varias soluciones pequeñas y medianas para distintos clientes, cabe destacar mi experiencia desarrollando aplicaciones para el <span style='color:cyan'> control de accesos y presencia</span> y su <span style='color:cyan'> comunicación tcp/ip con los terminales </span> donde se programan horarios, usuarios y lectura de datos. Desarrollo <span style='color:orange'>C++</span> principalmente, también, <span style='color:orange'>VBA</span>, <span style='color:orange'>Excel / libre office automation</span>. 2006-2010",
    imageUrl: "/logo_accesos.png",
    skills: [
      {
        icon: <SiVisualbasic size="40" />
      },
      {
        icon: <SiCplusplusbuilder size="40" />
      },
      {
        icon: <SiMicrosoftexcel size="40" />
      },
    ]
  },
  {
    id: 4,
    title: "<span style='color:#F9E79F'>Recaudación Ejecutiva</span>",
    description:
      "<span style='color:cyan'> Análisis y Desarrollo íntegro del sistema de gestión para las oficinas de recaudación ejecutiva de la XUNTA</span>, para la gestión de miles de expedientes al año, la aplicación permite (aún en uso hasta que se extingan dichas oficinas) la comunicación con el sistema central de recaudación de la Xunta y otras entidades para la consecución de la gestión de los expedientes." +
      " Implementados: <span style='color:cyan'> Control automatizado expedientes, extensa selección de criterios, control de prescripciones, cálculo de intereses al día, control automatizado de solicitudes de información " +
      ",gestión y control automatizado de embargos siguiendo la ley general tributaria y el reglamento general de recaudación, notificaciones por correo y electrónicas (notifica.gal), registros de entrada y salida oficiales, estadísticas, gestión documental completa</span>. Desarrollado en <span style='color:orange'>C++ y VBA ACCESS</span>. 2010-2023.",
    imageUrl: "/logo_xunta.png",
    skills: [
      {
        icon: <SiCplusplusbuilder size="40" />
      },
      {
        icon: <SiVisualbasic size="40" />
      },
      {
        icon: <SiMicrosoftaccess  size="40" />
      },     
    ]
  },
  {
    id: 5,
    title: "<span style='color:#F9E79F'>Formación Front-End, Back-End</span>",
    description:
      "Actualmente estoy formación continua en <span style='color:orange'>Angular</span> principalmente, incluyendo, <span style='color:orange'>JS, CSS, TS</span>, además he añadido varios ejemplos, para practicar en el desarrollo en Angular y JS. También he creado una pequeña aplicación para iniciarme en el lado <span style='color:orange'> Back-end API REST con Java Spring boot</span> Desplegando dicho servicio a través de un servidor en la nube de Amazon. Como complemento, además, estoy dedicando tiempo a programación a .net <span style='color:orange'>C#</span>, desarrollo en 4 capas. Este mismo portFolio lo he creado en <span style='color:orange'>React</span> para ampliar mis conocimientos. Mientras tanto refuerzo mi formación: <span style='color:orange'>API REST C# ASP.NET</span>, <span style='color:orange'>Xunit (pruebas unitarias)</span>",
    imageUrl: "/work-5.jpeg",
    skills: [
      {
        icon: <SiAngularjs size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiGithub size="40" />
      },     
      {
        icon: <SiCsswizardry  size="40" />
      },
      {
        icon: <SiCsharp  size="40" />
      },
      {
        icon: <SiReact  size="40" />
      },
    ]
  },

  
];
