import { ScrollReveal } from "./scrollReveal";
import { TRAIL_PHOTOS } from "../data/parasPhoto";

export function PhotoTrail() {
  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-[#dfe5e4]
        px-5
        py-28
        text-[#10191a]
        md:px-10
        md:py-36
      "
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Huge background typography */}
        <div
          className="
            absolute
            -right-[8%]
            top-[4%]
            select-none
            font-sans
            text-[14rem]
            font-black
            uppercase
            leading-none
            tracking-[-0.1em]
            text-[#183638]/[0.045]
            md:text-[24rem]
            lg:text-[32rem]
          "
        >
          FILM
        </div>

        {/* Soft cinematic light */}
        <div
          className="
            absolute
            left-[40%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-200/30
            blur-[130px]
          "
        />

        {/* Bottom atmospheric fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[300px]
            bg-gradient-to-t
            from-[#bfcac9]/30
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">

          <div>

            {/* Small movie label */}
            <div className="flex items-center gap-3">

              <div className="h-[2px] w-12 bg-[#1b3b3d]" />

              <p className="font-sans text-[9px] font-bold uppercase tracking-[0.5em] text-[#1b3b3d]/60 md:text-[10px]">
                The Archive
              </p>

            </div>

            {/* Huge heading */}
            <h2
              className="
                mt-5
                font-serif
                text-5xl
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.05em]
                text-[#142223]
                sm:text-6xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              Chapters
              <span className="block italic text-[#31595b]">
                of Paras
              </span>
            </h2>

          </div>

          {/* Right-side description */}
          <div className="max-w-xs md:pb-3">

            <p className="font-sans text-xs leading-6 text-[#263839]/60 md:text-sm">
              Every photograph is a frame from a story that never really
              stopped.
            </p>

            <p className="mt-4 font-sans text-[8px] font-bold uppercase tracking-[0.35em] text-[#263839]/40">
              Memories · Moments · Madness
            </p>

          </div>

        </div>

        {/* Heavy divider */}
        <div className="mt-14 h-px bg-[#203638]/20" />

        <div className="mt-3 flex justify-between font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/40">
          <span>PARAS — THE ARCHIVE</span>
          <span>{String(TRAIL_PHOTOS.length).padStart(2, "0")} FRAMES</span>
        </div>

      </div>

      {/* =====================================================
          PHOTO CHAPTERS
      ===================================================== */}

      <div className="relative z-10 mx-auto mt-24 max-w-7xl">

        <div className="space-y-32 md:space-y-44">

          {TRAIL_PHOTOS.map((photo, index) => {

            const isEven = index % 2 === 0;
            const number = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal
                key={photo.id}
                direction={isEven ? "left" : "right"}
                delay={index * 80}
              >

                <article
                  className={`
                    relative
                    grid
                    items-center
                    gap-8
                    md:grid-cols-12
                    md:gap-12
                    ${isEven ? "" : "md:[&>*:first-child]:order-2"}
                  `}
                >

                  {/* =================================================
                      HUGE NUMBER
                  ================================================= */}

                  <div
                    className={`
                      absolute
                      -top-12
                      z-0
                      select-none
                      font-sans
                      text-[9rem]
                      font-black
                      leading-none
                      tracking-[-0.08em]
                      text-[#183638]/[0.07]
                      md:-top-20
                      md:text-[15rem]
                      ${
                        isEven
                          ? "left-0 md:left-[2%]"
                          : "right-0 md:right-[2%]"
                      }
                    `}
                  >
                    {number}
                  </div>

                  {/* =================================================
                      PHOTO
                  ================================================= */}

                  <div
                    className={`
                      relative
                      z-10
                      md:col-span-7
                      ${
                        isEven
                          ? "md:col-start-1"
                          : "md:col-start-6"
                      }
                    `}
                  >

                    {/* Cinematic frame */}
                    <figure className="group relative overflow-hidden bg-[#182728] p-1">

                      <div className="relative overflow-hidden">

                        <img
                          src={photo.src}
                          alt={photo.caption}
                          width={900}
                          height={1100}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.src =
                              TRAIL_PHOTOS[0]?.src ?? photo.src;
                          }}
                          className="
                            aspect-[4/5]
                            w-full
                            object-cover
                            grayscale-[10%]
                            transition-all
                            duration-1000
                            group-hover:scale-[1.035]
                            group-hover:grayscale-0
                          "
                        />

                        {/* Image lighting */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/55
                            via-transparent
                            to-transparent
                            opacity-60
                          "
                        />

                        {/* Frame number */}
                        <div className="absolute bottom-4 left-5">
                          <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-white/70">
                            FRAME {number}
                          </span>
                        </div>

                      </div>

                    </figure>

                  </div>

                  {/* =================================================
                      CHAPTER INFORMATION
                  ================================================= */}

                  <div
                    className={`
                      relative
                      z-10
                      md:col-span-5
                      ${
                        isEven
                          ? "md:col-start-8"
                          : "md:col-start-1 md:row-start-1"
                      }
                    `}
                  >

                    {/* Chapter */}
                    <div className="flex items-center gap-3">

                      <span className="font-sans text-[9px] font-bold tracking-[0.35em] text-[#31595b]">
                        CHAPTER
                      </span>

                      <div className="h-px w-10 bg-[#31595b]/50" />

                      <span className="font-sans text-[9px] tracking-[0.2em] text-[#263839]/40">
                        {number}
                      </span>

                    </div>

                    {/* Caption */}
                    <h3
                      className="
                        mt-5
                        font-serif
                        text-4xl
                        font-black
                        uppercase
                        leading-[0.9]
                        tracking-[-0.035em]
                        text-[#152526]
                        md:text-5xl
                        lg:text-6xl
                      "
                    >
                      {photo.caption}
                    </h3>

                    {/* Description */}
                    <div className="mt-6 max-w-sm">

                      <div className="mb-5 h-[2px] w-16 bg-[#31595b]" />

                      <p className="font-sans text-xs leading-6 text-[#263839]/60 md:text-sm">
                        A frame from the journey. A moment that became part
                        of the story.
                      </p>

                    </div>

                    {/* Fake movie credits */}
                    <div className="mt-8 border-t border-[#263839]/15 pt-4">

                      <div className="flex flex-wrap gap-x-5 gap-y-2">

                        <span className="font-sans text-[7px] uppercase tracking-[0.3em] text-[#263839]/40">
                          Memories
                        </span>

                        <span className="font-sans text-[7px] uppercase tracking-[0.3em] text-[#263839]/40">
                          Brotherhood
                        </span>

                        <span className="font-sans text-[7px] uppercase tracking-[0.3em] text-[#263839]/40">
                          2026
                        </span>

                      </div>

                    </div>

                  </div>

                </article>

              </ScrollReveal>
            );
          })}

        </div>
      </div>

      {/* =====================================================
          ENDING — TO BE CONTINUED
      ===================================================== */}

      <div className="relative z-10 mx-auto mt-40 max-w-7xl">

        <div className="relative border-y border-[#203638]/20 py-20 text-center">

          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.55em] text-[#263839]/40">
            The story isn't over
          </p>

          <h3
            className="
              mt-5
              font-serif
              text-5xl
              font-black
              uppercase
              leading-none
              tracking-[-0.05em]
              text-[#152526]
              md:text-7xl
              lg:text-8xl
            "
          >
            To Be
            <span className="block italic text-[#31595b]">
              Continued...
            </span>
          </h3>

          <p className="mt-6 font-serif text-sm italic text-[#263839]/50">
            Because the best chapters haven't happened yet.
          </p>

        </div>

        {/* Credits */}
        <div className="mt-5 flex justify-between">

          <span className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/30">
            PARAS — THE ARCHIVE
          </span>

          <span className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/30">
            END OF CHAPTER
          </span>

        </div>

      </div>

      {/* =====================================================
          FILM GRAIN
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-40
          opacity-[0.06]
          mix-blend-multiply
          [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />

    </section>
  );
}