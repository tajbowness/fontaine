import Box from "../../../box/Box"
import Text from "../../../text/Text"
import Button from "../../../button/Button"

export default function GettingStartedModal(props) {
    const {modalMeta} = props

    return (
        <Box col gap={20}>
            <Box className={"video-container placeholder"}>
            <iframe 
                width="100%" height="100%" frameBorder="0" 
                src={modalMeta.src}
                title="Creating SKUs & Barcodes" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
                referrerPolicy="strict-origin-when-cross-origin" 
            />
            </Box>
            <Box className={"jus-con-spa-bet"} center>
                <Text heading4 className={"mar-0"}>{modalMeta.title}</Text>
                <Button 
                    icon="xlarge" noText
                    onClick={() => props.closeFunc()}
                />
            </Box>
        </Box>
    )
}