import Image from "next/image";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { FaCloudBolt } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { RiHonourFill } from "react-icons/ri";

export const FEATURED_ROWS_INFO = [
  {
    id: "1",
    title: "Decentralized",
    description:
      "Replace your centralized frontend hosting with community governance and a global network of node operators.",
    media: (
      <Image
        alt="Decentralized"
        src="/easy-code.png"
        width={588}
        height={430}
      />
    ),
  },
  {
    id: "2",
    title: "Easy",
    description:
      "For most projects, packaging your frontend for the EarthFast network is as simple as running one command.",
    media: <Image alt="Easy" src="/easy-code.png" width={588} height={430} />,
  },
  {
    id: "3",
    title: "Secure",
    description:
      "EarthFast's secure enclave architecture ensures that users are protected from attacks and that they are always receiving the correct version of a project's frontend.",
    media: <Image alt="Secure" src="/easy-code.png" width={588} height={430} />,
  },
  {
    id: "4",
    title: "Fast",
    description:
      "The usability and performance of web2, with the decentralization guarantees of web3.",
    media: <Image alt="Fast" src="/easy-code.png" width={588} height={430} />,
  },
];

export const FEATURED_CARD_INFO = [
  {
    id: "1",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Rent",
    description: "Rent space and store your data on the Sia network.",
    imageSrc: "/rent.jpeg",
  },
  {
    id: "2",
    icon: <FaCloudBolt color="#2E93FF" size={26} />,
    title: "Host",
    description: "Offer your storage space on the EarthFast network.",
    imageSrc: "/host.jpg",
  },
  {
    id: "3",
    icon: <GiBrain color="#2E93FF" size={26} />,
    title: "Learn",
    description:
      "Learn all about how Sia works, why it was created, and the non-profit foundation that maintains it.",
    imageSrc: "/learn.jpg",
  },
  {
    id: "4",
    icon: <RiHonourFill color="#2E93FF" size={26} />,
    title: "Grants",
    description: "The Sia Foundation welcomes contributors from all over the world to come and build on Sia through our Grants program.",
    imageSrc: "/grants.jpg",
  },
];
