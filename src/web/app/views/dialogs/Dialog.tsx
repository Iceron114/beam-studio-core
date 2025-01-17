import * as React from 'react';
import { DialogContext, DialogContextProvider } from 'app/contexts/Dialog-Context';

let _contextCaller;

const ComponentWrapper = (props) => props.children;

export class Dialog extends React.Component<any, any> {
    componentDidMount() {
        _contextCaller = this.context;
    }

    componentWillUnmount() {
        _contextCaller = null;
    }

    renderComponents() {
        const { dialogComponents } = this.context;
        const components = [];
        for (let i = 0; i < dialogComponents.length; i++) {
            const { component } = dialogComponents[i];
            components.push(
                <ComponentWrapper key={i}>
                    { component }
                </ComponentWrapper>
            );
        }
        return components;
    }

    render() {
        const components = this.renderComponents();
        return (
            <div className="dialog-container">
                {components}
            </div>
        );
    }
};

Dialog.contextType = DialogContext;

export class DialogContextHelper {
    static get context(): DialogContextProvider {
        return _contextCaller;
    }
}
