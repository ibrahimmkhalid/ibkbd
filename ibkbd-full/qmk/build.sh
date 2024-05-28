#!/bin/bash
QMK_HOME=~/.local/share/qmk_firmware
ln -s $PWD/ibkbd/ $QMK_HOME/keyboards/ibkbd

if [ -z "$1" ]; then
  km="default"
else
  km="$1"
fi

qmk compile -kb ibkbd -km "$km"
qmk c2json -kb ibkbd -km default | keymap parse --layer-names __Base __Game __Nav __Num __Sym __Opt -c 10 -q - > keymap.yaml || true
keymap draw -j ibkbd/info.json keymap.yaml > keymap.svg || true
mv keymap.svg ../ || true
rm $QMK_HOME/keyboards/ibkbd
mv $QMK_HOME/ibkbd_"$km".hex $PWD/output.hex
rm -rf $QMK_HOME/.build
rm keymap.yaml -f

# This script is a workaround until I add my keyboard to the QMK repo
