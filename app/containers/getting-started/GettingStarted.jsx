import { useState } from "react";
import Box from "../../components/box/Box";
import Text from "../../components/text/Text";
import Modal from "../../components/modal/Modal";
import GettingStartedModal from "../../components/modal/customs/getting-started/GettingStartedModal";

export default function GettingStarted() {
    const [videoModal, setVideoModal] = useState(false);
    const [modalMeta, setModalMeta] = useState(null);

    const videoItems = [
        { title: "Creating SKUs & Barcodes", src: "https://www.youtube.com/embed/f_aIzDwxVug?si=qQnZOO7SvlKaY3xI", duration: "0:44" },
        { title: "Formatting SKUs & Barcodes", src: "https://www.youtube.com/embed/oaWyYw9MQi0?si=T-C6UhSuD8ER7dIU", duration: "0:46" },
        { title: "Duplicate Checking", src: "https://www.youtube.com/embed/6kRB70ix7pg?si=L9vjQO2G-zoKJvT9", duration: "0:49" },
        { title: "Undo Changes", src: "https://www.youtube.com/embed/d_XWoZzqz0k?si=NqTQk5E1C0z_i06s", duration: "0:42" },
        { title: "Combo Modes", src: "https://www.youtube.com/embed/RLHdyrQDQJc?si=YmYlqVn7UXpCPlRd", duration: "0:34" },
        { title: "Conditional Mode", src: "https://www.youtube.com/embed/h_pncUbISGY?si=GFhjdBrzT1as06Rx", duration: "1:35" },
    ];

    const handleModalMeta = (item) => {
        setModalMeta(item);
        setVideoModal(true);
    };

    return (
        <>
        <Modal
            isOpen={videoModal} slideIn
            closeFunc={() => setVideoModal(false)}
            shouldCloseOnOverlayClick
            shouldCloseOnEsc
        >
            <GettingStartedModal 
                modalMeta={modalMeta}
                closeFunc={() => setVideoModal(false)}
            />
        </Modal>
        <Box className="Getting-Started-root">
        {videoItems.map((item, index) => (
            <Box
                key={index}
                col
                className="Video-Item-root"
                onClick={() => handleModalMeta(item)}
            >
                <Box className="video-container">
                    <img src={`https://img.youtube.com/vi/${item.src.split("/embed/")[1].split("?")[0]}/maxresdefault.jpg`} height="100%" width="100%" />
                </Box>
                <Box className="jus-con-spa-bet" center>
                    <Text heading5 className="mar-0">{item.title}</Text>
                    <Text className="numeral-badge">{item.duration}</Text>
                </Box>
            </Box>
        ))}
        </Box>
        </>
    );
}
