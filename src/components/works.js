import big_blue from "../assets/big_blue/big_blue.jpg";
import big_blue_2 from "../assets/big_blue/big_blue_2.jpg";
import big_blue_3 from "../assets/big_blue/big_blue_3.jpg";
import big_blue_4 from "../assets/big_blue/big_blue_4.jpg";
import big_blue_5 from "../assets/big_blue/big_blue_5.jpg";
import proscenium from "../assets/proscenium/proscenium.jpg";
import proscenium_2 from "../assets/proscenium/proscenium_2.jpg";
import what_makes_a_body from "../assets/what_makes_a_body/what_makes_a_body.jpg";
import what_makes_a_body_2 from "../assets/what_makes_a_body/what_makes_a_body_2.jpg";

export const projects = [
  {
    title: "Blue Portal",
    year: "2023",
    image: big_blue,
    gallery: [big_blue, big_blue_2, big_blue_3, big_blue_4, big_blue_5],
    description: "oil on paper, glue (woodcut collage)",
    size: "296 x 150 inches",
    slug: "blue-portal",
  },
  {
    title: "Proscenium & Flyer",
    year: "2023",
    image: proscenium,
    gallery: [proscenium, proscenium_2],
    description: "oil on paper, glue (woodcut collage)",
    size: "150 x 175 inches",
    slug: "proscenium-flyer",
  },
  {
    title: "What Makes a Body?",
    year: "2022",
    image: what_makes_a_body,
    gallery: [what_makes_a_body, what_makes_a_body_2],
    description: "oil on paper, glue (woodcut collage)",
    size: "150 x 162 inches",
    slug: "what-makes-a-body",
    price: 5000,
  },
];
