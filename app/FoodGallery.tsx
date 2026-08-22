"use client";

import { useEffect, useState } from "react";

const photos = [
  {
    src: "/gallery/mx-14333.webp",
    alt: "Egg-filled toasted sandwich served in the orange-striped Eggs and packaging",
    caption: "Soft eggs. Deep toast. No quiet bites.",
    shape: "portrait feature",
  },
  {
    src: "/gallery/mx-14543.webp",
    alt: "Loaded fries topped with creamy eggs, herbs, and sauce",
    caption: "Loaded from the first forkful.",
    shape: "portrait",
  },
  {
    src: "/gallery/mx-14609.webp",
    alt: "A row of Eggs and sandwiches with flames rising in the open kitchen behind them",
    caption: "Straight from the fire.",
    shape: "landscape wide",
  },
  {
    src: "/gallery/mx-14726.webp",
    alt: "Close-up of a bacon and egg sandwich in branded packaging",
    caption: "Crisp, creamy, gone fast.",
    shape: "portrait",
  },
  {
    src: "/gallery/mx-14754-2.webp",
    alt: "Close-up of a savoury bowl topped with soft-boiled egg, vegetables, herbs, and sauce",
    caption: "Every layer gets a say.",
    shape: "portrait",
  },
  {
    src: "/gallery/mx-14560.webp",
    alt: "A hand holding a tray of loaded fries against a vivid orange background",
    caption: "Pass the loaded fries.",
    shape: "portrait",
  },
  {
    src: "/gallery/mx-14785.webp",
    alt: "Sauce pouring over thick sweet toast topped with fruit",
    caption: "Sweet things, taken seriously.",
    shape: "portrait",
  },
  {
    src: "/gallery/mx-14804.webp",
    alt: "Cinnamon-sugar toast dipped into a creamy sauce",
    caption: "Dip. Bite. Repeat.",
    shape: "portrait",
  },
  {
    src: "/gallery/mx-14454.webp",
    alt: "Egg sandwich in orange-striped packaging with more sandwiches in the background",
    caption: "The handheld hero.",
    shape: "portrait",
  },
  {
    src: "/gallery/mx-14624.webp",
    alt: "A smiling diner enjoying an Eggs and sandwich against an orange wall",
    caption: "This is the good part.",
    shape: "landscape",
  },
  {
    src: "/gallery/mx-14850.webp",
    alt: "The Eggs and restaurant team standing together in front of the open kitchen",
    caption: "The people behind the flavour.",
    shape: "landscape",
  },
  {
    src: "/gallery/mx-14897.webp",
    alt: "The warm orange and dark wood dining room at Eggs and",
    caption: "Your table is waiting.",
    shape: "landscape wide",
  },
];

export function FoodGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % photos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? 0 : (current - 1 + photos.length) % photos.length,
        );
      }
    };

    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + photos.length) % photos.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % photos.length,
    );
  };

  return (
    <section className="food-gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <p className="eyebrow">From our kitchen</p>
        <h2 id="gallery-title">
          Look. Eat.
          <br />
          <em>Repeat.</em>
        </h2>
        <p>
          Golden toast, soft eggs, loaded plates and the kind of bites that
          make the whole table go quiet.
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <figure className={`gallery-item ${photo.shape}`} key={photo.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photo ${index + 1}: ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="gallery-zoom" aria-hidden="true">View +</span>
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <p className="gallery-endnote">
        Come hungry. <span>Leave happy.</span>
      </p>

      {activePhoto && activeIndex !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${activeIndex + 1} of ${photos.length}`}
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
            autoFocus
          >
            Close ×
          </button>
          <button
            className="lightbox-arrow previous"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            ←
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <figcaption>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {photos.length}</span>
              {activePhoto.caption}
            </figcaption>
          </figure>
          <button
            className="lightbox-arrow next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      ) : null}
    </section>
  );
}
