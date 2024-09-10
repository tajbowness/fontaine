import Box from '../../components/box/Box';
import Text from "../../components/text/Text";
import Accordion from "../../components/accordion/Accordion"
import Divider from "../../components/divider/Divider"
import Card from "../../components/card/Card"
import { changelog, upcoming } from './changelog.dump';

import "./ChangeLog.styles.scss"

// const changelog = lazy(() => import("./changelog.dump"));

export default function ChangeLog(props) {

    return (
        <Box col className={"changelog-container"}>
            <Text heading5 className={"pad-10"}>Changelog: SKU Manager</Text>
            {/* ======= CHANGELOG ======= */}
            {Array.isArray(changelog) && changelog.map((ver, index) => {
                return (
                    <Accordion title={`${ver.version} - ${ver.date}`} key={index + "changelogT"} opened={changelog[0].version === ver.version} headClassName={"pad-10-v fs-x-small"}>
                        <Box col gap={10}>
                            {ver?.new?.map((newItem, nIndex) => (
                                <Box key={nIndex + "newT"} className={"ali-cen"}>
                                    <Text label={"success"}>Added</Text>
                                    <Text>{newItem}</Text>
                                </Box>
                            ))}
                            {ver?.improved?.map((newItem, nIndex) => (
                                <Box key={nIndex + "impT"} className={"ali-cen"}>
                                    <Text label={"blue"}>Improved</Text>
                                    <Text>{newItem}</Text>
                                </Box>
                            ))}
                            {ver?.fixed?.map((newItem, nIndex) => (
                                <Box key={nIndex + "fixT"} className={"ali-cen"}>
                                    <Text label={"grey"}>Fixed</Text>
                                    <Text>{newItem}</Text>
                                </Box>
                            ))}
                            {ver?.note?.map((newItem, nIndex) => (
                                <Box key={nIndex + "warnT"} className={"ali-cen"}>
                                    <Text label={"warning"}>Note</Text>
                                    <Text>{newItem}</Text>
                                </Box>
                            ))}
                            {ver?.bad?.map((newItem, nIndex) => (
                                <Box key={nIndex + "badT"} className={"ali-cen"}>
                                    <Text label={"critical"}>Alert</Text>
                                    <Text>{newItem}</Text>
                                </Box>
                            ))}
                        </Box>
                    </Accordion>
                )
            })}
        </Box>
    )
}