'use strict'

import Image from 'next/image'

export default function About() {
    return (
        <section id="about">
            <Image src="/blog/images/avatar.png" alt="Avatar" width={240} height={240} />
            <div>
                <h2>¿Quién Soy?</h2>
                <p>
                    Soy Desarrollador Web Full Stack Senior, capaz de construir presencia web desde cero; desde el
                    concepto, navegación, diseño y programación hasta UX y SEO. Tengo la habilidad de escribir código
                    bien diseñado, comprobable y eficiente utilizando las mejores prácticas actuales en desarrollo web.
                    Rápido aprendiz, trabajador y jugador en equipo, competente en una variedad de lenguajes de
                    scripting y herramientas web multimedia.
                </p>
                <p>
                    Es increíble las cosas que puedes llegar a hacer con la programación. Programar es mi pasión más
                    grande y realmente disfruto llevar al límite todos mis conocimientos, tener nuevos retos cada día.
                </p>
                <a href="/blog/resume">Ver CV</a>
            </div>
        </section>
    )
}
