import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import PanelButton from '../PanelButton.js';
import * as variables from '../../variables.js';
import icons from '../../icons.js';

const Gato = () => {

  const revealer1 = Widget.Revealer({
    transition: 'slide_right',

    child: Widget.Label({
      setup: self => self.hook(variables["moon"], () => {

        self.label = " " + (Math.round(variables["moon"].value.r * 10, 0) / 10) + "% " + variables["moon"].value.t;

      })
    }),
  });

  const revealer2 = Widget.Revealer({
    transition: 'slide_right',

    child: Widget.Label({
      setup: self => self.hook(variables["sun"], () => {

        self.label = " " + (Math.round(variables["sun"].value.d*10)/10) + "º " + variables["sun"].value.s + " ";

      })
    }),
  });
  const revealer3 = Widget.Revealer({
    transition: 'slide_right',

    child: Widget.Label({
      setup: self => self.hook(variables["weat"], () => {

        self.label = " " + Math.round(variables["weat"].value.t, 1) + "º " + variables["weat"].value.i + " ";

      })
    }),
  });
  const revealer4 = Widget.Revealer({
    transition: 'slide_right',

    child: Widget.Label({
      setup: self => self.hook(variables["temp"], () => {

        self.label = " " + Math.round(variables["temp"].value, 1) + "º ";

      })
    }),
  });
  return PanelButton({
    class_name: `gatos`,
    on_clicked: () => {
      var b = !revealer1.reveal_child;
      revealer1.reveal_child = b;
      revealer2.reveal_child = b;
      revealer3.reveal_child = b;
      revealer4.reveal_child = b;
    },
    content:
      Widget.Box({

        children: [
          Widget.Icon({
            size: 30,

            class_name: 'icono',
            setup: self => self.hook(variables["weat"], () => {
              self.icon = "/home/sergio/.config/" + variables["weat"].value.i + ".png";
            })
          }),

          Widget.Box({
            class_name: 'revealer',
            child: revealer3,
          }),


          Widget.Icon({
            size: 30,

            class_name: 'icono',
            setup: self => self.hook(variables["moon"], () => {
              self.icon = "/home/sergio/.config/moon" + variables["moon"].value.i + ".png";
            })
          }),
          Widget.Box({
            class_name: 'revealer',
            child: revealer1,
          }),


          Widget.Icon({
            size: 30,
            class_name: 'icono',
            setup: self => self.hook(variables["sun"], () => {
              self.icon = "/home/sergio/.config/" + variables["sun"].value.s + ".png";
            })
          }),

          Widget.Box({
            class_name: 'revealer',
            child: revealer2,
          }),



          Widget.Icon({
            size: 30,
            class_name: 'icono',
            setup: self => self.hook(variables["temp"], () => {
              var dato = Math.round(variables["temp"].value, 1);
              var r = (dato > 100) ? 3 : ((dato > 80) ? 2 : ((dato > 60) ? 1 : 0));
              self.icon = "/home/sergio/.config/temp" + r + ".png";
            })
          }),

          Widget.Box({
            class_name: 'revealer',
            child: revealer4,
          }),


        ]
      })
  });
}

export default () => Gato()

  ;
