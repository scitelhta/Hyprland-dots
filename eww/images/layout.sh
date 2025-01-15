#!/bin/bash

#current_layout=$(swaymsg -t get_inputs | jq -r '.[] | select(.type=="keyboard") | .xkb_active_layout_name')
current_layout=$(hyprctl getoption input:kb_layout|grep str|grep es)

rojo="\e[1;31m"
verde="\e[1;32m"
azul="\e[1;34m"
negrita="\e[1m"
reset="\e[0m"

if [[ $current_layout == *"es"* ]]; then
 layout=es
else
 layout=us
fi

if [ "$1" == "-r" ]; then
    $HOME/start.sh
fi


if [ "$1" == '-s' ]; then
    if [ $layout == us ]; then
        layout=es
    else
        layout=us
    fi
    hyprctl keyword input:kb_layout $layout
#    swaymsg input "*" xkb_layout $layout
fi

#mem=`free -h|grep Mem|awk '{print $NF}'`
echo -e "$layout $mem"


