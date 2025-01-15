#!/usr/bin/bash

if [ "$1" == "down" ]; then
	a="decrease"
else
	a="increase"
fi

gdbus call -e -d net.zoidplex.wlr_gamma_service -o /net/zoidplex/wlr_gamma_service -m net.zoidplex.wlr_gamma_service.brightness.$a 0.1 >/dev/null 2>/dev/null

~/.config/eww/assets/luz.sh>/home/sergio/.luz



