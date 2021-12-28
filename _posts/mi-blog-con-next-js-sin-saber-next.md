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
