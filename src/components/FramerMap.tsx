import React from 'react';

const ResponsivePageComponent: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <style>
          {`
            .framer-1bqezfm {
              flex: none;
              height: auto;
              position: relative;
              white-space: pre;
              width: auto;
            }

            .framer-wO6gr .framer-1n504xz {
              flex: none;
              height: auto;
              position: relative;
              white-space: pre-wrap;
              width: 510px;
              max-width: 100%;
              word-break: break-word;
              word-wrap: break-word;
            }

            .framer-wO6gr .framer-12lgdh3 {
              align-content: center;
              align-items: center;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              gap: 13.6px;
              height: min-content;
              justify-content: center;
              overflow: visible;
              padding: 0;
              position: relative;
              width: min-content;
            }

            .framer-wO6gr .framer-1md4l4h {
              align-content: center;
              align-items: center;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              gap: 10px;
              height: min-content;
              justify-content: center;
              overflow: visible;
              padding: 0;
              position: relative;
              width: 100%;
            }

            .framer-wO6gr .framer-18k2t45 {
              flex: 1 0 0px;
              height: 527px;
              overflow: visible;
              position: relative;
              width: 1px;
            }

            .framer-wO6gr .framer-19g65u {
              bottom: 0;
              flex: none;
              height: 189px;
              position: absolute;
              right: 0;
              width: 1353px;
              z-index: 1;
            }

            .framer-wO6gr .framer-1flele {
              flex: none;
              height: 345px;
              left: calc(47.45% - 1019px / 2);
              overflow: visible;
              position: absolute;
              top: 6px;
              width: 1019px;
              z-index: 1;
            }

            .framer-wO6gr .framer-i3r4jz {
              aspect-ratio: 2.43 / 1;
              bottom: 0;
              flex: none;
              left: 50%;
              position: absolute;
              top: 0;
              width: var(--framer-aspect-ratio-supported, 1280px);
            }

            .framer-wO6gr.framer-v-1tt7ii8.framer-a1nsv6 {
              gap: 32.5px;
              height: 585px;
              width: 810px;
            }

            .framer-wO6gr.framer-v-1tt7ii8 .framer-1n504xz {
              width: 332px;
              max-width: 100%;
            }

            .framer-wO6gr.framer-v-1tt7ii8 .framer-12lgdh3 {
              gap: 8.84px;
            }

            .framer-wO6gr.framer-v-1tt7ii8 .framer-1md4l4h {
              gap: 6.5px;
              min-height: 342px;
            }

            /* Responsive styles to scale elements while preserving original values */
            @media (min-width: 1200px) {
              .framer-wO6gr {
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
              }
              .framer-19g65u {
                width: 1353px;
                height: 189px;
              }
              .framer-1flele {
                width: 1019px;
                height: 345px;
                left: calc(47.45% - 1019px / 2);
              }
              .framer-i3r4jz {
                width: var(--framer-aspect-ratio-supported, 1280px);
              }
            }

            @media (min-width: 810px) and (max-width: 1199px) {
              .framer-wO6gr {
                width: 100%;
                max-width: 810px;
                height: auto;
                padding: 10px;
              }
              .framer-18k2t45 {
                height: calc(527px * 0.8);
                width: 100%;
              }
              .framer-19g65u {
                width: 100%;
                max-width: calc(1353px * 0.8);
                height: calc(189px * 0.8);
                position: relative;
                right: auto;
                bottom: auto;
              }
              .framer-1flele {
                width: 100%;
                max-width: calc(1019px * 0.8);
                height: calc(345px * 0.8);
                left: 0;
                position: relative;
                top: 0;
              }
              .framer-i3r4jz {
                width: 100%;
                max-width: calc(1280px * 0.8);
                height: auto;
                aspect-ratio: 2.43 / 1;
                left: 0;
                position: relative;
                transform: none;
              }
              .framer-i3r4jz img,
              .framer-1flele img {
                width: 100%;
                height: auto;
                object-fit: contain;
              }
            }

            @media (max-width: 809px) {
              .framer-wO6gr {
                width: 100%;
                height: auto;
                gap: calc(32.5px * 0.6);
                padding: 10px;
                box-sizing: border-box;
              }
              .framer-1n504xz {
                width: 100%;
                max-width: calc(510px * 0.9);
              }
              .framer-12lgdh3 {
                flex-direction: column;
                gap: calc(13.6px * 0.6);
                width: 100%;
                align-items: center;
              }
              .framer-1md4l4h {
                flex-direction: column;
                width: 100%;
                height: auto;
                gap: calc(10px * 0.6);
              }
              .framer-18k2t45 {
                width: 100%;
                height: calc(527px * 0.6);
                min-height: 200px;
              }
              .framer-19g65u {
                width: 100%;
                max-width: calc(1353px * 0.6);
                height: calc(189px * 0.6);
                min-height: 100px;
                position: relative;
                right: auto;
                bottom: auto;
              }
              .framer-1flele {
                width: 100%;
                max-width: calc(1019px * 0.6);
                height: calc(345px * 0.6);
                min-height: 150px;
                left: 0;
                top: 0;
                position: relative;
              }
              .framer-i3r4jz {
                width: 100%;
                max-width: calc(1280px * 0.6);
                height: auto;
                aspect-ratio: 2.43 / 1;
                left: 0;
                position: relative;
                transform: none;
              }
              .framer-i3r4jz img,
              .framer-1flele img {
                width: 100%;
                height: auto;
                object-fit: contain;
              }
              .framer-wO6gr.framer-v-1tt7ii8.framer-a1nsv6 {
                width: 100%;
                max-width: calc(810px * 0.9);
                height: auto;
                min-height: calc(585px * 0.6);
                gap: calc(32.5px * 0.6);
              }
              .framer-wO6gr.framer-v-1tt7ii8 .framer-1n504xz {
                width: 100%;
                max-width: calc(332px * 0.9);
              }
              .framer-wO6gr.framer-v-1tt7ii8 .framer-12lgdh3 {
                gap: calc(8.84px * 0.6);
              }
              .framer-wO6gr.framer-v-1tt7ii8 .framer-1md4l4h {
                gap: calc(6.5px * 0.6);
                min-height: calc(342px * 0.6);
              }
            }

            html, body {
              background: #ffffff;
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              box-sizing: border-box;
            }

            /* Ensure viewport scaling */
            @viewport {
              width: device-width;
              initial-scale: 1;
              maximum-scale: 1;
              user-scalable: no;
            }
            meta[name="viewport"] {
              content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
            }
          `}
        </style>
      </head>
      <body>
        <script
          async
          src="https://events.framer.com/script?v=2"
          data-fid="4ce11376c97ee5f8776a29883bf14ae8363c7d6def3d4f58f2ecde66cebb338a"
          data-no-nt=""
        ></script>

        <div
          id="main"
          data-framer-hydrate-v2='{"routeId":"nhXAaxVjg","localeId":"default","breakpoints":[{"hash":"1vw04pd","mediaQuery":"(min-width: 1200px)"},{"hash":"6pfjti","mediaQuery":"(min-width: 810px) and (max-width: 1199px)"},{"hash":"bb9v7y","mediaQuery":"(max-width: 809px)"}]}'
          data-framer-ssr-released-at="2025-08-26T12:46:46.255Z"
          data-framer-page-optimized-at="2025-08-29T08:42:49.763Z"
          data-framer-generated-page=""
        >
          <div
            data-framer-root=""
            className="framer-cPgQa framer-1vw04pd"
            style={{ minHeight: '100vh', width: '100%' }}
          >
            <div className="ssr-variant hidden-6pfjti hidden-bb9v7y">
              <div className="framer-1nxioyv-container">
                <div
                  className="framer-wO6gr framer-a1nsv6 framer-v-a1nsv6"
                  data-framer-name="Desktop"
                  style={{ height: '100%', width: '100%', opacity: 1 }}
                >
                  <div className="framer-82v1vv" style={{ opacity: 1 }}>
                    <div
                      className="framer-1md4l4h"
                      data-framer-name="Map"
                      style={{ opacity: 1 }}
                    >
                      <div className="framer-18k2t45" style={{ opacity: 1 }}>
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Rectangle 3133"
                          style={{
                            imageRendering: 'pixelated',
                            flexShrink: 0,
                            fill: 'rgb(0, 0, 0)',
                            color: 'rgb(0, 0, 0)',
                            opacity: 1,
                          }}
                          className="framer-19g65u"
                          aria-hidden="true"
                        >
                          <div
                            className="svgContainer"
                            style={{ width: '100%', height: '100%', aspectRatio: 'inherit' }}
                          >
                            <svg
                              style={{ width: '100%', height: '100%' }}
                              viewBox="0 0 1440 171"
                              preserveAspectRatio="none"
                              width="100%"
                              height="100%"
                            >
                              <use href="#svg-125291056_428"></use>
                            </svg>
                          </div>
                        </div>

                        <div
                          className="framer-1flele"
                          data-framer-name="Frame 2095584582"
                          style={{ opacity: 1 }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              borderRadius: 'inherit',
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="177"
                              height="60"
                              src="https://framerusercontent.com/images/pZmas580edAwfzvBoukJU8Hp8.svg"
                              alt=""
                              style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'inherit',
                                objectPosition: 'center',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                        </div>

                        <div
                          className="framer-i3r4jz"
                          data-framer-name="steptodown.com806987 1"
                          style={{ opacity: 0.13 }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              borderRadius: 'inherit',
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0,
                            }}
                            data-framer-background-image-wrapper="true"
                          >
                            <img
                              decoding="async"
                              width="4096"
                              height="1686"
                              sizes="100vw"
                              srcSet="
                                https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png?scale-down-to=512 512w,
                                https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png?scale-down-to=1024 1024w,
                                https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png?scale-down-to=2048 2048w,
                                https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png 4096w
                              "
                              src="https://framerusercontent.com/images/2F3iraszK9WgXgKiscR3z0A.png"
                              alt=""
                              style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'inherit',
                                objectPosition: 'center',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay"></div>
        </div>
      </body>
    </html>
  );
};

export default ResponsivePageComponent;