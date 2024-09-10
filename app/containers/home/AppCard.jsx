import Box from "../../components/box/Box"
import Text from "../../components/text/Text"

export default function AppCard(props) {

    return (
        <Box center col className={`app-card-cont ${!props.released ? "unreleased":""} ${props.suggestion ? "suggestion":""} ${props.className}`}>
            {!props.suggestion && (
                <Box col className={"ali-cen"}>
                    {props.sku ?
                    <Box col center>
                        <img src="https://cdn.shopify.com/app-store/listing_images/280a5f68dfd1c6bd0d3a266181b83b02/icon/CKvujfnw7ocDEAE=.png" width={150}/>
                        <Box align={"cen"} pad={10}>
                            <Text body2 align={"cen"} className={"mar-0"}>Automate SKU & Barcodes creation, detect duplicates, and customize effortlessly.</Text>
                        </Box>
                    </Box>
                    
                    :
                    <Text className="app-title">{props.title}</Text>
                    }
                    {props.released && (
                        <Box className={"width-100 app-items"} col>
                            <Box className={"app-button"} align={"cen"} onClick={()=> window.open("https://apps.shopify.com/sku-manager", "_blank")}>
                                <Text>App Store</Text>
                            </Box>
                            <Box className={"app-button"} align={"cen"} onClick={() => props.setPage("changelog")}>
                                <Text>Changelog</Text>
                            </Box>
                            <Box className={"app-button"} align={"cen"} onClick={() => props.setPage("gettingstartedsku")}>
                                <Text>Getting Started</Text>
                            </Box>
                        </Box>
                    )}
                </Box>
            )}
        {props.suggestion && (
            <div>
                <p className="title-2-style">Have a suggestion or a request?</p>
                <p>Please consider reaching out to me at tajbownessdev@gmail.com</p>
            </div>
        )}

        </Box>
    )
}