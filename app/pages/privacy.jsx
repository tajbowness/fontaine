import { privacyPolicy } from './../../privacyPolicy.jsx';
import Box from '../components/box/Box.jsx';

export default function Privacy() {
    return (
        <Box col>
            <h1>Privacy Policy</h1>
            <hr className="divider" />
            <p style={{whiteSpace: "break-spaces"}}>{privacyPolicy}</p>
        </Box>
    )
}