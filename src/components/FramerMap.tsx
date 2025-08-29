import React from "react";

const FramerEmbedResponsive: React.FC = () => {
  const html = `
    <!-- ORIGINAL STYLES (unchanged) -->
    <style>
      .framer-1bqezfm{flex:none;height:auto;position:relative;white-space:pre;width:auto}
      .framer-wO6gr .framer-1n504xz{flex:none;height:auto;position:relative;white-space:pre-wrap;width:510px;word-break:break-word;word-wrap:break-word}
      .framer-wO6gr .framer-12lgdh3{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;gap:13.6px;height:min-content;justify-content:center;overflow:visible;padding:0;position:relative;width:min-content}
      .framer-wO6gr .framer-1md4l4h{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;gap:10px;height:min-content;justify-content:center;overflow:visible;padding:0;position:relative;width:100%}
      .framer-wO6gr .framer-18k2t45{flex:1 0 0px;height:527px;overflow:visible;position:relative;width:1px}
      .framer-wO6gr .framer-19g65u{bottom:0;flex:none;height:189px;position:absolute;right:0;width:1353px;z-index:1}
      .framer-wO6gr .framer-1flele{flex:none;height:345px;left:calc(47.45% - 1019px / 2);overflow:visible;position:absolute;top:6px;width:1019px;z-index:1}
      .framer-wO6gr .framer-i3r4jz{aspect-ratio:2.43 / 1;bottom:0;flex:none;left:50%;position:absolute;top:0;width:var(--framer-aspect-ratio-supported, 1280px)}
      .framer-wO6gr.framer-v-1tt7ii8.framer-a1nsv6{gap:32.5px;height:585px;width:810px}
      .framer-wO6gr.framer-v-1tt7ii8 .framer-1n504xz{width:332px}
      .framer-wO6gr.framer-v-1tt7ii8 .framer-12lgdh3{gap:8.84px}
      .framer-wO6gr.framer-v-1tt7ii8 .framer-1md4l4h{gap:6.5px;min-height:342px}
    </style>

    <!-- RESPONSIVE OVERRIDES (minimal & safe) -->
    <style>
      /* kill forced full-viewport height & overflow causing white gap */
      .framer-cPgQa.framer-1vw04pd{min-height:auto !important;width:100% !important}

      /* let the section size to content */
      #framer-embed-wrap{position:relative;width:100%;max-width:1280px;margin:0 auto}

      /* allow the inner frame to flow and size naturally */
      .framer-wO6gr.framer-a1nsv6{height:auto !important}

      /* make the row wrap on small screens */
      .framer-1md4l4h{flex-wrap:wrap !important}

      /* use responsive height instead of fixed 527px */
      .framer-18k2t45{height:auto !important;width:100% !important}

      /* the black SVG “Rectangle 3133” becomes relative and responsive */
      .framer-19g65u{
        position:relative !important;
        width:100% !important;
        height:12vw !important;
        max-height:180px !important;
        right:auto !important; bottom:auto !important;
      }

      /* logo container sits above, centered, with reasonable height */
      .framer-1flele{
        position:relative !important;
        top:auto !important; left:auto !important;
        width:min(60%, 640px) !important;
        height:auto !important;
        margin:12px auto 0 auto !important;
      }

      /* background image: full width, static flow, no translateX */
      .framer-i3r4jz{
        position:relative !important;
        left:auto !important; top:auto !important; bottom:auto !important;
        width:100% !important;
        transform:none !important;
        aspect-ratio: 16 / 6 !important;
      }

      /* images scale */
      .framer-i3r4jz img, .framer-1flele img{width:100% !important;height:auto !important;object-fit:contain !important}

      /* tighten on mobile */
      @media (max-width: 809px){
        .framer-19g65u{height:18vw !important;max-height:140px !important}
        .framer-1flele{width:80% !important;margin-top:8px !important}
        .framer-i3r4jz{aspect-ratio: 16 / 9 !important}
      }
    </style>

    <!-- you can keep the script; it won't break if it's already on the page -->
    <script async src="https://events.framer.com/script?v=2"
      data-fid="4ce11376c97ee5f8776a29883bf14ae8363c7d6def3d4f58f2ecde66cebb338a" data-no-nt=""></script>

    <div id="framer-embed-wrap">
      <div data-framer-root class="framer-cPgQa framer-1vw04pd">
        <div class="ssr-variant hidden-6pfjti hidden-bb9v7y">
          <div class="framer-1nxioyv-container">
            <div class="framer-wO6gr framer-a1nsv6 framer-v-a1nsv6" data-framer-name="Desktop" style="opacity:1">
              <div class="framer-82v1vv" style="opacity:1">
                <div class="framer-1md4l4h" data-framer-name="Map" style="opacity:1">
                  <div class="framer-18k2t45" style="opacity:1">
                    <div data-framer-component-type="SVG" data-framer-name="Rectangle 3133"
                      class="framer-19g65u" aria-hidden="true" style="image-rendering:pixelated;flex-shrink:0;fill:#000;color:#000;opacity:1">
                      <div class="svgContainer" style="width:100%;height:100%;aspect-ratio:inherit">
                        <svg style="width:100%;height:100%" viewBox="0 0 1440 171" preserveAspectRatio="none">
                          <use href="#svg-125291056_428"></use>
                        </svg>
                      </div>
                    </div>

                    <div class="framer-1flele" data-framer-name="Frame 2095584582" style="opacity:1">
                      <div style="position:relative;border-radius:inherit">
                        <img decoding="async" width="177" height="60"
                          src="https://framerusercontent.com/images/pZmas580edAwfzvBoukJU8Hp8.svg" alt=""
                          style="display:block;border-radius:inherit;object-position:center;object-fit:contain" />
                      </div>
                    </div>

                    <div class="framer-i3r4jz" data-framer-name="steptodown.com806987 1" style="opacity:0.13">
                      <div style="position:relative;border-radius:inherit">
                        <img decoding="async" width="4096" height="1686"
                          src="https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png" alt=""
                          style="display:block;border-radius:inherit;object-position:center;object-fit:cover" />
                      </div>
                    </div>

                  </div><!-- /.framer-18k2t45 -->
                </div><!-- /.framer-1md4l4h -->
              </div><!-- /.framer-82v1vv -->
            </div><!-- /.framer-wO6gr -->
          </div><!-- /.framer-1nxioyv-container -->
        </div><!-- /.ssr-variant -->
      </div><!-- /.framer-cPgQa -->
      <div id="overlay"></div>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default FramerEmbedResponsive;
