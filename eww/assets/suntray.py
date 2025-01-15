#!/usr/bin/python3

import time
from datetime import datetime, timedelta
from pystray import Icon, Menu, MenuItem
from PIL import Image
from sun import scalcular
import os,sys



def load_image(file_path):
    """Carga una imagen PNG desde un archivo."""
    return Image.open("/home/sergio/.config/eww/assets/"+file_path)






def update_day_night_icon(icon):
    """Actualiza el ícono de día/noche."""
    while True:
        moonicon (icon)
        time.sleep(1)


def update_zodiac_icon(icon):
    """Actualiza el ícono del signo zodiacal."""
    while True:
        now = datetime.now()
        sign, sname = zodiac_sign(now.day, now.month)

        # Asignar un ícono al signo (asegúrate de tener las imágenes)
        icon.icon = load_image(f"{sname}.png")
        icon.title = f"Signo Zodiacal: {sign}"
        time.sleep(3600)  # Actualiza cada hora


def quit_program(icon, item):
    """Cierra el programa."""
    #icon.stop()
    os.execl(sys.executable, sys.executable, *sys.argv)


def main():
    today = datetime.now()#+timedelta(hours=27)
    r=scalcular(today)


    menu1 = Menu(MenuItem("%sº"%r["d"], quit_program))

    icon = Icon("Zodiaco", menu=menu1)

    icon.icon = load_image(r["s"]+".png")
    icon.title = r["d"]

    icon.run()



if __name__=="__main__":
    main()
