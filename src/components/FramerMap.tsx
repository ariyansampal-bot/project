// src/components/FramerExactEmbed.tsx
import React, { useRef, useEffect } from "react";

const HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <!-- Make content fit phones -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    /* YOUR EXACT CSS (unchanged) */
    .framer-1bqezfm{flex:none;height:auto;position:relative;white-space:pre;width:auto}
    .framer-wO6gr .framer-1n504xz{flex:none;height:auto;position:relative;white-space:pre-wrap;width:510px;word-break:break-word;word-wrap:break-word}
    .framer-wO6gr .framer-12lgdh3{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;gap:13.6px;height:min-content;justify-content:center;overflow:visible;padding:0;position:relative;width:min-content}
    .framer-wO6gr .framer-1md4l4h{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;gap:10px;height:min-content;justify-content:center;overflow:visible;padding:0;position:relative;width:100%}
    .framer-wO6gr .framer-18k2t45{flex:1 0 0px;height:527px;overflow:visible;position:relative;width:1px}
    .framer-wO6gr .framer-19g65u{bottom:0;flex:none;height:189px;position:absolute;right:0;width:1353px;z-index:1}
    .framer-wO6gr .framer-1flele{flex:none;height:345px;left:calc(47.45% - 1019px / 2);overflow:visible;position:absolute;top:6px;width:1019px;z-index:1}
    .framer-wO6gr .framer-i3r4jz{aspect-ratio:2.43 / 1;bottom:0;flex:none;left:50%;position:absolute;top:0;width:var(--framer-aspect-ratio-supported,1280px)}
    .framer-wO6gr.framer-v-1tt7ii8.framer-a1nsv6{gap:32.5px;height:585px;width:810px}
    .framer-wO6gr.framer-v-1tt7ii8 .framer-1n504xz{width:332px}
    .framer-wO6gr.framer-v-1tt7ii8 .framer-12lgdh3{gap:8.84px}
    .framer-wO6gr.framer-v-1tt7ii8 .framer-1md4l4h{gap:6.5px;min-height:342px}
  </style>

  <!-- Mobile-only fit (non-destructive): make fixed px widths adapt to viewport -->
  <style>
    html,body{margin:0;padding:0;overflow-x:hidden}
    :root{--framer-aspect-ratio-supported:100vw;}
    @media (max-width:809px){
      .framer-cPgQa.framer-1vw04pd{min-height:auto!important;width:100vw!important}
      .framer-18k2t45{width:100vw!important;height:calc(100vw / 2.43)!important;overflow:hidden!important;position:relative!important}
      .framer-i3r4jz{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;left:0!important;transform:none!important;aspect-ratio:auto!important}
      .framer-19g65u{position:absolute!important;left:0!important;right:0!important;bottom:0!important;width:100%!important;height:min(189px,24vw)!important}
      .framer-1flele{position:absolute!important;top:6px!important;left:50%!important;transform:translateX(-50%)!important;width:min(92vw,1019px)!important;height:auto!important}
      .framer-1flele img{width:100%!important;height:auto!important;object-fit:contain!important}
    }
  </style>
</head>
<body>
  <script async src="https://events.framer.com/script?v=2"
    data-fid="4ce11376c97ee5f8776a29883bf14ae8363c7d6def3d4f58f2ecde66cebb338a" data-no-nt=""></script>

  <div id="main"
    data-framer-hydrate-v2='{"routeId":"nhXAaxVjg","localeId":"default","breakpoints":[{"hash":"1vw04pd","mediaQuery":"(min-width: 1200px)"},{"hash":"6pfjti","mediaQuery":"(min-width: 810px) and (max-width: 1199px)"},{"hash":"bb9v7y","mediaQuery":"(max-width: 809px)"}]}'
    data-framer-ssr-released-at="2025-08-26T12:46:46.255Z"
    data-framer-page-optimized-at="2025-08-29T08:42:49.763Z"
    data-framer-generated-page="">
    <style>html body{background:#fff}</style>

    <div data-framer-root class="framer-cPgQa framer-1vw04pd" style="min-height:100vh;width:auto">
      <div class="ssr-variant hidden-6pfjti hidden-bb9v7y">
        <div class="framer-1nxioyv-container">
          <div class="framer-wO6gr framer-a1nsv6 framer-v-a1nsv6" data-framer-name="Desktop" style="height:100%;width:100%;opacity:1">
            <div class="framer-82v1vv" style="opacity:1">
              <div class="framer-1md4l4h" data-framer-name="Map" style="opacity:1">
                <div class="framer-18k2t45" style="opacity:1">
                  <div data-framer-component-type="SVG" data-framer-name="Rectangle 3133"
                       class="framer-19g65u" aria-hidden="true"
                       style="image-rendering:pixelated;flex-shrink:0;fill:#000;color:#000;opacity:1">
                    <div class="svgContainer" style="width:100%;height:100%;aspect-ratio:inherit">
                      <svg style="width:100%;height:100%" viewBox="0 0 1440 171" preserveAspectRatio="none" width="100%" height="100%">
                        <use href="#svg-125291056_428"></use>
                      </svg>
                    </div>
                  </div>

                  <div class="framer-1flele" data-framer-name="Frame 2095584582" style="opacity:1">
                    <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
                      <img decoding="async" width="177" height="60"
                           src="https://framerusercontent.com/images/pZmas580edAwfzvBoukJU8Hp8.svg" alt=""
                           style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
                    </div>
                  </div>

                  <div class="framer-i3r4jz" data-framer-name="steptodown.com806987 1" style="opacity:0.13;transform:translateX(-50%)">
                    <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
                      <img decoding="async" width="4096" height="1686" sizes="1280.3037px"
                           srcset="https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png?scale-down-to=512 512w, https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png 4096w"
                           src="https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png" alt=""
                           style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
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
  </div><!-- /#main -->

  <!-- Auto-height so parent iframe fits content on phones -->
  <script>
    (function(){
      function sendHeight(){
        try{
          var h = Math.max(
            document.body.scrollHeight||0,
            document.documentElement.scrollHeight||0
          );
          parent.postMessage({ __FRAMER_IFRAME_HEIGHT__: h }, "*");
        }catch(e){}
      }
      window.addEventListener("load", sendHeight);
      window.addEventListener("resize", sendHeight);
      var ro = new ResizeObserver(sendHeight);
      ro.observe(document.documentElement); ro.observe(document.body);
      setTimeout(sendHeight, 50); setTimeout(sendHeight, 200);
    })();
  </script>
</body>
</html>`;

const FramerExactEmbed: React.FC = () => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e?.data && typeof e.data === "object" && "__FRAMER_IFRAME_HEIGHT__" in e.data) {
        const h = Number(e.data.__FRAMER_IFRAME_HEIGHT__);
        if (ref.current && Number.isFinite(h) && h > 0) ref.current.style.height = h + "px";
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <iframe
      ref={ref}
      title="Framer exact embed"
      srcDoc={HTML}
      sandbox="allow-scripts allow-same-origin"
      style={{ width: "100%", maxWidth: "100%", border: 0, display: "block", height: "527px", overflow: "hidden" }}
      loading="lazy"
    />
  );
};

export default FramerExactEmbed;
