import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SectionHeading from "@/components/SectionHeading";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  alt: string;
  caption: string;
  year: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    alt: "TEDxJUET 2024 main stage with speaker presenting",
    caption: "Main Stage - TEDxJUET 2024",
    year: "2024",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80",
    alt: "Audience engaged during TEDx talk",
    caption: "Engaged Audience - TEDxJUET 2024",
    year: "2024",
  },
  {
    id: 3,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
    alt: "TEDxJUET 2023 highlight reel",
    caption: "Highlight Reel - TEDxJUET 2023",
    year: "2023",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80",
    alt: "Speaker on stage with presentation",
    caption: "Keynote Session - TEDxJUET 2023",
    year: "2023",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80",
    alt: "Networking session at TEDxJUET",
    caption: "Networking Break - TEDxJUET 2023",
    year: "2023",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&q=80",
    alt: "TEDx red letters on stage",
    caption: "Stage Setup - TEDxJUET 2022",
    year: "2022",
  },
  {
    id: 7,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&q=80",
    alt: "TEDxJUET 2022 best moments",
    caption: "Best Moments - TEDxJUET 2022",
    year: "2022",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
    alt: "Crowd applauding at TEDx event",
    caption: "Standing Ovation - TEDxJUET 2022",
    year: "2022",
  },
];

const years = ["All", "2024", "2023", "2022"];

const GallerySection = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredItems =
    selectedYear === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.year === selectedYear);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const navigateLightbox = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
  };

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading className="mt-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground whitespace-nowrap">
              Relive the Moments
            </h2>
          </SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the inspiring talks, performances, and connections
            from our previous editions
          </p>
        </motion.div>

        {/* Year Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedYear(year)}
              className="min-w-[70px]"
            >
              {year}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${index === 0 ? "sm:col-span-2" : ""
                  }`}
                onClick={() => openLightbox(item)}
              >
                <div
                  className={`relative ${index === 0 ? "aspect-video" : "aspect-video"
                    } overflow-hidden`}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-foreground font-medium text-sm">
                      {item.caption}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {item.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Dialog */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border-border">
            {selectedItem && (
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateLightbox("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={() => navigateLightbox("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>

                {/* Media Content */}
                <div className="aspect-video w-full">
                  {selectedItem.type === "video" ? (
                    <iframe
                      src={selectedItem.src}
                      title={selectedItem.alt}
                      className="w-full h-full rounded-t-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.alt}
                      className="w-full h-full object-contain rounded-t-lg"
                    />
                  )}
                </div>

                {/* Caption */}
                <div className="p-4 bg-card">
                  <p className="text-foreground font-medium">
                    {selectedItem.caption}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {selectedItem.alt}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
