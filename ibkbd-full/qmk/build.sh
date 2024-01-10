#!/bin/bash
QMK_HOME=~/.local/share/qmk_firmware
ln -s $PWD/ibkbd/ $QMK_HOME/keyboards/ibkbd

if [ -z "$1" ]; then
  km="default"
else
  km="$1"
fi

qmk compile -kb ibkbd -km "$km"
rm $QMK_HOME/keyboards/ibkbd
mv $QMK_HOME/ibkbd_"$km".hex $PWD/output.hex
rm -rf $QMK_HOME/.build

# This script is a workaround until I add my keyboard to the QMK repo
