# dojo-blog

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

composition API notes personnel:

ref et reactive:

    les difference entre ref et reactive,
    reactive permet de s'affranchir de l'acceseur .value
    mais n'accepte pas le type primitive, ainsi il est tres souvent preferable
    d'utiliser ref

watch hook:

watch a la maniere d'un useEffect React, va observer les changements de valeur
d'un references, et executé la fonction passé en paramètre a chaque changement

watchEffect hook:

wacthEffect, propose un fonctionnement assez spécial, la fonction passé en paramètre
est excuter au montage du composant, mais aussi a chaque fois qu'une, variable utilisé
au sein de watchEffect change de valeur (sans avoir besoin de préciser de dependance dans le hook)
ainsi le fonctionnement est tres similaire a watch mais il n'est pas utilise de preciser les
valeurs observer, car celle ci seront automatiquement determiné.

Quand utliser watch ou watchEffect:

lorsque l'on utilise pas la valeur observé dans la fonction,
il est necessaire d'utiliser watch pour préciser la dependance, lorsque que la valeur observé est utilisé et que l'on veut en plus run la fonction au montage du composant on privilegie watchEffect

Arreter un watch ou watchEffect:

On enrgistre la valeur de retour du hook qui throw une fonction d'arret
Pour arreter on appel simplement cette fonctions
