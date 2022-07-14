import React from "react";
import { Modal } from "react-native";

interface SystemModal {
    show: boolean;
    transparent?: boolean;
    children: {};
}

const SystemModal = (props: SystemModal) => {
    let { show, children, transparent = false } = props || {};

    return (
        <Modal visible={show} transparent={transparent} animationType={'slide'}>
            {children}
        </Modal>
    )
}

export default SystemModal;