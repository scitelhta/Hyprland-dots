import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Hyprland from 'resource:///com/github/Aylur/ags/service/hyprland.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import options from '../../options.js';
import { range } from '../../utils.js';

/** @param {any} arg */
const dispatch = arg => Utils.execAsync(`hyprctl dispatch workspace ${arg}`);
const redispatch = arg => Utils.execAsync(`hyprctl dispatch moveworkspacetomonitor  ${arg} current`);

const Workspaces = (monitor) => {
  const ws = 15;//options.workspaces.value;
  return Widget.Box({
    children: range(ws || 20).map(i => Widget.Button({
      attribute: i,
      on_primary_click: () => dispatch(i),
          on_secondary_click: () =>    redispatch(i),
      child: Widget.Label({
        label: " " + (i % 10) + " ",
        class_name: 'rindicator',
        vpack: 'center',
      }),
      setup: self => self.hook(Hyprland, () => {
        self.toggleClassName('active', Hyprland.active.workspace.id === i);
        self.toggleClassName('inactive', Hyprland.active.workspace.id !== i);
        self.toggleClassName('occupied', (Hyprland.getWorkspace(i)?.windows || 0) > 0);
        self.toggleClassName('unoccupied', (Hyprland.getWorkspace(i)?.windows || 0) === 0);
        self.toggleClassName('mine', (Hyprland.getWorkspace(i)?.monitorID == monitor));
        self.toggleClassName('anmine', (Hyprland.getWorkspace(i)?.monitorID !== monitor));
      }),
    })),
    setup: box => {
      if (ws === 0) {
        box.hook(Hyprland.active.workspace, () => box.children.map(btn => {
          btn.visible = Hyprland.workspaces.some(ws => ws.id === btn.attribute);
        }));
      }
    },
  });
};

export default (monitor) => Widget.EventBox({
  class_name: 'workspaces panel-button',
  child: Widget.Box({
    // its nested like this to keep it consistent with other PanelButton widgets
    child: Widget.EventBox({
      on_scroll_up: () => dispatch('m+1'),
      on_scroll_down: () => dispatch('m-1'),
      class_name: 'eventbox',
      child: Workspaces(monitor),// options.workspaces.bind('value').transform(Workspaces),
    }),
  }),
});
