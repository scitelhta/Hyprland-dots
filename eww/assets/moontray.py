#!/usr/bin/python3

import time
from datetime import datetime, timedelta
from pystray import Icon, Menu, MenuItem
from PIL import Image
from moonphase import calcular
import os,sys



def load_image(file_path):
    """Carga una imagen PNG desde un archivo."""
    return Image.open("/home/sergio/.config/eww/assets/"+file_path)




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
    today=datetime.now()+timedelta(hours=1)
    r = calcular(today)

    menu1 = Menu(MenuItem("%s %s%% - %s"%(r["n"], r["r"], r["t"]), quit_program))

    icon = Icon("luna", menu=menu1)

    icon.icon = load_image("moon"+r["i"]+".png")

    icon.title = r["n"]
    icon.run()


if __name__=="__main__":
    main()
