#!/bin/sh
# Builds all six menus into ./pdf and zips them to pdf/menus.zip (replacing any existing zip)
cd "$(dirname "$0")" && mkdir -p pdf build
for fmt in room table; do
  for th in navy goldprint navyprint; do
    lualatex -interaction=nonstopmode -output-directory=build -jobname="${fmt}-menu_${th}" \
      "\\def\\theme{${th}}\\input{${fmt}-menu}" >/dev/null || { echo "FAILED ${fmt} ${th}"; exit 1; }
    # second pass for overlay positions
    lualatex -interaction=nonstopmode -output-directory=build -jobname="${fmt}-menu_${th}" \
      "\\def\\theme{${th}}\\input{${fmt}-menu}" >/dev/null
    cp "build/${fmt}-menu_${th}.pdf" pdf/
  done
done
rm -f pdf/menus.zip
(cd pdf && zip -qX menus.zip *.pdf)
ls pdf
