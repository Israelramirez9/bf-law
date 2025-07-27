import { BiHeadphone, BiShield } from "react-icons/bi";
import { FaHandshake, FaRegLightbulb } from "react-icons/fa";
import { LuZap } from "react-icons/lu";

import FirstImageCard from "../../assets/team_work.png";
import SecondImageCard from "../../assets/action_team.png";
import ThirdImageCard from "../../assets/magnifier.png";

export const services = [
  {
    icon: FaHandshake,
    title: "Asesoría personalizada",
  },
  {
    icon: LuZap,
    title: "Agilidad y Eficiencia",
  },
  {
    icon: BiShield,
    title: "Compromiso legal integral",
  },
  {
    icon: BiHeadphone,
    title: "Confidencialidad garantizada",
  },
  {
    icon: FaRegLightbulb,
    title: "Soluciones a medida",
  },
];

export const servicesImages = [
  {
    title: "Acompañamos decisiones claves",
    description:
      "Trabajamos con compromiso, cercanía y estrategia para aportar soluciones jurídicas relevantes.",
    image: {
      src: FirstImageCard,
      alt: "Acompañamos decisiones claves",
    },
  },
  {
    title: "Cercanía y diagnóstico personalizado",
    description:
      "Escuchamos las necesidades del cliente, entendemos su industria y definimos juntos los objetivos.",
    image: {
      src: SecondImageCard,
      alt: "Cercanía y diagnóstico personalizado",
    },
  },
  {
    title: "Agregamos valor",
    description:
      "Traducimos lo complejo en estrategias comprensibles. Nuestros clientes toman decisiones informadas, con plena conciencia de riesgos y oportunidades.",
    image: {
      src: ThirdImageCard,
      alt: "Análisis riguroso y estrategia",
    },
  },
];
