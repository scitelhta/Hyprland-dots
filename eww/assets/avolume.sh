#!/usr/bin/bash

if [ "$1" == "down" ]; then
	a="5%-"
	b="-5%"
else
	a="5%+"
	b="+5%"
fi

 pactl set-sink-volume @DEFAULT_SINK@ $b

#amixer -D pulse sset Master $a

