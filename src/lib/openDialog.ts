import { createApp, h } from "vue";
import Dialog from "../lib/Dialog.vue"


export  const openDialog=(options)=> {
    const { title, content,OK,Cancel,footer} = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount();
        div.remove();
    }
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:value"(newValue) {
                        if (newValue === false) {
                            close();
                        }
                    },
                    OK, Cancel,
                },
                {
                    title: () => { return title },
                    content: () => { return content },
                    footer: () => { return footer },
                }
            );
        }

    })
    app.mount(div)
    
    
}