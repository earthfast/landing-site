import Button from "@/components/Button";
import ProgressCard from "@/components/ProgressCard";
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
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
      <>
        <Image
          alt="Decentralized"
          src="/decentralized-dark.png"
          width={400}
          height={400}
          className="hidden dark:block max-w-[270px] sm:max-w-[400px] mt-10 sm:mt-0"
        />
        <Image
          alt="Decentralized"
          src="/decentralized.png"
          width={400}
          height={400}
          className="dark:hidden block max-w-[270px] sm:max-w-[400px] mt-10 sm:mt-0"
        />
      </>
    ),
    inverted: false,
    // cta: (
    //   <Button size="small" href="https://dashboard.earthfast.com" target="_blank" rel="noopener noreferrer" className="px-5 py-3 font-bold">
    //     Get Started
    //   </Button>
    // ),
  },
  {
    id: "2",
    title: "Easy",
    description:
      "Host your frontend on EarthFast with one CLI command, or our easy-to-use dashboard.",
    media: <VerticalSlider />,
    inverted: true,
    // cta: (
    //   <div className="flex gap-2 justify-center sm:justify-start">
    //     <Button size="small" href="https://" className="px-5 py-3 font-bold">
    //       Easy CTA
    //     </Button>
    //     <Button
    //       size="small"
    //       href="https://"
    //       className="px-5 py-3 font-bold"
    //       variant="inverted"
    //     >
    //       Second CTA
    //     </Button>
    //   </div>
    // ),
  },
  {
    id: "3",
    title: "Secure",
    description:
      "Our secure enclave architecture keeps users safe and ensures they always receive the correct version of a project's frontend.",
    media: (
      <>
        <Image
          alt="Secure"
          src="/secure.png"
          width={450}
          height={400}
          className="hidden dark:block"
        />
        <Image
          alt="Secure"
          src="/secure-white.png"
          width={450}
          height={400}
          className="dark:hidden block"
        />
      </>
    ),
    inverted: false,
    // cta: (
    //   <Button size="small" href="https://" className="px-5 py-3 font-bold">
    //     Secure CTA
    //   </Button>
    // ),
  },
  {
    id: "4",
    title: "Fast",
    description:
      "The usability and performance of web2, with the decentralization guarantees of web3.",
    media: (
      <>
        <ProgressCard
          progress={25}
          title="EarthFast"
          label="<1s"
          barColor="#FFFFFF"
          logoSrc="/white-logo.svg"
          logoWidth={27}
          logoHeight={27}
        />
        <ProgressCard
          progress={100}
          label="44s*"
          logoSrc="/ipfs.svg"
          title="IPFS"
        />
        <p className="text-xs text-gray-400">
          *Source:{" "}
          <a
            href="https://blog.cloudflare.com/ipfs-measurements"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Cloudflare IPFS Measurements
          </a>
        </p>
      </>
    ),
    // cta: (
    //   <Button size="small" href="https://" className="px-5 py-3 font-bold">
    //     Fast CTA
    //   </Button>
    // ),
    inverted: true,
  },
];

export const FEATURED_CARDS_INFO = [
  {
    id: "1",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Rent",
    description: "Rent space and store your data on the EarthFast network.",
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
      "Learn all about how EarthFast works, why it was created, and the non-profit foundation that maintains it.",
    imageSrc: "/learn.jpg",
  },
  {
    id: "4",
    icon: <RiHonourFill color="#2E93FF" size={26} />,
    title: "Grants",
    description: "The EarthFast Foundation welcomes contributors from all over the world to come and build on EarthFast through our Grants program.",
    imageSrc: "/grants.jpg",
  },
];

export const FEATURED_MINI_CARDS_INFO = [
  {
    id: "1",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Completely Private",
    description:
      "EarthFast encrypts and distributes your files across a decentralized network. Unlike traditional cloud storage providers, you truly own your data: no third party can access your files or prevent you from accessing them.",
  },
  {
    id: "2",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Highly Redundant",
    description:
      "EarthFast distributes and stores redundant file segments on nodes across the globe, eliminating any single point of failure and achieving uptime and throughput that no centralized provider can compete with.",
  },
  {
    id: "3",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Far More Affordable",
    description:
      "On average, EarthFast's decentralized cloud storage costs 90% less than incumbent cloud storage providers. Storing 1 TB of files on EarthFast costs about $1-2 per month, compared with $23 on Amazon S3 - bandwidth is also a magnitude cheaper.",
  },
  {
    id: "4",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Designed for integration",
    description:
      "The EarthFast software exposes highly modular JSON-speaking endpoints. renterd can even scale horizontally: in stateless mode, it provides raw access to the EarthFast renter-host protocol, with no UI, no blockchain, and no disk I/O — perfect for massive renting operations.",
  },
  {
    id: "5",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "R&D leader",
    description:
      "The EarthFast storage network has been securely storing data since 2014. EarthFast has pioneered the use of many new technologies at scale, such as its use of state channels to process an estimated 20 billion micropayments per day.",
  },
  {
    id: "6",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Far More Affordable",
    description:
      "EarthFast's software is completely open source, with contributions from leading software engineers. EarthFast has a thriving community of developers and companies building innovative applications and businesses on top of EarthFast.",
  },
];

export const TESTIMONIALS = [
  {
    company: "Audius",
    logo: "/audius.png",
    whiteLogo: "/audius-white.png",
    quote:
      "“EarthFast is the only consumer-accessible way to fully decentralize a frontend application today, full stop. From hosting to decision making around what to host, Armada puts that control in the hands of the Audius community.”",
  },
  {
    company: "Synthetix",
    logo: "/synthetix.png",
    whiteLogo: "/synthetix.png",
    quote:
      "EarthFast addresses one of the most pressing issues in web3, enabling the decentralisation of front-ends, a huge area of centralisation in projects today.”",
  },
  {
    company: "Thales",
    logo: "/thales.png",
    whiteLogo: "/thales-white.png",
    quote:
      "Web3 came a long way through the years, but centralized frontends were always our weakest point. EarthFast is the solution we have been waiting for, bringing us decentralized yet performant frontends!”",
  },
];
