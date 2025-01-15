#!/usr/bin/python
import os
from datetime import datetime


dd=open(os.path.dirname(os.path.realpath(__file__))+"/sun.txt").readlines()
today = datetime.now()
for a in dd:
  #print(a[0].split()[0])
  d=datetime.strptime(" ".join(a.split()[:2]), '%Y-%m-%d %H:%M:%S')
  t=today-d
  #print(t)
  if (t.days<0): break
  tt=t
  aa=a

#print(tt)
#print(9)
print('{"d":"%s.%s", "s":"%s"}'%(tt.days, int(tt.seconds/8640), aa.split()[-1]))



#print(tt)
