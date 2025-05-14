"use client";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((mod) => mod.World), {
  ssr: false,
});

const globeConfig = {
  pointSize: 4,
  globeColor: "#FFFAEC",
  emissive: "#FFFAEC",
  emissiveIntensity: 1,
  shininess: 1,
  polygonColor: "#FFBE29",
  ambientLight: "#FFFAEC",
  directionalLeftLight: "#FFBE29",
  directionalTopLight: "#FFBE29",
  pointLight: "#FFBE29",
  arcTime: 1000,
  arcLength: 1,
  rings: 1,
  maxRings: 1,
  initialPosition: { lat: 1.3521, lng: 103.8198 },
};

const colors = ["#000", "#000", "#000"];

const sampleArcs = [
  {
    order: 1,
    startLat: 48.8566, // France (Paris)
    startLng: 2.3522,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 2,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: -33.8688, // Australia (Sydney)
    endLng: 151.2093,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 3,
    startLat: 1.3521, // Singapore
    startLng: 103.8198,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 4,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA (central coordinate, adjust if needed)
    endLng: -95.7129,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 5,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 51.5074, // England (London)
    endLng: -0.1278,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 6,
    startLat: -33.8688, // Australia (Sydney)
    startLng: 151.2093,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 7,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 48.8566, // France (Paris)
    endLng: 2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 8,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 35.8617, // China (Beijing region)
    endLng: 104.1954,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 9,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA (central coordinate, adjust if needed)
    endLng: -95.7129,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 10,
    startLat: 51.5074, // England (London)
    startLng: -0.1278,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 11,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 1.3521, // Singapore
    endLng: 103.8198,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 12,
    startLat: 48.8566, // France (Paris)
    startLng: 2.3522,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 13,
    startLat: 35.8617, // China
    startLng: 104.1954,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 14,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: -33.8688, // Australia (Sydney)
    endLng: 151.2093,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 15,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA (central coordinate, adjust if needed)
    endLng: -95.7129,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 16,
    startLat: 1.3521, // Singapore
    startLng: 103.8198,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 17,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 51.5074, // England (London)
    endLng: -0.1278,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 18,
    startLat: 37.0902, // USA
    startLng: -95.7129,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 19,
    startLat: -33.8688, // Australia (Sydney)
    startLng: 151.2093,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 20,
    startLat: 35.8617, // China
    startLng: 104.1954,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 21,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 48.8566, // France (Paris)
    endLng: 2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 22,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 37.0902, // USA (central coordinate, adjust if needed)
    endLng: -95.7129,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 23,
    startLat: 51.5074, // England (London)
    startLng: -0.1278,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 24,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 1.3521, // Singapore
    endLng: 103.8198,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 25,
    startLat: 7.8731, // Sri Lanka (Colombo)
    startLng: 80.7718,
    endLat: 35.8617, // China (Beijing region)
    endLng: 104.1954,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 26,
    startLat: 37.0902, // USA
    startLng: -95.7129,
    endLat: 7.8731, // Sri Lanka (Colombo)
    endLng: 80.7718,
    arcAlt: 0.3,
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
