import time
from datetime import datetime
from pystray import Icon, Menu, MenuItem
from PIL import Image


def load_image(file_path):
    """Carga una imagen PNG desde un archivo."""
    return Image.open("/home/sergio/.config/eww/assets/"+file_path)


def zodiac_sign(day, month):
    """Devuelve el signo zodiacal según la fecha."""
    signs = [
        ("Capricornio", "kCapricorn", (12, 22), (1, 19)),
        ("Acuario", "kAquarius", (1, 20), (2, 18)),
        ("Piscis", "kPisces", (2, 19), (3, 20)),
        ("Aries", "kAries", (3, 21), (4, 19)),
        ("Tauro", "kTaurus", (4, 20), (5, 20)),
        ("Géminis", "kGemini", (5, 21), (6, 20)),
        ("Cáncer", "kCancer", (6, 21), (7, 22)),
        ("Leo", "kLeo", (7, 23), (8, 22)),
        ("Virgo", "kVirgo",  (8, 23), (9, 22)),
        ("Libra", "kLibra", (9, 23), (10, 22)),
        ("Escorpio", "kScorpio",  (10, 23), (11, 21)),
        ("Sagitario", "kSagittarius", (11, 22), (12, 21)),
        ("Capricornio", "kCapricorn", (12, 22), (1, 19)),  # Capricornio es doble
    ]
    for sign, name, start, end in signs:
        if (month == start[0] and day >= start[1]) or (month == end[0] and day <= end[1]):
            return (sign, name)
    return "Desconocido"


def moonicon(icon):
    now = datetime.now()
    hour = now.hour

    # Cambiar el ícono según la hora
    if 6 <= hour < 18:
        icon.icon = load_image("sunny.png")
    else:
        icon.icon = load_image("moony.png")

    # Tooltip con la hora actual
    icon.title = now.strftime("%H:%M:%S")



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
    icon.stop()


# Crear menús para ambos íconos
menu1 = Menu(MenuItem("Salir", quit_program))
#menu2 = Menu(MenuItem("Salir", quit_program))

# Icono para día/noche

day_night_icon = Icon("Día y Noche", menu=menu1)
moonicon(day_night_icon)
#day_night_icon.run_detached()
day_night_icon.run()

# Icono para el signo zodiacal
#zodiac_icon = Icon("Signo Zodiacal", menu=menu2)
#zodiac_icon.run_detached()

# Ejecutar actualizaciones en paralelo
update_day_night_icon(day_night_icon)
#update_zodiac_icon(zodiac_icon)
