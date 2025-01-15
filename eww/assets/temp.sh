#!/usr/bin/bash

sensors|grep 'Package id'|awk  '{print $4}'| sed 's/[^0-9\.]*//g'
