#!/usr/bin/bash

#swayidle -w timeout  1 '
swaylock --screenshots --clock --indicator --indicator-radius 100 --indicator-thickness 7 --effect-blur 7x5 --effect-vignette 0.5:0.5 --ring-color bb00cc --key-hl-color 880033 --line-color 00000000 --inside-color 00000088 --separator-color 00000000 --grace 2 --fade-in 0.2
#swayidle -w timeout  1 'hyprctl dispatch dpms off'  resume 'hyprctl dispatch dpms on'
wayidle -t 1 'hyprctl dispatch dpms off'; hyprctl dispatch dpms on


#while true; do
 #/home/devel/wayidle/target/debug/wayidle


#done
