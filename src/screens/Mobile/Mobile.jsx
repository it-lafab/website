import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Mobile = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="mobile">
      <div
        className="div"
        style={{
          height:
            screenWidth < 1132
              ? "4834px"
              : (screenWidth >= 1132 && screenWidth < 1920) || screenWidth >= 1920
                ? "4155px"
                : undefined,
          overflow: (screenWidth >= 1132 && screenWidth < 1920) || screenWidth < 1132 ? "hidden" : undefined,
          width:
            screenWidth < 1132
              ? "375px"
              : screenWidth >= 1132 && screenWidth < 1920
                ? "1132px"
                : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
        }}
      >
        {screenWidth < 1132 && (
          <div className="overlap">
            <img className="rectangle-copy" alt="Rectangle copy" src="./img/rectangle-copy-19.svg" />
            <img className="fill" alt="Fill" src="./img/fill-158.svg" />
            <img className="fill-copy" alt="Fill copy" src="./img/fill-158-copy.svg" />
            <div className="group-copy">
              <div className="overlap-group">
                <div className="text-wrapper">ENVIAR</div>
              </div>
            </div>
            <div className="group">
              <img className="img" alt="Group" src="./img/group-3-7.png" />
              <img className="fill-2" alt="Fill" src="./img/fill-4-2.svg" />
              <div className="overlap-group-2">
                <img className="group-2" alt="Group" src="./img/group-8-2.png" />
                <img className="fill-3" alt="Fill" src="./img/fill-9-1.svg" />
              </div>
              <img className="fill-3" alt="Fill" src="./img/fill-11-1.svg" />
            </div>
            <div className="text-wrapper-2">Síguenos es redes</div>
            <div className="REDES">
              <img className="shape" alt="Shape" src="./img/shape-7.svg" />
              <img className="combined-shape" alt="Combined shape" src="./img/combined-shape-11.svg" />
              <img className="rectangle" alt="Rectangle" src="./img/rectangle-11.svg" />
              <img className="shape-2" alt="Shape" src="./img/shape-8.svg" />
              <div className="instagram" />
            </div>
            <div className="TEXTOS-copy">
              <p className="la-fab-s-l-u">© La Fab .&nbsp;&nbsp;S.L.U. 2024. Todos los derechos reservados</p>
            </div>
            <div className="group-wrapper">
              <div className="div-2">
                <div className="text-wrapper-3">Aviso legal</div>
                <div className="text-wrapper-4">Privacidad</div>
                <div className="text-wrapper-5">Ayuda</div>
                <img className="line" alt="Line" src="./img/line-3.svg" />
                <img className="line-2" alt="Line" src="./img/line-3.svg" />
              </div>
            </div>
          </div>
        )}

        <div
          className="overlap-2"
          style={{
            height:
              screenWidth < 1132
                ? "896px"
                : screenWidth >= 1132 && screenWidth < 1920
                  ? "2406px"
                  : screenWidth >= 1920
                    ? "2187px"
                    : undefined,
            left:
              screenWidth < 1132
                ? "32px"
                : screenWidth >= 1132 && screenWidth < 1920
                  ? "-661px"
                  : screenWidth >= 1920
                    ? "0"
                    : undefined,
            top:
              screenWidth < 1132
                ? "0"
                : screenWidth >= 1132 && screenWidth < 1920
                  ? "1209px"
                  : screenWidth >= 1920
                    ? "1968px"
                    : undefined,
            width:
              screenWidth < 1132
                ? "555px"
                : screenWidth >= 1132 && screenWidth < 1920
                  ? "1793px"
                  : screenWidth >= 1920
                    ? "1920px"
                    : undefined,
          }}
        >
          {screenWidth < 1132 && (
            <img
              className="mapa"
              alt="Mapa"
              src="./img/veronica4611-mapa-completo-de-latinoamerica-con-conexiones-769fb.png"
            />
          )}

          <div
            className="group-3"
            style={{
              height:
                screenWidth < 1132
                  ? "15px"
                  : screenWidth >= 1132 && screenWidth < 1920
                    ? "2379px"
                    : screenWidth >= 1920
                      ? "1622px"
                      : undefined,
              left:
                screenWidth < 1132
                  ? "302px"
                  : (screenWidth >= 1132 && screenWidth < 1920) || screenWidth >= 1920
                    ? "0"
                    : undefined,
              top:
                screenWidth < 1132
                  ? "14px"
                  : screenWidth >= 1132 && screenWidth < 1920
                    ? "0"
                    : screenWidth >= 1920
                      ? "565px"
                      : undefined,
              width:
                screenWidth < 1132
                  ? "18px"
                  : screenWidth >= 1132 && screenWidth < 1920
                    ? "1793px"
                    : screenWidth >= 1920
                      ? "1920px"
                      : undefined,
            }}
          >
            {screenWidth < 1132 && (
              <div className="group-4">
                <div className="rectangle-2" />
                <div className="rectangle-copy-2" />
                <div className="rectangle-copy-3" />
              </div>
            )}

            {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth >= 1920) && (
              <>
                <div
                  className="overlap-3"
                  style={{
                    height:
                      screenWidth >= 1132 && screenWidth < 1920 ? "1654px" : screenWidth >= 1920 ? "1130px" : undefined,
                    top: screenWidth >= 1132 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "492px" : undefined,
                    width:
                      screenWidth >= 1132 && screenWidth < 1920 ? "1793px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                >
                  <img
                    className="rectangle-3"
                    style={{
                      height:
                        screenWidth >= 1920 ? "468px" : screenWidth >= 1132 && screenWidth < 1920 ? "913px" : undefined,
                      left: screenWidth >= 1920 ? "0" : screenWidth >= 1132 && screenWidth < 1920 ? "661px" : undefined,
                      top:
                        screenWidth >= 1920 ? "662px" : screenWidth >= 1132 && screenWidth < 1920 ? "118px" : undefined,
                      width:
                        screenWidth >= 1920
                          ? "1920px"
                          : screenWidth >= 1132 && screenWidth < 1920
                            ? "450px"
                            : undefined,
                    }}
                    alt="Rectangle"
                    src={
                      screenWidth >= 1920
                        ? "./img/rectangle-7.svg"
                        : screenWidth >= 1132 && screenWidth < 1920
                          ? "./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-1.png"
                          : undefined
                    }
                  />
                  {screenWidth >= 1920 && (
                    <>
                      <img className="fill-4" alt="Fill" src="./img/fill-158-14.svg" />
                      <img className="fill-copy-2" alt="Fill copy" src="./img/fill-158-copy-2-1.svg" />
                      <img className="fill-copy-3" alt="Fill copy" src="./img/fill-158-copy-3.svg" />
                    </>
                  )}

                  <div
                    className="con-carmen-sarmiento"
                    style={{
                      color:
                        screenWidth >= 1132 && screenWidth < 1920
                          ? "#000000"
                          : screenWidth >= 1920
                            ? "#474747"
                            : undefined,
                      fontSize:
                        screenWidth >= 1132 && screenWidth < 1920 ? "32px" : screenWidth >= 1920 ? "16px" : undefined,
                      fontWeight:
                        screenWidth >= 1132 && screenWidth < 1920 ? "800" : screenWidth >= 1920 ? "500" : undefined,
                      left:
                        screenWidth >= 1132 && screenWidth < 1920
                          ? "1171px"
                          : screenWidth >= 1920
                            ? "748px"
                            : undefined,
                      lineHeight:
                        screenWidth >= 1132 && screenWidth < 1920 ? "28px" : screenWidth >= 1920 ? "16px" : undefined,
                      top:
                        screenWidth >= 1132 && screenWidth < 1920 ? "862px" : screenWidth >= 1920 ? "817px" : undefined,
                      width:
                        screenWidth >= 1132 && screenWidth < 1920 ? "457px" : screenWidth >= 1920 ? "315px" : undefined,
                    }}
                  >
                    {screenWidth >= 1132 && screenWidth < 1920 && <>CON CARMEN SARMIENTO</>}

                    {screenWidth >= 1920 && (
                      <p className="text-wrapper-40">Desarrollamos el futuro del entretenimiento latinoamericano.</p>
                    )}
                  </div>
                  {screenWidth >= 1920 && (
                    <>
                      <div className="rectangle-copy-4" />
                      <div className="rectangle-copy-5" />
                      <textarea  className="text-wrapper-6" placeholder="Asunto"></textarea >
                      <div className="overlap-wrapper">
                        <div className="div-wrapper">
                          <div className="text-wrapper-7">ENVIAR</div>
                        </div>
                      </div>
                      <div className="group-5">
                        <div className="group-6">
                          <img className="img" alt="Group" src="./img/group-3-11.png" />
                          <img className="fill-2" alt="Fill" src="./img/fill-4-2.svg" />
                          <div className="overlap-group-2">
                            <img className="group-2" alt="Group" src="./img/group-8-2.png" />
                            <img className="fill-3" alt="Fill" src="./img/fill-9-2.svg" />
                          </div>
                          <img className="fill-3" alt="Fill" src="./img/fill-11-2.svg" />
                        </div>
                        <div className="la-fab-s-l-u-wrapper">
                          <p className="p">© La Fab .&nbsp;&nbsp;S.L.U. 2024. Todos los derechos reservados</p>
                        </div>
                      </div>
                      <div className="group-7">
                        <div className="div-2">
                          <div className="text-wrapper-3">Aviso legal</div>
                          <div className="text-wrapper-4">Privacidad</div>
                          <div className="text-wrapper-5">Ayuda</div>
                          <img className="line" alt="Line" src="./img/line-16.svg" />
                          <img className="line-2" alt="Line" src="./img/line-16.svg" />
                        </div>
                      </div>
                      <img className="rectangle-4" alt="Rectangle" src="./img/rectangle-10.svg" />
                      <div className="group-8">
                        <div className="text-wrapper-8">Síguenos es redes</div>
                        <div className="REDES-2">
                          <img className="shape" alt="Shape" src="./img/shape-7.svg" />
                          <img className="combined-shape" alt="Combined shape" src="./img/combined-shape-11.svg" />
                          <img className="rectangle" alt="Rectangle" src="./img/rectangle-11.svg" />
                          <img className="shape-2" alt="Shape" src="./img/shape-8.svg" />
                          <div className="instagram" />
                        </div>
                      </div>
                      <img
                        className="textura"
                        alt="Textura"
                        src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-10.png"
                      />
                    </>
                  )}

                  {screenWidth >= 1132 && screenWidth < 1920 && (
                    <>
                      <div className="text-wrapper-9">NUEVO PODCAST</div>
                      <p className="desarrollamos-el-fut">
                        Desarrollamos el futuro del entretenimiento latinoamericano. Desde la creación de canales hasta
                        la optimización de audiencias
                      </p>
                      <div className="text-wrapper-10">Ana Calderón</div>
                      <div className="text-wrapper-11">ESTA SEMANA</div>
                      <img
                        className="veronica-mapa"
                        alt="Mapa"
                        src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-3.png"
                      />
                      <div className="group-9">
                        <div className="overlap-4">
                          <div className="text-wrapper-12">Canales FAST y OTT</div>
                          <div className="overlap-group-wrapper">
                            <div className="overlap-5">
                              <div className="div-3">
                                <div className="group-10">
                                  <div className="overlap-group-3">
                                    <div className="rectangle-copy-6" />
                                    <img className="line-3" alt="Line" src="./img/line-14-6.svg" />
                                    <img className="line-copy" alt="Line copy" src="./img/line-14-copy-6.svg" />
                                    <img className="path-copy" alt="Path copy" src="./img/path-13-copy-7.svg" />
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-13">Canales FAST y OTT</div>
                              <p className="lorem-ipsum-dolor-si">
                              Operación y construcción de canales FAST y OTT propios y de terceros, incluidas capacidades lineales y no lineales.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-wrapper-14">SERVICIOS</div>
                        <div className="group-copy-2">
                          <div className="overlap-5">
                            <div className="group-11">
                              <div className="overlap-group-4">
                                <img className="group-copy-3" alt="Group copy" src="./img/group-29-copy-2-2.png" />
                                <img className="line-copy-2" alt="Line copy" src="./img/line-18-copy-4.svg" />
                                <img className="line-copy-3" alt="Line copy" src="./img/line-18-copy-5.svg" />
                              </div>
                            </div>
                            <div className="text-wrapper-13">Operaciones</div>
                            <p className="lorem-ipsum-dolor-si-2">
                            Hacemos el seguimiento técnico y la puesta en valor de cada contenido. 
                            </p>
                          </div>
                        </div>
                        <div className="overlap-6">
                          <div className="overlap-group-wrapper">
                            <div className="overlap-5">
                              <div className="div-3" />
                              <div className="text-wrapper-13">Audiencias</div>
                              <p className="lorem-ipsum-dolor-si">
                              Potenciamos el alcance y visibilidad de tu plataforma de streaming. 
                              </p>
                            </div>
                          </div>
                          <img className="group-12" alt="Group" src="./img/group-11-8.png" />
                        </div>
                        <div className="overlap-7">
                          <img className="group-13" alt="Group" src="./img/group-11-8.png" />
                          <div className="group-copy-4">
                            <div className="overlap-5">
                              <div className="group-11">
                                <div className="overlap-group-4">
                                  <div className="rectangle-5" />
                                  <div className="rectangle-copy-7" />
                                  <div className="group-copy-5">
                                    <div className="overlap-group-5">
                                      <div className="group-14">
                                        <div className="rectangle-6" />
                                        <div className="rectangle-copy-8" />
                                        <div className="rectangle-copy-9" />
                                      </div>
                                      <div className="group-copy-6">
                                        <div className="rectangle-6" />
                                        <div className="rectangle-copy-8" />
                                        <div className="rectangle-copy-9" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-13">Estrategia</div>
                              <p className="lorem-ipsum-dolor-si-2">
                              Organizamos y adaptamos tu contenido para ampliar las oportunidades de monetización.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="overlap-8">
                          <div className="div-3">
                            <div className="group-15">
                              <div className="overlap-9">
                                <img
                                  className="rectangle-copy-10"
                                  alt="Rectangle copy"
                                  src="./img/rectangle-copy-209-4.svg"
                                />
                                <img className="path" alt="Path" src="./img/path-30-4.svg" />
                                <img
                                  className="combined-shape-2"
                                  alt="Combined shape"
                                  src="./img/combined-shape-6.svg"
                                />
                                <img className="path-copy-2" alt="Path copy" src="./img/path-31-copy-4.svg" />
                              </div>
                            </div>
                          </div>
                          <div className="text-wrapper-13">Contenidos</div>
                          <p className="lorem-ipsum-dolor-si-2">
                          Ponemos a tu disposición una amplia selección de películas y series latinoamericanas.
                          </p>
                        </div>
                        <div className="group-copy-7">
                          <div className="overlap-5">
                            <div className="group-11">
                              <div className="overlap-group-4">
                                <img className="rectangle-7" alt="Rectangle" src="./img/rectangle-8.svg" />
                                <img className="path-2" alt="Path" src="./img/path-4.svg" />
                                <img className="path-3" alt="Path" src="./img/path-26-2.svg" />
                              </div>
                            </div>
                            <div className="text-wrapper-13">Asesoría</div>
                            <p className="lorem-ipsum-dolor-si">
                              Un equipo de profesionales técnicos y creativos para potenciar tu proyecto a largo plazo.
                            </p>
                          </div>
                        </div>
                      </div>
                      <img
                        className="veronica-textura"
                        alt="Textura"
                        src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-4.png"
                      />
                      <div className="group-16">
                        <div className="overlap-10">
                          <img className="fill-5" alt="Fill" src="./img/fill-158-20.svg" />
                          <img className="fill-6" alt="Fill" src="./img/fill-158-20.svg" />
                          <img className="group-17" alt="Group" src="./img/group-7-1.png" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="overlap-11"
                  style={{
                    height:
                      screenWidth >= 1132 && screenWidth < 1920 ? "981px" : screenWidth >= 1920 ? "21px" : undefined,
                    left:
                      screenWidth >= 1132 && screenWidth < 1920 ? "661px" : screenWidth >= 1920 ? "735px" : undefined,
                    top:
                      screenWidth >= 1132 && screenWidth < 1920 ? "1398px" : screenWidth >= 1920 ? "509px" : undefined,
                    width:
                      screenWidth >= 1132 && screenWidth < 1920 ? "226px" : screenWidth >= 1920 ? "85px" : undefined,
                  }}
                >
                  {screenWidth >= 1920 && (
                    <div className="div-4">
                      <div className="rectangle-copy-wrapper">
                        <div className="rectangle-copy-11" />
                      </div>
                      <div className="group-copy-8">
                        <div className="rectangle-copy-11" />
                      </div>
                      <img className="shape-3" alt="Shape" src="./img/shape-2-8.png" />
                      <img className="line-4" alt="Line" src="./img/line-copy-3-8.svg" />
                      <img className="line-copy-4" alt="Line copy" src="./img/line-copy-3-8.svg" />
                    </div>
                  )}

                  <img
                    className="path-4"
                    style={{
                      height:
                        screenWidth >= 1920 ? "12px" : screenWidth >= 1132 && screenWidth < 1920 ? "432px" : undefined,
                      left: screenWidth >= 1920 ? "71px" : screenWidth >= 1132 && screenWidth < 1920 ? "0" : undefined,
                      top: screenWidth >= 1920 ? "4px" : screenWidth >= 1132 && screenWidth < 1920 ? "0" : undefined,
                      width:
                        screenWidth >= 1920 ? "7px" : screenWidth >= 1132 && screenWidth < 1920 ? "86px" : undefined,
                    }}
                    alt="Path"
                    src={
                      screenWidth >= 1920
                        ? "./img/path-copy-1.svg"
                        : screenWidth >= 1132 && screenWidth < 1920
                          ? "./img/veronica4611-mapa-completo-de-latinoamerica-con-conexiones-769fb-2.png"
                          : undefined
                    }
                  />
                  {screenWidth >= 1920 && (
                    <div className="div-5">
                      <img className="group-18" alt="Group" src="./img/group-3-10.png" />
                      <img className="group-19" alt="Group" src="./img/group-6-8.png" />
                    </div>
                  )}

                  <img
                    className="textura-2"
                    style={{
                      height:
                        screenWidth >= 1132 && screenWidth < 1920 ? "913px" : screenWidth >= 1920 ? "11px" : undefined,
                      left: screenWidth >= 1132 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "5px" : undefined,
                      top: screenWidth >= 1132 && screenWidth < 1920 ? "68px" : screenWidth >= 1920 ? "5px" : undefined,
                      width:
                        screenWidth >= 1132 && screenWidth < 1920 ? "226px" : screenWidth >= 1920 ? "12px" : undefined,
                    }}
                    alt="Textura"
                    src={
                      screenWidth >= 1132 && screenWidth < 1920
                        ? "./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-5.png"
                        : screenWidth >= 1920
                          ? "./img/rectangle-copy-15-1.svg"
                          : undefined
                    }
                  />
                  {screenWidth >= 1132 && screenWidth < 1920 && (
                    <div className="group-copy-9">
                      <div className="overlap-12">
                        <div className="rectangle-8" />
                        <img className="rectangle-copy-12" alt="Rectangle copy" src="./img/rectangle-copy-65-3.svg" />
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {screenWidth >= 1920 && (
              <>
                <div className="overlap-13">
                  <div className="div-4">
                    <div className="rectangle-copy-wrapper">
                      <div className="rectangle-copy-11" />
                    </div>
                    <div className="group-copy-8">
                      <div className="rectangle-copy-11" />
                    </div>
                    <img className="shape-3" alt="Shape" src="./img/shape-2-8.png" />
                    <img className="line-4" alt="Line" src="./img/line-copy-3-8.svg" />
                    <img className="line-copy-4" alt="Line copy" src="./img/line-copy-3-8.svg" />
                  </div>
                  <img className="path-copy-3" alt="Path copy" src="./img/path-copy-1.svg" />
                  <div className="div-5">
                    <img className="group-18" alt="Group" src="./img/group-3-10.png" />
                    <img className="group-19" alt="Group" src="./img/group-6-8.png" />
                  </div>
                  <img className="rectangle-copy-13" alt="Rectangle copy" src="./img/rectangle-copy-15-1.svg" />
                </div>
                <div className="overlap-14">
                  <div className="div-4">
                    <div className="rectangle-copy-wrapper">
                      <div className="rectangle-copy-11" />
                    </div>
                    <div className="group-copy-8">
                      <div className="rectangle-copy-11" />
                    </div>
                    <img className="shape-3" alt="Shape" src="./img/shape-2-8.png" />
                    <img className="line-4" alt="Line" src="./img/line-copy-3-8.svg" />
                    <img className="line-copy-4" alt="Line copy" src="./img/line-copy-3-8.svg" />
                  </div>
                  <img className="path-copy-3" alt="Path copy" src="./img/path-copy-2-1.svg" />
                  <div className="div-5">
                    <img className="group-18" alt="Group" src="./img/group-3-10.png" />
                    <img className="group-19" alt="Group" src="./img/group-6-8.png" />
                  </div>
                  <img className="rectangle-copy-13" alt="Rectangle copy" src="./img/rectangle-copy-15-1.svg" />
                </div>
                <div className="overlap-15">
                  <img
                    className="mapa-2"
                    alt="Mapa"
                    src="./img/veronica4611-mapa-completo-de-latinoamerica-con-conexiones-769fb-5.png"
                  />
                  <img
                    className="textura-3"
                    alt="Textura"
                    src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-9.png"
                  />
                </div>
              </>
            )}



            
            {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth >= 1920) && (
              <div id='contacto'
                className="QUIENES-SOMOS"
                style={{
                  left: screenWidth >= 1132 && screenWidth < 1920 ? "991px" : screenWidth >= 1920 ? "749px" : undefined,
                  top: screenWidth >= 1132 && screenWidth < 1920 ? "1377px" : screenWidth >= 1920 ? "876px" : undefined,
                }}
              >

                {screenWidth >= 1920 && <>CONTACTO</>}
              </div>
            )}

            {screenWidth >= 1920 && (
              <>

                <div className="team">
                  <p className="desarrollamos-el-fut-2">
                    Desarrollamos el futuro del entretenimiento latinoamericano. Desde la creación de canales hasta la
                    optimización de audiencias.
                  </p>
                
                    <div className="overlap-16">
                      <div className="mar-a-mart-nez-copy">Sigfrido Gálvez Sánchez</div>
                      <div className="text-wrapper-15">Director Operativo</div>
                    </div>
                    <div className="overlap-17">
                      <div className="mar-a-mart-nez-copy">Anna Elías</div>
                      <div className="text-wrapper-15">CEO y Fundadora</div>
                    </div>
                    <div className="overlap-18">
                      <div className="mar-a-mart-nez-copy">Natalia Honikman</div>
                      <div className="text-wrapper-15">Directora Institucional</div>
                    </div>
                    <div className="overlap-19">
                      <input type="text" class="rectangle-copy-14" placeholder="Nombre">
                      </input>
                    </div>
                    <div className="overlap-20">
                    <input type="text" class="rectangle-copy-14" placeholder="Apellido">
                    </input>
                    </div>
                    <div className="overlap-21">
                      <input type="text" class="rectangle-copy-14 rectangle-copy-15" placeholder="Correo electrónico">
                      </input>
                    </div>
                    <img className="bitmap" alt="Bitmap" src="./img/bitmap-2.png" />
                    <img className="bitmap-copy" alt="Bitmap copy" src="./img/bitmap-copy-1.png" />
                    <img className="bitmap-2" alt="Bitmap" src="./img/bitmap-3.png" />
                </div>
              </>
            )}

            {screenWidth >= 1132 && screenWidth < 1920 && (
              <>
                <div className="CEO-de-warner-ib-ric">CEO de Warner Ibérica</div>
                <div className="overlap-22">
                  <div className="text-wrapper-19">Ver ahora</div>
                </div>
                <img className="bitmap-3" alt="Bitmap" src="./img/bitmap-copy.png" />
                <img className="bitmap-copy-2" alt="Bitmap copy" src="./img/bitmap-copy.png" />
                <img className="bitmap-4" alt="Bitmap" src="./img/bitmap-3.png" />
                <div className="group-20">
                  <div className="overlap-12">
                    <div className="rectangle-8" />
                    <img className="rectangle-copy-16" alt="Rectangle copy" src="./img/rectangle-copy-65-2.svg" />
                  </div>
                </div>
              </>
            )}
          </div>
          {screenWidth >= 1920 && <div id="quienes-somos" className="text-wrapper-20">QUIENES SOMOS</div>}

          <div
            className="overlap-23"
            style={{
              height:
                screenWidth >= 1132 && screenWidth < 1920
                  ? "21px"
                  : screenWidth < 1132
                    ? "128px"
                    : screenWidth >= 1920
                      ? "913px"
                      : undefined,
              left:
                screenWidth >= 1132 && screenWidth < 1920
                  ? "970px"
                  : screenWidth < 1132
                    ? "0"
                    : screenWidth >= 1920
                      ? "1590px"
                      : undefined,
              top:
                screenWidth >= 1132 && screenWidth < 1920
                  ? "1833px"
                  : screenWidth < 1132
                    ? "29px"
                    : screenWidth >= 1920
                      ? "0"
                      : undefined,
              width:
                screenWidth >= 1132 && screenWidth < 1920
                  ? "85px"
                  : screenWidth < 1132
                    ? "174px"
                    : screenWidth >= 1920
                      ? "330px"
                      : undefined,
            }}
          >
            {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth < 1132) && (
              <div
                className="overlap-group-6"
                style={{
                  height: screenWidth < 1132 ? "63px" : screenWidth >= 1132 && screenWidth < 1920 ? "21px" : undefined,
                  top: screenWidth < 1132 ? "65px" : screenWidth >= 1132 && screenWidth < 1920 ? "0" : undefined,
                  width: screenWidth < 1132 ? "174px" : screenWidth >= 1132 && screenWidth < 1920 ? "85px" : undefined,
                }}
              >
                {screenWidth >= 1132 && screenWidth < 1920 && (
                  <>
                    <div className="rectangle-copy-wrapper">
                      <div className="rectangle-copy-11" />
                    </div>
                    <div className="group-copy-8">
                      <div className="rectangle-copy-11" />
                    </div>
                  </>
                )}

                <img
                  className="shape-4"
                  style={{
                    height:
                      screenWidth >= 1132 && screenWidth < 1920 ? "21px" : screenWidth < 1132 ? "63px" : undefined,
                    left: screenWidth >= 1132 && screenWidth < 1920 ? "64px" : screenWidth < 1132 ? "47px" : undefined,
                    width: screenWidth >= 1132 && screenWidth < 1920 ? "21px" : screenWidth < 1132 ? "75px" : undefined,
                  }}
                  alt="Shape"
                  src={
                    screenWidth >= 1132 && screenWidth < 1920
                      ? "./img/shape-2-8.png"
                      : screenWidth < 1132
                        ? "./img/fill-158-1.svg"
                        : undefined
                  }
                />
                <img
                  className="fill-7"
                  style={{
                    height:
                      screenWidth < 1132 ? "59px" : screenWidth >= 1132 && screenWidth < 1920 ? "12px" : undefined,
                    left: screenWidth < 1132 ? "0" : screenWidth >= 1132 && screenWidth < 1920 ? "26px" : undefined,
                    width: screenWidth < 1132 ? "56px" : screenWidth >= 1132 && screenWidth < 1920 ? "1px" : undefined,
                  }}
                  alt="Fill"
                  src={
                    screenWidth < 1132
                      ? "./img/fill-162.svg"
                      : screenWidth >= 1132 && screenWidth < 1920
                        ? "./img/line-copy-3-8.svg"
                        : undefined
                  }
                />
                <img
                  className="fill-8"
                  style={{
                    height:
                      screenWidth < 1132 ? "59px" : screenWidth >= 1132 && screenWidth < 1920 ? "12px" : undefined,
                    left: screenWidth < 1132 ? "121px" : screenWidth >= 1132 && screenWidth < 1920 ? "58px" : undefined,
                    width: screenWidth < 1132 ? "53px" : screenWidth >= 1132 && screenWidth < 1920 ? "1px" : undefined,
                  }}
                  alt="Fill"
                  src={
                    screenWidth < 1132
                      ? "./img/fill-164.svg"
                      : screenWidth >= 1132 && screenWidth < 1920
                        ? "./img/line-copy-3-8.svg"
                        : undefined
                  }
                />
              </div>
            )}

            <img
              className="path-5"
              style={{
                height:
                  screenWidth >= 1132 && screenWidth < 1920
                    ? "12px"
                    : screenWidth < 1132
                      ? "59px"
                      : screenWidth >= 1920
                        ? "913px"
                        : undefined,
                left:
                  screenWidth >= 1132 && screenWidth < 1920
                    ? "71px"
                    : screenWidth < 1132
                      ? "0"
                      : screenWidth >= 1920
                        ? "196px"
                        : undefined,
                top:
                  (screenWidth >= 1132 && screenWidth < 1920) || screenWidth < 1132
                    ? "4px"
                    : screenWidth >= 1920
                      ? "0"
                      : undefined,
                width:
                  screenWidth >= 1132 && screenWidth < 1920
                    ? "7px"
                    : screenWidth < 1132
                      ? "46px"
                      : screenWidth >= 1920
                        ? "134px"
                        : undefined,
              }}
              alt="Path"
              src={
                screenWidth >= 1132 && screenWidth < 1920
                  ? "./img/path-copy-2.svg"
                  : screenWidth < 1132
                    ? "./img/fill-160.svg"
                    : screenWidth >= 1920
                      ? "./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-8.png"
                      : undefined
              }
            />
            {screenWidth >= 1132 && screenWidth < 1920 && (
              <div className="div-5">
                <img className="group-18" alt="Group" src="./img/group-3-10.png" />
                <img className="group-19" alt="Group" src="./img/group-6-8.png" />
              </div>
            )}

            <img
              className="fill-9"
              style={{
                height:
                  screenWidth < 1132
                    ? "63px"
                    : screenWidth >= 1132 && screenWidth < 1920
                      ? "11px"
                      : screenWidth >= 1920
                        ? "913px"
                        : undefined,
                left:
                  screenWidth < 1132
                    ? "47px"
                    : screenWidth >= 1132 && screenWidth < 1920
                      ? "5px"
                      : screenWidth >= 1920
                        ? "0"
                        : undefined,
                top:
                  screenWidth >= 1920 || screenWidth < 1132
                    ? "0"
                    : screenWidth >= 1132 && screenWidth < 1920
                      ? "5px"
                      : undefined,
                width:
                  screenWidth < 1132
                    ? "75px"
                    : screenWidth >= 1132 && screenWidth < 1920
                      ? "12px"
                      : screenWidth >= 1920
                        ? "330px"
                        : undefined,
              }}
              alt="Fill"
              src={
                screenWidth < 1132
                  ? "./img/fill-166.svg"
                  : screenWidth >= 1132 && screenWidth < 1920
                    ? "./img/rectangle-copy-15-1.svg"
                    : screenWidth >= 1920
                      ? "./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-11.png"
                      : undefined
              }
            />
          </div>
          {screenWidth >= 1920 && (
            <>
              <div className="group-21">
                <div className="overlap-24">
                  <div className="rectangle-9" />
                  <img className="rectangle-copy-16" alt="Rectangle copy" src="./img/rectangle-copy-65-4.svg" />
                </div>
              </div>
              <div className="group-copy-10">
                <div className="overlap-12">
                  <div className="rectangle-8" />
                  <img className="rectangle-copy-12" alt="Rectangle copy" src="./img/rectangle-copy-65-5.svg" />
                </div>
              </div>
            </>
          )}

          {screenWidth < 1132 && (
            <>
              <div className="fabricamos-mastercla">
                FABRICAMOS
                <br />
                AUDIENCIAS
              </div>
              <p className="desarrollamos-el-fut-3">
                DEspecialistas en contenido audiovisual latinomericano.
<br/>
<br/>
Conocemos las nuevas tendencias del mercado y ofrecemos soluciones tecnológicas y creativas para impulsar tu negocio. Desde la creación y operación de canales hasta la optimización de audiencias.
              </p>
              <div className="group-22">
                <div id='contacto' className="contacto-copy-wrapper">
                  <div className="contacto-copy">Contacto</div>
                </div>
              </div>
              <img
                className="textura-4"
                alt="Textura"
                src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu.png"
              />
              <div className="group-23">
                <div className="logo-copy-wrapper">
                  <div className="logo-copy">
                    <div className="overlap-group-7">
                      <img className="fill-10" alt="Fill" src="./img/fill-158-2.svg" />
                      <img className="fill-11" alt="Fill" src="./img/fill-162-1.svg" />
                      <img className="fill-12" alt="Fill" src="./img/fill-164-1.svg" />
                    </div>
                    <img className="fill-13" alt="Fill" src="./img/fill-160-1.svg" />
                    <img className="fill-10" alt="Fill" src="./img/fill-166-1.svg" />
                  </div>
                </div>
                <div className="overlap-25">
                  <img className="combined-shape-3" alt="Combined shape" src="./img/combined-shape.svg" />
                  <img className="logo-copy-2" alt="Logo copy" src="./img/logo-copy-4.png" />
                  <div className="rectangle-10" />
                  <div className="logo-copy-3">
                    <div className="overlap-26">
                      <img className="fill-14" alt="Fill" src="./img/fill-158-3.svg" />
                      <img className="fill-15" alt="Fill" src="./img/fill-162-2.svg" />
                      <img className="fill-16" alt="Fill" src="./img/fill-164-2.svg" />
                    </div>
                    <img className="fill-17" alt="Fill" src="./img/fill-160-2.svg" />
                    <img className="fill-14" alt="Fill" src="./img/fill-166-2.svg" />
                  </div>
                  <div className="logo-copy-4">
                    <div className="overlap-27">
                      <img className="fill-18" alt="Fill" src="./img/fill-158-4.svg" />
                      <img className="fill-19" alt="Fill" src="./img/fill-162-3.svg" />
                      <img className="fill-20" alt="Fill" src="./img/fill-164-3.svg" />
                    </div>
                    <img className="fill-21" alt="Fill" src="./img/fill-160-3.svg" />
                    <img className="fill-18" alt="Fill" src="./img/fill-166-3.svg" />
                  </div>
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1132 && screenWidth < 1920 && (
            <>
              <div className="overlap-28">
                <div className="div-4">
                  <div className="rectangle-copy-wrapper">
                    <div className="rectangle-copy-11" />
                  </div>
                  <div className="group-copy-8">
                    <div className="rectangle-copy-11" />
                  </div>
                  <img className="shape-3" alt="Shape" src="./img/shape-2-8.png" />
                  <img className="line-4" alt="Line" src="./img/line-copy-3-8.svg" />
                  <img className="line-copy-4" alt="Line copy" src="./img/line-copy-3-8.svg" />
                </div>
                <img className="path-copy-3" alt="Path copy" src="./img/path-copy-2.svg" />
                <div className="div-5">
                  <img className="group-18" alt="Group" src="./img/group-3-10.png" />
                  <img className="group-19" alt="Group" src="./img/group-6-8.png" />
                </div>
                <img className="rectangle-copy-13" alt="Rectangle copy" src="./img/rectangle-copy-15-1.svg" />
              </div>
              <div className="overlap-29">
                <div className="div-4">
                  <div className="rectangle-copy-wrapper">
                    <div className="rectangle-copy-11" />
                  </div>
                  <div className="group-copy-8">
                    <div className="rectangle-copy-11" />
                  </div>
                  <img className="shape-3" alt="Shape" src="./img/shape-2-8.png" />
                  <img className="line-4" alt="Line" src="./img/line-copy-3-8.svg" />
                  <img className="line-copy-4" alt="Line copy" src="./img/line-copy-3-8.svg" />
                </div>
                <img className="path-copy-3" alt="Path copy" src="./img/path-copy-2.svg" />
                <div className="div-5">
                  <img className="group-18" alt="Group" src="./img/group-3-10.png" />
                  <img className="group-19" alt="Group" src="./img/group-6-8.png" />
                </div>
                <img className="rectangle-copy-13" alt="Rectangle copy" src="./img/rectangle-copy-15-1.svg" />
              </div>
            </>
          )}

          {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth < 1132) && (
            <div
              className="FABRICAMOS-CONECTAMO"
              style={{
                color:
                  screenWidth < 1132 ? "#093873" : screenWidth >= 1132 && screenWidth < 1920 ? "#1e213d" : undefined,
                fontSize: screenWidth < 1132 ? "22px" : screenWidth >= 1132 && screenWidth < 1920 ? "26px" : undefined,
                fontWeight: screenWidth < 1132 ? "800" : screenWidth >= 1132 && screenWidth < 1920 ? "500" : undefined,
                left: screenWidth < 1132 ? "7px" : screenWidth >= 1132 && screenWidth < 1920 ? "966px" : undefined,
                lineHeight:
                  screenWidth < 1132 ? "29px" : screenWidth >= 1132 && screenWidth < 1920 ? "28px" : undefined,
                top: screenWidth < 1132 ? "751px" : screenWidth >= 1132 && screenWidth < 1920 ? "2200px" : undefined,
                width: screenWidth < 1132 ? "302px" : screenWidth >= 1132 && screenWidth < 1920 ? "453px" : undefined,
              }}
            >
              {screenWidth < 1132 && (
                <>
                  FABRICAMOS <br />
                  CONECTAMOS
                  <br />
                  DIFUNDIMOS
                </>
              )}

              {screenWidth >= 1132 && screenWidth < 1920 && <>CONTACTO</>}
            </div>
          )}

          {screenWidth >= 1132 && screenWidth < 1920 && (
            <>
              <p className="desarrollamos-el-fut-4">
                Desarrollamos el futuro del entretenimiento latinoamericano. Desde la creación de canales hasta la
                optimización de audiencias.
              </p>
              <div className="overlap-30">
                <div className="mar-a-mart-nez-copy">Sigfrido Gálvez Sánchez</div>
                <div className="text-wrapper-15">Director Operativo</div>
              </div>
              <div className="overlap-31">
                <div className="mar-a-mart-nez-copy">Anna Elías</div>
                <div className="text-wrapper-15">CEO y Fundadora</div>
              </div>
              <div className="overlap-32">
                <div className="mar-a-mart-nez-copy">Natalia Honikman</div>
                <div className="text-wrapper-15">Directora Institucional</div>
              </div>
              <div className="overlap-33">
                <input type="text" class="rectangle-copy-14" placeholder="Nombre">
                </input>
              </div>
              <div className="overlap-34">
                <input type="text" class="rectangle-copy-14" placeholder="Apellido">
                </input>
              </div>
              <div className="overlap-35">
                <input type="text" class="rectangle-copy-15" placeholder="Correo electrónico">
                </input>
              </div>
            </>
          )}
        </div>
        <div
          className="overlap-36"
          style={{
            height:
              screenWidth >= 1132 && screenWidth < 1920
                ? "525px"
                : screenWidth < 1132
                  ? "267px"
                  : screenWidth >= 1920
                    ? "938px"
                    : undefined,
            left:
              screenWidth >= 1132 && screenWidth < 1920
                ? "0"
                : screenWidth < 1132
                  ? "1px"
                  : screenWidth >= 1920
                    ? "199px"
                    : undefined,
            top:
              screenWidth >= 1132 && screenWidth < 1920
                ? "3630px"
                : screenWidth < 1132
                  ? "2882px"
                  : screenWidth >= 1920
                    ? "0"
                    : undefined,
            width:
              screenWidth >= 1132 && screenWidth < 1920
                ? "1132px"
                : screenWidth < 1132
                  ? "384px"
                  : screenWidth >= 1920
                    ? "1721px"
                    : undefined,
          }}
        >
          {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth >= 1920) && (
            <img
              className="mapa-3"
              style={{
                height: screenWidth >= 1920 ? "588px" : screenWidth >= 1132 && screenWidth < 1920 ? "197px" : undefined,
                left: screenWidth >= 1920 ? "43px" : screenWidth >= 1132 && screenWidth < 1920 ? "262px" : undefined,
                top: screenWidth >= 1920 ? "0" : screenWidth >= 1132 && screenWidth < 1920 ? "328px" : undefined,
                width: screenWidth >= 1920 ? "1517px" : screenWidth >= 1132 && screenWidth < 1920 ? "404px" : undefined,
              }}
              alt="Mapa"
              src={
                screenWidth >= 1920
                  ? "./img/veronica4611-mapa-completo-de-latinoamerica-con-conexiones-769fb-4.png"
                  : screenWidth >= 1132 && screenWidth < 1920
                    ? "./img/fill-158-7.svg"
                    : undefined
              }
            />
          )}

          {screenWidth >= 1920 && (
            <>
              <div className="logo-copy-5">
                <div className="overlap-group-8">
                  <img className="fill-22" alt="Fill" src="./img/fill-158-15.svg" />
                  <img className="fill-23" alt="Fill" src="./img/fill-162-8.svg" />
                  <img className="fill-24" alt="Fill" src="./img/fill-164-8.svg" />
                </div>
                <img className="fill-25" alt="Fill" src="./img/fill-160-8.svg" />
                <img className="fill-22" alt="Fill" src="./img/fill-166-8.svg" />
              </div>
              <div className="text-wrapper-21">FABRICAMOS</div>
              <div className="masterclasses">AUDIENCIAS</div>
              <p className="desarrollamos-el-fut-5">
              Especialistas en contenido audiovisual latinomericano.
<br/>
<br/>
Conocemos las nuevas tendencias del mercado y ofrecemos soluciones tecnológicas y creativas para impulsar tu negocio. Desde la creación y operación de canales hasta la optimización de audiencias.
              </p>
            </>
          )}

          {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth >= 1920) && (
            <>
              <img
                className="fill-copy-4"
                style={{
                  height:
                    screenWidth >= 1132 && screenWidth < 1920 ? "118px" : screenWidth >= 1920 ? "219px" : undefined,
                  left:
                    screenWidth >= 1132 && screenWidth < 1920 ? "981px" : screenWidth >= 1920 ? "1440px" : undefined,
                  top: screenWidth >= 1132 && screenWidth < 1920 ? "407px" : screenWidth >= 1920 ? "0" : undefined,
                  width:
                    screenWidth >= 1132 && screenWidth < 1920 ? "151px" : screenWidth >= 1920 ? "281px" : undefined,
                }}
                alt="Fill copy"
                src={
                  screenWidth >= 1132 && screenWidth < 1920
                    ? "./img/fill-158-copy-2.svg"
                    : screenWidth >= 1920
                      ? "./img/veronica4611-mapa-completo-de-latinoamerica-con-conexiones-769fb-6.png"
                      : undefined
                }
              />
              <img
                className="fill-copy-5"
                style={{
                  height:
                    screenWidth >= 1132 && screenWidth < 1920 ? "129px" : screenWidth >= 1920 ? "867px" : undefined,
                  left: screenWidth >= 1132 && screenWidth < 1920 ? "442px" : screenWidth >= 1920 ? "961px" : undefined,
                  top: screenWidth >= 1132 && screenWidth < 1920 ? "396px" : screenWidth >= 1920 ? "0" : undefined,
                  width:
                    screenWidth >= 1132 && screenWidth < 1920 ? "404px" : screenWidth >= 1920 ? "760px" : undefined,
                }}
                alt="Fill copy"
                src={
                  screenWidth >= 1132 && screenWidth < 1920
                    ? "./img/fill-158-copy-1.svg"
                    : screenWidth >= 1920
                      ? "./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-6.png"
                      : undefined
                }
              />
            </>
          )}

          {screenWidth >= 1920 && (
            <>
              <div className="group-24">
                <div className="overlap-group-9">
                  <div className="text-wrapper-22">ES&nbsp;&nbsp;EN</div>
                  <img className="group-25" alt="Group" src="./img/group-1.png" />
                </div>
              </div>
              <div className="group-26">
                <div className="overlap-37">
                  <div className="rectangle-11" />
                  <img className="combined-shape-4" alt="Combined shape" src="./img/combined-shape-10.svg" />
                  <img className="logo-copy-6" alt="Logo copy" src="./img/logo-copy-4-2.png" />
                  <div className="logo-copy-7">
                    <div className="overlap-group-10">
                      <img className="fill-26" alt="Fill" src="./img/fill-158-16.svg" />
                      <img className="fill-27" alt="Fill" src="./img/fill-162-9.svg" />
                      <img className="fill-28" alt="Fill" src="./img/fill-164-9.svg" />
                    </div>
                    <img className="fill-29" alt="Fill" src="./img/fill-160-9.svg" />
                    <img className="fill-26" alt="Fill" src="./img/fill-166-9.svg" />
                  </div>
                  <div className="rectangle-12" />
                  <div className="logo-copy-8">
                    <div className="overlap-38">
                      <img className="fill-30" alt="Fill" src="./img/fill-158-17.svg" />
                      <img className="fill-31" alt="Fill" src="./img/fill-162-10.svg" />
                      <img className="fill-32" alt="Fill" src="./img/fill-164-10.svg" />
                    </div>
                    <img className="fill-33" alt="Fill" src="./img/fill-160-10.svg" />
                    <img className="fill-30" alt="Fill" src="./img/fill-166-10.svg" />
                  </div>
                  <div className="logo-copy-9">
                    <div className="overlap-group-7">
                      <img className="fill-10" alt="Fill" src="./img/fill-158-18.svg" />
                      <img className="fill-11" alt="Fill" src="./img/fill-162-11.svg" />
                      <img className="fill-12" alt="Fill" src="./img/fill-164-11.svg" />
                    </div>
                    <img className="fill-13" alt="Fill" src="./img/fill-160-11.svg" />
                    <img className="fill-10" alt="Fill" src="./img/fill-166-11.svg" />
                  </div>
                </div>
              </div>
              <a href="#contacto">
                <button class="rectangle-13 text-wrapper-23">Contacto
                </button>
              </a>
              <div class="group-27">
                <div class="overlap-39">
                  <div class="text-wrapper-22">
                    <a href="#servicios">SERVICIOS</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#quienes-somos">QUIENES SOMOS</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#contacto">CONTACTO</a>
                  </div>
                  <div class="oval">
                  </div>
                  <div class="oval-copy">
                  </div>
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1132 && screenWidth < 1920 && (
            <>
              <p className="desarrollamos-el-fut-6">Desarrollamos el futuro del entretenimiento latinoamericano.</p>
              <img className="rectangle-14" alt="Rectangle" src="./img/rectangle-2.svg" />
              <img className="rectangle-15" alt="Rectangle" src="./img/rectangle-3.svg" />
              <div className="rectangle-copy-17" />
              <div className="rectangle-copy-18" />
              <textarea  className="text-wrapper-24" placeholder="Asunto"></textarea >
            </>
          )}

          {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth < 1132) && (
            <div
              className="group-copy-11"
              style={{
                height: screenWidth < 1132 ? "45px" : screenWidth >= 1132 && screenWidth < 1920 ? "49px" : undefined,
                left: screenWidth < 1132 ? "118px" : screenWidth >= 1132 && screenWidth < 1920 ? "652px" : undefined,
                top: screenWidth < 1132 ? "222px" : screenWidth >= 1132 && screenWidth < 1920 ? "206px" : undefined,
                width: screenWidth < 1132 ? "137px" : screenWidth >= 1132 && screenWidth < 1920 ? "207px" : undefined,
              }}
            >
              <div
                className="overlap-40"
                style={{
                  borderRadius:
                    screenWidth < 1132 ? "4.09px" : screenWidth >= 1132 && screenWidth < 1920 ? "7px" : undefined,
                  height: screenWidth < 1132 ? "47px" : screenWidth >= 1132 && screenWidth < 1920 ? "50px" : undefined,
                  width: screenWidth < 1132 ? "139px" : screenWidth >= 1132 && screenWidth < 1920 ? "209px" : undefined,
                }}
              >
                <div  id='contacto'
                  className="contacto-copy-2"
                  style={{
                    fontStyle: screenWidth >= 1132 && screenWidth < 1920 ? "italic" : undefined,
                    fontWeight:
                      screenWidth < 1132 ? "500" : screenWidth >= 1132 && screenWidth < 1920 ? "900" : undefined,
                    left: screenWidth < 1132 ? "25px" : screenWidth >= 1132 && screenWidth < 1920 ? "15px" : undefined,
                    letterSpacing:
                      screenWidth < 1132 ? "0" : screenWidth >= 1132 && screenWidth < 1920 ? "1.06px" : undefined,
                    lineHeight:
                      screenWidth < 1132 ? "22.1px" : screenWidth >= 1132 && screenWidth < 1920 ? "28px" : undefined,
                    textAlign: screenWidth >= 1132 && screenWidth < 1920 ? "center" : undefined,
                    whiteSpace: screenWidth < 1132 ? "nowrap" : undefined,
                    width: screenWidth >= 1132 && screenWidth < 1920 ? "183px" : undefined,
                  }}
                >
                  {screenWidth < 1132 && <>Contacto</>}

                  {screenWidth >= 1132 && screenWidth < 1920 && <>ENVIAR</>}
                </div>
              </div>
            </div>
          )}

          {screenWidth >= 1132 && screenWidth < 1920 && (
            <>
              <div className="group-28">
                <div className="group-6">
                  <img className="img" alt="Group" src="./img/group-3-7.png" />
                  <img className="fill-2" alt="Fill" src="./img/fill-4-2.svg" />
                  <div className="overlap-group-2">
                    <img className="group-2" alt="Group" src="./img/group-8-2.png" />
                    <img className="fill-3" alt="Fill" src="./img/fill-9-1.svg" />
                  </div>
                  <img className="fill-3" alt="Fill" src="./img/fill-11-1.svg" />
                </div>
                <div className="la-fab-s-l-u-wrapper">
                  <p className="p">© La Fab .&nbsp;&nbsp;S.L.U. 2024. Todos los derechos reservados</p>
                </div>
              </div>
              <div className="group-29">
                <div className="div-2">
                  <div className="text-wrapper-3">Aviso legal</div>
                  <div className="text-wrapper-4">Privacidad</div>
                  <div className="text-wrapper-5">Ayuda</div>
                  <img className="line" alt="Line" src="./img/line-16.svg" />
                  <img className="line-2" alt="Line" src="./img/line-16.svg" />
                </div>
              </div>
              <div className="group-30">
                <div className="text-wrapper-25">Síguenos es redes</div>
                <div className="REDES-2">
                  <img className="shape" alt="Shape" src="./img/shape-7.svg" />
                  <img className="combined-shape" alt="Combined shape" src="./img/combined-shape-11.svg" />
                  <img className="rectangle" alt="Rectangle" src="./img/rectangle-11.svg" />
                  <img className="shape-2" alt="Shape" src="./img/shape-8.svg" />
                  <div className="instagram" />
                </div>
              </div>
            </>
          )}

          {screenWidth < 1132 && (
            <>
              <p className="desarrollamos-el-fut-7">
                Desarrollamos el futuro del entretenimiento latinoamericano. Desde la creación de canales hasta la
                optimización de audiencias
              </p>
              <div className="text-wrapper-26">Ana Calderón</div>
              <div className="CEO-de-warner-ib-ric-2">CEO de Warner Ibérica</div>
              <div className="text-wrapper-27">ESTA SEMANA</div>
            </>
          )}
        </div>
        {screenWidth >= 1132 && screenWidth < 1920 && (
          <>
            <div className="overlap-41">
              <div className="overlap-42">
                <img
                  className="mapa-4"
                  alt="Mapa"
                  src="./img/veronica4611-mapa-completo-de-latinoamerica-con-conexiones-769fb-1.png"
                />
                <div className="group-31">
                  <div className="overlap-group-9">
                    <div className="text-wrapper-22">ES&nbsp;&nbsp;EN</div>
                    <img className="group-25" alt="Group" src="./img/group-1.png" />
                  </div>
                </div>
                <div className="group-32">
                  <div className="overlap-39">
                    <div className="SERVICIOS-QUIENES-SO">
                      <a href="#servicios">SERVICIOS</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#quienes-somos">QUIENES SOMOS</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#contacto">CONTACTO</a>
                    </div>
                    <div className="oval" />
                    <div className="oval-copy" />
                  </div>
                </div>
                <div className="logo-copy-10">
                  <div className="overlap-group-8">
                    <img className="fill-22" alt="Fill" src="./img/fill-158-8.svg" />
                    <img className="fill-23" alt="Fill" src="./img/fill-162-4.svg" />
                    <img className="fill-24" alt="Fill" src="./img/fill-164-4.svg" />
                  </div>
                  <img className="fill-25" alt="Fill" src="./img/fill-160-4.svg" />
                  <img className="fill-22" alt="Fill" src="./img/fill-166-4.svg" />
                </div>
                <div className="text-wrapper-28">FABRICAMOS</div>
                <div className="masterclasses-2">AUDIENCIAS</div>
                <p className="desarrollamos-el-fut-8">
                Especialistas en contenido audiovisual latinomericano.
<br/>
<br/>
Conocemos las nuevas tendencias del mercado y ofrecemos soluciones tecnológicas y creativas para impulsar tu negocio. Desde la creación y operación de canales hasta la optimización de audiencias.
                </p>
                <img
                  className="textura-5"
                  alt="Textura"
                  src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-2.png"
                />
                <div className="rectangle-13" />
                <div  id='contacto' className="text-wrapper-29">Contacto</div>
              </div>
              <div className="group-33">
                <div className="overlap-43">
                  <div className="logo-copy-11">
                    <div className="overlap-group-10">
                      <img className="fill-26" alt="Fill" src="./img/fill-158-9.svg" />
                      <img className="fill-27" alt="Fill" src="./img/fill-162-9.svg" />
                      <img className="fill-28" alt="Fill" src="./img/fill-164-5.svg" />
                    </div>
                    <img className="fill-29" alt="Fill" src="./img/fill-160-9.svg" />
                    <img className="fill-26" alt="Fill" src="./img/fill-166-5.svg" />
                  </div>
                </div>
                <div className="overlap-44">
                  <img className="combined-shape-5" alt="Combined shape" src="./img/combined-shape-7.svg" />
                  <img className="logo-copy-12" alt="Logo copy" src="./img/logo-copy-4-1.png" />
                  <div className="rectangle-16" />
                  <div className="logo-copy-13">
                    <div className="overlap-38">
                      <img className="fill-30" alt="Fill" src="./img/fill-158-10.svg" />
                      <img className="fill-31" alt="Fill" src="./img/fill-162-10.svg" />
                      <img className="fill-32" alt="Fill" src="./img/fill-164-6.svg" />
                    </div>
                    <img className="fill-33" alt="Fill" src="./img/fill-160-10.svg" />
                    <img className="fill-30" alt="Fill" src="./img/fill-166-6.svg" />
                  </div>
                  <div className="logo-copy-14">
                    <div className="overlap-group-7">
                      <img className="fill-10" alt="Fill" src="./img/fill-158-11.svg" />
                      <img className="fill-11" alt="Fill" src="./img/fill-162-11.svg" />
                      <img className="fill-12" alt="Fill" src="./img/fill-164-11.svg" />
                    </div>
                    <img className="fill-13" alt="Fill" src="./img/fill-160-11.svg" />
                    <img className="fill-10" alt="Fill" src="./img/fill-166-7.svg" />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="textura-6"
              alt="Textura"
              src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-3.png"
            />
            <div className="group-34">
              <div className="text-wrapper-30">ES</div>
              <div className="EN-copy">EN</div>
              <img className="line-5" alt="Line" src="./img/line-copy.png" />
              <img className="line-copy-5" alt="Line copy" src="./img/line-copy.png" />
            </div>
          </>
        )}

        {((screenWidth >= 1132 && screenWidth < 1920) || screenWidth >= 1920) && (
          <div
            className="con-carmen-sarmiento-2"
            style={{
              color:
                screenWidth >= 1920 ? "#000000" : screenWidth >= 1132 && screenWidth < 1920 ? "#093873" : undefined,
              fontSize: screenWidth >= 1920 ? "32px" : screenWidth >= 1132 && screenWidth < 1920 ? "38px" : undefined,
              left: screenWidth >= 1920 ? "963px" : screenWidth >= 1132 && screenWidth < 1920 ? "50px" : undefined,
              lineHeight: screenWidth >= 1920 ? "28px" : screenWidth >= 1132 && screenWidth < 1920 ? "52px" : undefined,
              top: screenWidth >= 1920 ? "2071px" : screenWidth >= 1132 && screenWidth < 1920 ? "1041px" : undefined,
              width: screenWidth >= 1920 ? "457px" : screenWidth >= 1132 && screenWidth < 1920 ? "1011px" : undefined,
            }}
          >
            {screenWidth >= 1920 && <>CON CARMEN SARMIENTO</>}

            {screenWidth >= 1132 && screenWidth < 1920 && (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp; FABRICAMOS&nbsp;&nbsp;&nbsp;&nbsp; CONECTAMOS&nbsp;&nbsp;&nbsp;&nbsp;DIFUNDIMOS
              </>
            )}
          </div>
        )}

        {screenWidth >= 1132 && screenWidth < 1920 && (
          <>
            <img className="fill-copy-6" alt="Fill copy" src="./img/fill-166-copy-1.svg" />
            <img className="fill-copy-7" alt="Fill copy" src="./img/fill-166-copy-2-1.svg" />
            <div className="overlap-45">
              <img className="fill-copy-8" alt="Fill copy" src="./img/fill-166-copy-5-1.svg" />
              <img className="fill-copy-9" alt="Fill copy" src="./img/fill-166-copy-5-1.svg" />
              <img className="fill-copy-10" alt="Fill copy" src="./img/fill-166-copy-4-1.svg" />
            </div>
            <div className="overlap-46">
              <img className="fill-copy-11" alt="Fill copy" src="./img/fill-166-copy-8-1.svg" />
              <img className="fill-copy-12" alt="Fill copy" src="./img/fill-166-copy-8-1.svg" />
              <img className="fill-copy-13" alt="Fill copy" src="./img/fill-166-copy-8-1.svg" />
            </div>
          </>
        )}

        {screenWidth >= 1920 && (
          <>
            <div className="text-wrapper-31">NUEVO PODCAST</div>
            <div className="overlap-47">
              <p className="desarrollamos-el-fut-9">
                Desarrollamos el futuro del entretenimiento latinoamericano. Desde la creación de canales hasta la
                optimización de audiencias
              </p>
              <div className="text-wrapper-32">Ana Calderón</div>
              <div className="text-wrapper-33">ESTA SEMANA</div>
            </div>
            <div className="CEO-de-warner-ib-ric-3">CEO de Warner Ibérica</div>
            <img className="group-35" alt="Group" src="./img/group-15.png" />
            <img
              className="textura-7"
              alt="Textura"
              src="./img/veronica4611-textura-de-conexiones-con-luces-verdes-fluor-y-azu-7.png"
            />
            <div className="overlap-48">
              <div className="text-wrapper-12">Canales FAST y OTT</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-5">
                  <div className="div-3">
                    <div className="group-10">
                      <div className="overlap-group-3">
                        <div className="rectangle-copy-6" />
                        <img className="line-3" alt="Line" src="./img/line-14-7.svg" />
                        <img className="line-copy" alt="Line copy" src="./img/line-14-copy-7.svg" />
                        <img className="path-copy" alt="Path copy" src="./img/path-13-copy-7.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-13">Canales FAST y OTT</div>
                  <p className="lorem-ipsum-dolor-si">
                  Operación y construcción de canales FAST y OTT propios y de terceros, incluidas capacidades lineales y no lineales.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {(screenWidth >= 1920 || screenWidth < 1132) && (
          <div
            className="text-wrapper-34"
            style={{
              fontSize: screenWidth >= 1920 ? "26px" : screenWidth < 1132 ? "20px" : undefined,
              left: screenWidth >= 1920 ? "699px" : screenWidth < 1132 ? "-95px" : undefined,
              top: screenWidth >= 1920 ? "1209px" : screenWidth < 1132 ? "896px" : undefined,
            }}
          >
            SERVICIOS
          </div>
        )}

        {screenWidth >= 1920 && (
          <>
            <div className="overlap-49">
              <div className="overlap-group-wrapper">
                <div className="overlap-5">
                  <div className="div-3" />
                  <div className="text-wrapper-13">Operaciones</div>
                  <p className="lorem-ipsum-dolor-si-2">Hacemos el seguimiento técnico y la puesta en valor de cada contenido. </p>
                </div>
              </div>
              <img className="group-copy-12" alt="Group copy" src="./img/group-29-copy-2-2.png" />
              <img className="line-copy-6" alt="Line copy" src="./img/line-18-copy-4.svg" />
              <img className="line-copy-7" alt="Line copy" src="./img/line-18-copy-5.svg" />
            </div>
            <div className="overlap-50">
              <div className="overlap-group-wrapper">
                <div className="overlap-5">
                  <div className="div-3" />
                  <div className="text-wrapper-13">Audiencias</div>
                  <p className="lorem-ipsum-dolor-si">
                  Potenciamos el alcance y visibilidad de tu plataforma de streaming. 
                  </p>
                </div>
              </div>
              <img className="group-36" alt="Group" src="./img/group-11-8.png" />
            </div>
            <div className="overlap-51">
              <img className="group-13" alt="Group" src="./img/group-11-8.png" />
              <div className="group-copy-4">
                <div className="overlap-5">
                  <div className="group-11">
                    <div className="overlap-group-4">
                      <div className="rectangle-5" />
                      <div className="rectangle-copy-7" />
                      <div className="group-copy-5">
                        <div className="overlap-group-5">
                          <div className="group-14">
                            <div className="rectangle-6" />
                            <div className="rectangle-copy-8" />
                            <div className="rectangle-copy-9" />
                          </div>
                          <div className="group-copy-6">
                            <div className="rectangle-6" />
                            <div className="rectangle-copy-8" />
                            <div className="rectangle-copy-9" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-13">Estrategia</div>
                  <p className="lorem-ipsum-dolor-si-2">Organizamos y adaptamos tu contenido para ampliar las oportunidades de monetización.</p>
                </div>
              </div>
            </div>
            <div className="overlap-52">
              <div className="div-3">
                <div className="group-15">
                  <div className="overlap-9">
                    <img className="rectangle-copy-10" alt="Rectangle copy" src="./img/rectangle-copy-209-5.svg" />
                    <img className="path" alt="Path" src="./img/path-30-5.svg" />
                    <img className="combined-shape-6" alt="Combined shape" src="./img/combined-shape-9.svg" />
                    <img className="path-copy-2" alt="Path copy" src="./img/path-31-copy-5.svg" />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-13">Contenidos</div>
              <p className="lorem-ipsum-dolor-si-2">Ponemos a tu disposición una amplia selección de películas y series latinoamericanas.</p>
            </div>
          </>
        )}

        {(screenWidth >= 1920 || screenWidth < 1132) && (
          <div
            className="group-copy-13"
            style={{
              height: screenWidth >= 1920 ? "268px" : screenWidth < 1132 ? "222px" : undefined,
              left: screenWidth >= 1920 ? "1143px" : screenWidth < 1132 ? "23px" : undefined,
              top: screenWidth >= 1920 ? "1564px" : screenWidth < 1132 ? "961px" : undefined,
            }}
          >
            <div
              className="overlap-53"
              style={{
                height: screenWidth >= 1920 ? "270px" : screenWidth < 1132 ? "224px" : undefined,
              }}
            >
              <div
                className="group-37"
                style={{
                  height: screenWidth >= 1920 ? "80px" : screenWidth < 1132 ? "58px" : undefined,
                  left: screenWidth >= 1920 ? "120px" : screenWidth < 1132 ? "132px" : undefined,
                  width: screenWidth >= 1920 ? "80px" : screenWidth < 1132 ? "58px" : undefined,
                }}
              >
                <div
                  className="overlap-group-11"
                  style={{
                    height: screenWidth >= 1920 ? "82px" : screenWidth < 1132 ? "60px" : undefined,
                    width: screenWidth >= 1920 ? "82px" : screenWidth < 1132 ? "60px" : undefined,
                  }}
                >
                  {screenWidth >= 1920 && (
                    <>
                      <img className="rectangle-7" alt="Rectangle" src="./img/rectangle-8.svg" />
                      <img className="path-6" alt="Path" src="./img/path-4.svg" />
                      <img className="path-7" alt="Path" src="./img/path-26-2.svg" />
                    </>
                  )}

                  {screenWidth < 1132 && (
                    <div className="group-38">
                      <div className="overlap-group-12">
                        <div className="rectangle-copy-19" />
                        <img className="line-6" alt="Line" src="./img/line-14-1.svg" />
                        <img className="line-copy-8" alt="Line copy" src="./img/line-14-copy-1.svg" />
                        <img className="path-copy-4" alt="Path copy" src="./img/path-13-copy-1.svg" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="masterclasses-3"
                style={{
                  fontSize: screenWidth >= 1920 ? "22px" : screenWidth < 1132 ? "20px" : undefined,
                  top: screenWidth >= 1920 ? "104px" : screenWidth < 1132 ? "82px" : undefined,
                }}
              >
                {screenWidth >= 1920 && <>Asesoría</>}

                {screenWidth < 1132 && <>Canales FAST y OTT</>}
              </div>
              <p
                className="lorem-ipsum-dolor-si-3"
                style={{
                  fontSize: screenWidth >= 1920 ? "18px" : screenWidth < 1132 ? "16px" : undefined,
                  left: screenWidth >= 1920 ? "52px" : screenWidth < 1132 ? "48px" : undefined,
                  lineHeight: screenWidth >= 1920 ? "22px" : screenWidth < 1132 ? "18px" : undefined,
                  top: screenWidth >= 1920 ? "141px" : screenWidth < 1132 ? "113px" : undefined,
                  width: screenWidth >= 1920 ? "219px" : screenWidth < 1132 ? "226px" : undefined,
                }}
              >
                Operación y construcción de canales FAST y OTT propios y de terceros, incluidas capacidades lineales y no lineales.
              </p>
            </div>
          </div>
        )}

        {screenWidth >= 1920 && (
          <>
            <div className="FABRICAMOS-CONECTAMO-2">
              &nbsp;&nbsp;&nbsp;&nbsp; FABRICAMOS&nbsp;&nbsp;&nbsp;&nbsp; CONECTAMOS&nbsp;&nbsp;&nbsp;&nbsp;DIFUNDIMOS
            </div>
            <img className="fill-copy-14" alt="Fill copy" src="./img/fill-166-copy-1.svg" />
            <img className="fill-copy-15" alt="Fill copy" src="./img/fill-166-copy-2-1.svg" />
            <div className="overlap-54">
              <img className="fill-copy-8" alt="Fill copy" src="./img/fill-166-copy-5-1.svg" />
              <img className="fill-copy-9" alt="Fill copy" src="./img/fill-166-copy-5-1.svg" />
              <img className="fill-copy-10" alt="Fill copy" src="./img/fill-166-copy-4-1.svg" />
            </div>
            <div className="overlap-55">
              <img className="fill-copy-11" alt="Fill copy" src="./img/fill-166-copy-8-1.svg" />
              <img className="fill-copy-12" alt="Fill copy" src="./img/fill-166-copy-8-1.svg" />
              <img className="fill-copy-13" alt="Fill copy" src="./img/fill-166-copy-8-1.svg" />
            </div>
            <div className="group-39">
              <div className="overlap-10">
                <img className="fill-5" alt="Fill" src="./img/fill-158-20.svg" />
                <img className="fill-6" alt="Fill" src="./img/fill-158-20.svg" />
                <img className="group-17" alt="Group" src="./img/group-7-2.png" />
              </div>
            </div>
          </>
        )}

        {screenWidth < 1132 && (
          <>
            <div className="group-copy-14">
              <div className="overlap-56">
                <div className="div-6">
                  <div className="overlap-57">
                    <div className="group-40">
                      <div className="overlap-group-12">
                        <div className="rectangle-copy-19" />
                        <img className="line-6" alt="Line" src="./img/line-14-1.svg" />
                        <img className="line-copy-8" alt="Line copy" src="./img/line-14-copy-1.svg" />
                        <img className="path-copy-4" alt="Path copy" src="./img/path-13-copy-1.svg" />
                      </div>
                    </div>
                    <div className="group-41">
                      <div className="overlap-58">
                        <img className="group-42" alt="Group" src="./img/group-11-4.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-35">Audiencias</div>
                <p className="lorem-ipsum-dolor-si-4">
                Potenciamos el alcance y visibilidad de tu plataforma de streaming. 
                </p>
              </div>
            </div>
            <div className="group-copy-15">
              <div className="overlap-59">
                <div className="div-6">
                  <div className="group-41">
                    <div className="overlap-57">
                      <div className="group-40">
                        <div className="overlap-group-12">
                          <div className="rectangle-copy-19" />
                          <img className="line-6" alt="Line" src="./img/line-14-5.svg" />
                          <img className="line-copy-8" alt="Line copy" src="./img/line-14-copy-5.svg" />
                          <img className="path-copy-4" alt="Path copy" src="./img/path-13-copy-5.svg" />
                        </div>
                      </div>
                      <div className="group-41">
                        <div className="overlap-58">
                          <img className="group-42" alt="Group" src="./img/group-11-4.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <div className="group-43">
                        <div className="overlap-group-13">
                          <img className="rectangle-copy-20" alt="Rectangle copy" src="./img/rectangle-copy-209-2.svg" />
                          <img className="path-8" alt="Path" src="./img/path-30-2.svg" />
                          <img className="combined-shape-7" alt="Combined shape" src="./img/combined-shape-3.svg" />
                          <img className="path-copy-5" alt="Path copy" src="./img/path-31-copy-2.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-36">Contenidos</div>
                <p className="lorem-ipsum-dolor-si-5">
                Ponemos a tu disposición una amplia selección de películas y series latinoamericanas.
                </p>
              </div>
            </div>
            <div className="group-copy-16">
              <div className="overlap-60">
                <div className="div-6">
                  <div className="group-41">
                    <div className="overlap-57">
                      <div className="group-40">
                        <div className="overlap-group-12">
                          <div className="rectangle-copy-19" />
                          <img className="line-6" alt="Line" src="./img/line-14-5.svg" />
                          <img className="line-copy-8" alt="Line copy" src="./img/line-14-copy-5.svg" />
                          <img className="path-copy-4" alt="Path copy" src="./img/path-13-copy-3.svg" />
                        </div>
                      </div>
                      <div className="group-41">
                        <div className="overlap-58">
                          <img className="group-42" alt="Group" src="./img/group-11-4.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <div className="group-43">
                        <div className="overlap-group-13">
                          <img className="rectangle-copy-20" alt="Rectangle copy" src="./img/rectangle-copy-209-3.svg" />
                          <img className="path-8" alt="Path" src="./img/path-30-3.svg" />
                          <img className="combined-shape-7" alt="Combined shape" src="./img/combined-shape-4.svg" />
                          <img className="path-copy-5" alt="Path copy" src="./img/path-31-copy-3.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <div className="rectangle-17" />
                      <div className="rectangle-copy-21" />
                      <div className="group-copy-17">
                        <div className="div-2">
                          <div className="group-44">
                            <div className="rectangle-18" />
                            <div className="rectangle-copy-22" />
                            <div className="rectangle-copy-23" />
                          </div>
                          <div className="group-copy-18">
                            <div className="rectangle-18" />
                            <div className="rectangle-copy-22" />
                            <div className="rectangle-copy-23" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-36">Estrategia</div>
                <p className="lorem-ipsum-dolor-si-6">
                Organizamos y adaptamos tu contenido para ampliar las oportunidades de monetización.
                </p>
              </div>
            </div>
            <div className="group-copy-19">
              <div className="overlap-61">
                <div className="div-6">
                  <div className="group-41">
                    <div className="overlap-57">
                      <div className="group-40">
                        <div className="overlap-group-12">
                          <div className="rectangle-copy-19" />
                          <img className="line-6" alt="Line" src="./img/line-14-5.svg" />
                          <img className="line-copy-8" alt="Line copy" src="./img/line-14-copy-5.svg" />
                          <img className="path-copy-4" alt="Path copy" src="./img/path-13-copy-5.svg" />
                        </div>
                      </div>
                      <div className="group-41">
                        <div className="overlap-58">
                          <img className="group-42" alt="Group" src="./img/group-11-4.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <div className="group-43">
                        <div className="overlap-group-13">
                          <img className="rectangle-copy-20" alt="Rectangle copy" src="./img/rectangle-copy-209-2.svg" />
                          <img className="path-8" alt="Path" src="./img/path-30-2.svg" />
                          <img className="combined-shape-7" alt="Combined shape" src="./img/combined-shape-3.svg" />
                          <img className="path-copy-5" alt="Path copy" src="./img/path-31-copy-2.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <div className="rectangle-17" />
                      <div className="rectangle-copy-21" />
                      <div className="group-copy-17">
                        <div className="div-2">
                          <div className="group-44">
                            <div className="rectangle-18" />
                            <div className="rectangle-copy-22" />
                            <div className="rectangle-copy-23" />
                          </div>
                          <div className="group-copy-18">
                            <div className="rectangle-18" />
                            <div className="rectangle-copy-22" />
                            <div className="rectangle-copy-23" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <img className="rectangle-19" alt="Rectangle" src="./img/rectangle.svg" />
                      <img className="path-9" alt="Path" src="./img/path.svg" />
                      <img className="path-10" alt="Path" src="./img/path-26.svg" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-36">Asesoría</div>
                <p className="lorem-ipsum-dolor-si-7">
                Un equipo de profesionales técnicos y creativos para potenciar tu proyecto a largo plazo.
                </p>
              </div>
            </div>
            <div className="group-copy-20">
              <div className="overlap-62">
                <div className="div-6">
                  <div className="group-41">
                    <div className="overlap-57">
                      <div className="group-40">
                        <div className="overlap-group-12">
                          <div className="rectangle-copy-19" />
                          <img className="line-6" alt="Line" src="./img/line-14-5.svg" />
                          <img className="line-copy-8" alt="Line copy" src="./img/line-14-copy-5.svg" />
                          <img className="path-copy-4" alt="Path copy" src="./img/path-13-copy-5.svg" />
                        </div>
                      </div>
                      <div className="group-41">
                        <div className="overlap-58">
                          <img className="group-42" alt="Group" src="./img/group-11-4.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <div className="group-43">
                        <div className="overlap-group-13">
                          <img className="rectangle-copy-20" alt="Rectangle copy" src="./img/rectangle-copy-209-3.svg" />
                          <img className="path-8" alt="Path" src="./img/path-30-3.svg" />
                          <img className="combined-shape-7" alt="Combined shape" src="./img/combined-shape-4.svg" />
                          <img className="path-copy-5" alt="Path copy" src="./img/path-31-copy-3.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="overlap-58">
                      <img className="group-copy-21" alt="Group copy" src="./img/group-29-copy-2.png" />
                      <img className="line-copy-9" alt="Line copy" src="./img/line-18-copy.svg" />
                      <img className="line-copy-10" alt="Line copy" src="./img/line-18-copy-1.svg" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-36">Operaciones</div>
                <p className="lorem-ipsum-dolor-si-8">
                Hacemos el seguimiento técnico y la puesta en valor de cada contenido. 
                </p>
              </div>
            </div>
            <div className="overlap-63">
              <img className="group-45" alt="Group" src="./img/group-2.png" />
              <div className="rectangle-copy-24" />
              <div className="rectangle-copy-25" />
              <div className="text-wrapper-37">Apellidos</div>
              <div className="text-wrapper-38">Correo</div>
            </div>
            <div className="NUEVO-PODCAST-copy">NUEVO PODCAST</div>
            <div className="con-carmen-sarmiento-3">CON CARMEN SARMIENTO</div>
            <div className="QUIENES-SOMOS-copy">QUIENES SOMOS</div>
            <div  id='contacto' className="contacto">CONTACTO</div>
            <div className="overlap-64">
              <div className="group-46">
                <div className="overlap-65">
                  <div className="div-4">
                    <div className="rectangle-copy-wrapper">
                      <div className="rectangle-copy-11" />
                    </div>
                    <div className="group-copy-8">
                      <div className="rectangle-copy-11" />
                    </div>
                    <img className="shape-3" alt="Shape" src="./img/shape-2-8.png" />
                    <img className="line-4" alt="Line" src="./img/line-copy-3-8.svg" />
                    <img className="line-copy-4" alt="Line copy" src="./img/line-copy-3-8.svg" />
                  </div>
                  <img className="path-copy-3" alt="Path copy" src="./img/path-copy-2.svg" />
                  <div className="div-5">
                    <img className="group-18" alt="Group" src="./img/group-3-10.png" />
                    <img className="group-19" alt="Group" src="./img/group-6-8.png" />
                  </div>
                  <img className="rectangle-copy-13" alt="Rectangle copy" src="./img/rectangle-copy-15-1.svg" />
                </div>
                <div className="overlap-66">

                  <div className="mar-a-mart-nez-copy-">Sigfrido Gálvez Sánchez</div>
                  <div className="CEO-copy">Director Operativo</div>
                </div>
              </div>
              <img className="bitmap-copy-3" alt="Bitmap copy" src="./img/bitmap-copy-4.png" />
            </div>
            <div className="overlap-67">
              <div className="group-copy-22">
                <div className="overlap-65">
                  <div className="div-4">
                    <div className="rectangle-copy-wrapper">
                      <div className="rectangle-copy-11" />
                    </div>
                    <div className="group-copy-8">
                      <div className="rectangle-copy-11" />
                    </div>
                    <img className="shape-5" alt="Shape" src="./img/group-6-1.png" />
                    <img className="line-7" alt="Line" src="./img/group-6-1.png" />
                    <img className="line-copy-11" alt="Line copy" src="./img/group-6-1.png" />
                  </div>
                  <div className="div-5">
                    <img className="group-47" alt="Group" src="./img/group-6-1.png" />
                    <img className="group-48" alt="Group" src="./img/group-6-1.png" />
                  </div>
                  <img className="rectangle-copy-13" alt="Rectangle copy" src="./img/rectangle-copy-15-1.svg" />
                </div>
                <img className="path-copy-6" alt="Path copy" src="./img/group-6-1.png" />
                <div className="overlap-66">
                  <div className="mar-a-mart-nez-copy-2">Natalia Honikman</div>
                  <div className="CEO-copy">Directora Institucional</div>
                </div>
              </div>
              <img className="bitmap-copy-4" alt="Bitmap copy" src="./img/bitmap-copy-3.png" />
              <div className="group-copy-23">
                <div className="overlap-12">
                  <div className="rectangle-8" />
                  <img className="rectangle-copy-16" alt="Rectangle copy" src="./img/rectangle-copy-65-2.svg" />
                </div>
              </div>
            </div>
            <p className="desarrollamos-el-fut-10">
              Desarrollamos el futuro del entretenimiento latinoamericano. Desde la creación de canales hasta la
              optimización de audiencias.
            </p>
            <div className="overlap-68">
              <img className="bitmap-copy-5" alt="Bitmap copy" src="./img/bitmap-copy-2.png" />
              <div className="group-copy-24">
                <div className="overlap-65">
                  <div className="div-4">
                    <div className="rectangle-copy-wrapper">
                      <div className="rectangle-copy-11" />
                    </div>
                    <div className="group-copy-8">
                      <div className="rectangle-copy-11" />
                    </div>
                    <img className="shape-3" alt="Shape" src="./img/shape-2-8.png" />
                    <img className="line-8" alt="Line" src="./img/rectangle-copy-17-2.png" />
                    <img className="line-copy-4" alt="Line copy" src="./img/line-copy-3-8.svg" />
                  </div>
                  <img className="path-copy-3" alt="Path copy" src="./img/path-copy-2.svg" />
                  <div className="div-5">
                    <img className="group-49" alt="Group" src="./img/rectangle-copy-17-2.png" />
                    <img className="group-50" alt="Group" src="./img/rectangle-copy-17-2.png" />
                  </div>
                </div>
                <div className="overlap-66">
                  <div className="mar-a-mart-nez-copy-2">Anna Elías</div>
                  <div className="CEO-copy">CEO y Fundadora</div>
                </div>
                <img className="rectangle-copy-26" alt="Rectangle copy" src="./img/rectangle-copy-17-2.png" />
              </div>
              <div className="group-copy-25">
                <div className="overlap-12">
                  <div className="rectangle-8" />
                  <img className="rectangle-copy-12" alt="Rectangle copy" src="./img/rectangle-copy-65-3.svg" />
                </div>
              </div>
            </div>
            <div className="group-51">
              <div className="group-52">
                <div className="oval-2" />
                <div className="oval-copy-2" />
                <div className="oval-copy-3" />
                <div className="oval-copy-4" />
                <div className="oval-copy-5" />
              </div>
            </div>
            <div className="overlap-69">
              <div className="rectangle-copy-27" />
              <div className="text-wrapper-39">Nombre</div>
            </div>
            <div className="overlap-70">
              <div className="rectangle-copy-28" />
              <textarea  className="text-wrapper-39" placeholder="Asunto"></textarea >
            </div>
            <div className="group-53">
              <div className="overlap-71">
                <img className="fill-34" alt="Fill" src="./img/fill-158-6.svg" />
                <img className="fill-35" alt="Fill" src="./img/fill-158-6.svg" />
                <img className="group-54" alt="Group" src="./img/group-7.png" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
