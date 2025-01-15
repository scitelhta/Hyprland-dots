#!/usr/bin/python

import requests, json

icons = {'50': 'windy', '01d':'sunny', '01n':'moony',
         '03d':'sunny_cloud', '03n':'moony_cloud',
         '02d':'sunny_light', '02n':'moony_cloud',
         '04': 'clouds', '09d':'sunny_rain', '09n':'moony_rain',
             '10': 'stormy',
             '11':'storm', '13':'snow', '40':'windy_rain'}

## Weather data
KEY="ec5e1120b46b3bc74024bfa0f035b049"
ID="CITY_ID"
UNIT="metric"   # Available options : 'metric' or 'imperial'
LAT=0.3028351
LNG=-78.5547277

r=requests.get("http://api.openweathermap.org/data/2.5/weather?APPID=%s&units=%s&lat=%s&lon=%s"%(KEY, UNIT, LAT, LNG))
j=r.json()

i=j['weather'][0]['icon']
icon = 'undefined'
if (icons.get(i)): icon = icons[i]
elif (icons.get(i[:2])): icon = icons[i[:2]]

jo  = {'i':icon, 't':j['main']['temp']}
    #print(r.data)
print(json.dumps(jo))

