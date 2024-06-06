import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_CKYq2EXZ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './layout_DQkNcMVV.mjs';
/* empty css                                 */

const $$Iniciarsecion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-rjtfztn5": true })}  <link rel="shortcut icon" href="img/pixil.png" type="image/x-icon"> <title>Iniciar seccion</title> ${maybeRenderHead()}<nav data-astro-cid-rjtfztn5> <div class="mercado" data-astro-cid-rjtfztn5>MERCADOS EL PORVENIR</div> <a href="crearusuario" class="iniciarsecion" data-astro-cid-rjtfztn5>crear usuario</a> </nav> <section data-astro-cid-rjtfztn5> <div data-astro-cid-rjtfztn5> <h2 data-astro-cid-rjtfztn5>iniciar secion</h2> <form data-astro-cid-rjtfztn5> <label for="usuario" data-astro-cid-rjtfztn5></label> <input type="text" id="usuario" name="usuario" placeholder="usuario" required data-astro-cid-rjtfztn5><br data-astro-cid-rjtfztn5><br data-astro-cid-rjtfztn5> <label for="contrasena" data-astro-cid-rjtfztn5></label> <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" required data-astro-cid-rjtfztn5><br data-astro-cid-rjtfztn5><br data-astro-cid-rjtfztn5> <input class="boton" type="submit" value="INICIAR SECION" data-astro-cid-rjtfztn5> </form> </div> </section> `;
}, "C:/Users/jerso/OneDrive/Escritorio/astro-mercado/src/pages/iniciarsecion.astro", void 0);

const $$file = "C:/Users/jerso/OneDrive/Escritorio/astro-mercado/src/pages/iniciarsecion.astro";
const $$url = "/astro-mercado/iniciarsecion";

export { $$Iniciarsecion as default, $$file as file, $$url as url };
