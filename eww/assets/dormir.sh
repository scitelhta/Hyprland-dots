#!/usr/bin/bash

t=$1
if [ -z "$t" ];then
 t=1
fi

#while :
#:

swaylock   --effect-blur 5x5 --screenshots --clock&
swayidle -w timeout $t echo resume 'hyprctl dispatch dpms on;kill -9 $(cat /tmp/sidle$$)'&
ipid=$!
echo $ipid>/tmp/sidle$$
sleep 2
hyprctl dispatch dpms off

