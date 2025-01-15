#!/usr/bin/bash
#

export XDG_RUNTIME_DIR=/run/user/1000 

cd /home/sergio/Pictures/wallpapers
swww img "`find . -type f|shuf -n 1`"
git pull


