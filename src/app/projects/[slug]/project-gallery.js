"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { LuMaximize2, LuPlay, LuX } from "react-icons/lu";

export default function ProjectGallery({ media }) {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(null);
  const stills = media.filter(({ src }) => !src.endsWith(".gif"));
  const clips = media.filter(({ src }) => src.endsWith(".gif"));

  function openMedia(item) {
    setSelected(item);
    dialog.current.showModal();
  }

  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title">Project media</h2>
      <div className="gallery-grid">
        {stills.map((item) => (
          <button
            key={item.src}
            type="button"
            className="gallery-image"
            aria-label={`Enlarge: ${item.alt}`}
            onClick={() => openMedia(item)}
          >
            <Image src={item.src} alt="" fill />
            <span className="gallery-expand"><LuMaximize2 aria-hidden="true" /></span>
          </button>
        ))}
      </div>
      {clips.length > 0 && (
        <ul className="clip-links">
          {clips.map((item) => (
            <li key={item.src}>
              <button type="button" className="text-link" onClick={() => openMedia(item)}>
                <LuPlay aria-hidden="true" /> Play {item.alt}
              </button>
            </li>
          ))}
        </ul>
      )}
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label={selected?.alt ?? "Project media preview"}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
      >
        <div className="preview-bar">
          <p>{selected?.alt}</p>
          <button type="button" aria-label="Close preview" onClick={() => dialog.current.close()}>
            <LuX aria-hidden="true" />
          </button>
        </div>
        {selected && (
          <div className="preview-image">
            <Image src={selected.src} alt={selected.alt} fill />
          </div>
        )}
      </dialog>
    </section>
  );
}
