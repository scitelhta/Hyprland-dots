#!/usr/bin/bash


export max_length=65

#playerctl metadata --format '{{ artist }} - {{ title }}'|sed "s/^\(.\{$max_length\}\).*$/\1/"
playerctl metadata --format '{{ title }}'|sed "s/^\(.\{$max_length\}\).*$/\1/"
