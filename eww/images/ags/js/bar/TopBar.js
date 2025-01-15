import SystemTray from 'resource:///com/github/Aylur/ags/service/systemtray.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import Notifications from 'resource:///com/github/Aylur/ags/service/notifications.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import OverviewButton from './buttons/OverviewButton.js';
import Gato from './buttons/Gato.js';
import Agato from './buttons/Agato.js';
import Workspaces from './buttons/Workspaces.js';
import FocusedClient from './buttons/FocusedClient.js';
import MediaIndicator from './buttons/MediaIndicator.js';
import DateButton from './buttons/DateButton.js';
import NotificationIndicator from './buttons/NotificationIndicator.js';
import SysTray from './buttons/SysTray.js';
import ColorPicker from './buttons/ColorPicker.js';
import SystemIndicators from './buttons/SystemIndicators.js';
import PowerMenu from './buttons/PowerMenu.js';
import ScreenRecord from './buttons/ScreenRecord.js';
import BatteryBar from './buttons/BatteryBar.js';
import SubMenu from './buttons/SubMenu.js';
import Recorder from '../services/screenrecord.js';
 import * as System from './buttons/System.js';
// import Taskbar from './buttons/Taskbar.js';
import options from '../options.js';

const submenuItems = Variable(1);
SystemTray.connect('changed', () => {
    submenuItems.setValue(SystemTray.items.length + 1);
});

/**
 * @template {import('types/service').default} T
 * @param {T=} service
 * @param {(service: T) => boolean=} condition
 */
const SeparatorDot = (service, condition) => Widget.Separator({
    vpack: 'center',
    setup: self => {
        const visibility = () => {
            if (!options.bar.separators.value)
                return self.visible = false;

            self.visible = condition && service
                ? condition(service)
                : options.bar.separators.value;
        };

        if (service && condition)
            self.hook(service, visibility);

        self.on('draw', visibility);
        self.bind('visible', options.bar.separators);
    },
});

const Start = (monitor) => Widget.Box({
    class_name: 'start',
    children: [
Widget.Box({
    class_name: 'cosa',
    children: [
        Agato(),
        OverviewButton(),
        SeparatorDot(),

        Workspaces(monitor),
        SeparatorDot(),
           ]}),
                                      NotificationIndicator(),
                                      SeparatorDot(),
        FocusedClient(),


        SeparatorDot(Notifications, n => n.notifications.length > 0 || n.dnd),
                                      MediaIndicator(),
                                      Widget.Box({ hexpand: true }),
    ],
});

const Center = () => Widget.Box({
    class_name: 'center',
    children: [

    ],
});

const End = (monitor) => Widget.Box({
    class_name: 'end',
    children:
    [
Widget.Box({ hexpand: true }),
                                    ((monitor==0)?
Widget.Box({
    class_name: 'cosa',
children:[
        Gato(),

        ScreenRecord(),
        SeparatorDot(Recorder, r => r.recording),
           System.CPU(),
        SeparatorDot(),
    System.RAM(),
        SeparatorDot(),
        SystemIndicators(),
        SeparatorDot(Battery, b => b.available),
        BatteryBar(),
        SeparatorDot(),
     SysTray(),
        SeparatorDot(),

           //                             SeparatorDot(Mpris, m => m.players.length > 0),
        DateButton(),
        SeparatorDot(),
        PowerMenu(),
     ]}):         DateButton()
)
 ]


});

/** @param {number} monitor */
export default monitor => Widget.Window({
    name: `bar${monitor}`,
    class_name: 'transparent',
    exclusivity: 'exclusive',
    monitor,
    anchor: options.bar.position.bind('value').transform(pos => ([
        pos, 'left', 'right',
    ])),
    child: Widget.CenterBox({
        class_name: 'panel',
        start_widget: Start(monitor),
      //  center_widget: Center(),
        end_widget: End(monitor),
    }),
});
