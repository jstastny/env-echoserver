# [ENV Echo Server](https://github.com/jstastny/env-echoserver)
Simple HTTP server that prints all the environments variables on `GET` request together with information about the request.

This was useful for some Kubernetes ingress / service debugging, where I used it to get information about the Pod that served the request. Example Kuberentes manifest using `StatefulSet` is in [k8s.yaml](./k8s.yaml)

## Docker

Docker image for this repo is available on DockerHub: https://hub.docker.com/r/jstastny/envechoserver

## Configuration
Optionally, `HOST` and `PORT` environment can be used to configure, which host and port the server should be listening at. The defaults are `0.0.0.0` for `HOST` and `3000` for `PORT`. 
