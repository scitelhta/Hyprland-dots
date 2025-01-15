import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import PanelButton from '../PanelButton.js';
import * as variables from '../../variables.js';
import icons from '../../icons.js';

/** @param {'cpu' | 'ram'} type */
const System = type => {
    const icon = Widget.Icon({
                 size: 30,
        class_name: 'icon',
        icon: icons.system[type],
    });

    const progress = Widget.Box({
        class_name: 'progress',
        child: Widget.CircularProgress({
            value: variables[type].bind(),
        }),
    });

    const revealer = Widget.Revealer({
        transition: 'slide_right',

        child: Widget.Label({
            label: variables[type].bind('value').transform(v => {
// return ` ${type}: ${Math.round(v * 100)}%`;
                return `% ${type}`;
            }),
        }),
    });



    return PanelButton({
        class_name: `system ${type}`,
        on_clicked: () => revealer.reveal_child = !revealer.reveal_child,
        content: Widget.EventBox({
            on_hover: () => revealer.reveal_child = true,
            on_hover_lost: () => revealer.reveal_child = false,
            child: Widget.Box({
                children: [
                    //Widget.Label({label:JSON.stringify(variables[type])}),//.bind('value').transform(v => {return `${Math.round(v * 100)}`; }))+" "+type}),
                   Widget.Icon( {
                 size: 30,
    setup: self => self.hook(variables[type], () => {
        var dato = variables[type].value*100;//.bind('value').transform(v => { return Math.round(v * 100); });
    var r = type+((dato>90) ? '5':
	((dato>70)? '4' :
		((dato>50) ?'3':
			((dato > 20)?'2':
				((dato > 10 ?'1':
					'0'
					)
                )
            )
        )
    )
            );
                    self.icon = ("/home/sergio/.config/"+r+".png");
    })}),
    Widget.Label({

    setup: self => self.hook(variables[type], () => {
        self.label = ""+Math.round((variables[type].value*100));

    }),
    }),//.bind('value').transform(v => {return `${Math.round(v * 100)}`; }))+" "+type}),
                    Widget.Box({
                        class_name: 'revealer',
                        child: revealer,
                    }),
                  //  progress,
                  //  revealer
                ],
            }),
        }),
    });
};

export const CPU = () => System('cpu');
export const RAM = () => System('ram');
