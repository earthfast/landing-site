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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/rent.jpeg",
  },
  {
    id: "2",
    icon: <FaCloudBolt color="#2E93FF" size={26} />,
    title: "Host",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "/host.jpg",
  },
  {
    id: "3",
    icon: <GiBrain color="#2E93FF" size={26} />,
    title: "Learn",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSrc: "/learn.jpg",
  },
  {
    id: "4",
    icon: <RiHonourFill color="#2E93FF" size={26} />,
    title: "Grants",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "/grants.jpg",
  },
];

export const FEATURED_MINI_CARDS_INFO = [
  {
    id: "1",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Fully Transparent but Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Highly Redundant",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Cost Effective",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: "4",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Designed for integration",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
  },
  {
    id: "5",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "R&D leader",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    id: "6",
    icon: <BsDatabaseFillCheck color="#2E93FF" size={26} />,
    title: "Fully Decentralized",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
  },
];

export const TESTIMONIALS = [
  {
    company: "Audius",
    logo: "/audius-white.png",
    whiteLogo: "/audius-white.png",
    quote:
      "“EarthFast is the only consumer-accessible way to fully decentralize a frontend application today, full stop. From hosting to decision making around what to host, EarthFast puts that control in the hands of the Audius community.”",
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
    logo: "/thales-white.png",
    whiteLogo: "/thales-white.png",
    quote:
      "Web3 came a long way through the years, but centralized frontends were always our weakest point. EarthFast is the solution we have been waiting for, bringing us decentralized yet performant frontends!”",
  },
];
