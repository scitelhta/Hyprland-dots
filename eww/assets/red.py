#!/usr/bin/python

import os,sys,string

null=None
true=True
false=False
if len(sys.argv)>2: 
 sys.exit(0);

if (sys.argv[1]=='rf'):
  os.popen("rfkill unblock wlan; sudo dhcpcd")

p=(os.popen("ip link show|grep %s"%sys.argv[1]).read())
 
# p=(os.popen("wpa_cli status|grep state").read())
# if (p.find("COMPLETED")>=0): 
if (len(p.strip())>0):
   print("connected")
else: 
   print("disconnected")
sys.exit(0)



o=eval(os.popen('nmcli device status|jc --nmcli').read())
#print(o)
for a in o:
 if a['device']==sys.argv[1]:
  print(a['state'])

