import { BiHeadphone, BiShield } from "react-icons/bi";
import { FaHandshake, FaRegLightbulb } from "react-icons/fa";
import { LuZap } from "react-icons/lu";

import SecondImageCard from "../../assets/action_team.png";
import ThirdImageCard from "../../assets/magnifier.png";
import FirstImageCard from "../../assets/team_work.png";

export const services = [
  {
    icon: FaHandshake,
    title: "home:section2.service1.title",
  },
  {
    icon: LuZap,
    title: "home:section2.service2.title",
  },
  {
    icon: BiShield,
    title: "home:section2.service3.title",
  },
  {
    icon: BiHeadphone,
    title: "home:section2.service4.title",
  },
  {
    icon: FaRegLightbulb,
    title: "home:section2.service5.title",
  },
];

export const servicesImages = [
  {
    title: "home:section3.card1.title",
    description: "home:section3.card1.description",
    image: {
      src: FirstImageCard,
      alt: "Acompañamos decisiones claves",
    },
  },
  {
    title: "home:section3.card2.title",
    description: "home:section3.card2.description",
    image: {
      src: SecondImageCard,
      alt: "Cercanía y diagnóstico personalizado",
    },
  },
  {
    title: "home:section3.card3.title",
    description: "home:section3.card3.description",
    image: {
      src: ThirdImageCard,
      alt: "Análisis riguroso y estrategia",
    },
  },
];
