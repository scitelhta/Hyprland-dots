export default {
    lock: 'system-lock-screen-symbolic',
    fallback: {
        executable: 'application-x-executable-symbolic',
    },
    audio: {
        mic: {
            muted: 'microphone-disabled-symbolic',
            low: 'microphone-sensitivity-low-symbolic',
            medium: 'microphone-sensitivity-medium-symbolic',
            high: 'microphone-sensitivity-high-symbolic',
        },
        volume: {
            muted: '/home/sergio/.config/volume0.png',//'audio-volume-muted-symbolic',
            low: '/home/sergio/.config/volume3.png',//'audio-volume-low-symbolic',
            medium: '/home/sergio/.config/volume2.png',//'audio-volume-medium-symbolic',
            high: '/home/sergio/.config/volume1.png',//audio-volume-high-symbolic',
            overamplified: '/home/sergio/.config/volume4.png',//'audio-volume-overamplified-symbolic',
        },
        type: {
            headset: 'audio-headphones-symbolic',
            speaker: 'audio-speakers-symbolic',
            card: 'audio-card-symbolic',
        },
        mixer: '',
    },
    network: {
      wifi0: "/home/sergio/.config/wlan0no.png"  ,
      wifi1: "/home/sergio/.config/wlan0si.png"  ,
      wired0: "/home/sergio/.config/etg0no.png"  ,
      wired0: "/home/sergio/.config/eth0si.png"  ,
    },
    asusctl: {
        profile: {
            Balanced: 'power-profile-balanced-symbolic',
            Quiet: 'power-profile-power-saver-symbolic',
            Performance: 'power-profile-performance-symbolic',
        },
        mode: {
            Integrated: '',
            Hybrid: '󰢮',
        },
    },
    apps: {
        apps: 'view-app-grid-symbolic',
        search: 'folder-saved-search-symbolic',
    },
    battery: {
        charging: '󱐋',
        warning: 'battery-empty-symbolic',
    },
    bluetooth: {
        enabled: 'bluetooth-active-symbolic',
        disabled: 'bluetooth-disabled-symbolic',
    },
    brightness: {
        indicator: 'display-brightness-symbolic',
        keyboard: 'keyboard-brightness-symbolic',
        screen: 'display-brightness-symbolic',
    },
    powermenu: {
        sleep: 'weather-clear-night-symbolic',
        reboot: 'system-reboot-symbolic',
        logout: 'system-log-out-symbolic',
        shutdown: 'system-shutdown-symbolic',
    },
    recorder: {
        recording: 'media-record-symbolic',
    },
    notifications: {
        noisy: 'preferences-system-notifications-symbolic',
        silent: 'notifications-disabled-symbolic',
    },
    trash: {
        full: 'user-trash-full-symbolic',
        empty: 'user-trash-symbolic',
    },
    mpris: {
        fallback: 'audio-x-generic-symbolic',
        shuffle: {
            enabled: '󰒟',
            disabled: '󰒟',
        },
        loop: {
            none: '󰓦',
            track: '󰓦',
            playlist: '󰑐',
        },
        playing: '󰏦',
        paused: '󰐍',
        stopped: '󰐍',
        prev: '󰒮',
        next: '󰒭',
    },
    ui: {
        colorpicker: 'color-select-symbolic',
        close: 'window-close-symbolic',
        info: 'info-symbolic',
        menu: 'open-menu-symbolic',
        link: 'external-link-symbolic',
        settings: 'emblem-system-symbolic',
        tick: 'object-select-symbolic',
        arrow: {
            right: 'pan-end-symbolic',
            left: 'pan-start-symbolic',
            down: 'pan-down-symbolic',
            up: 'pan-up-symbolic',
        },
    },
    system: {
        cpu: 'org.gnome.SystemMonitor-symbolic',
        ram: 'drive-harddisk-solidstate-symbolic',
        temp: 'temperature-symbolic',
    },
    dialog: {
        Search: '',
        Applauncher: '󰵆',
        Bar: '',
        Border: '󰃇',
        Color: '󰏘',
        Desktop: '',
        Font: '',
        General: '󰒓',
        Miscellaneous: '󰠱',
        Theme: '󰃟',
        Notifications: '󰂚 ',
    },
};
