"use client";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((mod) => mod.World), {
  ssr: false,
});

const globeConfig = {
  pointSize: 4,
  globeColor: "#FFFAEC",
  emissive: "#FFFFFF",
  emissiveIntensity: 1,
  shininess: 1,
  polygonColor: "rgba(255, 190, 41, 1)",
  ambientLight: "#FFFAEC",
  directionalLeftLight: "#FFBE29",
  directionalTopLight: "#FFBE29",
  pointLight: "#FFBE29",
  arcTime: 1000,
  arcLength: 1,
  rings: 1,
  maxRings: 1,
  autoRotateSpeed: 2,
};

const colors = ["#FFBE29", "#FFBE29", "#FFBE29"];

const sampleArcs = [
  {
    order: 1,
    startLat: 48.75, // France (Paris)
    startLng: 2.1,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "France",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 2,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: -17.4311, // Australia
    endLng: 130.8073,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Australia",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 27,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 53.7098, // Belarus (Minsk)
    endLng: 27.9534,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Belarus",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 3,
    startLat: 1.3521, // Singapore
    startLng: 103.8198,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Singapore",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 4,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA
    endLng: -95.7129,
    arcAlt: 0.3,
    startCountry: "Sri Lanka",
    endCountry: "USA",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 31,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 22.3193, // Hong Kong
    endLng: 114.1694,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Hong Kong",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 5,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 53.1900, // England (London)
    endLng: -2.8900,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "England",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 30,
    startLat: -0.7893, // Indonesia
    startLng: 113.9213,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Indonesia",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 6,
    startLat: -17.4311, // Australia
    startLng: 130.8073,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Australia",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 7,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 48.75, // France (Paris)
    endLng: 2.1,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "France",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 27,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 53.7098, // Belarus (Minsk)
    endLng: 27.9534,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Belarus",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 8,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 35.8617, // China (Beijing region)
    endLng: 104.1954,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "China",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 9,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA
    endLng: -95.7129,
    arcAlt: 0.3,
    startCountry: "Sri Lanka",
    endCountry: "USA",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 32,
    startLat: 22.3193, // Hong Kong
    startLng: 114.1694,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Hong Kong",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 10,
    startLat: 53.1900, // England (London)
    startLng: -2.8900,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "England",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 34,
    startLat: 52.5, // Netherlands (Amsterdam)
    startLng: 5.2,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Netherlands",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 11,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 1.3521, // Singapore
    endLng: 103.8198,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Singapore",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 12,
    startLat: 48.75, // France (Paris)
    startLng: 2.1,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "France",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 28,
    startLat: 53.7098, // Belarus (Minsk)
    startLng: 27.9534,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Belarus",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 13,
    startLat: 35.8617, // China
    startLng: 104.1954,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "China",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 14,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: -17.4311, // Australia
    endLng: 130.8073,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Australia",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 31,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 22.3193, // Hong Kong
    endLng: 114.1694,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Hong Kong",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 15,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA
    endLng: -95.7129,
    arcAlt: 0.3,
    startCountry: "Sri Lanka",
    endCountry: "USA",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 16,
    startLat: 1.3521, // Singapore
    startLng: 103.8198,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Singapore",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 30,
    startLat: -0.7893, // Indonesia
    startLng: 113.9213,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Indonesia",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 17,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 53.1900, // England (London)
    endLng: -2.8900,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "England",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 33,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 52.5, // Netherlands (Amsterdam)
    endLng: 5.2,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Netherlands",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 18,
    startLat: 37.0902, // USA
    startLng: -95.7129,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.3,
    startCountry: "USA",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 19,
    startLat: -17.4311, // Australia
    startLng: 130.8073,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Australia",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 32,
    startLat: 22.3193, // Hong Kong
    startLng: 114.1694,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Hong Kong",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 20,
    startLat: 35.8617, // China
    startLng: 104.1954,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "China",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 28,
    startLat: 53.7098, // Belarus (Minsk)
    startLng: 27.9534,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Belarus",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 21,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 48.75, // France (Paris)
    endLng: 2.1,
    arcAlt: 0.1,
    startCountry: "Sri Lanka", 
    endCountry: "France",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 29,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: -0.7893, // Indonesia
    endLng: 113.9213,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Indonesia",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 22,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA
    endLng: -95.7129,
    arcAlt: 0.3,
    startCountry: "Sri Lanka",
    endCountry: "USA",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 33,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 52.5, // Netherlands (Amsterdam)
    endLng: 5.2,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Netherlands",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 23,
    startLat: 53.1900, // England (London)
    startLng: -2.8900,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "England",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 24,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 1.3521, // Singapore
    endLng: 103.8198,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Singapore",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 34,
    startLat: 52.5, // Netherlands (Amsterdam)
    startLng: 5.2,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    startCountry: "Netherlands",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 25,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 35.8617, // China (Beijing region)
    endLng: 104.1954,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "China",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 29,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: -0.7893, // Indonesia
    endLng: 113.9213,
    arcAlt: 0.1,
    startCountry: "Sri Lanka",
    endCountry: "Indonesia",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 26,
    startLat: 37.0902, // USA
    startLng: -95.7129,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.3,
    startCountry: "USA",
    endCountry: "Sri Lanka",
    color: colors[Math.floor(Math.random() * colors.length)],
  },
];

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-screen dark:bg-black bg-white relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative h-full px-0 min-[1050px]:px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-[200%] min-[1050px]:w-full h-full right-0 min-[1050px]:right-auto min-[1050px]:left-1/2 min-[1050px]:-translate-x-1/2 z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
