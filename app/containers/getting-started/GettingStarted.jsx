import { useState } from "react";
import Card from "../../components/card/Card";
import Box from "../../components/box/Box";
import Text from "../../components/text/Text";
import Modal from "../../components/modal/Modal"
import GettingStartedModal from "../../components/modal/customs/getting-started/GettingStartedModal";

export default function GettingStarted(props) {
    const [videoModal, setVideoModal] = useState(false);
    const [modalMeta, setModalMeta] = useState(null);

    function handleModalMeta({title, src}) {
        setModalMeta({
            title: title,
            src: src
        })
    }

    return (
        <Box className={"Getting-Started-root"}>
            <Modal
                isOpen={videoModal}
                closeFunc={() => setVideoModal(false)}
                shouldCloseOnOverlayClick
                shouldCloseOnEsc
            >
                <GettingStartedModal 
                    modalMeta={modalMeta}
                    closeFunc={() => setVideoModal(false)}
                />
            </Modal>
            <Box col className={"Video-Item-root"}
                onClick={() => {
                    setVideoModal(true)
                    handleModalMeta({
                        title: "Creating SKUs & Barcodes",
                        src: "https://www.youtube.com/embed/f_aIzDwxVug?si=qQnZOO7SvlKaY3xI"
                    })
                }}
            >
                <Box className={"video-container"}>
                <img src="https://img.youtube.com/vi/f_aIzDwxVug/maxresdefault.jpg" height={"100%"} width={"100%"} />
                </Box>
                <Box className={"jus-con-spa-bet"} center>
                    <Text heading5 className={"mar-0"}>Creating SKUs & Barcodes</Text>
                    <Text className={"numeral-badge"}>0:44</Text>
                </Box>
            </Box>
            <Box col className={"Video-Item-root"}
                onClick={() => {
                    setVideoModal(true)
                    handleModalMeta({
                        title: "Formatting SKUs & Barcodes",
                        src: "https://www.youtube.com/embed/oaWyYw9MQi0?si=T-C6UhSuD8ER7dIU"
                    })
                }}
            >
                <Box className={"video-container"}>
                    <img src="https://img.youtube.com/vi/oaWyYw9MQi0/maxresdefault.jpg" height={"100%"} width={"100%"} />
                </Box>
                <Box className={"jus-con-spa-bet"} center>
                    <Text heading5 className={"mar-0"}>Formatting SKUs & Barcodes</Text>
                    <Text className={"numeral-badge"}>0:46</Text>
                </Box>
            </Box>
            <Box col className={"Video-Item-root"}
                onClick={() => {
                    setVideoModal(true)
                    handleModalMeta({
                        title: "Duplicate Checking",
                        src: "https://www.youtube.com/embed/6kRB70ix7pg?si=L9vjQO2G-zoKJvT9"
                    })
                }}
            >
                <Box className={"video-container"}>
                    <img src="https://img.youtube.com/vi/6kRB70ix7pg/maxresdefault.jpg" height={"100%"} width={"100%"} />
                </Box>
                <Box className={"jus-con-spa-bet"} center>
                    <Text heading5 className={"mar-0"}>Duplicate Checking</Text>
                    <Text className={"numeral-badge"}>0:49</Text>
                </Box>
            </Box>
            <Box col className={"Video-Item-root"}
                onClick={() => {
                    setVideoModal(true)
                    handleModalMeta({
                        title: "Undo Changes",
                        src: "https://www.youtube.com/embed/d_XWoZzqz0k?si=NqTQk5E1C0z_i06s"
                    })
                }}
            >
                <Box className={"video-container"}>
                    <img src="https://img.youtube.com/vi/d_XWoZzqz0k/maxresdefault.jpg" height={"100%"} width={"100%"} />
                </Box>
                <Box className={"jus-con-spa-bet"} center>
                    <Text heading5 className={"mar-0"}>Undo Changes</Text>
                    <Text className={"numeral-badge"}>0:42</Text>
                </Box>
            </Box>
            <Box col className={"Video-Item-root"}
                onClick={() => {
                    setVideoModal(true)
                    handleModalMeta({
                        title: "Combo Modes",
                        src: "https://www.youtube.com/embed/RLHdyrQDQJc?si=YmYlqVn7UXpCPlRd"
                    })
                }}
            >
                <Box className={"video-container"}>
                    <img src="https://img.youtube.com/vi/RLHdyrQDQJc/maxresdefault.jpg" height={"100%"} width={"100%"} />
                </Box>
                <Box className={"jus-con-spa-bet"} center>
                    <Text heading5 className={"mar-0"}>Combo Modes</Text>
                    <Text className={"numeral-badge"}>0:34</Text>
                </Box>
            </Box>
        </Box>
    )
}