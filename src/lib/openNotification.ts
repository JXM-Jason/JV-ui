import { createApp, h } from "vue";
import Notification from "../lib/Notification.vue"

export const openMessage = (options) => {
    const { title, message, duration, position } = options;
    const div = document.createElement('body');
    let Left; 
    let Right;
    let Top;
    let Bottom;
    const close = () => {
        app.unmount();
    }
    function calClass(position) {
        if (!!position) {//传了值
            if (position == 'top-left' ||position == 'bottom-left') {
                return true
            } else if (position == 'top-right' || position == 'bottom-right') {
                return false;
            }
        } else {
            return false
        } 
    }
    function calStyle(position) {
        if (!!position) {//传了值
            if (position == 'bottom-left' ||position ==  'bottom-right') {
                return true;
            } else if (position == 'top-left' || position == 'top-right') {
                return false;
            }
        } else {
            return false;
        }
    }
    calClass(position) ? Left = true : Right = true;
    calStyle(position) ? Bottom = true : Top = true;
    duration == 0 ? {}:setTimeout(close, duration?duration:3000);  
    
    const app = createApp({
        render() {
            return h(
                Notification,
                {
                    visible: true,
                    "onUpdate:value"(newValue) {
                        if (newValue === false) {
                            close();
                        }
                    },
                    class: { left: Left, right: Right },
                    style: {
                        top: Top? 16+'px':{},
                        bottom: Bottom?16+'px':{},
                    }
                },
                {
                    title: () => { return title },
                    message: () => { return message }
                }
            )
        }
    })
    app.mount(div)




}