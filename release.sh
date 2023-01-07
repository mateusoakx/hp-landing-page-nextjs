#!/usr/bin/env bash

echo -n "Version to be released: "
read -r releaseVersion

yarn version --new-version $releaseVersion