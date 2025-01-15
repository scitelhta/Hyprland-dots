#!/usr/bin/python
import os
from datetime import datetime, timedelta


def scalcular(today):

  dd=open(os.path.dirname(os.path.realpath(__file__))+"/sun.txt").readlines()

  for a in dd:
    #print(a[0].split()[0])
    d=datetime.strptime(" ".join(a.split()[:2]), '%Y-%m-%d %H:%M:%S') - timedelta(hours=1)
    t=today-d
    #print(t)
    if (t.days<0): break
    tt=t
    aa=a

  #print(tt)
  #print(9)
  #print('{"d":"%s.%s", "s":"k%s","alt":"󰪄", "text":"hola"}'%(tt.days, int(tt.seconds/8640), aa.split()[-1]))
  return {"d":"%s"%tt.days, "s":"k%s"%aa.split()[-1], "text":"hola"}



if __name__=="__main__":
  today = datetime.now()#+timedelta(hours=27)
  r=scalcular(today)
  print(str(r).replace("'", '"'))

#print(tt)
