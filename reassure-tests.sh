#!/usr/bin/env bash
set -e 

BASELINE_BRANCH=${BASELINE_BRANCH:="main"}

# Gather baseline perf measurements
git switch "$BASELINE_BRANCH"
yarn install --force
yarn reassure --baseline

# Gather current perf measurements & compare results
git switch -
yarn install --force
yarn reassure --branch