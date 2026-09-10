export function FooterSection() {
  return (
    <footer
      className="
        relative
        min-h-[75vh]
        overflow-hidden
        bg-[#dfe5e4]
        px-6
        py-28
        text-[#111c1d]
        md:py-36
      "
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Huge faded PARAS */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            select-none
            whitespace-nowrap
            font-sans
            text-[10rem]
            font-black
            uppercase
            leading-none
            tracking-[-0.1em]
            text-[#173537]/[0.045]
            sm:text-[15rem]
            md:text-[22rem]
            lg:text-[30rem]
          "
        >
          PARAS
        </div>

        {/* Cinematic light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-200/25
            blur-[130px]
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-[#c8d2d1]/50
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-[#b9c5c4]/40
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          TOP MOVIE CREDIT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="h-[2px] w-12 bg-[#173537] md:w-20" />

            <span className="font-sans text-[8px] font-bold uppercase tracking-[0.5em] text-[#173537]/60 md:text-[10px]">
              The Final Chapter
            </span>

          </div>

          <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-[#173537]/35">
            14 · 09 · 2026
          </span>

        </div>

      </div>

      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-5xl flex-col items-center justify-center text-center">

        {/* Small intro */}

        <p className="font-sans text-[9px] font-bold uppercase tracking-[0.55em] text-[#263839]/45 md:text-xs">
          And as the credits begin to roll...
        </p>

        {/* Main heading */}

        <h2
          className="
            mt-7
            font-serif
            text-[4rem]
            font-black
            uppercase
            leading-[0.8]
            tracking-[-0.055em]
            text-[#142324]
            sm:text-6xl
            md:text-8xl
            lg:text-[9rem]
          "
        >
          Happy Birthday
          <span
            className="
              mt-3
              block
              bg-gradient-to-b
              from-[#496d6f]
              via-[#173b3d]
              to-[#789092]
              bg-clip-text
              italic
              text-transparent
            "
          >
            Brother
          </span>
        </h2>

        {/* Divider */}

        <div className="mt-8 flex items-center gap-4">

          <div className="h-px w-16 bg-[#31595b]/50 md:w-24" />

          <span className="font-sans text-[8px] font-bold uppercase tracking-[0.45em] text-[#31595b]/60">
            End Credits
          </span>

          <div className="h-px w-16 bg-[#31595b]/50 md:w-24" />

        </div>

        {/* Message */}

        <p className="mx-auto mt-8 max-w-2xl font-sans text-sm leading-7 text-[#263839]/60 md:text-base md:leading-8">
          Some people enter your life and become a chapter.
          <br className="hidden md:block" />
          You became part of the entire story.
        </p>

        <p className="mt-5 max-w-xl font-serif text-lg italic text-[#31595b]/70 md:text-xl">
          Here's to another year of madness, memories, adventures
          and moments worth remembering.
        </p>

      </div>

      {/* =====================================================
          MOVIE CREDIT BLOCK
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">

        <div className="border-y border-[#263839]/15 py-6">

          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">

            <div>
              <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/35">
                Starring
              </p>

              <p className="mt-2 font-serif text-sm font-bold text-[#263839]/70">
                Paras
              </p>
            </div>

            <div>
              <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/35">
                Genre
              </p>

              <p className="mt-2 font-serif text-sm font-bold text-[#263839]/70">
                Brotherhood
              </p>
            </div>

            <div>
              <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/35">
                Runtime
              </p>

              <p className="mt-2 font-serif text-sm font-bold text-[#263839]/70">
                Forever
              </p>
            </div>

            <div>
              <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/35">
                Status
              </p>

              <p className="mt-2 font-serif text-sm font-bold italic text-[#31595b]">
                To Be Continued
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM CREDITS
      ===================================================== */}

      <div className="relative z-10 mx-auto mt-8 flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">

        <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/30">
          A birthday tribute for Paras
        </p>

        <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/30">
          Made with brotherhood
        </p>

        <p className="font-sans text-[7px] uppercase tracking-[0.35em] text-[#263839]/30">
          The End.
        </p>

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
          opacity-[0.05]
          mix-blend-multiply
          [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />
    </footer>
  );
}