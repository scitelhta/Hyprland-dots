#!/usr/bin/bash

if [ "$1" == "down" ]; then
	a="5%-"
else
	a="5%+"
fi

amixer -D pulse sset Master $a

