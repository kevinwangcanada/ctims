#!/bin/bash

SELFDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "SELFDIR: $SELFDIR"
CTIMS_WEB_CONTAINER_IMAGE_NAME=ctims-web
CTIMS_WEB_CONTAINER_IMAGE_LOCATION=$TECHNA_REGISTRY_ENDPOINT:$TECHNA_REGISTRY_PORT/$CTIMS_WEB_CONTAINER_IMAGE_NAME

GIT_REF="$(git rev-parse @)"
GIT_BRANCH="$(git symbolic-ref --short HEAD)"
GIT_BRANCH_SAFE="$(echo "$GIT_BRANCH" | tr -dc '[:alnum:]' | tr '[:upper:]' '[:lower:]')"
GIT_IS_CLEAN="$(git diff-index --quiet HEAD && echo yes || echo no)"
COMMIT_ISH="$(git describe --tags --all --always | grep --color=never -o -E '[^\/]+$' | sed "s/~/-/g")"
PROJECT=ctims
CONTAINER_NAME=ctims-web

