# What time is it? action

Esta Action muestra por consola la hora en la zona horaria que se especifique en los inputs, en caso de no especificarse ninguna, muestra la hora en distintas zonas horarias.

## Inputs

### `time-zone`

Nombre de la zona horaria de la que quieras conocer la hora que es. [Lista completa](https://gist.github.com/rxaviers/8481876).

## Outputs

### `time`

Hora actual en la zona especificada o en UTC si no se ha especificado ninguna.

## Ejemplo

uses: actions/what-time-is-it-action@v1
with:
  time-zone: 'Europe/Madrid'