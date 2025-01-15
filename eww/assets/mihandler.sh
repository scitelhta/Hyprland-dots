#!/bin/sh

# default handlers for hyprevents
#
# override the function in your own events
# file to provide a custom handler
#
# comments inside each handler list the variables
# that are set when the handler is invoked


event_workspace() {
  : # WORKSPACENAME
}

event_focusedmon() {
  : # MONNAME WORKSPACENAME
}

event_activewindow() {
  : # WINDOWCLASS WINDOWTITLE
  wid=`hyprctl -j activewindow|jq '.workspace.id'`
  wad=`hyprctl -j activewindow|jq '.address'`
  p=`hyprctl -j clients|jq '.[]|select(.workspace.id=='$wid' and .fullscreen == true and .address!="'$wad'").address'`
  for a in $p; do
    hyprctl dispatch fullscreen 1
  done
  
}

event_fullscreen() {
  : # ENTER (0 if leaving fullscreen, 1 if entering)
}

event_monitorremoved() {
  #: # MONITORNAME
  p=`hyprctl -j monitors|jq '.[].id'`
  for v in 0 1 2; do
    if ! [[ ${p[*]} =~ "$v" ]]; then
     #~/.cargo/eww/eww close bar$v
#     echo eww close bar$v

 #    echo $v
  #    e=`ps xf|grep eww|grep bar$v|awk '{print $1;}'`
   #   echo $e
   #   if [[ ! -z "$e" ]] ; then
   #     kill -9 $e
   #   fi
     echo o
    fi
  done

  #p=`hyprctl -j monitors|jq '.[]|select(.name=="'$MONITORNAME'").id'`
 # hyprctl monitors
 # echo $p pe
 # echo ..$MONITORNAME..
 # bar=bar${myArray[$MONITORNAME]}


}

event_monitoradded() {
  #: # MONITORNAME
  #echo $MONITORNAME
  #p=`hyprctl -j monitors|jq '.[]|select(.name=="'$MONITORNAME'").id'`
  #echo $p
  #(sleep 2 && eww -c /home/sergio/.config/eww/bar open bar$p)&
  date>>/tmp/aded.log
  #agss -q&&nohup ags&
  ~/.config/aggreset.sh 3 &
#  pkill eww
#  echo eww daemon
#  for v in 0 1 2; do
    #~/.cargo/eww/eww  open bar$v
#    echo eww  open bar$v
#  done
}

event_createworkspace() {
  : # WORKSPACENAME
}

event_destroyworkspace() {
  : # WORKSPACENAME
}

event_moveworkspace() {
  : # WORKSPACENAME MONNAME
}

event_activelayout() {
  : # KEYBOARDNAME LAYOUTNAME
}

event_openwindow() {
	echo $WINDOWADDRESS
	a=(${WINDOWADDRESS//,/ })
	echo $a
	hyprctl -j clients|jq '.[]|select(.address=="0x${a[0]}")'
#	hyprctl dispatch workspace ${a[1]}
#	echo $WORKSPACENAME
#	echo $WINDOWADDRESS>>/tmp/jo
#	echo hyprctl -j activeworkspace|jq '.|select(.lastwindow=="0x559d3da2f4d0").id'
#  : # WINDOWADDRESS WORKSPACENAME WINDOWCLASS WINDOWTITLE
}

event_closewindow() {

e=`hyprctl activeworkspace |grep "windows: 0"`
echo $e
if [ ! -z "$e" ]; then
 echo si
 hyprctl dispatch workspace m+1
 sleep 0.0001
 hyprctl dispatch workspace 1
#      	: # WINDOWADDRESS
fi
}

event_movewindow() {
  : # WINDOWADDRESS WORKSPACENAME
}

event_openlayer() {
  : # NAMESPACE
}

event_closelayer() {
  : # NAMESPACE
}

event_submap() {
  : # SUBMAPNAME
}
