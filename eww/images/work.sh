#!/usr/bin/bash
#

echo $2

if [ "$2" == "-s" ]; then

 hyprctl dispatch moveworkspacetomonitor $1 current
fi
hyprctl dispatch workspace $1

