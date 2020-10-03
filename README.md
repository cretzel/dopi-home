# dopi-home

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker build
```
export DOCKER_CLI_EXPERIMENTAL=enabled
docker buildx create
docker buildx use <name>

docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t cretzel/dopi-home --push .

```