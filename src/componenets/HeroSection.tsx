import { ChevronDown } from "lucide-react";

import heroImage from "../assets/paras3.jpeg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#dfe5e4] text-[#101515]"
    >
      {/* =====================================================
          CINEMATIC BACKGROUND SCENE
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <img
          src={heroImage}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-45
            grayscale
          "
        />

        {/* Pale cinematic wash */}
        <div className="absolute inset-0 bg-[#dce4e3]/55" />

        {/* Background vignette */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#edf1ef]/80
            via-transparent
            to-[#263435]/55
          "
        />

        {/* Large faded character image */}
        <div
          className="
            absolute
            -right-[8%]
            -top-[15%]
            h-[80%]
            w-[65%]
            overflow-hidden
            opacity-[0.16]
            grayscale
            md:w-[55%]
          "
        >
          <img
            src={heroImage}
            alt=""
            className="
              h-full
              w-full
              scale-110
              object-cover
              object-top
            "
          />
        </div>

        {/* Soft blue cinematic light */}
        <div
          className="
            absolute
            left-[45%]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          TOP MOVIE CREDITS
      ===================================================== */}

      <div className="absolute left-0 right-0 top-0 z-30 px-6 pt-7 md:px-12 lg:px-16">

        <div className="flex justify-between">

          <div>
            <p className="font-sans text-[9px] font-black uppercase leading-tight tracking-[0.08em] text-[#172020] md:text-[11px]">
              A Birthday
              <br />
              Presentation
            </p>

            <div className="mt-2 h-[2px] w-8 bg-[#172020]" />
          </div>

          <div className="text-right">
            <p className="font-serif text-xs italic text-[#172020]/60">
              14 September
            </p>

            <p className="mt-1 font-sans text-[7px] uppercase tracking-[0.35em] text-[#172020]/40">
              The Premiere
            </p>
          </div>

        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1500px]
          items-center
          px-6
          pb-16
          pt-24
          md:px-12
          lg:px-16
        "
      >

        <div className="grid w-full grid-cols-1 items-end lg:grid-cols-[0.8fr_1.2fr]">

          {/* =================================================
              LEFT — TITLE
          ================================================= */}

          <div className="relative z-30 pb-12 text-center lg:pb-20 lg:text-left">

            <p className="font-sans text-[9px] font-bold uppercase tracking-[0.45em] text-[#263333]/60 md:text-xs">
              The story begins
            </p>

            <p className="mt-4 font-serif text-xl italic text-[#263333]/70 md:text-2xl">
              Presenting...
            </p>

            {/* Main title */}
            <h1
              className="
                mt-2
                font-serif
                text-[4.5rem]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.06em]
                sm:text-7xl
                md:text-8xl
                lg:text-[8rem]
              "
            >
              <span className="block text-[#182121]">
                The
              </span>

              <span
                className="
                  block
                  bg-gradient-to-b
                  from-[#334b4d]
                  via-[#0c2426]
                  to-[#60797a]
                  bg-clip-text
                  text-transparent
                "
              >
                Story
              </span>

              <span
                className="
                  block
                  bg-gradient-to-b
                  from-[#263b3d]
                  via-[#071517]
                  to-[#6b8585]
                  bg-clip-text
                  text-transparent
                "
              >
                of Paras
              </span>
            </h1>

            {/* Metallic divider */}
            <div className="mx-auto mt-7 h-[3px] w-28 bg-gradient-to-r from-transparent via-[#173b3e] to-transparent lg:mx-0" />

            {/* =================================================
                BIRTHDAY MESSAGE
            ================================================= */}

            <div className="mt-7">

              <p className="font-sans text-[8px] font-bold uppercase tracking-[0.45em] text-[#263333]/50 md:text-[10px]">
                To the man behind the story
              </p>

              <h2 className="mt-2 font-serif text-3xl font-black uppercase leading-none tracking-tight text-[#142021] md:text-4xl lg:text-5xl">
                Happy Birthday
                <span className="block italic text-[#31585a]">
                  Brother.
                </span>
              </h2>

            </div>

            <p className="mx-auto mt-5 max-w-md font-sans text-xs leading-6 text-[#263333]/65 md:text-sm lg:mx-0">
              One character. A thousand memories.
              <br />
              And a story still being written.
            </p>

          </div>

          {/* =================================================
              RIGHT — HERO CHARACTER
          ================================================= */}

          <div className="relative flex h-[600px] items-end justify-center lg:h-screen">

            {/* Massive background title */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[8%]
                left-1/2
                z-0
                -translate-x-1/2
                whitespace-nowrap
                font-serif
                text-[8rem]
                font-black
                uppercase
                leading-none
                tracking-[-0.09em]
                text-[#102426]/[0.07]
                md:text-[13rem]
                lg:text-[17rem]
              "
            >
              PARAS
            </div>

            {/* Hero portrait */}

            <div
              className="
                relative
                z-10
                h-[92%]
                w-[78%]
                max-w-[570px]
              "
            >

              <img
                src={heroImage}
                alt="Paras"
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-full
                  w-full
                  -translate-x-1/2
                  object-cover
                  object-center
                  grayscale-[15%]
                "
              />

              {/* Fade portrait into scene */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[35%]
                  bg-gradient-to-t
                  from-[#dfe5e4]
                  via-[#dfe5e4]/40
                  to-transparent
                "
              />

              {/* Light from behind */}
              <div
                className="
                  absolute
                  inset-x-[20%]
                  bottom-[15%]
                  h-[50%]
                  -z-10
                  rounded-full
                  bg-cyan-300/20
                  blur-[90px]
                "
              />

            </div>

            {/* =================================================
                MOVIE TITLE OVER CHARACTER
            ================================================= */}

            <div
              className="
                absolute
                bottom-[12%]
                left-1/2
                z-20
                -translate-x-1/2
                text-center
              "
            >

              <h3
                className="
                  font-sans
                  text-[4.5rem]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.08em]
                  text-transparent
                  [text-shadow:0_2px_0_#fff,0_4px_10px_rgba(0,0,0,0.35)]
                  [-webkit-text-stroke:1px_rgba(15,40,42,0.7)]
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[9rem]
                "
              >
                PARAS
              </h3>

              <p className="mt-3 font-sans text-[8px] font-bold uppercase tracking-[0.5em] text-[#172a2c]/70 md:text-[10px]">
                The Main Character
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          MOVIE CREDITS
      ===================================================== */}

      <div className="absolute bottom-6 left-6 z-30 md:left-12 lg:left-16">

        <div className="font-sans text-[7px] uppercase tracking-[0.3em] text-[#172020]/45 md:text-[8px]">
          <span>Friendship</span>
          <span className="mx-3">•</span>
          <span>Brotherhood</span>
          <span className="mx-3">•</span>
          <span>Memories</span>
        </div>

      </div>

      {/* =====================================================
          SCROLL
      ===================================================== */}

      <a
        href="#gallery"
        aria-label="Continue to the story"
        className="
          absolute
          bottom-5
          right-6
          z-30
          flex
          items-center
          gap-2
          text-[#172020]/50
          transition-colors
          hover:text-[#172020]
          md:right-12
        "
      >
        <span className="font-sans text-[7px] uppercase tracking-[0.35em]">
          The story continues
        </span>

        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>

      {/* Cinematic grain */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-40
          opacity-[0.08]
          mix-blend-multiply
          [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />

    </section>
  );
}
