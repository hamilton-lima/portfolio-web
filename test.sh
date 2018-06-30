#!/bin/bash
set -e
set -o xtrace

go get github.com/rif/spark
open http://localhost:8001
spark -port 8001 ./dist/portfolio-web/