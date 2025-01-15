#!/usr/bin/python
import os,sys,string
false=False
true=True
r=eval(os.popen("hyprctl -j workspaces").read())
s=eval(os.popen("hyprctl -j activeworkspace").read())
d = dict()
for a in r:
	d[a['id']-1]=a['monitorID']
l=[-1]*16
l[15]=s['id']-1
for a in d:
	if (a>=0):
		l[a]=d[a]
print(l)
