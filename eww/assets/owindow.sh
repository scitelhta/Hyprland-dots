#!/usr/bin/bash


class=$2
exe=$1

le=`hyprctl -j clients|jq '.[]|select(.class=="'org.wezfurlong.wezterm'").workspace.id'`

ll=`hyprctl -j clients|jq '.[]|select(.class=="'$class'").workspace.id'`
echo $ll
if [[ ! -z "$ll" ]] ; then
  if [[ "$ll" == "$le" ]] ; then
    pypr toggle term
  fi  
  
  for mid in 0 1 2; do
    wid=`hyprctl -j monitors|jq '.[]|select(.id=='$mid').activeWorkspace.id'`
    
    pri=""
    ya=""
    for wos in $ll; do
      mon=`hyprctl -j workspaces|jq '.[]|select(.id=='$wos').monitorID'`
      if [[ "$mon" == "$mid" ]] ; then
        if [[ -z "$pri" ]] ; then
          echo pri $wos
          pri=$wos
        fi
        
        if [[ "$wos" == "$wid" ]] ; then
          echo ya $wos
          ya=$wid
          continue
        fi
        
        if [[ ! -z "$ya" ]] ; then
           echo postya $wos
           pri=$wos
           break
        fi
        
      fi
      
      
    done
    for as in $pri; do
      hyprctl dispatch workspace $as
    done  
    echo $pri   
  done
  
  #hyprctl dispatch workspace $ll
else
  hyprctl dispatch exec $1
fi
   
