import Image from "next/image";

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
