import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';

/**
 * @param {import('types/widgets/label').Props & {
 *   format?: string,
 *   interval?: number,
 * }} o
 */
export default ({
    dformat, tformat,
    //dformat = '%B-%e %a',
//    tformat = '%T',
    tinterval = 1000,
    dinterval = 1000*60,
    ...rest
} = {}) => Widget.Box({
    children:[
        Widget.Label({
    class_name: 'clock',
    ...rest,
    setup: self => self.poll(tinterval, () => {

        self.label = (dformat?  (GLib.DateTime.new_now_local().format(dformat) || 'wrong format'): '');
    }),
}),
        Widget.Label({
    class_name: 'tclock',
    ...rest,
    setup: self => self.poll(tinterval, () => {

        self.label = (tformat? (GLib.DateTime.new_now_local().format(tformat) || 'wrong format'):'');
    }),
}),
]
});

