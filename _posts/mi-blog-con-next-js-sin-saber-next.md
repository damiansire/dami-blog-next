---
title: "Como construi mi blog con next.js sin saber next.js"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/mi-blog-con-next-js-sin-saber-next/cover.jpg"
date: "2022-03-16T05:35:07.322Z"
ogImage:
  url: "/assets/blog/mi-blog-con-next-js-sin-saber-next/cover.jpg"
---

## Las rutas

Una cosa que me molestaba mucho, es tener que usar rutas relativas, pueden ser un dolor de cabeza si no tenes definido la agrupación/estructuras de las carpetas, particularmente, porque estaba moviendo todo de lugar y no sabia bien donde iba a terminar cada cosa.

Pensé distintas posibilidad, una de ellas seria usar una extensión de vs code que se encargue de modificar las rutas cuando muevo las carpetas de lugar. Instale algunas que hacían esto, pero mi editor me dio problemas.

Además, me sigue molestando visualmente tener rutas del estilo "../../../archivo" o cosas del estilo.

Así que implemente una solución mas linda visualmente, use alias para ciertos directorios de las rutas absolutas. Esto hizo mas lindo el codigo.

Cree un archivo jsconfig.json el cual tendría la configuración relacionado con el proyecto.

En el, definí un alias para cada una de las carpetas principales en components (layout, blog), otro para la carpeta lib

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@layout/*": ["components/layout/*"],
      "@blog/*": ["components/blog/*"],
      "@lib/*": ["lib/*"]
    }
  }
}
```

Para esto, seguí el estilo de la documentación de next: [Alias para las rutas](https://nextjs.org/docs/advanced-features/module-path-aliases)

## Las fuentes

Estuve buscando blogs con fuentes / diseños que me gustaran y me tope con este:

[fangpenlin coding note](https://fangpenlin.com/posts/2019/10/07/elliptic-curve-cryptography-explained/)

Me gusto mucho el diseño, el estilo y la forma, asi que me mentalice en copiarlo.

Vi que la fuente del titulo de los posts es diferente a la del cuerpo, asi que lo que hice fue darle click derecho inspeccionar elemento y revisar que fuentes estaba usando

Me posicione en el body de la pagina, para ver que fuente usaba en el cuerpo de los post

![Image text](/assets/blog/mi-blog-con-next-js-sin-saber-next/fuentes-del-body-fangpenlin.png)

Ahí descubrí que para el cuerpo de los post usaba `font-family: `

`"Merriweather", "PT Serif", Georgia, "Times New Roman", serif;`

Y para el titulo de los post, usa

` font-family: "Lato", "Helvetica Neue", Helvetica, sans-serif;`

Despues, lo que hice fue buscarlas en google fonts

[Merriweather](https://fonts.google.com/specimen/Merriweather) y [Lato](https://fonts.google.com/specimen/Lato)

Google fonts te da las dos opciones para agregarlas a tus proyectos, la primera es importar las fuentes desde css utilizando @imports y la segunda es agregarlas mediante la etiqueta <link>.

En mi caso, estaba usando tailwind, asi me pareció buena idea, hacer las cosas, como lo hace tailwind, para eso, fui a la documentación y encontre lo siguiente: [Como agregar fuentes a tu proyecto tailwind](https://tailwindcss.com/docs/font-family#setting-the-font-family)

## Removiendo tailwind

Nada mejor que un css vanilla...

## Usar o no usar ul para los links del navbar?

https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/
https://css-tricks.com/listless-navigation-using-css-to-do-more-with-less/
https://stackoverflow.com/questions/14911038/nav-role-navigation

Usar un montón de divs o usar <ul> es solo cuestión de apariencia.

Incluso si el uso de un <ul> puede proporcionar algo de contexto, solo debe usarse para diseñar listas desordenadas adecuadas, ya que tenemos herramientas más avanzadas para proporcionar semántica para lectores de pantalla y motores de búsqueda.

Para ayudar a los lectores de pantalla a encontrar los botones de navegación principales, se debe de agregar
`role = "navigation"`
en el div externo que contiene los botones de navegación.

Si usas la etiqueta <nav> sera todavia mejor y se hara un SEO aún mejor. Ésta es la práctica recomendada.

Pero no tiene que usar una lista desordenada solo porque tiene que hacerlo.

Usar ul para navegaciones es una práctica común en estos días, pero tiene razón en que la semántica de eso es un poco cuestionable. Básicamente es una "lista de enlaces", pero para los usuarios de tecnología de asistencia, el beneficio real de usar un ul puede ser bastante pequeño. Envolverlo en un navegador o usar atributos ARIA cuando corresponda, hace más en ese sentido.

HTML5
Algunas de estas conversaciones son anteriores al uso generalizado de HTML5. HTML5 tiene la <nav>etiqueta que creo que pone fin al argumento de la semántica. Si está marcando la navegación, colóquela en una <nav>etiqueta. En lugar de HTML 5, o si simplemente debe utilizar un elemento de envoltura diferente, usted tiene el papel de ARIA: <div role="navigation">.

Actualización: al preguntar, debe usar el rol ARIA en la etiqueta de navegación, aunque está implícito, porque algunos navegadores no lo aplican como deberían. Entonces <nav role="navigation">. ¡Gracias Dave !
