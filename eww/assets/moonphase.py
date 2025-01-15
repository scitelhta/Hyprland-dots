#!/usr/bin/env python
"""
moonphase.py - Calculate Lunar Phase
Author: Sean B. Palmer, inamidst.com
Cf. http://en.wikipedia.org/wiki/Lunar_phase#Lunar_phase_calculation
"""

import math, decimal, os
from datetime import datetime, timedelta
dec = decimal.Decimal

PHASES = {
      0: "New Moon", 
      1: "Waxing Crescent", 
      2: "First Quarter", 
      3: "Waxing Gibbous", 
      4: "Full Moon", 
      5: "Waning Gibbous", 
      6: "Last Quarter", 
      7: "Waning Crescent"
   }

def position(now=None): 
   if now is None: 
      now = datetime.now()#+timedelta(hours=27)

   diff = now - datetime(2001, 1, 1)
   days = dec(diff.days) + (dec(diff.seconds) / dec(86400))
   lunations = dec("0.20439731") + (days * dec("0.03386319269"))

   return lunations % dec(1)

def phase(pos): 
   index = (pos * dec(8))  + dec("0.5")
   index = math.floor(index)
   #return index
   r= PHASES[int(index) % 7]
   print({"r":r, "index":index})
   return index


def phasei(pos, c):
   
   #i = round(pos /2.0)
   if (not c): pos = 2.0 - pos 
   i = math.floor(dec(pos) * dec(4)+dec(0.7)) 
   while(i>7): i -= 8
   ph = PHASES[i]
   
   
   #print("c %s i %s pos %s pp %s"%(c, i, pos, ph))
   
   return i


   #return phase(dec(p))


def mainr():
   pos = position()
   phasename = phase(pos)

#   roundedpos = round(float(pos), 3)
#   print(round(float(pos), 3))
   roundedpos = round(100-abs(100-float(pos)*200), 2)
#   print( "%s (%s)" % (phasename, roundedpos))
   print('{"r":%s, "p":%d, "i":"%s"}'%(roundedpos, int(pos>0.5), phasename))
#%s"%(roundedpos, ['-','+'][(pos>0.5)]))



dd=open(os.path.dirname(os.path.realpath(__file__))+"/moon.txt").readlines()


#def main():
def calcular(today):
#   today = datetime.now()
   ya=0
   for a in dd:
      #print(a[0].split()[0])
      d=datetime.strptime(" ".join(a.split()[:2]), '%Y-%m-%d %H:%M:%S')
      t=today-d
      #print(t)
      if (ya==0) and(t.days<0):
         t2 = d
         a2 = a.split()[-1]
         ya=1
   ya=0
   for a in dd:
      #print(a[0].split()[0])
      d=datetime.strptime(" ".join(a.split()[:2]), '%Y-%m-%d %H:%M:%S')
      t=today-d
      #print(t)
      if (ya==0) and(t.days<0):
         t2 = d
         a2 = a.split()[-1]
         ya=1   
            #break
      if ya==0:
        t1=d
        a1=a.split()[-1]

      if ya==1:
        t3=d
        a3 = a.split()[-1] 
        if (a3=='l'):
          break      

   ata = today-t1
   atf = t2 - t1
 
   #print((ata, atf))
   pos=(float(ata.days)+(ata.seconds/86400.0))   /(2.0*float((atf.days)+(atf.seconds/86400.0)))
   
   #print("ata %s atf %s pos %s\n"%(float(ata.days)+(ata.seconds/86400.0), float(atf.days)+(atf.seconds/86400.0), pos))
#   if (a1=='n'):
#       p=0
   if (a1=='c'):  #de creciente a llena
      pos = 0.5+pos#0.25

   if (a1 == 'l'): #de llena a menguante
      pos = 1 - pos
      
   if (a1== 'm'): #de menguante a nueva
      pos = 0.5 - pos #0.75


   #print(("pos", pos, t1, a1))
   #phasename = phase(dec(pos*2 + ([0,-1][(['c','l'].count(a1))])))
   phaseindex = phasei(pos, (['c','n'].count(a1)))
   phasename = PHASES[phaseindex]

 #  roundedpos = round(100-abs(100-float(pos)*200), 2)
   roundedpos = round(100*float(pos), 2)

#   print({"a1":a1, "a2":a2, "pos":pos, "t1":t1, "t2":t2})

   return {"r":roundedpos,  "p":int(pos>0.5), "i":"%s"%phaseindex, "t":"%s"%t3.strftime("%a %b %d %H:%M"), "n":"%s"%PHASES[phaseindex], "d":"%s"%today.strftime("%c")}

  # print('{"r":%s,  "p":%d, "i":"%s", "t":"%s", "n":"%s", "d":"%s"}'%(roundedpos, int(pos>0.5), phaseindex, t3.strftime("%a %d %H:%M"), PHASES[phaseindex],  #today.strftime("%c")))


def main():
    today=datetime.now()+timedelta(hours=1)
    r = calcular(today)
    print(str(r).replace("'", '"'))


if __name__=="__main__": 
   main()



