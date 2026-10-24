#!/usr/bin/env bash
PORT=4173
echo "Starting local portfolio server on http://localhost:$PORT..."
open "http://localhost:$PORT"
python3 -m http.server $PORT
