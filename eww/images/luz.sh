#!/usr/bin/bash

ld=$(( echo print;gdbus call -e -d net.zoidplex.wlr_gamma_service -o /net/zoidplex/wlr_gamma_service -m net.zoidplex.wlr_gamma_service.brightness.get;echo "[0]" )|tr -d '\n'|python 2>/dev/null)
echo $ld
#echo $ld>/tmp/u
