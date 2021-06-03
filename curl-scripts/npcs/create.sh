#!/bin/bash

API="http://localhost:4741"
URL_PATH="/npcs"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "npc": {
      "name": "'"${NAME}"'",
      "points": "'"${POINTS}"'",
      "request": "'"${REQUEST}"'",
      "options": "'"${OPTIONS}"'"
    }
  }'

echo
