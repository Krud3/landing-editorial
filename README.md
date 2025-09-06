```
landing-editorial
├─ astro.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ 2x
│  ├─ favicon.svg
│  ├─ icons
│  │  ├─ competenciaLectoraIcon.svg
│  │  ├─ plataformaIcon.svg
│  │  ├─ pruebaSaberIcon.svg
│  │  ├─ seguimientoAcademico.svg
│  │  └─ textosIcon.svg
│  ├─ images
│  │  ├─ CCDPOETH-2.png
│  │  ├─ Childrens_Book_Mockup_1.jpg
│  │  ├─ Childrens_Book_Mockup_2.jpg
│  │  ├─ Childrens_Book_Mockup_3.jpg
│  │  ├─ Childrens_Book_Mockup_4.jpg
│  │  ├─ Childrens_Book_Mockup_5.jpg
│  │  ├─ Childrens_Book_Mockup_6.jpg
│  │  ├─ CLASF-2.png
│  │  ├─ CMAR-2.png
│  │  └─ FMHMDT-2.png
│  ├─ logoEditorial.svg
│  ├─ PDF
│  └─ SVG
│     └─ hero1.svg
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ hero1@2x.png
│  │  ├─ icons
│  │  │  ├─ competenciaLectoraIcon.svg
│  │  │  ├─ plataformaIcon.svg
│  │  │  ├─ pruebaSaberIcon.svg
│  │  │  ├─ seguimientoAcademico.svg
│  │  │  └─ textosIcon.svg
│  │  ├─ images
│  │  │  ├─ Childrens_Book_Mockup_1.jpg
│  │  │  ├─ Childrens_Book_Mockup_3.png
│  │  │  ├─ front-cover
│  │  │  │  ├─ aprestamiento.png
│  │  │  │  ├─ castellano.png
│  │  │  │  ├─ comprension-lectora.png
│  │  │  │  ├─ etica.png
│  │  │  │  ├─ informatica.png
│  │  │  │  ├─ matematica.png
│  │  │  │  ├─ motricidad.png
│  │  │  │  ├─ naturales.png
│  │  │  │  ├─ pre-lectoescritura.png
│  │  │  │  ├─ pre-matematica.png
│  │  │  │  └─ sociales.png
│  │  │  ├─ open-book
│  │  │  │  ├─ aprestamiento.png
│  │  │  │  ├─ castellano.png
│  │  │  │  ├─ comprension-lectora.png
│  │  │  │  ├─ etica.png
│  │  │  │  ├─ informatica.png
│  │  │  │  ├─ matematica.png
│  │  │  │  ├─ motricidad.png
│  │  │  │  ├─ naturales.png
│  │  │  │  ├─ pre-lectoescritura.png
│  │  │  │  ├─ pre-matematica.png
│  │  │  │  └─ sociales.png
│  │  │  └─ portada-competencia-lectora.png
│  │  └─ SVG
│  │     ├─ chulo-verde.svg
│  │     ├─ chulo-verde2.svg
│  │     ├─ Competencia.svg
│  │     ├─ flecha1.svg
│  │     ├─ flecha2.svg
│  │     ├─ flecha3.svg
│  │     ├─ flecha4.svg
│  │     ├─ grafica.svg
│  │     ├─ libro1.svg
│  │     ├─ libro2.svg
│  │     ├─ libro_vacio.svg
│  │     ├─ mano.svg
│  │     ├─ pc.svg
│  │     ├─ pcpanel1.svg
│  │     ├─ pcpanel2.svg
│  │     ├─ preguntas.svg
│  │     ├─ t1_competencia.svg
│  │     ├─ t1_libro1.svg
│  │     ├─ t1_libro2.svg
│  │     ├─ t2_competencia.svg
│  │     ├─ t2_libro1.svg
│  │     ├─ t2_libro2.svg
│  │     ├─ t3_competencia.svg
│  │     ├─ t3_libro1.svg
│  │     ├─ t3_libro2.svg
│  │     ├─ t4_libro1.svg
│  │     └─ t4_libro2.svg
│  ├─ components
│  │  ├─ colaboradores.astro
│  │  ├─ competencia-lectora
│  │  │  ├─ hero.astro
│  │  │  ├─ problema.astro
│  │  │  └─ what-is.astro
│  │  ├─ contact-form.astro
│  │  ├─ container.astro
│  │  ├─ CTA.astro
│  │  ├─ dropdown.astro
│  │  ├─ features.astro
│  │  ├─ footer.astro
│  │  ├─ hero.astro
│  │  ├─ navbar.astro
│  │  ├─ primary-features.astro
│  │  ├─ seguimiento-academico
│  │  │  └─ seguimiento.astro
│  │  └─ ui
│  │     ├─ AnimatedBars.astro
│  │     ├─ AnimatedCompetencia.astro
│  │     ├─ AnimatedPc.astro
│  │     ├─ HandFillQuiz.astro
│  │     ├─ LibroAssembler.astro
│  │     ├─ link.astro
│  │     └─ ScreenshotPlaceholder.astro
│  ├─ content
│  │  ├─ asignaturas
│  │  │  ├─ aprestamiento.md
│  │  │  ├─ castellano.md
│  │  │  ├─ ciencias-naturales-primaria.md
│  │  │  ├─ ciencias-sociales.md
│  │  │  ├─ comprension-lectora.md
│  │  │  ├─ etica-valores.md
│  │  │  ├─ informatica-primaria.md
│  │  │  ├─ matematica-primaria.md
│  │  │  ├─ motricidad.md
│  │  │  ├─ pre-lectoescritura.md
│  │  │  └─ pre-matematica.md
│  │  ├─ config.ts
│  │  └─ libros
│  │     ├─ aprestamiento
│  │     │  └─ jardin.md
│  │     ├─ castellano
│  │     │  ├─ cuarto.md
│  │     │  ├─ primero.md
│  │     │  ├─ quinto.md
│  │     │  ├─ segundo.md
│  │     │  └─ tercero.md
│  │     ├─ ciencias-naturales-primaria
│  │     │  ├─ cuarto.md
│  │     │  ├─ primero.md
│  │     │  ├─ quinto.md
│  │     │  ├─ segundo.md
│  │     │  └─ tercero.md
│  │     ├─ ciencias-sociales
│  │     │  ├─ cuarto.md
│  │     │  ├─ primero.md
│  │     │  ├─ segundo.md
│  │     │  └─ tercero.md
│  │     ├─ comprension-lectora
│  │     │  ├─ primero.md
│  │     │  └─ transicion.md
│  │     ├─ etica-valores
│  │     │  ├─ cuarto.md
│  │     │  ├─ primero.md
│  │     │  ├─ segundo.md
│  │     │  └─ tercero.md
│  │     ├─ informatica-primaria
│  │     │  ├─ cuarto.md
│  │     │  ├─ primero.md
│  │     │  ├─ quinto.md
│  │     │  └─ tercero.md
│  │     ├─ matematica-primaria
│  │     │  ├─ cuarto.md
│  │     │  ├─ primero.md
│  │     │  ├─ quinto.md
│  │     │  ├─ segundo.md
│  │     │  └─ tercero.md
│  │     ├─ motricidad
│  │     │  ├─ jardin.md
│  │     │  ├─ primero.md
│  │     │  ├─ segundo.md
│  │     │  └─ transicion.md
│  │     ├─ pre-lectoescritura
│  │     │  └─ transicion.md
│  │     └─ pre-matematica
│  │        └─ transicion.md
│  ├─ features
│  │  └─ textos
│  ├─ layouts
│  │  ├─ Layout-cc.astro
│  │  └─ Layout.astro
│  ├─ pages
│  │  ├─ competencia-lectora.astro
│  │  ├─ contactanos.astro
│  │  ├─ gracias.astro
│  │  ├─ index.astro
│  │  ├─ libros
│  │  │  ├─ index.astro
│  │  │  ├─ [subjectSlug]
│  │  │  │  └─ [bookSlug].astro
│  │  │  └─ [subjectSlug].astro
│  │  ├─ seguimiento-academico.astro
│  │  └─ sobre-nosotros.astro
│  └─ styles
│     └─ global.css
└─ tsconfig.json

```