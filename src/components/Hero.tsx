import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Hero() {
  // Fetch from DB
  const config = await prisma.heroConfig.findFirst();
  
  const heroImages = config?.images?.length ? config.images : [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop"
  ];

  const title = config?.title || "The World";
  const subtitle = config?.subtitle || "Embark on a Journey That's Uniquely Yours";
  const description = config?.description || "Curated travel itineraries, authentic cultural experiences, and tailor-made holidays across the globe.";
  // Config loaded
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Image Slider (CSS animation for server component) */}
      <div className="absolute inset-0 z-0 bg-black">
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className="absolute inset-0 animate-hero-slider opacity-0"
            style={{ 
              animationDelay: `${idx * 5}s`, 
              animationDuration: `${heroImages.length * 5}s` 
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Hero Image ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Dark vignette gradient overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-30 max-w-5xl mx-auto text-center space-y-6">
        
        {/* White Glass Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Tour Packages
          </span>
        </div>

        {/* Huge Serif Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white font-serif drop-shadow-md">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-serif italic tracking-wide max-w-3xl mx-auto drop-shadow">
          {subtitle}
        </p>

        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto font-sans leading-relaxed">
          {description}
        </p>
      </div>

      {/* Slider indicators are removed since it's now purely CSS animated */}

    </section>
  );
}
