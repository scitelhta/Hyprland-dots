#!/usr/bin/python


import os
from hyprpy import Hyprland
from hyprpy.utils.shell import run_or_fail

instance = Hyprland()

mons = dict()

def add_monitor(mid):
    print("eww open bar%s"%mid)
    os.system("eww open bar%s"%mid)

def workspace_changed(sender, **kwargs):
    current_workspace_id = kwargs.get('active_workspace_id')
    print(("cw", current_workspace_id))
    if current_workspace_id == 6:
        run_or_fail(["notify-send", "We are on workspace 6."])



def window_closed(sender, **kwargs):
    wo = instance.get_active_workspace()
    print(("wo", wo, wo.windows))

    if (len(wo.windows) == 0):
        r=instance.dispatch(["workspace", "m-1"])
        print(("r",r))


def workspace_created(sender, **kwargs):
    ms = instance.get_monitors()
    print(("ms ", ms))
    dms = dict()
    for a in ms:
        dms[a.id] = a
        if not mons.get(a.id):
            add_monitor(a.id)
        mons[a.id] = a

    k=list(mons.keys())
    for aid in k:
        if not dms.get(aid):
            del mons[aid]
            print("del %s"%aid)

    print(("dms ", dms, mons))

instance.signal_active_workspace_changed.connect(workspace_changed)
instance.signal_window_destroyed.connect(window_closed)
instance.signal_workspace_created.connect(workspace_created)
while(1):
    try:
        instance.watch()
    except KeyboardInterrupt as e:
        print(("si", e));
    except ValueError as e:
        print(("valueerror"))
        continue
    except Exception as e:
        print(("no", e))
        continue
    break
#while(1):
#    try:
#
#    except:
##        continue
#    break

