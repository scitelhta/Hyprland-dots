import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import PanelButton from '../PanelButton.js';
import * as variables from '../../variables.js';
import icons from '../../icons.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';

const dispatch = () => Utils.execAsync(`hyprctl dispatch exec nwg-drawer`);
const Agato = ()=> {

    return PanelButton({
        class_name: `agato`,
        on_clicked: () => {
            dispatch();
        },
        content:
 Widget.Icon( {
                      size: 30,

                 class_name: 'icono',
        icon:  "/home/sergio/.config/start.png",
           }),

});
}

export default () => Agato()

;
